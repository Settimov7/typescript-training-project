import { Eventing } from './eventing';
import { Sync } from "./sync";
import { Attributes } from "./attributes";

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
}
