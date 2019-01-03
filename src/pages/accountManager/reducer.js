
const initState = {
   roleList:[],
   accountList:[]
}
const ACCOUNTLIST_SUCCESS = 'ACCOUNTLIST_SUCCESS';
const ROLELIST_SUCCESS = 'ROLELIST_SUCCESS';

export default (state=initState, action) => {
    switch (action.type) {
    case ACCOUNTLIST_SUCCESS:
        return {
            ...state,
            accountList: action.payload.list
        };
    case ROLELIST_SUCCESS:
        return {
            ...state,
            roleList: action.payload.list
        };
    default:
        return state;
    }
};