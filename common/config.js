let url_config = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'http://127.0.0.1:7001'
}else{
    // 生产环境
    url_config = 'http://127.0.0.1:7001'
}

export default url_config