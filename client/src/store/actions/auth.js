import AuthService from '../../services/authService';
import { toast } from "react-toastify";

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';


export const login = (params,history) => dispatch =>{
    return AuthService.login(params).then(data=> {
        dispatch({type:LOGIN,payload:data});
        history.push('/home')
        dispatch({
            type: SUCCESS,
            payload: 'Welcome Back!'
        });
<<<<<<< HEAD
        toast.info('Welcome Back!',{
            position: "top-left",
            color: "orange",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
        })
    }).catch(err=>{
        dispatch({
            type: ERROR,
            payload: err.response.data.message
        });
        toast.error(err.response.data.message,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
=======
    //     // toast.info('Welcome Back!',{
    //     //     position: "top-left",
    //     //     color: "orange",
    //     //     autoClose: 3000,
    //     //     hideProgressBar: false,
    //     //     closeOnClick: true,
    //     //     pauseOnHover: true,
    //     //     draggable: true,
    //     //     progress: undefined,
            
    //     // })
    // }).catch(err=>{
    //     dispatch({
    //         type: ERROR,
    //         payload: err.response.data.message
    //     });
    //     // toast.error(err.response.data.message,{
    //     //     position: "top-right",
    //     //     autoClose: 3000,
    //     //     hideProgressBar: false,
    //     //     closeOnClick: true,
    //     //     pauseOnHover: true,
    //     //     draggable: true,
    //     //     progress: undefined,
    //     // })
>>>>>>> refs/remotes/origin/main
    })
}

export const register = (params,history) => dispatch =>{
    return AuthService.register(params).then(data=> {
        dispatch({type:REGISTER,payload:data});
        history.push('/home')
<<<<<<< HEAD
        dispatch({
            type: SUCCESS,
            payload: 'Thank You for Joining Us!'
        });
        toast.info('Thank You for Joining!',{
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
=======
        // dispatch({
        //     type: SUCCESS,
        //     payload: 'Thank You for Joining Us!'
        // });
        // toast.info('Thank You for Joining!',{
        //     position: "top-left",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // })
>>>>>>> refs/remotes/origin/main
    }).catch(err=>{
        dispatch({
            type: ERROR,
            payload: err.response.data.message
        });
<<<<<<< HEAD
        toast.error(err.response.data.message,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
=======
        // toast.error(err.response.data.message,{
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // })
>>>>>>> refs/remotes/origin/main
    })
}

export const logout = ()=> dispatch =>{
    AuthService.logout()
    dispatch({type: LOGOUT});
}
