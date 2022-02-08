export interface User {
    accessToken(accessToken: any);
    info: string;
    id?: number;
    name: string;
    password: string;
    type_id: string;
    phone: string;
    verified?: boolean;
}
