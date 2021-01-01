import { React } from "react";
import {Redirect, Route} from 'react-router-dom';
/**
 *  
 */

const Protected =({component: Cmp,...rest})=>{
    return(
<Route
{...rest}
render = {(props)=>
  
    {
        // console.log(localStorage.getItem('name'))
    if (localStorage.getItem('name')){
             return <Cmp{...props}/>
    }
    // else if(localStorage.getItem('name')){
    //          return <Redirect to ='Dashboard' />
    // }
    else{
        return <Redirect to ='/' />

    }
}
}    


/>
    )
}
export default Protected