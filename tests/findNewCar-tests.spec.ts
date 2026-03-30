// import { test, expect } from '@playwright/test';
// import { NewCarsPage } from '../page/NewCarsPage';
// import { HomePage } from '../page/HomePage';

import {test, expect} from '../utils/test-base';
import { readCSVData } from '../utils/readCSV';

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

    const testData = readCSVData('data/testdata.csv');
    
    test('Parameterized Test : Find new cars', async ({ pages }) => {
        for (const data of testData as Array<{carBrand: string; carTitle: string}>) {
            console.log(`Testing for car brand: ${data.carBrand} and car title: ${data.carTitle}`);
            await pages.homePage.findNewCar();
            await expect(pages.page).toHaveURL(/.*new-cars/);
            console.log(await pages.newCarsPage.getHeaderText());
            expect(await pages.newCarsPage.getHeaderText()).toContain('New Cars');
            if (data.carBrand === 'bmw') {
                await pages.newCarsPage.gotoBMWCar();
                await expect(pages.page).toHaveURL(/.*bmw-cars/);
            }else if (data.carBrand === 'toyota') {
                await pages.newCarsPage.gotoToyotaCar();
                await expect(pages.page).toHaveURL(/.*toyota-cars/);
            }else if (data.carBrand === 'honda') {
                await pages.newCarsPage.gotoHondaCar();
                await expect(pages.page).toHaveURL(/.*honda-cars/);
            }else if (data.carBrand === 'hyundai') {
                await pages.newCarsPage.gotoHyundaiCar();
                await expect(pages.page).toHaveURL(/.*hyundai-cars/);
            }
        }
    });


});