
const locators = require('./locators');
describe('login functionality', function(){
    
    beforeEach(function() {
        // Visits the login page before each test
        cy.visit(locators.loginPage.Url);
    });

    const loginTestCases = [
        {
            description:"Login with invalid email",
            username: "admin@enkon.coma",
            password: "ElectricBU5!",
            expectedOutcome: 
            'error'
        },

        {
            description:"Login with valid Credential",
            username: "admin@enkon.com",
            password: "ElectricBU5!",
            expectedOutcome: 
            'success'
        },

        {
            description:"Login with invalid password",
            username: "admin@enkon.com",
            password: "ElectricBU5!!",
            expectedOutcome: 
            'error'
        }


    ];
    loginTestCases.forEach((testcase)=>{
        it('should handle login ${testcase.description}', function(){
            cy.UserLogin(testcase.username, testcase.password);
            if(testcase.expectedOutcome === 'error'){
                cy.get(locators.loginPage.login_error_message).should('be.visible');
            }
            else{
                cy.get(locators.loginPage.home_page_LIS).should('be.visible');
            }
        })
    });
});




//easy way
// const locators = require('./locators');
// describe('login functionality', function(){
    
//     beforeEach(function() {
//         // Visits the login page before each test
//         cy.visit(locators.loginPage.Url);
//     });


    // it('login with invalid password',function(){

    //     cy.get(locators.loginPage.usernameInput).type("admin@enkon.com");
    //     cy.get(locators.loginPage.passwordInput).type("ElectricBU5!!");
    //     cy.get(locators.loginPage.loginButton).click();     
    //     cy.get(locators.loginPage.login_error_message).should('be.visible');

    // })

    // it('login with valid credentials',function(){

    //     cy.get(locators.loginPage.usernameInput).type("admin@enkon.com");
    //     cy.get(locators.loginPage.passwordInput).type("ElectricBU5!");
    //     cy.get(locators.loginPage.loginButton).click();     
    //     cy.get(locators.loginPage.home_page_LIS).should('be.visible');

    // })
    // // 
    // it('login with invalid email',function(){

    //     cy.get(locators.loginPage.usernameInput).type("admin@enkon.coma");
    //     cy.get(locators.loginPage.passwordInput).type("ElectricBU5!");
    //     cy.get(locators.loginPage.loginButton).click();     
    //     cy.get(locators.loginPage.login_error_message).should('be.visible');

    // })
//});



