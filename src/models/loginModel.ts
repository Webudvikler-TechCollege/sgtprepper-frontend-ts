import type { User } from "../types/user.ts"
import { request } from "../utils/http.ts"

interface LoginCredentials extends Record<string, unknown> {
  username: string
  password: string
}

class LoginModel {
  private readonly baseUrl: string = 'http://localhost:4000/api'

  public async authenticate(credentials: LoginCredentials): Promise<User> {
    
    try {
      const data = await request<User>(`${this.baseUrl}/auth/login`, 'POST', credentials)
      console.log(data);
      
      return data
    } catch (error) {
      throw new Error('Authentication failed', { cause: error })
    }
  }

  public async authorize(): Promise<boolean> {
    try {
      await request(`${this.baseUrl}/auth/verify`)
      return true
    } catch {
      return false
    }
  }
}

export const loginModel = new LoginModel()