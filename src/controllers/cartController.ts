import { cartModel } from "../models/cartModel.ts";
import { render } from "../utils/dom.ts";
import { price2Dkk } from "../utils/formatters.ts";
import { createCartList } from "../views/components/modules/createCartList.ts";
import type { CartItem } from "../types/cart.ts";

interface FormattedCartItem extends Omit<CartItem, 'priceFormatted'> {
  priceFormatted: string
  totalFormatted: string
  totalRaw: number
}

class CartController {

    public async renderCartList(): Promise<void> {
        const data = await cartModel.getList()

        const formattedData: FormattedCartItem[] = data.map(item => {
            const rawPrice = (item.product as any)?.price ?? 0
            const quantity = item.quantity ?? 1

            const total:number = rawPrice * quantity

            return {
                ...item,
                priceFormatted: price2Dkk(String(rawPrice)),
                totalFormatted: price2Dkk(String(total)),
                totalRaw: total,
            }
        })

        // samlet kurv total
        const cartTotal = formattedData.reduce((sum, item) => sum + item.totalRaw, 0)

        const viewHtml = createCartList({
            items: formattedData,
            cartTotal: price2Dkk(String(cartTotal))
        })
        render('main', viewHtml, true)
    }
}

export const cartController = new CartController();