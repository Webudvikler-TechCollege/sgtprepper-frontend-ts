import type { User } from "../../../types/user.ts"
import { createElement } from "../atoms/index.ts"
import { createMainWrapper } from "./createMainWrapper.ts"

export const createUserInfo = async (user: User): Promise<HTMLElement> => {
    const view: HTMLElement = createMainWrapper('Login', '')
    const p: HTMLElement = createElement('div', `Du er logget ind som ${user.firstname} ${user.lastname} `)
    view.append(p)
    return view

}