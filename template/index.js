const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/index.css">
</head>

<body>
  <header>
    <div class="center">
      保险销售从业人员执业信息
    </div>
    <div class="header-main">
      <div class="left">
        <div class="image-container">
          <img src="$AVATAR" class="image">
        </div>
      </div>
      <div class="right">
        <div class="item">
          <div class="title">持&ensp;证&ensp;人：</div>
          <div class="value">$NAME</div>
        </div>
        <div class="item">
          <div class="title">性&emsp;&emsp;别：</div>
          <div class="value">$SEX</div>
        </div>
        <div class="item">
          <div class="title">证件类型：</div>
          <div class="value">$IDCARDTYPE</div>
        </div>
        <div class="item">
          <div class="title">证件号码：</div>
          <div class="value">$IDCARDNUMBER</div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="item">
      <div class="title">证书类型：</div>
      <div class="value">$CERTIFICATETYPE</div>
    </div>
    <div class="item">
      <div class="title">证书编号：</div>
      <div class="value">$CERTIFICATENUMBER</div>
    </div>
    <div class="item">
      <div class="title">所属公司：</div>
      <div class="value">$COMPANY</div>
    </div>
    <div class="item">
      <div class="title">业务范围：</div>
      <div class="value">$BUSINESSSCOPE</div>
    </div>
    <div class="item">
      <div class="title">执业区域：</div>
      <div class="value">$BUSINESSAREA</div>
    </div>
    <div class="item">
      <div class="title">查询网址：</div>
      <div class="value">$WEBSITE</div>
    </div>
    <div class="item">
      <div class="title">查询电话：</div>
      <div class="value">$QUERYPHONE</div>
    </div>
    <div class="item">
      <div class="title">投诉电话：</div>
      <div class="value">$COMPLAINTPHONE</div>
    </div>
    <img src="./images/logo.png" class="logo">
  </main>
</body>

</html>
`
module.exports = html