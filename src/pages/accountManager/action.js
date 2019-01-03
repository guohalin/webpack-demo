import { getAccountList, getRoleList } from '../../service/accountManager';
             
export const getAccountListData = (params,fn) => async (dispatch) => {
    const result = await getAccountList(params);
    if (result.code===0&&result.data.list) {
        dispatch({
            type: 'ACCOUNTLIST_SUCCESS',
            payload: result.data
        });
    }
};

export const getRoleListData = ( params ) => async (dispatch) => {
    const result = await getRoleList(params);
    if (result.code===0&&result.data.list) {
        dispatch({
            type: 'ROLELIST_SUCCESS',
            payload: result.data
        });
    }
}