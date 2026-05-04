import { createElement, createHeading, createImage, createLink } from '../atoms/index.ts'

export const createHeader = (): HTMLElement => {
    const el = createElement('header')
    el.className = 'bg-slate-700 p-3 flex justify-between items-center text-white'

    const divLogo = createElement('div')
    const link = createLink('/index.htm')
    const h1 = createHeading(1, 'Sgt. Prepper', 'text-2xl font-bold')
    link.append(h1)
    divLogo.append(link)

    const divOpts = createElement('div', 'flex')

    const cartLink = createLink('/index.htm#/cart', 'mt-1')
    const img = createImage('./src/assets/images/icons/cart.svg','', 'w-10 h-10')

    cartLink.append(img)
    divOpts.append(cartLink)

    el.append(divLogo, divOpts)

    return el
}