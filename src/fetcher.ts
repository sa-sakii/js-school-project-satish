export async function fetchEvents(url: string){
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load url: ${url}`);
    return await response.json();
}