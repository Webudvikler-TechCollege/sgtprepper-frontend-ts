import { createElement } from "../atoms/index.ts"
import { createMainWrapper } from "./createMainWrapper.ts";

type CartListItem = {
  quantity?: number
  product?: unknown
  priceFormatted?: string
  totalFormatted?: string
}

interface CartListProps {
  items?: CartListItem[]
  data?: CartListItem[]
  cartTotal: string
}

export const createCartList = ({ items, data, cartTotal }: CartListProps): HTMLElement => {
    const view = createElement('section')
    const resolvedItems = items ?? data ?? []

  const getProductName = (value: unknown): string => {
    if (typeof value === 'object' && value !== null && 'name' in value) {
      const name = (value as { name?: unknown }).name
      return typeof name === 'string' ? name : ''
    }

    return ''
  }

    const mainwrapper = createMainWrapper('Indkøbskurv', '')
    view.append(mainwrapper)

    const rowHead = createElement('div', 'flex border-b-2 py-2')
    const quantityHead = createElement('div', 'w-[10%] font-bold')
    quantityHead.textContent = 'Antal'
    const productHead = createElement('div', 'w-[50%] font-bold')
    productHead.textContent = 'Produkt'
    const priceHead = createElement('div', 'w-[20%] font-bold text-right')
    priceHead.textContent = 'Pris'
    const totalHead = createElement('div', 'w-[20%] font-bold text-right')
    totalHead.textContent = 'Samlet'
    rowHead.append(quantityHead,productHead,priceHead,totalHead)
    view.append(rowHead)

    resolvedItems.map(item => {
      const { quantity, priceFormatted, totalFormatted, product } = item

        const row = createElement('div','flex border-b-2 py-2')

        const colQuantity = createElement('div','w-[10%]')
        colQuantity.textContent = `${quantity ?? 0} stk.`

        const colProduct = createElement('div','w-[50%]')
        colProduct.textContent = getProductName(product)

        const colPrice = createElement('div','w-[20%] text-right')
        colPrice.textContent = priceFormatted ?? ''

        const colTotal = createElement('div','w-[20%] text-right')
        colTotal.textContent = totalFormatted ?? ''

        row.append(colQuantity, colProduct, colPrice, colTotal)        
        view.append(row)
    })

    const rowTotal = createElement('div','flex border-b-2 mb-10 py-4')
    const colText = createElement('div','w-[80%] font-bold')
    colText.textContent = 'Samlet pris'
    const colTotal = createElement('div','w-[20%] text-right font-bold')
    colTotal.textContent = cartTotal
    
    rowTotal.append(colText, colTotal)
    view.append(rowTotal)
    return view
}