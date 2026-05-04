import type { NavItem } from "../types/nav.ts"
import { request } from "../utils/http.ts"

class CategoryModel {
    private readonly url: string = `http://localhost:4000/api/categories`
    
    public async getList(): Promise<NavItem[]> {
        try {
            const data = await request<NavItem[]>(this.url)
            return data
        } catch (error) {
            throw new Error('Request error on category list', { cause: error })
        }
    }
}

export const categoryModel = new CategoryModel()