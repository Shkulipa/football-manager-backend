import { hash } from 'bcrypt';

export const hashPasswordHelper = async (password: string) => await hash(password, 10);
