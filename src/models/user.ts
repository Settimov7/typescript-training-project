import { Eventing } from './eventing';
import { Sync } from "./sync";
import { Attributes } from "./attributes";
import { AxiosResponse } from 'axios';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

export class User {
	public events = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(ROOT_URL);
	public attributes: Attributes<UserProps>;
	
	constructor(attributes: UserProps) {
		this.attributes = new Attributes<UserProps>(attributes);
	}
	
	get on() {
		return this.events.on;
	}
	
	get trigger() {
		return this.events.trigger;
	}
	
	get get() {
		return this.attributes.get;
	}
	
	set = (update: UserProps): void => {
		this.attributes.set(update);
		this.trigger('change');
	};
	
	fetch = (): void => {
		const id = this.get('id');
		
		if (typeof id !== 'number') {
			throw new Error('Cannot fetch without an id');
		}
		
		this.sync.fetch(id)
			.then((response: AxiosResponse) => {
				this.set(response.data);
			})
	};
	
	save = (): void => {
		this.sync.save(this.attributes.getAll())
			.then(() => this.trigger('save'))
			.catch(() => this.trigger('error'));
	}
}
