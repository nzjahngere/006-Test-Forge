export class StoreProductBrowsing {
    clickAllCategories = '.css-cf3le8';
    searchBar = '#term'; 
    // getSearchButton = '.chakra-button.css-1nbglha';

    //Rakuten wensite doesn't have an explicit filterring feature (for stores like amazon, apple or samsung but provides only for products) and it implicitly shows filtered search suggestions automatically showing stores related to user search and it is called implicit filtering. That's why i used this approach.
    getFirstFromSuggestions = '.chakra-link.search-link.css-13dvr6w'; //type index 0
    productSignInOverlay = '.chakra-modal__content.css-5v7fwa';
    closeOverlay = '.chakra-modal__close-btn.css-9mh91m';
    productTitle = '.css-q3y4w6';

    searchBarAgain = '#term';

    //to check featured/trending stores again get search feature -
    allCategories(index) {
        return cy.get(this.clickAllCategories).eq(index)
        .should('exist').and('be.visible').click({force: true})
    }

    getSearchBar(searchStoreOrProduct) {
        return cy.get(this.searchBar).should('exist')
        .and('be.visible').type(searchStoreOrProduct);
    }

    getProduct() {
        return cy.get(this.getFirstFromSuggestions).first()
        .should('be.visible').and('have.text', 'Lenovo2.0% Online').click();
    }

    signInOverlay() {
        return cy.get(this.productSignInOverlay)
        .should('exist').and('be.visible');
    }

    closeTheOverlay() {
        return cy.get(this.closeOverlay).should('exist')
        .and('be.visible').click();
    }

    verifyByTitle(titleText) {
        return cy.get(this.productTitle).should('exist')
        .and('be.visible').and('have.text', titleText);
    }

    browseAnotherProd(browseProduct) {
        return cy.get(this.searchBarAgain).should('exist')
        .and('be.visible').type(browseProduct);
    }
}

// pageObject/StoreProductBrowsing.js

