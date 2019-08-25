## excel批量生成图片

### 原理

1. 导入excel, 清洗数据
2. 通过模板替换生成html, 并搭建express服务
3. 通过puppeteer实现截图

### 目录约定

- config/index.js

### 优化

- 程序中断后, 增量生成图片