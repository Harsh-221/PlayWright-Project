// import { test, expect } from '@playwright/test';
// import { NewCarsPage } from '../page/NewCarsPage';
// import { HomePage } from '../page/HomePage';

import {test, expect} from '../utils/test-base';

test.describe('Find New Car Tests', () => {
    // let homePage: HomePage;
    // let newCarsPage: NewCarsPage;
    test.beforeEach(async ({ pages }) => {
        // homePage = new HomePage(page);
        // newCarsPage = new NewCarsPage(page);
        await pages.homePage.navigatetoHomePage();
    });

    test('should navigate to the find new cars page', async ({ pages }) => {
        await pages.homePage.findNewCar();
        await expect(pages.page).toHaveURL(/.*new-cars/);
        console.log(await pages.newCarsPage.getHeaderText());
        expect(await pages.newCarsPage.getHeaderText()).toContain('New Cars');

        await pages.newCarsPage.gotoBMWCar();
        await expect(pages.page).toHaveURL(/.*bmw-cars/);
    });


});