export class DashboardPage {

    static get loginStatusText() {
        return $(
            '//h4[contains(text(), "Logged in as")]'
        )
    }

}