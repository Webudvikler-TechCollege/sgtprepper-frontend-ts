import { createHeader } from "../../views/components/partials/createHeader.ts"

class HeaderController {
    public render = () => {
        const viewHtml = createHeader()
        return viewHtml
    }
}

export const headerController = new HeaderController();