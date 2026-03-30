import { test, expect } from '@playwright/test';
import { NewCarsPage } from '../page/NewCarsPage';
import { HomePage } from '../page/HomePage';

test.describe('Find New Car Tests', () => {
    let homePage: HomePage;
    let newCarsPage: NewCarsPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigatetoHomePage();
        newCarsPage = new NewCarsPage(page);
    });

    test('should navigate to the find new cars page', async ({ page }) => {
        await homePage.findNewCar();
        await expect(page).toHaveURL(/.*new-cars/);
        console.log(await newCarsPage.getHeaderText());
        expect(await newCarsPage.getHeaderText()).toContain('New Cars');

        await newCarsPage.gotoBMWCar();
        await expect(page).toHaveURL(/.*bmw-cars/);
    });


});