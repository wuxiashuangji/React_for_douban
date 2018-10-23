## 项目简介

  本项目为学习react做的一个demo,支持es6,es7转化为es5,axios,yapi假数据等


## 技术栈简介

使用的技术栈为react全家桶 + antd-ui + axios + webpack 等,更多信息请参考 [使用文档](https://ant.design/docs/react/introduce-cn)

## 开发

```bash
# 克隆项目
git clone git@github.com:wuxiashuangji/React_for_douban.git

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:3300

## 发布

```bash
# 构建测试环境
npm run build:sit

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# --report to build with bundle size analytics
npm run build:prod

# --generate a bundle size analytics. default: bundle-report.html
npm run build:prod --generate_report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix
```


## License

[MIT](https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE)

Copyright (c) 2017-present zorl
