const XLSX = require('xlsx')
const { NAME, IDTYPE, IDCARDNUMBER, COMPANY, CERTIFICATETYPE, CERTIFICATENUMBER, BUSINESSSCOPE, BUSINESSAREA, WEBSITE, PHONE, COMPLAINTPHONE } = require('./config/field')

function formatDate(numb = null, format = '-') {
  let time = ''
  if (!numb) {
    time = new Date((numb - 1) * 24 * 3600000 + 1)
    time.setYear(time.getFullYear() - 70)
  } else {
    time = new Date()
  }
  const year = time.getFullYear() + ''
  let month = time.getMonth() + 1 + ''
  month = month < 10 ? '0' + month : month
  let date = time.getDate() + ''
  date = date < 10 ? '0' + date : date

  return year + format + month + format + date
}

function importData(excelPath) {
  const workbook = XLSX.readFile(excelPath)
  const sheetNames = workbook.SheetNames
  const worksheet = workbook.Sheets[sheetNames[0]]
  const jsonData = XLSX.utils.sheet_to_json(worksheet)
  return jsonData
}

function getSex(id) {
  const sexNumber = Number(id.substr(-2, 1))
  return [0, 2, 4, 6, 8].includes(sexNumber) ? '女' : '男'
}

function tranData(data) {
  const res = []
  data.forEach(item => {
    const a = {
      avatar: `./images/${item[IDCARDNUMBER].trim()}.jpg`,
      name: item[NAME].trim(),
      sex: getSex(item[IDCARDNUMBER].trim()),
      idcardType: IDTYPE,
      idcardNumber: item[IDCARDNUMBER].trim(),
      certificateType: item[CERTIFICATETYPE].trim(),
      certificateNumber: item[CERTIFICATENUMBER].trim(),
      company: item[COMPANY].trim(),
      businessScope: BUSINESSSCOPE,
      businessArea: BUSINESSAREA,
      webSite: WEBSITE,
      queryPhone: PHONE,
      complaintPhone: COMPLAINTPHONE
    }
    res.push(a)
  })
  return res
}

module.exports = {
  importData: importData,
  tranData: tranData
}
