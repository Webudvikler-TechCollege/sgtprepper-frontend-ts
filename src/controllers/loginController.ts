import { loginModel } from "../models/loginModel.ts"
import type { Token } from "../types/token.ts"
import { isLoggedIn } from "../utils/auth.ts"
import { render } from "../utils/dom.ts"
import { getToken, setToken } from "../utils/token"
import { createLoginForm } from "../views/components/modules/createLoginForm.ts"
import { createUserInfo } from "../views/components/modules/createUserInfo.ts"

interface AuthResponse {
    accessToken: string
    [key: string]: unknown
}

class LoginController {

    public renderLoginPage = async (): Promise<void> => {
        let viewHtml: HTMLElement | undefined
        if (await isLoggedIn()) {
            const token = getToken() as Token
            viewHtml = await createUserInfo(token.user)
        } else {
            viewHtml = await createLoginForm(this.handleLogin)
        }
        render('main', viewHtml, true)
    }

    public handleLogin = async (e: SubmitEvent): Promise<void> => {
        e.preventDefault()

        const form = e.currentTarget as HTMLFormElement

        const username = (form.elements.namedItem('username') as HTMLInputElement).value.trim()
        const password = (form.elements.namedItem('password') as HTMLInputElement).value.trim()

        try {
            // Send login-anmodning til serveren
            const data: AuthResponse = await loginModel.authenticate({ username, password })

            // Hvis login lykkedes, gem token og gå til forsiden
            if (data && 'accessToken' in data) {
                setToken(data)
                window.location.reload()
            }
        } catch (error) {
            console.error(error)
        }

    }

}

export const loginController = new LoginController();