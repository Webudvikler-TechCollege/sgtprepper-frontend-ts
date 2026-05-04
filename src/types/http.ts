export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface RequestOptions {
    url: string,
    method?: HttpMethod,
    body?: Record<string, unknown>
}

export interface HttpError extends Error {
    status?: number,
    body?: unknown
}