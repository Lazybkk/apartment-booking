import { Controller, InternalServerErrorException, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post("login/")
    async login(): Promise<any>{
        try{

        }catch(err){
            throw new InternalServerErrorException()
        }
    }

    @Post("register/")
    async register(): Promise<any>{
        try{

        }catch(err){
            throw new InternalServerErrorException()
        }
    }

}
