import { WebUrls } from "../enums/webUrl.type";
import { LoginPageController } from "../controllers/login.controller";
import { loginData } from "../data/login.data";

const loginPageController = new LoginPageController();

export class LoginPageUseCase {
    async openBrowser() {
        await browser.url(WebUrls.Prod)
        await browser.maximizeWindow()
    }

    async loginValidUser() {
        await loginPageController.setUserName(loginData.validUsername)
        await loginPageController.setPassword(loginData.validPassword)
        await loginPageController.selectLocationList(loginData.sessionLocation)
        await loginPageController.clickLoginButton()
    }
}