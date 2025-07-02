import { DashboardPage } from "../pageobjects/dashboard.page";

export class DashboardController {

    async assertLoginStatusText() {
        await expect(DashboardPage.loginStatusText).toBeDisplayed()
    }

}