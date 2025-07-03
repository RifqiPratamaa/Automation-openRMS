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
    
    async loginEmptyUsername() {
        await loginPageController.setUserName(loginData.emptyUsername)
        await loginPageController.setPassword(loginData.validPassword)
        await loginPageController.selectLocationList(loginData.sessionLocation)
        await loginPageController.clickLoginButton()
    }

    async loginInvalidUsername() {
        await loginPageController.setUserName(loginData.invalidUsername)
        await loginPageController.setPassword(loginData.validPassword)
        await loginPageController.selectLocationList(loginData.sessionLocation)
        await loginPageController.clickLoginButton()
    }

    async loginEmptyPassword() {
        await loginPageController.setUserName(loginData.validUsername)
        await loginPageController.setPassword(loginData.emptyPassword)
        await loginPageController.selectLocationList(loginData.sessionLocation)
        await loginPageController.clickLoginButton()
    }

    async loginInvalidPassword() {
        await loginPageController.setUserName(loginData.validUsername)
        await loginPageController.setPassword(loginData.invalidPassword)
        await loginPageController.selectLocationList(loginData.sessionLocation)
        await loginPageController.clickLoginButton()
    }

    async loginEmptyUsernameAndPassword() {
        await loginPageController.setUserName(loginData.emptyUsername)
        await loginPageController.setPassword(loginData.emptyPassword)
        await loginPageController.selectLocationList(loginData.sessionLocation)
        await loginPageController.clickLoginButton()
    }

    async loginInvalidUsernameAndPassword() {
        await loginPageController.setUserName(loginData.invalidUsername)
        await loginPageController.setPassword(loginData.invalidPassword)
        await loginPageController.selectLocationList(loginData.sessionLocation)
        await loginPageController.clickLoginButton()
    }

    async toggleShowPassword() {
        await loginPageController.setPassword(loginData.validPassword)
        await loginPageController.clickTogglePasswordButton()
    }

}