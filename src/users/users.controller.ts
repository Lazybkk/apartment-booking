import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    
    @Get(":id/")
    async getUserDetail(@Param('id') id): Promise<any>{
        try{
            
        }catch(err){
            throw new InternalServerErrorException();
        }
    }

    @Patch(":id/")
    async updateUser(): Promise<any>{
        try{

        }catch(err){
            throw new InternalServerErrorException();
        }
    }

    @Delete(":id/")
    async deActiveUser(): Promise<any>{
        try{

        }catch(err){
            throw new InternalServerErrorException();
        }
    }

    @Get()
    async getUser(): Promise<any>{
        try{
            
        }catch(err){
            throw new InternalServerErrorException();
        }
    }

    @Post("email/verify")
    async verifyEmail(): Promise<any>{
        try{

        }catch(err){
            throw new InternalServerErrorException()
        }
    }

    @Post("phone/verify")
    async verifyPhone(): Promise<any>{
        try{

        }catch(err){
            throw new InternalServerErrorException()
        }
    }
}
