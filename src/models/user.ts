import {Eventing} from './eventing';
import {Sync} from "./sync";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

export class User {
    public events = new Eventing();
    public sync = new Sync<UserProps>(ROOT_URL);

    constructor(private data: UserProps) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(newProps: UserProps): void {
        Object.assign(this.data, newProps);
    }
}
