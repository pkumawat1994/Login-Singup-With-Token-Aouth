import { POST_LOGIN } from "../actions/types";

const initial={
    LoginUserObj:[];
}
const LoginReducer=(state=initial,action)=>{
 console.log(action);
 switch(action.type){
    case POST_LOGIN:
        return{
            ...state,
            LoginUserObj:state.LoginUserObj.concat(action.payload)
            
        }
        default:return
        state
 }
}
export default LoginReducer;