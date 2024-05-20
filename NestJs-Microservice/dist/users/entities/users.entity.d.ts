import { Rol } from "./rol.entity";
export declare class Users {
    id: number;
    username: string;
    email: string;
    password: string;
    deleteAt: Date;
    rol: Rol;
    rolId: number;
}
