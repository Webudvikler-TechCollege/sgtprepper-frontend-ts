import type { CartItem } from "../types/cart.ts"
import { request } from "../utils/http.ts"

class CartModel {
    private readonly url: string = `http://localhost:4000/api/cart`
    
    public async getList(): Promise<CartItem[]> {
        try {
            const data = await request<CartItem[]>(`${this.url}`)
            return data
        } catch (error) {
            throw new Error('Request error on product list', { cause: error })
        }
    }
}

export const cartModel = new CartModel()