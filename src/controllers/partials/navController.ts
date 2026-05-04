import { categoryModel } from "../../models/categoryModel.ts";
import type { NavItem } from "../../types/nav.ts";
import { createNav } from "../../views/components/partials/createNav.ts"

class NavController {

    private async getCategoryList(): Promise<NavItem[]> {
        return await categoryModel.getList()
    }
    
    public async render(): Promise<HTMLElement> {
        const data = await this.getCategoryList()
        return createNav(data)
    }
}

export const navController = new NavController();