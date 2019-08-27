import { View } from './view';
import { User, Props as UserProps } from '../models/user';

export class UserShow extends View<User, UserProps> {
	template = (): string => `
		<div>
			<h1>User detail</h1>
			<p>Name: ${ this.model.get('name') }</p>
			<p>Age: ${ this.model.get('age') }</p>
		</div>
	`;
}
