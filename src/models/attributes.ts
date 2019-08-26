export class Attributes<T> {
	constructor(private data: T) {
	}
	
	get = <K extends keyof T>(key: K): T[K] => this.data[key];
	
	set = (value: T): void => {
		Object.assign(this.data, value);
	};
	
	getAll = (): T => this.data;
}
