const path = require('path')
const fs = require('fs')

function getHTML(item, template) {
  let html = template
  Object.keys(item).forEach(j => {
    const templateRep = '$' + j.toUpperCase()
    html = html.replace(templateRep, item[j])
  })
  return html
}

function saveHTML(htmlPath, name, data) {
  const savePath = path.join(htmlPath, `./${name}.html`)
  fs.writeFileSync(savePath, data)
}

function generateHTMLs(htmlPath, data, template) {
  data.forEach((item, index) => {
    const html = getHTML(item, template)
    const name = item.idcardNumber.trim()
    saveHTML(htmlPath, name, html)
  })
}

function getTargets(htmlPath, port) {
  let tagets = fs.readdirSync(htmlPath)
  tagets.pop()
  tagets.pop()
  tagets = tagets.map(item => {
    item = `http://localhost:${port}/${item}`
    return item
  })
  return tagets
}

module.exports = {
  generateHTMLs: generateHTMLs,
  getTargets: getTargets
}
