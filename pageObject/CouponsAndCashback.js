export class CouponsAndCashback {
    // Locators
    getOneCoupon = 'a[rel="noopener noreferrer"]';
    getEmail = '.chakra-input.rr-auth-web-user-email-input.css-1mjgfra';
    getPassword = '.chakra-input.rr-auth-web-user-password-input.css-1mjgfra';
    getCaptcha = '.recaptcha-checkbox-border';
    getShopWithCB = '#email-auth-btn';
    verifyActivation = 'h1[data-testid="title"]';

    visitPage() {
        cy.visit('https://www.rakuten.com/coupons');
    }

    clickTheCoupon() {
        cy.get(this.getOneCoupon).first().then(($e)=>{
                cy.wrap($e).should('be.visible').debug()
            })
            cy.get(this.getOneCoupon).first().invoke('removeAttr', 'target').click();
    }

    // Above i wrote .first() to click the first product but it can be adjusted or if want to click all coupons add {multiple:true} and {force:true}...

    typeEmail(emailID) {
        cy.get(this.getEmail).should('be.visible').type(emailID);
    }

    typePassword(password) {
        cy.get(this.getPassword).should('be.visible').type(password);
    }

    checkCaptcha() {
        cy.get(this.getCaptcha).should('be.visible').check();
    }

    shopWithCB() {
        cy.get(this.getShopWithCB).should('be.visible').click();
    }

    validatCBSuccess() {
        cy.get(this.verifyActivation).should('contain.text', 'Cash Back Activated');
    }
}

/* showCodeBtn = '.chakra-button.css-79zxaj';
    modalCode = '.chakra-modal__body code';
    copyBtn = '.chakra-modal__body button';
    cashbackBtn = '.chakra-button.css-1nbglha';
    successBanner = '.css-1skacj4'; */