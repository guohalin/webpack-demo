const proxy = {
    'dev': {
        "/api": {
            "changeOrigin": true,
            "target": "https://weekly-dev.hsmob.com"
        }
    },
    // // 本地联调
    // 'weimob': {
    //     "/api/support": {
    //         "changeOrigin": true,
    //         "target": "http://172.19.28.9:8080",
    //         "pathRewrite": {
    //             "^/api": ''
    //         }
    //     }
    // },
    // 'online': {
    //     "/api": {
    //         "changeOrigin": true,
    //         "target": "https://weekly.hsmob.com"
    //     }
    // },
    "mock": {
        "/api": {
            "changeOrigin": true,
            "target": "https://www.easy-mock.com/mock/5c2db7b132924755e4c0dbdc"
        }
    }
};
module.exports = {
    proxy
};
