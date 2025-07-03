export class LoginPage {
    
    static get inputUserName() {
        return $(
            '//input[@id="username"]'
        )
    }  
    
    static get inputPassword() {
        return $(
            '//input[@id="password"]'
        )
    }

    static listSessionLocation(location: string) {
        return $(
            `//*[@id="${location}"]`
        )
    }

    static get loginButton() {
        return $(
            '//*[@id="loginButton"]'
        )
    }

    static get errorMessageLogin() {
        return $(
            '//*[@id="error-message"]'
        )
    }

    static get togglePasswordButton() {
        return $(
            '//*[@id="togglePassword"]'
        )
    }

}