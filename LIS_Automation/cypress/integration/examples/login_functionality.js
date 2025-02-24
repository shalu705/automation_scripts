
const locators = require('./locators');
describe('login functionality', function(){
    it('login with valid credentials',function(){
        cy.visit(locators.loginPage.Url);
        cy.get(locators.loginPage.usernameInput).type("admin@enkon.com");
        cy.get('#mat-input-2').should('be.visible').type('ElectricBU5!');

        cy.get(locators.loginPage.loginButton).click();

        

    })

})

