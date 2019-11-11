const path = require('path')

const config = {
  htmlPath: './html',
  htmlImagePath: './html/images',
  images: './contract',
  excel: './excels/agents.xlsx',
  port: 4000
}

config.htmlPath = path.join(__dirname, '..', config.htmlPath)

module.exports = config
