const template = require('./template')
const config = require('./config')

const app = require('./startExpress')
const importData = require('./dataHandler').importData
const tranData = require('./dataHandler').tranData
const generateHTMLs = require('./generateHTMLs').generateHTMLs
const getTargets = require('./generateHTMLs').getTargets
const generateContracts = require('./generateContracts')

function getData(importData, tranData, path) {
  const data = importData(path)
  return tranData(data)
}

function main() {
  // 1、获取数据
  console.time('耗时')
  const data = getData(importData, tranData, config.excel)
  generateHTMLs(config.htmlPath, data, template)
  const links = getTargets(config.htmlPath, config.port)
  // 2、开启express服务
  const server = app.listen(config.port, () => {
    console.log(`开启服务在端口 ${config.port}`)
  })
  // 3、批量截图
  generateContracts(config.images, links, () => {
    console.log('完成服务')
    console.timeEnd('耗时')
    server.close()
  })
}

main()
