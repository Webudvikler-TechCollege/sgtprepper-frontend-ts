import { createElement } from '../atoms/index.ts'

export const createMain = ():HTMLElement => {
    const el = createElement('main', 'p-3')
    el.id = 'main'
    return el
}