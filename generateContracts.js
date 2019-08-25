const puppeteer = require('puppeteer')
const { 'iPhone 6': deviceModel } = require('puppeteer/DeviceDescriptors')

async function generateContracts(storePath, links, callback) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.emulate(deviceModel)
  let startServer = new Date()
  console.log('开始截图服务')
  for (let i = 0, j = links.length; i < j; i++) {
    let startTime = new Date()
    let contractPath = storePath + `/${links[i].substr(22, 18)}.png`
    await page.goto(links[i])
    await page.screenshot({
      path: contractPath, 
      clip: {
        x: 0,
        y: 0,
        width: 375,
        height: 600,
      }
    })
    let endTime = new Date()
    console.log(`已完成${i+1}个图片，本次耗时${endTime-startTime}ms， 累计耗时${(endTime-startServer)/1000}s`)
  }
  browser.close()
  callback()
}

module.exports = generateContracts