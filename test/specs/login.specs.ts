import { LoginPageUseCase } from "../usecases/login.usecase";
import { LoginPageController } from "../controllers/login.controller";
import { DashboardController } from "../controllers/dashboard.controller";

const loginPageUseCase = new LoginPageUseCase();
const loginPageController = new LoginPageController();
const dashboardController = new DashboardController();

describe ('Verify OpenMRS Login Feature', () => {
    it ('TC-Login-05 | Verify login with username empty', async () => {
        await loginPageUseCase.openBrowser();
        await loginPageUseCase.loginEmptyUsername();
        await loginPageController.assertErrorMessageLoginText();
    })
    
    it ('TC-Login-06 | Verify login with password empty', async () => {
        await loginPageUseCase.loginEmptyPassword();
        await loginPageController.assertErrorMessageLoginText();
    })

    it ('TC-Login-07 | Verify login with username and password empty', async () => {
        await loginPageUseCase.loginEmptyUsernameAndPassword();
        await loginPageController.assertErrorMessageLoginText();
    })

    it ('TC-Login-08 | Verify login with invalid username', async () => {
        await loginPageUseCase.loginInvalidUsername();
        await loginPageController.assertErrorMessageLoginText();
    })

    it ('TC-Login-09 | Verify login with invalid password', async () => {
        await loginPageUseCase.loginInvalidPassword();
        await loginPageController.assertErrorMessageLoginText();
    })

    it ('TC-Login-10 | Verify login with invalid username and password', async () => {
        await loginPageUseCase.loginInvalidUsernameAndPassword();
        await loginPageController.assertErrorMessageLoginText();
    })

    it ('TC-Login-11 | Verify button toggle visible password ', async () => {
        await loginPageUseCase.toggleShowPassword();
        await loginPageController.assertPasswordVisible();
        await browser.pause(3000); //browser pause for showing valid result
    })

    //---- POSITIVE TEST CASE ----
    it ('TC-Login-02 | Verify login with valid credential and select valid location', async () => {
        await loginPageUseCase.loginValidUser();
        await dashboardController.assertLoginStatusText();
        await browser.pause(3000); //browser pause for showing valid result
    })
})