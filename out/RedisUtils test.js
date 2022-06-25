"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisUtils = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
class RedisUtils {
    constructor(redis) {
        this.redis = redis;
        this.hello = () => {
            console.log('hello', this.redis);
        };
    }
}
exports.RedisUtils = RedisUtils;
const redis = new ioredis_1.default();
new RedisUtils(redis).hello();
