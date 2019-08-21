interface Props {
    name?: string;
    age?: number;
}

export class User {
    constructor(private data: Props) {}

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(newProps: Props): void {
        Object.assign(this.data, newProps);
    }
}
