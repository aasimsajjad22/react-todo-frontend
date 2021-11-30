import puppeteer from "puppeteer";

const appUrlBase = 'http://localhost:3000';

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({})
  page = await browser.newPage()
})

describe('Todolist app test', () => {
  test('It should display Todo App heading in h1 tag ', async () => {
    await page.goto(`${appUrlBase}/`)
    await page.waitForSelector('h1')
    const result = await page.evaluate(() => {
      return document.querySelector('h1').innerText
    })
    expect(result).toEqual('Todo App')
  })
})

describe('Should be able add buy some milk in todolist', () => {
  test('It allow me to write text in textbox', async () => {
    const todoText = 'buy some milk';
    await page.goto(`${appUrlBase}/`)
    await page.waitForSelector('h1')
    await page.click('#form-input__todotext');
    await page.type('#form-input__todotext', todoText);
    
    const text = await page.$eval("#form-input__todotext", (input) => {
      return input.getAttribute("value")
    });
    expect(text).toEqual(todoText)  })
})

afterAll(() => browser.close());