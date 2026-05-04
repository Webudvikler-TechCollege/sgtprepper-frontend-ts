import type { NavItem } from '../../../types/nav.ts'
import { createElement, createLink } from '../atoms/index.ts'

export const createNav = (data: NavItem[]):HTMLElement => {
    const el = createElement('nav', 'p-3 bg-slate-400')
    const ul = createElement('ul', 'flex')
    
    data.forEach(item => {
        const li = createElement('li','mr-6')
        const a = createLink(`/index.htm#/products/${item.slug}`)
        a.innerText = item.title
        li.append(a)
        ul.append(li)
    })    
    el.append(ul)
    return el
}