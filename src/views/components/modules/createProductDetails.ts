import type { ProductItem } from "../../../types/product.ts";
import { createElement, createHeading, createImage, createLink } from "../atoms/index.ts"
import { createMainWrapper } from "./createMainWrapper.ts";

export const createProductDetails = (
    product: ProductItem
): HTMLElement => {
    const { name, imageUrl, description, price, stockClass, stockText, formElement } = product

    const view = createElement('section')

    const mainwrapper = createMainWrapper(`Produkter - ${product.name}`, '')
    view.append(mainwrapper)

    const article = createElement('article','flex justify-between gap-4 p-4 border rounded-lg mb-4 shadow-md')

    const img = createImage(`http://localhost:4000${imageUrl}`, name, 'w-[300px] flex-shrink-0 rounded')
    article.append(img)

    const div = createElement('div','min-w-0')

    const pDesc = createElement('p', 'mb-2')
    pDesc.innerHTML = description
    div.append(pDesc)

    const pStock = createElement('p', stockClass)
    pStock.textContent = stockText
    div.append(pStock)

    const pPrice = createElement('p', 'font-bold text-xl')
    pPrice.textContent = `Pris: ${price}`
    div.append(pPrice)

    const pAdd2Cart = createElement('p', 'pt-4')
    //pAdd2Cart.append(formElement)
    div.append(pAdd2Cart)

    article.append(div)
    view.append(article)
    return view
}