import { hello } from "../src";

describe('index testing', () => {
	it('should return hello statement for given name', () => {
		const name = 'Migue';
		console.log(hello(name));
		expect(hello(name)).toBe('Hello Migue!!')
	})
})