import { createMain } from "../../views/components/partials/createMain.ts"

class MainController {
    public render = () => {
        const viewHtml = createMain()
        return viewHtml
    }
}

export const mainController = new MainController();