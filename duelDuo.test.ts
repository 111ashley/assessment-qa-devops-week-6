
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})
describe('duel duo tests', () => {
test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Wins show up every time page reloads', async () => {
    const stats = await driver.findElement(By.id('wins'))
    const displayed = await stats.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bots show up when draw button is clicked', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    const bots = await driver.findElement(By.id("choices"))
    const displayed = await bots.isDisplayed()
    expect(displayed).toBe(true)

})

test('Bot is added to new div once add to duo is clicked', async () =>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    await driver.findElement(By.xpath(`/html/body/section[1]/div/div[2]/button`)).click()
    const botRelocated = await driver.findElement(By.id('player-duo'))
    const displayed = await botRelocated.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})
})

// //ran this test when I fixed the 'see all bots' bug
// test('All bots are shown when all bots button is clicked', async () => {
//     await driver.findElement(By.id('see-all')).click()
//     await driver.sleep(3000)
//     const all = await driver.findElement(By.id("all-bots"))
//     const displayed2 = all.isDisplayed()
//     expect(displayed2).toBeTruthy()
// })


