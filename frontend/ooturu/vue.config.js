module.exports = {
  transpileDependencies: ["vuetify"],
  //ここで指定した場所で展開する
  outputDir: "../../backend",
  //サーバーを起動した時のルートパス
  publicPath: "/",
  //outputDir起点でindex.htmlを格納する場所を指定
  indexPath: "api/templates/index.html",
  //outputDir起点でstaticファイルを格納する場所を指定
  assetsDir: "static",
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "http://vocalotomo.herokuapp.com",
  },
};
