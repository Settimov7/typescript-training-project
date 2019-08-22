import {Eventing} from './eventing';
import axios, {AxiosResponse} from 'axios';

interface Props {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    public events = new Eventing();

    constructor(private data: Props) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(newProps: Props): void {
        Object.assign(this.data, newProps);
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data);
        } else {
            axios.post('http://localhost:3000/users', this.data);
        }
    }
}
