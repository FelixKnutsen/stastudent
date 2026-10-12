import { test, expect } from "@playwright/test";

const VIEWPORTS = [
  { name: "desktop-large", width: 1440, height: 1000 },
  { name: "desktop-standard", width: 1280, height: 800 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

const PAGES_TO_TEST = [
  { name: "home", path: "/" },
  { name: "home-en", path: "/en" },
  { name: "sta-styret", path: "/sta-styret" },
  { name: "studentparlamentet", path: "/studentparlamentet" },
  { name: "linjeforeninger", path: "/linjeforeninger" },
  { name: "studentaktiviteter", path: "/studentaktiviteter" },
  { name: "lokaler", path: "/lokaler" },
  { name: "dokumenter", path: "/dokumenter" },
  { name: "for-tillitsvalgte", path: "/for-tillitsvalgte" },
  { name: "rad-styrer-og-utvalg", path: "/rad-styrer-og-utvalg" },
  { name: "ledige-verv", path: "/ledige-verv" },
  { name: "irene-bredals-hederspris", path: "/irene-bredals-hederspris" },
  { name: "trygg-organisasjon", path: "/trygg-organisasjon" },
  { name: "personvernserklaering", path: "/personvernserklaering" },
  { name: "category-nyheter", path: "/category/nyheter" },
];

test.describe("Full Website Visual & Functional Tests", () => {
  for (const vp of VIEWPORTS) {
    test(`Verify pages on viewport: ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });

      for (const p of PAGES_TO_TEST) {
        const response = await page.goto(`http://localhost:3000${p.path}`, {
          waitUntil: "domcontentloaded",
        });
        expect(response?.status()).toBe(200);

        // Check header logo
        const logo = page.locator("header").getByText("STA");
        await expect(logo).toBeVisible();

        // Check footer
        const footer = page.locator("footer");
        await expect(footer).toBeVisible();
      }
    });
  }

  test("Desktop navigation dropdown interaction", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("http://localhost:3000/");

    // Hover Om Oss
    const omOssBtn = page.locator("header button").filter({ hasText: "Om Oss" });
    await expect(omOssBtn).toBeVisible();
    await omOssBtn.hover();

    // Check dropdown items appear
    const staStyretLink = page.locator("header a[href='/sta-styret']");
    await expect(staStyretLink).toBeVisible();
  });

  test("Mobile menu opens and navigates", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("http://localhost:3000/");

    // Open mobile menu
    const menuBtn = page.locator("header button[aria-label='Åpne meny']");
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();

    // Verify drawer opened
    await expect(page.getByText("Meny")).toBeVisible();
    await expect(page.locator("nav").getByRole("link", { name: "Dokumenter" })).toBeVisible();
  });

  test("Search modal opens and executes query", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("http://localhost:3000/");

    // Click search icon
    const searchBtn = page.locator("header button[aria-label='Åpne søk']");
    await searchBtn.click();

    // Modal should be visible
    const input = page.locator("input[type='search']");
    await expect(input).toBeVisible();
    await input.fill("styret");
    await page.keyboard.press("Enter");

    // Navigates to /sok
    await page.waitForURL("**/sok?q=styret");
    await expect(page.getByText("Resultater for «styret»")).toBeVisible();
  });

  test("Language switcher toggles between Norwegian and English", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("http://localhost:3000/sta-styret");

    // Click language switcher
    const switcher = page.locator("header button[aria-label='Bytt språk / Switch language']");
    await switcher.click();

    // Navigates to /en/sta-styret
    await page.waitForURL("**/en/sta-styret");
    await expect(page.getByRole("heading", { name: /The STA Board and Secretariat/i })).toBeVisible();
  });
});
