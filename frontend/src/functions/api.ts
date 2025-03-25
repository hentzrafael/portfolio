const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function httpGet(url: string) {
	const response = await fetch(`${baseUrl}/${url}`);
	return response.json();
}
