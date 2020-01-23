const initialState={
    
}
export default function user(state=initialState,action)
{
    switch(action.type)
    {
        case "UPDATE_USER":
            return action.payload;

        default:return state
    }
    

}