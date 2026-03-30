import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locator.json';

export class NewCarsPage extends BasePage {
    private locators = locators.NewCarsPage;

    constructor(page: Page) {
        super(page);
    }

    async getHeaderText(): Promise<string> {
        return await this.getText(this.locators.newCarsHeading);
    }

    async gotoBMWCar() {
        await this.click(this.locators.bmwCar);
        await this.waitForTimeout(2000);
    }

    async gotoToyotaCar() {
        await this.click(this.locators.toyotaCar);
        await this.waitForTimeout(2000);
    }

    async gotoHondaCar() {
        await this.click(this.locators.hondaCar);
        await this.waitForTimeout(2000);
    }

    async gotoHyundaiCar() {
        await this.click(this.locators.hyundaiCar);
        await this.waitForTimeout(2000);
    }

}