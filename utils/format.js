const fs = require('fs')
const path = require('path')

const imagesPath = path.join(__dirname, '../html/images')

const images = fs.readdirSync(imagesPath)

images.forEach(item => {
  let oldPath = path.join(imagesPath, item)
  let newPath = path.join(imagesPath, item.substr(4, 18) + '.jpg')  
  fs.renameSync(oldPath, newPath)
})
