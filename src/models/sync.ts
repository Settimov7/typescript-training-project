import axios, { AxiosPromise } from 'axios';
import { UserProps } from './user';

export class Sync {
    constructor(public rootUrl: string) {}

    fetch(id: number): AxiosPromise {
        return axios.get(`${ this.rootUrl }/${ id }`);
    }

    save(data: UserProps): AxiosPromise {
        const { id } = data;

        if (!id) {
            return axios.post(this.rootUrl, data);
        }

        return axios.put(`${ this.rootUrl }/${ id }`, data);
    }
}
