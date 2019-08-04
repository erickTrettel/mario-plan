export const createProject = (project) => {
    return (dispatch, state) => {
        // make async call to database
        dispatch({ type: 'CREATE_PROJECT', project});
    }
};