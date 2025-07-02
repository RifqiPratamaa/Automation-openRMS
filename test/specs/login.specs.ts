import { LoginPageUseCase } from "../usecases/login.usecase";
import { DashboardController } from "../controllers/dashboard.controller";

const loginPageUseCase = new LoginPageUseCase();
const dashboardController = new DashboardController();

describe ('Verify Login Feature', () => {
    it ('Verify valid login flow', async () => {
        await loginPageUseCase.openBrowser();
        await loginPageUseCase.loginValidUser();
        await dashboardController.assertLoginStatusText();
        await browser.pause(3000);
    })
})