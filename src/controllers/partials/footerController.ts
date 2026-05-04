import { createFooter } from "../../views/components/partials/createFooter.ts";

class FooterController {
    public render = () => {
        const viewHtml = createFooter()
        return viewHtml
    }
}

export const footerController = new FooterController();