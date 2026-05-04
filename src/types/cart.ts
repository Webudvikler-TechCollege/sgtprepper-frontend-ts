export interface CartItem {
    id: number,
    userId: number,
    productId: number,
    quantity: number,
    priceFormatted: number,
    createdAt: Date,
    user: unknown,
    product: unknown
}