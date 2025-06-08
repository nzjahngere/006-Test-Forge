export class UserLoginAndAccount {

    // Since the user registration and signin features have been tested within the first scenario named HomePageRakuten so i didn't repeat it here again and started testing the rest two test cases. 

    userAccount = '.chakra-link.css-wv5hp9';
    checkCBAmount = 'div[data-testid="confirmed-cb-amount"]';

    getUserAccount() {
        cy.visit('https://www.rakuten.com/account');
        cy.url().should('include', '/account');
    }

    checksCBAmount() {
        cy.get('div[data-testid="confirmed-cb-amount"]')
          .should('be.visible')
          .and('contain.text', '$');

        cy.contains('Next Payment:').should('exist');
        cy.contains('See activity').should('exist').click();
        cy.go('back'); // goes back to the main page of user account.

    }

    goToAccountSettings() {
        cy.contains('Account Settings').click();
    }

    updateEmailPreferences() {

        // To change email address

        cy.contains('Edit').eq(0).click();

        cy.get('.chakra-modal__header.css-1mx5tm1')
        .should('exist').should('be.visible');

        cy.get('input[placeholder="New email address"]')
        .should('exist').and('be.visible').type('veriz@gmail.com');

        cy.get('.recaptcha-checkbox-border').should('exist')
        .and('be.visible').check();

        cy.get('.chakra-button.css-1t86jil').click();

        cy.get('.css-2paswx').should('exist').should('be.visible');  
        cy.get('input[placeholder="6-Digit Code"]').type('123456');
        cy.get('.chakra-button.css-dvrey').click();

    }

    updatePassword() {

        // To change password

        cy.contains('Edit').eq(1).click();
        cy.get('.chakra-modal__header.css-1mx5tm1').should('exist').should('be.visible');

        cy.get('#existingPassword').type('mehmedsec');
        cy.get('#password').type('muradsec');

        cy.get('.recaptcha-checkbox-border').check();
        cy.get('.chakra-button.css-dvrey').click();

        cy.get('.css-2paswx').should('exist').should('be.visible');  
        cy.get('input[placeholder="6-Digit Code"]').type('123456');
        cy.get('.chakra-button.css-dvrey').click();

    }

    goToSavedStores() {
        cy.contains('Favorite Stores').click();
    }

    validateSavedStores() {
        cy.contains('Favorite Stores').should('exist');
    }

}