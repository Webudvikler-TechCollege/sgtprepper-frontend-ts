import type { ProductItem } from "../../../types/product.ts";
import { createElement, createHeading, createImage, createLink } from "../atoms/index.ts"
import { createMainWrapper } from "./createMainWrapper.ts";

export const createProductList = (
    products: ProductItem[], 
    category_slug: string
): HTMLElement => {
    const view = createElement('section')

    const mainwrapper = createMainWrapper('Produkter', 'Se vores fine produkter')
    view.append(mainwrapper)

    products.forEach(element => {
        const { name, teaser, imageUrl, slug, stockClass, stockText, price } = element

        const link = createLink(`/index.htm#/products/${category_slug}/${slug}`, 'p-4 block border rounded-lg mb-4 shadow-md')
        
        const productCard = createElement('div','flex items-center gap-4 min-w-0')
        
        // Første kolonne: Billede
        const imageCol = createElement('div','shrink-0 w-[120px]')
        const img = createImage(`http://localhost:4000${imageUrl}`, name, 'w-[80px] h-auto rounded')
        imageCol.append(img)
        productCard.append(imageCol)

        // Midterkolonne: Info
        const infoCol = createElement('div','flex-1 min-w-0')
        const heading = createHeading(3, name, 'font-bold truncate')
        const teaserElm = createElement('p')
        teaserElm.textContent = teaser
        const stock = createElement('p', `text-sm ${stockClass}`)
        stock.textContent = stockText
        infoCol.append(heading, teaserElm, stock)

        // Højre kolonne: Pris
        const priceCol = createElement('div','shrink-0 w-[96px] text-right')
        const priceElm = createElement('p', 'mb-2 font-bold')
        priceElm.textContent = price
        priceCol.append(priceElm)

        productCard.append(imageCol, infoCol, priceCol)
        link.append(productCard)
        view.append(link)

    });

    return view
}