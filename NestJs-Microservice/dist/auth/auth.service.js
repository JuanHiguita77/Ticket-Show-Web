"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register({ username, email, password }) {
        try {
            const ROL_USER = 1;
            const user = await this.usersService.findOneByEmail(email);
            if (user) {
                return {
                    success: false,
                    message: 'user already exist',
                };
            }
            await this.usersService.create({
                username,
                email,
                password: await bcrypt.hash(password, 10),
                rolId: ROL_USER,
            });
            return {
                success: true,
                message: 'user creaded successful',
                data: {
                    username,
                    email,
                },
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('service not available', error);
        }
    }
    async login({ email, password }) {
        try {
            const user = await this.usersService.findByEmailWithPassword(email);
            if (!user) {
                return { success: false, message: 'invalid cridentials' };
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return { success: false, message: 'invalid cridentials' };
            }
            const payload = { email: user.email, rol: user.rol.name };
            const token = await this.jwtService.signAsync(payload);
            return {
                success: true,
                message: 'user found',
                data: { token, email },
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('service not available');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map