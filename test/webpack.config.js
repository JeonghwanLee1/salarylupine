const path = require('path');

module.exports = {
    name:'omok-setting',
    mode: 'development',//실서비스 : production
    devtool: 'eval',//빠르게
    resolve:{
        extensions:['.js','.jsx']
    },

    entry:{
        app:['./client'], //client.jsx, client.js, client.css 등등 다 넣음. resulve부분
    }, //입력

    module: {
        rules:[{
           test: /\.jsx?/,
           loader: 'babel-loader',
           options:{
               presets:['@babel/preset-env','@babel/preset-react'],
               plugins:['@babel/plugin-syntax-class-properties','@babel/plugin-proposal-class-properties'],

           },
        }],
    },//entry 파일을 넣어서 module 적용 후 output에 뺀다

    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js'
    }, //출력

};