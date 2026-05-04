import { createElement } from '../atoms/index.ts'

export const createFooter = ():HTMLElement => {
    const el = createElement('footer')
    el.className = 'bg-slate-700 p-3 text-white'
    el.textContent = "TECHCOLLEGE"
    return el
}