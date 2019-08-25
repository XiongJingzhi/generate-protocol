const fs = require('fs')
const path = require('path')

const imagesPath = path.join(__dirname, '../html/images')
const contractsPath = path.join(__dirname, '../contract')
const okContract = path.join(__dirname, '../ok-contract')

function saveOkContract(contractPath, name, data) {
  const savePath = path.join(contractPath, `./${name}`)
  fs.writeFileSync(savePath, data)
}

function filterContract() {
  const avatars = fs.readdirSync(imagesPath)
  const contracts = fs.readdirSync(contractsPath)
  avatars.pop()
  avatars.pop()
  contracts.forEach(item => {
    const a = item.substr(0, 18) + '.jpg'
    if (avatars.includes(a)) {
      const oldPath = path.join(contractsPath, item)
      const data = fs.readFileSync(oldPath)
      saveOkContract(okContract, item, data)
    }
  })
}

filterContract()