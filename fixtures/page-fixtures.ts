import { Page } from "@playwright/test";
import { NewCarsPage } from '../page/NewCarsPage';
import { HomePage } from '../page/HomePage';
import { BMWPage } from "../page/BMWPage";  
import { HondaPage } from "../page/HondaPage";
import { ToyotaPage } from "../page/ToyotaPage";
import { HyundaiPage } from "../page/HyundaiPage";
import { CarBase } from "../page/CarBase";

export class PageFixtures {
    readonly homePage: HomePage;
    readonly newCarsPage: NewCarsPage;
    readonly bmwPage: BMWPage;
    readonly hondaPage: HondaPage;
    readonly toyotaPage: ToyotaPage;
    readonly hyundaiPage: HyundaiPage;  
    readonly page: Page;
    readonly carBase: CarBase;

    constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.newCarsPage = new NewCarsPage(page);
        this.bmwPage = new BMWPage(page);
        this.hondaPage = new HondaPage(page);
        this.toyotaPage = new ToyotaPage(page);
        this.hyundaiPage = new HyundaiPage(page);  
        this.page = page;
        this.carBase = new CarBase(page);
    }

    get basePage(): Page {
        return this.page;
    }
}    