import { Model } from './model';
import { Attributes } from './attributes';
import { ApiSync } from './api-sync';
import { Eventing } from './eventing';
import { Collection } from './collection';

export interface Props {
	id?: number;
	name?: string;
	age?: number;
}

const ROOT_URL = 'http://localhost:3000/users';

export class User extends Model<Props> {
	private static deserialize = (json: Props) => User.build(json);
	
	static build = (attributes: Props): User => new User(
		new Attributes<Props>(attributes),
		new ApiSync<Props>(ROOT_URL),
		new Eventing(),
	);
	
	static buildCollection = () => new Collection<User, Props>(ROOT_URL, User.deserialize);
	
	setRandomAge = (): void => {
		const age = Math.round(Math.random() * 100);
		
		this.set({ age });
	}
}

