import { Redis } from "@upstash/redis";
import pkg from "@upstash/ratelimit";
const { Ratelimit } = pkg;  // Note: capital R, not RateLimit

import "dotenv/config";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(4, "60 s"), // call from pkg, not from class
});

export default ratelimit;
