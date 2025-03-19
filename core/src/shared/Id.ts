export default class Id {
	static gen(): string {
		const p1 = Math.random().toString(36).substring(2, 8);
		const p2 = Math.random().toString(36).substring(2, 8);
		const p3 = Math.random().toString(36).substring(2, 8);
		return `${p1}-${p2}-${p3}`;
	}
}
