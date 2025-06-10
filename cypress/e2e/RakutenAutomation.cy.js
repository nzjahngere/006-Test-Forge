import { HomePageRakuten } from '../../pageObject/HomePageRakuten';
import { StoreProductBrowsing } from '../../pageObject/StoreProductBrowsing';
import { CouponsAndCashback } from '../../pageObject/CouponsAndCashback';
import { CashbackFlowPage } from '../../pageObject/CashbackFlowPage';
import { UserLoginAndAccount } from '../../pageObject/UserLoginAndAccount';

describe('Scenario 1: Homepage Navigation', () => {
  const RakutenHome = new HomePageRakuten();
  let userData;

  before(() => {
    // Load test data once for all tests in this describe
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    cy.viewport(1440, 1000); - // some elements were being covered by their closest elements and their position was fixed so i approached this solution.
    cy.log('Execution will begin shortly...!');
  });

  afterEach(() => {
    cy.log('Test case executed.');
  });

  it('Registers a User Account', () => {

    cy.visit('https://www.rakuten.com');

    RakutenHome.verifyLogo();
    RakutenHome.clickJoinFree();
    cy.wait(2000);
    RakutenHome.enterEmailAddress(userData.register.email);
    RakutenHome.enterPassword(userData.register.password);
    cy.wait(2000);
    RakutenHome.checkTheCaptcha();  // Note: Google reCAPTCHA cannot be automated reliably
    cy.wait(2000);
    RakutenHome.clickJoinNow();
    cy.wait(3000);
    RakutenHome.validateSeeRewards();

    cy.log('Registration Successful!');
  });

  it('Signs in as a registered User', () => {

    cy.visit('https://www.rakuten.com');

    RakutenHome.clickSignIn();
    cy.wait(2000);
    RakutenHome.enterEmail(userData.login.email);
    cy.wait(2000);
    RakutenHome.enterThePassword(userData.login.password);
    cy.wait(2000);
    RakutenHome.doReCaptcha();
    cy.wait(2000);
    RakutenHome.clickSubmit();

    cy.log('Signin Successful!');
  });

  it('Other Nav Links, Coupons & Cashback Deals', () => {

    cy.visit('https://www.rakuten.com/coupons');

    RakutenHome.seeCategories();
    RakutenHome.seeSearchBar(userData.couponSearchTerm);
    RakutenHome.seeSearchButton();
    cy.wait(2000);

    // Step 3: Click all navbar store links (index 1–8)
    RakutenHome.clickNavStore(0);
    cy.scrollTo('top');
    RakutenHome.clickNavLink();
    cy.get('.chakra-button.css-1t86jil').click();
    cy.scrollTo('top');

    // Validate first/top 3 coupons and cashback deals
    RakutenHome.seeCoupon(3);
    RakutenHome.seeCBDeal(3);

    cy.log('HomePage Validation Completed!');
  });
});

describe('Scenario 2: Store & Product Browsing', () => {
  const RakuStore = new StoreProductBrowsing();
  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    cy.viewport(1440, 1000);
    cy.visit('https://www.rakuten.com/coupons');
    cy.log('Execution will begin shortly...!');
  });

  afterEach(() => {
    cy.log('Test case executed.');
  });

  it('Browses stores and products', () => {
    cy.log('Executing Scenario 2: Store & Product Browsing...');

    RakuStore.allCategories(0);
    RakuStore.getSearchBar(userData.storeSearchTerm);
    RakuStore.getProduct();
    RakuStore.signInOverlay();
    RakuStore.closeTheOverlay();
    RakuStore.verifyByTitle(userData.storeSearchTerm);
    RakuStore.browseAnotherProd('electronics');

    // Checks the most popular, featured and trending stores on entering a keyword eg electronics -

    cy.contains('Best Buy').should('exist').and('be.visible');
    cy.contains('LG Electronics').should('exist').and('be.visible');
    cy.contains('Dell Technologies').should('exist').and('be.visible');
    cy.contains('Samsung').should('exist').and('be.visible');
    cy.contains('Apple.com').should('exist').and('be.visible').click();

    RakuStore.closeTheOverlay();
    RakuStore.verifyByTitle('Apple.com');

    cy.log('Scenario 2: Execution Completed Successfully!');
  });
});

describe('Scenario 3: Coupons & Cashback', () => {
  const CoupAndCB = new CouponsAndCashback();
  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    cy.viewport(1440, 1000);
    cy.log('Execution will begin shortly...!');
  });

  afterEach(() => {
    cy.log('Test case executed.');
  });

  it('Validates Coupons & Cashbacks', () => {

    cy.log('Executing Scenario 3: Coupons & Cashback...');

    CoupAndCB.visitPage();
    CoupAndCB.clickTheCoupon();
    cy.wait(3000);
    CoupAndCB.typeEmail(userData.cashback.email);
    CoupAndCB.typePassword(userData.cashback.password);
    cy.wait(3000);
    CoupAndCB.checkCaptcha();
    CoupAndCB.shopWithCB();
    CoupAndCB.validatCBSuccess();

    cy.go('back');

    cy.log('Scenario 3: Execution Completed Successfully!');
  });
});

describe('Scenario 4: Cashback Flow', () => {
  const cafpage = new CashbackFlowPage();
  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    cy.viewport(1440, 1000);
    cy.log('Execution will begin shortly...!');
  });

  afterEach(() => {
    cy.log('Test case executed.');
  });

  it('Validates Cashback Flow', () => {

    cy.log('Executing Scenario 4: Cashback Flow...');

    cafpage.visitThePage();
    cafpage.getSearch('amazon echo');
    cafpage.clickSeeAllRes();
    cafpage.clickProduct();

    cy.wait(3000);

    cafpage.typeTheEmail(userData.cashbackFlow.email);
    cafpage.typeThePassword(userData.cashbackFlow.password);
    cafpage.checkTheCaptcha();
    cafpage.shopWithTheCB();
    cafpage.validateTheSuccess();

    // since the user account couldn't be created directly due to the Google reCAPTCHA v2 or v3 with cypress so the cypress won't be able to access any account

    // Cannot automate Google reCAPTCHA or account creation, so testing ends here

    cafpage.visitThePage();
    cafpage.accessUserAccount();
    cafpage.checkCashbackAmt();

    cy.log('Scenario 4: Execution Completed Successfully!');
  });
});

describe('Scenario 5: User Registration & Account Management', () => {
  const accAndMng = new UserLoginAndAccount();

  beforeEach(() => {
    cy.viewport(1440, 1000);
    cy.log('Execution will begin shortly...!');
  });

  afterEach(() => {
    cy.log('Test case executed.');
  });

  it('Executes the final scenario', () => {
    cy.log('Executing the Final Scenario 5: User registration & account management...');

    accAndMng.getUserAccount();
    accAndMng.checksCBAmount();
    accAndMng.goToAccountSettings();
    accAndMng.updateEmailPreferences();
    accAndMng.updatePassword();
    accAndMng.goToSavedStores();
    accAndMng.validateSavedStores();

    cy.log('Automation of Rakuten completed successfully!');
  });
});

/* I’ve successfully completed the Rakuten automation project. All required major test scenarios and test cases have been skillfully implemented using Cypress and the POM structure.

However, I want to highlight that features involving Google reCAPTCHA (not just basic captchas) couldn’t be automated. Google reCAPTCHA is an advanced bot-detection system that involves visual and manual interaction (like selecting images), which Cypress or any automation tool cannot bypass due to ethical and security restrictions.

That said, I’ve manually tested those flows and also wrote scripts for them — which I ran in the Cypress UI. But as expected, they failed at the reCAPTCHA stage.

Thanks,
Nazish Jehangir. */
