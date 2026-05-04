import { getToken, clearToken, isTokenExpired } from "./token.ts"
import type { HttpMethod, HttpError } from "../types/http.ts"

export const request = async <T>(
    url: string,
    method: HttpMethod = 'GET',
    body: Record<string, unknown> = {},
): Promise<T> => {
    if (!url) throw new Error('Url is missing!')

    const token = getToken()

    if (token && isTokenExpired(token.accessToken)) {
        clearToken()
        if (!window.location.pathname.includes('login')) {
            window.location.href = '/index.htm#/login'
        }
        throw new Error('Token expired!');
    }

    const hasBody = body !== undefined && body !== null && method != 'GET'

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'fetch',
        ...(token?.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {})
    })

    const options: RequestInit = {
        method,
        headers,
        ...(hasBody ? { body: JSON.stringify(body) } : {}),
    }

    try {
        const response = await fetch(url, options)
        

        if (response.status === 401) {
            clearToken()
            if (!window.location.pathname.includes('login')) {
                window.location.href = '/index.htm#/login'
            }
            throw new Error('Unauthorized - please login again')
        }

        const result = await response.json()

        if (!response.ok) {
            const err: HttpError = new Error(result?.message || response.statusText)
            err.status = response.status
            err.body = result
            throw err
        }

        return result
    } catch (error) {
        throw error
    }
}
