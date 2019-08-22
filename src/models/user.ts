import {Eventing} from './eventing';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    public events = new Eventing();

    constructor(private data: UserProps) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(newProps: UserProps): void {
        Object.assign(this.data, newProps);
    }
}
