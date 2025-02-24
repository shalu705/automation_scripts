const locators = {
    loginPage: {
        Url : "https://demo7.integral-lis.com/login",
        usernameInput: 'input[name="username"]',
        passwordInput: 'input[name = "password"]',     
        loginButton: '#button_login_login',
        home_page_LIS: '.mat-menu-trigger.disabled-click',
        login_error_message: '.error.login-card-item.pad-bottom.ng-star-inserted'
        
    },
    permits:{
        generalTab_permit : '#mat-tab-label-2-0',
        module_button_permit : '.mat-focus-indicator.mat-raised-button.mat-button-base.packge-link.ng-star-inserted.packge-link-active',
        module_wrapButton_permit : '.mat-icon.notranslate.routeIcon.material-icons.mat-icon-no-color',
        add_permit_button : '.mat-focus-indicator.mat-menu-item.ng-star-inserted',
        permit_name : '#input_permit_name',
        reference_Id_permit : '#input_permit_referenceid',
        description_permit : '#textarea_permit_description',
    }    
};

module.exports = locators;
