publicPath: '/public'

{
  "presets": [
    ["es2015",{"loose":true}],
    "react"
  ]
}
sudo npm i babel-preset-es2015 babel-preset-es2015-loose babel-preset-react --save-dev

sudo npm i html-webpack-plugin --save-dev  生成html页面并将output的文件注入进该页面


app.use('/public',express.static(path.join(__dirname,'../dist')))

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    }
  }
}


historyApiFallback: {
      index: '/public/index.html'
    }


.editorconfig

sudo npm i husky -D
