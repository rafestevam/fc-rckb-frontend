import { Profile } from './profile';

export interface User {
    active: boolean,
    createdIn: Date,
    role: string,
    username: string,
    profile: Profile,
    guid: string
}