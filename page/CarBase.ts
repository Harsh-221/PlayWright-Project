import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locator.json';

export class CarBase extends BasePage {
    private locators = locators.CarBase;
    constructor(page: Page) {
        super(page);
    }

    async getCarTitle(): Promise<string> {
        return await this.getText(this.locators.carTitle);
    } 

    async getCarPriceAndName(){
        const carPrice =  this.page.locator(this.locators.carPrice);
        const carName = this.page.locator(this.locators.carName);
        const carCount = await carPrice.count();

        if (carCount === 0) {
            throw new Error('No car elements found on the page.');
        }

        const cars: {name: string, price: string}[] = [];
        for (let i = 0; i < carCount; i++) {
            const price = await carPrice.nth(i).innerText();
            const name = await carName.nth(i).innerText();
            console.log(`Car Name: ${name}, Car Price: ${price}`);
            cars.push({name : name, price: price});
        }
        return cars;
    }
}    