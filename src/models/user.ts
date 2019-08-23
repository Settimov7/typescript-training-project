import { Model } from './model';
import { Attributes } from './attributes';
import { ApiSync } from './api-sync';
import { Eventing } from './eventing';

interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
	static buildUser = (attributes: UserProps): User => new User(
		new Attributes<UserProps>(attributes),
		new ApiSync<UserProps>(ROOT_URL),
		new Eventing(),
	);
}

