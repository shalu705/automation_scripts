const locators = {
    loginPage: {
        Url : "https://demo7.integral-lis.com/login",
        usernameInput:"#mat-input-1",
        passwordInput: '#mat-input-2',     
        loginButton: '#button_login_login',
        home_page: "https://demo7.integral-lis.com/gateway/online-portal/application/home"
        
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
