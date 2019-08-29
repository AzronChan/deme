// 一些全局的配置，比如 HTML 文件的路径、publicPath 等
module.exports = {
    HTMLDirs: ['index'],
    cssPublicPath: '../',
    imgOutputPath: 'img/',
    cssOutputPath: './css/[name].[md5:contenthash:hex:8].css',
    assetOutputPath: 'asset/',
    devServerOutputPath: './dist',
    pcSprite: ['src/images/icon_*.png', 'src/images/bg_*.png'], // PC端雪碧图命名
    h5Sprite: ['src/images/*.png'], // H5端雪碧图命名
};
