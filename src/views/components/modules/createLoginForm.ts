import { createButton, createForm } from "../atoms"
import { createFormGroup } from "./createFormGroup"
import { createMainWrapper } from "./createMainWrapper"

export const createLoginForm = async (eventHandler: (e: SubmitEvent) => void): Promise<HTMLElement> => {
    const view = createMainWrapper('Login', '')
    
    const form = createForm()
    const username = createFormGroup('Brugernavn','text','username','Indtast brugernavn','')
    const password = createFormGroup('Adgangskode','password','password','Indtast adgangskode','')
    const button = createButton('Login','submit')
    form.append(username, password, button)
    
    form.addEventListener('submit', (e) => {
        eventHandler(e)
    })

    view.append(form)
    return view

}