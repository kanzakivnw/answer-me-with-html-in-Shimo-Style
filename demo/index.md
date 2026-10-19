---
theme: shimo
title: 限流放在网关，还是服务里
subtitle: 一个用 answer-me-with-html-in-Shimo-Style 生成的开箱示例
cols: 3
source: 示例 · answer-me-with-html-in-Shimo-Style
---
结论：入口限流放网关，业务限流放服务，两层各管一件事。

## A 结论
```callout ok 两层各管一件事
网关按 IP 和租户挡住洪峰，服务按用户和接口保护自身。
```

## B 请求路径
```flow
Client -> Gateway: request
Gateway -> Limiter: check quota
Limiter --> Gateway: allow
Gateway -> Service: forward
Service -> ServiceLimiter: check user
ServiceLimiter --> Service: allow
```

## C 两种限流对比
| 位置 | 粒度 | 保护对象 | 失败时 |
| --- | --- | --- | --- |
| 网关 | IP / 租户 | 整个集群 | 返回 429 |
| 服务 | 用户 / 接口 | 单个实例 | 降级返回 |
| 两者都放 | 粗 + 细 | 集群与实例 | 分级处理 |

## D 网关限流的开销
```chart bar unit=us
| p50 | p95
令牌桶 | 8 | 20
滑动窗口 | 12 | 35
固定窗口 | 3 | 6
```

## E 令牌桶的最小实现
```ts title="limiter.ts · sketch"
export function take(bucket: Bucket) {
  const now = Date.now();
  bucket.tokens = Math.min(
    bucket.cap,
    bucket.tokens + ((now - bucket.at) / 1000) * bucket.rate
  );
  bucket.at = now;
  if (bucket.tokens < 1) return false;
  bucket.tokens -= 1;
  return true;
}
```

## F 注意
```callout warn 别把限流放到数据库前
数据库连接池耗尽时，限流已经来不及了。
```
