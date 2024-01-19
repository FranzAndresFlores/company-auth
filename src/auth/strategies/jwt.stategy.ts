import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            global: true,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWTKEY,
        });
    }

    async validate(payload: any) {
        return {
            payload
        }
    }
}