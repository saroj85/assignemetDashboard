
/**
 * 
 * @param {*} dispatch 
 * @param {*} type 
 * @param {*} data 
 * @param {*} error 
 * @param {*} message 
 * @param {*} recordsCount 
 */

export const dispatchAction = (dispatch, type, data, error, message, recordsCount) => {
    dispatch({
        type,
        message,
        data,
        error,
        recordsCount
    });
};


export const generate_unique_key = prefix => {
    if (prefix) {
        return prefix + '_' + (new Date().getTime()).toString(36) + (new Date().getTime() + Math.floor(Math.random() * 100000)).toString(36);
    }
    else {
        return (new Date().getTime()).toString(36) + (new Date().getTime() + Math.floor(Math.random() * 100000)).toString(36);
    }
};