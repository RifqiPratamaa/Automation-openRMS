import { LoginPage } from "../pageobjects/login.page";

export class LoginPageController {

    async setUserName(username: string) {
        await LoginPage.inputUserName.setValue(username)
    }

    async setPassword(password: string) {
        await LoginPage.inputPassword.setValue(password)
    }

    async selectLocationList(location: string) {
        await LoginPage.listSessionLocation(location).click()
    }

    async clickLoginButton() {
        await LoginPage.loginButton.click()
    }

    async assertErrorMessageLoginText() {
        await expect(LoginPage.errorMessageLogin).toBeDisplayed()
    }

    async clickTogglePasswordButton() {
        await LoginPage.togglePasswordButton.click()
    }

}