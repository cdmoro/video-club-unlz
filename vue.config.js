module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.plugin('html').tap(args => {
        args[0].title = 'PELISPLUS - Ver películas y series online gratis y en HD';
        return args;
    });
  }
}
