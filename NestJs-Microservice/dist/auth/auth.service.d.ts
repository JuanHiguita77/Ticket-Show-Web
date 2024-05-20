import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.tdo';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { ResponseDTO } from './dto/response.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register({ username, email, password }: RegisterDto): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        message: string;
        data: {
            username: string;
            email: string;
        };
    }>;
    login({ email, password }: LoginDto): Promise<ResponseDTO>;
}
