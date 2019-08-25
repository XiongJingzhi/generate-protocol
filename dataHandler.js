const XLSX = require('xlsx')

function formatDate(numb = null, format = '-') {
  let time = ''
  if (!numb) {
    time = new Date((numb - 1) * 24 * 3600000 + 1)
    time.setYear(time.getFullYear() - 70)
  } else {
    time = new Date()
  }
  let year = time.getFullYear() + ''
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
  let sexNumber = Number(id.substr(-2, 1))
  return [0, 2, 4, 6, 8].includes(sexNumber) ? '女' : '男'
}

function tranData(data) {
  let res = []
  data.forEach(item => {
    const a = {
      avatar: `./images/${item['身份证件号码'].trim()}.jpg` ,
      name: item['姓名'].trim(),
      sex: getSex(item['身份证件号码'].trim()),
      idcardType: '身份证',
      idcardNumber: item['身份证件号码'].trim(),
      certificateType: item['执业证类型'].trim(),
      certificateNumber: item['执业证编号'].trim(),
      company: item['所属公司'].trim(),
      businessScope: '代理销售保险产品',
      businessArea: '湖北省',
      webSite: 'http://iir.circ.gov.cn/',
      queryPhone: '--',
      complaintPhone: '--'
    }
    res.push(a)
  })
  return res
}

module.exports = {
  importData: importData,
  tranData: tranData
}
