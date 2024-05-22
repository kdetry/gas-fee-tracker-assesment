export type TFetchApiArgs = {
    url: string,
    method?: string,
    body?: Record<string, any>
    headers?: RequestInit['headers']
}

export const fetchApi = ({
    url,
    method = 'GET',
    body,
    headers
}: TFetchApiArgs): Promise<Awaited<ReturnType<Body["json"]>>> =>
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(body),
        next: {
            revalidate: 10
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    })