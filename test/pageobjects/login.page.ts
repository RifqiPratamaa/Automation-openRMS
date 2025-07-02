export class LoginPage {
    
 static get inputUserName() {
    return $(
        '//input[@id="username"]'
    )
 }  
 
 static get inputPassword() {
    return $(
        '//input[@id="password" and @type="password"]'
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

}