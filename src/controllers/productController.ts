import { productModel } from "../models/productModel.ts";
import { render } from "../utils/dom.ts";
import { price2Dkk } from "../utils/formatters.ts";
import { createProductDetails } from "../views/components/modules/createProductDetails.ts";
import { createProductList } from "../views/components/modules/createProductList.ts";

class ProductController {

    public async renderCategoryProducts(category_slug: string): Promise<void> {
        const data = await productModel.getCategoryProducts(category_slug)

        const formattedData = data.map(item => ({
            ...item,
            price: price2Dkk(item.price)
        }))

        const viewHtml = createProductList(formattedData, category_slug)
        render('main', viewHtml, true)
    }

    public async renderProductDetails(product_slug: string): Promise<void> {
        const data = await productModel.getProductBySlug(product_slug)

        const formattedData = {
            ...data,
            price: price2Dkk(data.price)
        }

        const viewHtml = createProductDetails(formattedData)
        render('main', viewHtml, true)
    }

}

export const productController = new ProductController();