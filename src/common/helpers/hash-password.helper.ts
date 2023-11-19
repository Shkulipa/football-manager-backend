import { hash } from 'bcryptjs';

export const hashPasswordHelper = async (password: string) => await hash(password, 10);
