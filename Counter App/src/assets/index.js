import { useState } from 'react';
function index(){
    const [count , usecount ]= useState(0);


    const incrementNum = ()=>{
        usecount(count+1);
    }
    const decrementNum = ( ) =>{
        count === 0 ? usecount(0) : usecount(count-1);
    };

    return(
        <>
            <div>{count}</div> <br/>
            <div>
            <button onClick={incrementNum}> incrementNum</button>
            <button onClick={decrementNum}>incrementNum</button>
            </div>
            </>
    );
}
export default index;