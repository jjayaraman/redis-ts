import { RedisUtils } from './RedisUtils';
import Redis from "ioredis";

describe('Test suite to test Redis', () => {


    const redis = new Redis();
    const redisUtils = new RedisUtils(redis);

    it('should be able to set a value in redis', async () => {
        redisUtils.setValue('name', 'jay');
        const value = await redisUtils.getValue('name')
        console.log(value);
        expect(value).toBe('jay')

    })

    afterAll(done => {
        redis.quit()
        done()
    })

})