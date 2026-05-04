import type { ProductItem } from "../types/product.ts"
import { request } from "../utils/http.ts"

class ProductModel {
    private readonly url: string = `http://localhost:4000/api/products`
    
    public async getCategoryProducts(category_slug: string): Promise<ProductItem[]> {
        try {
            const data = await request<ProductItem[]>(`${this.url}/${category_slug}`)
            return data
        } catch (error) {
            throw new Error('Request error on product list', { cause: error })
        }
    }

    public async getProductBySlug(product_slug: string): Promise<ProductItem> {
        try {
            const data = await request<ProductItem>(`${this.url}/bySlug/${product_slug}`)
            return data
        } catch (error) {
            throw new Error('Request error on product list', { cause: error })
        }
    }

}

export const productModel = new ProductModel()