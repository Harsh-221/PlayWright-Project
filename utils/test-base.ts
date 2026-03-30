import { test as baseTest, Page, expect } from "@playwright/test";
import { PageFixtures } from "../fixtures/page-fixtures";

type Fixtures = {
    pages: PageFixtures;
}

export const test = baseTest.extend<Fixtures>({
    pages: async ({ page }, use) => {
        await use(new PageFixtures(page));
    }
});

export { expect };