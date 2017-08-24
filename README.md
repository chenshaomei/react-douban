# react-douban 仿豆瓣电影app项目

> A React.js project
> 一个基于React.js仿豆瓣电影项目，使用react-router、webpack、redux等技术， 数据来源 https://api.douban.com/

## 目录
#### &sect; [技术栈](#features)
#### &sect; [安装启动](#getting-started)
#### &sect; [目录结构](#architecture)
#### &sect; [项目示例图](#projectimg)

****

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* React 15.6.1
* Redux
* React Router
* Ajax 请求库（isomorphic-fetch）
* Webpack
* ES6 + Babel

***

## <a name="getting-started">&sect; 快速开始</a>

``` bash
# install dependencies 初始化依赖
npm install

# serve with hot reload at localhost:8092 启动
npm run dev

# build for production with minification 打包
npm run build

# run all tests
npm test
```

***

## <a name="architecture">&sect; 目录结构</a>
```
.
├─ build/            # 放置打包后的文件
├─ app/              # 源码目录（开发都在这里进行）
│   ├─ components/   # 组件（COMPONENT）
│   ├─ actions/      # （ACTION）
│   ├─ reducers/     # （REDUCER）
│   ├─ stores/       # （STORE）
│   ├── images/      # 图片
│   ├── css/         # css
│   ├── libs/        # 工具库
│   ├── pages/       # 路由视图基页
│   ├── App.js       # 根组件
│   ├── main.js      # 启动文件
│   ├── router.js    # 路由（ROUTE）
│   ├── index.html   # 静态基页
├── .babelrc         # Babel 转码配置
├── .eslintignore    # （配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc        # ESLint 配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json     #
├── webpack.config.js  # （Webpack 配置
```

***

## <a name="projectimg">&sect; 项目示例图</a>
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/1.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/2.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/3.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/4.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/5.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/6.png)
