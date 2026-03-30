import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locator.json';


export class ToyotaPage extends BasePage {
    //private locators = locators.NewCarsPage;
    constructor(page: Page) {
        super(page);
    }
}    