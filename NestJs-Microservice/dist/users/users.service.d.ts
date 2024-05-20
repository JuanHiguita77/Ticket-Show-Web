import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    create(createUsersDto: CreateUsersDto): Promise<CreateUsersDto & Users>;
    findOneByEmail(email: string): Promise<Users>;
    findByEmailWithPassword(email: string): Promise<Users>;
}
