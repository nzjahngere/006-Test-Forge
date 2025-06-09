export class CashbackFlowPage {

    getSearchBar = '#term';
    getAllProdRes = '.chakra-link.css-j9olhk';
    selectProduct = '.chakra-link.css-spibwa';

    getTheEmail = '.chakra-input.rr-auth-web-user-email-input.css-1mjgfra';
    getThePassword = '.chakra-input.rr-auth-web-user-password-input.css-1mjgfra';
    getTheCaptcha = '.recaptcha-checkbox-border';
    getTheShopWithCB = '#email-auth-btn';

    verifyTheActivation = 'h1[data-testid="title"]';

    // return and check cashback tracking in dashboard

    userAccount = '.chakra-link.css-wv5hp9';
    checkCBAmount = 'div[data-testid="confirmed-cb-amount"]';

    visitThePage() {
        cy.visit('https://www.rakuten.com/coupons');
    }

    getSearch(searchProduct) {
        return cy.get(this.getSearchBar).should('exist')
        .and('be.visible').type(searchProduct);
    }

    clickSeeAllRes() {
        return cy.get(this.getAllProdRes).eq(1).should('exist')
        .and('be.visible').and('have.text', 'See all product results').click();
    }

    clickProduct() {
        cy.get(this.selectProduct).first().then(($e)=>{
                cy.wrap($e).should('be.visible').debug()
            })
            cy.get(this.selectProduct).eq(0).invoke('removeAttr', 'target').click();
    }

    typeTheEmail(emailID) {
        cy.get(this.getTheEmail)
        .should('be.visible').type(emailID);
    }

    typeThePassword(password) {
        cy.get(this.getThePassword)
        .should('be.visible').type(password);
    }

    checkTheCaptcha() {
        cy.get(this.getTheCaptcha)
        .should('be.visible').check();
    }

    shopWithTheCB() {
        cy.get(this.getTheShopWithCB)
        .should('be.visible').click();
    }

    validateTheSuccess() {
        cy.get(this.verifyTheActivation)
        .should('contain.text', 'Cash Back Activated');
    }

    // since the user account couldn't be created directly with cypress so the cypress won't be able to access any account

    accessUserAccount() {
         cy.get(this.userAccount)
        .should('be.visible').click();
    }

    checkCashbackAmt() {
         cy.get(this.checkCBAmount).should('exist')
        .and('be.visible').and('contain', 'Confirmed Cash Back')
        .and('contain', 'Pending').and('contain', 'Next Payment:');

        cy.contains('See activity').click();
    }
}

/* Purchase not made due to test scope and, 
real-world transaction restriction. 
Cashback activation UI verified. */