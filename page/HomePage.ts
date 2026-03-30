import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locator.json';


export class HomePage extends BasePage {
    private locators = locators.HomePage;
    constructor(page: Page) {
        super(page);
    }

    async navigatetoHomePage() {
        await this.navigateTo('/');
    }

    async findNewCar(){
        await this.hover(this.locators.newCars);
        await this.click(this.locators.findNewCars);
        await this.waitForTimeout(2000);
    }
}