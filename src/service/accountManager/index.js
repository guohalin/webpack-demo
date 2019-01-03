import request from 'utils/request';

export const getAccountList = (params) => {
    return request('/api/account/getAccountList', {
        method: 'POST',
        data: params
    });
};

export const getRoleList = ( params ) => {
    return request('/api/account/getRoleList', {
        method: 'POST',
        data: params
    });
}