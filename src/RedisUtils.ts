import Redis from "ioredis";

export class RedisUtils {


    constructor(private redis: Redis) { }

    setValue(key: string, value: string) {
        this.redis.set(key, value);
    }

    getValue(key: string) {
        return this.redis.get(key);
    }

}