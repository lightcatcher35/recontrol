export function userUpdate(user)
{
    console.log(user);

    return dispatch=>
    {
        dispatch({
            type:"UPDATE_USER",
            payload:user
        })
        
    }
}
