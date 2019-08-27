import { Collection } from '../models/collection';

export abstract class CollectionView<T, K> {
	constructor(public parent: Element, public collection: Collection<T, K>) {
	}
	
	abstract renderItem: (model: T, parentItem: Element) => void;
	
	render = (): void => {
		this.parent.innerHTML = '';
		
		const template = document.createElement('template');
		
		for (let model of this.collection.models) {
			const element = document.createElement('div');

			this.renderItem(model, element);

			template.content.append(element);
		}
		
		
		this.parent.append(template.content);
	}
}
