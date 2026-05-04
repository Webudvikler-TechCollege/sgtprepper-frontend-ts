import { cartController } from "../controllers/cartController";
import { loginController } from "../controllers/loginController";
import { productController } from "../controllers/productController";

export const initRouter = (): void => {    
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("load", handleRoute);
    handleRoute()
}

export const handleRoute = async (): Promise<void> => {

    const hash = window.location.hash || "#/";
    const cleanHash = hash.replace(/^#\/?/, "")
    const segments = cleanHash.split("/").filter(Boolean)

    if (segments.length === 0) {
        return;
    }

    // ["products"]
    if (segments[0] === "products") {
        if (segments.length === 2) {
            await productController.renderCategoryProducts(segments[1]);
            return;
        } else {
            await productController.renderProductDetails(segments[2]);
            return;
        }
    }

    // ["products"]
    if (segments[0] === "cart") {
        await cartController.renderCartList();
        return;
    }

    // ["login"]
    if (segments[0] === "login") {
        await loginController.renderLoginPage();
        return;
    }

}