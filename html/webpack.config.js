module.exports = {
  mode: 'development',
  // バンドルする起点となるJavaScriptへのパス
  entry : './public/app.js',
  output: {
    // バンドルして書き出すファイル名の設定
    filename: 'bundle.js'
  }
};
