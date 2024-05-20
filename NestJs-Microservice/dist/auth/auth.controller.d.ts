import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.tdo';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(res: any, registerDto: RegisterDto): Promise<any>;
    login(res: any, loginDto: LoginDto): Promise<any>;
    profile(req: any): any;
}
