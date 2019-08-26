import { View } from './view';
import { User, Props as UserProps } from '../models/user';

export class UserForm extends View<User, UserProps> {
	eventsMap = (): { [key: string]: () => void } => ({
		'click:.set-age': this.onSetAgeClick,
		'click:.set-name': this.onSetNameClick,
	});
	
	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};
	
	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		
		if (input) {
			const newName = input.value;
			
			this.model.set({ name: newName });
		}
	};
	
	template = (): string => `
		<div>
			<h1>User form</h1>
			<p>User name: ${ this.model.get('name') }</p>
			<p>User age: ${ this.model.get('age') }</p>
		 	<input/>
		 	<button class="set-name">Change name</button>
		 	<button class="set-age">Set random age</button>
		</div>
	`;
}
