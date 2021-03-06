import axios, { AxiosPromise } from 'axios';

interface HasId {
	id?: number;
}

export class ApiSync<T extends HasId> {
	constructor(public rootUrl: string) {
	}
	
	fetch = (id: number): AxiosPromise => axios.get(`${ this.rootUrl }/${ id }`);
	
	save = (data: T): AxiosPromise => {
		const { id } = data;
		
		if (!id) {
			return axios.post(this.rootUrl, data);
		}
		
		return axios.put(`${ this.rootUrl }/${ id }`, data);
	};
}
