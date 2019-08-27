import { View } from './view';
import { User, Props as UserProps } from '../models/user';

export class UserForm extends View<User, UserProps> {
	eventsMap = (): { [key: string]: () => void } => ({
		'click:.set-age': this.onSetAgeClick,
		'click:.set-name': this.onSetNameClick,
		'click:.save': this.onSaveClick,
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
	
	onSaveClick = (): void => {
		this.model.save();
	};
	
	template = (): string => `
		<div>
		 	<input placeholder="${ this.model.get('name') }"/>
		 	<button class="set-name">Change name</button>
		 	<button class="set-age">Set random age</button>
		 	<button class="save">Save</button>
		</div>
	`;
}
