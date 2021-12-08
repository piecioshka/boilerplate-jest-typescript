import "isomorphic-fetch";

export async function makeRequest<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
