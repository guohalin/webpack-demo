
export default async function request(url, options) {
    return requestDataProcess(url, options);
}
async function requestDataProcess(url, options) {
    if (/post/i.test(options.method)) {
        let {
            data
        } = options;
        let body = null;
        if (typeof data === 'string') {
            body = data;
        } else {
            body = JSON.stringify(data);
        }
        options.body = body;
        delete options.data;
    }
    let headers = {};
    headers['Content-Type'] = 'application/json';
    options.credentials = 'include';
    options.headers = headers;
    const result = await fetch(url, options).then(res => res.json());
    // const result = await fetch(url, options).then((res) => {
    //     switch (res.headers.get('Content-Type').split(";")[0]) {
    //     case 'application/json':
    //         return res.json();
    //     default:
    //         return { code: 99999, msg: '网络异常' };
    //     }
    // });
    return result;
}
