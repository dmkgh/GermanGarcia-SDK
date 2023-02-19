
export async function fetchutil(url: string, options?: RequestInit): Promise<Response> {
  const response = await fetch(url, options);
  return response;
}
  