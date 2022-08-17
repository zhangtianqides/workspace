const CracoLessPlugin = require('craco-less')
const path = require('path')


module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1890ff' },
                        javascriptEnabled: true
                    },
                },
            },
        },
    ],

    // 配置webpack
    webpack: {
        // 配置别名
        alias: {
            // 表示用@表示当前src文件所在的路径
            '@': path.resolve(__dirname, 'src')
        }
    }
};