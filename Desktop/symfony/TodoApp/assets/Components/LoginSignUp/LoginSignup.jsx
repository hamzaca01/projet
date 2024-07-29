import React, { useState } from 'react'
import './LoginSignup.css' 
import icon from '../Assets/ToDofy.png'

export const LoginSignup = () => {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");

    console.log("the username is",name)
    console.log("the password is",password)
 

    function submit(e) {
        e.preventDefault();
        
    }
    const[action,setAction]=useState("sign up");
  return (
    /* sign up container*/
    <div className="signup">
        {/*ToDfy header*/}
        <div className="header">
        <img className='icon' src={icon} alt="todoFy" />
        </div>
        {/*form container */}
        <div className="form">
            {/*form title*/}
            <div className="title">
               <span className="text"><h5><b>{action}</b></h5></span>
            </div>
            {/*form container*/}
            <form onSubmit={submit}>
            <div className="input">
                <div>
                    <div>
                        <label className='label' ><span className='label-text'>Username</span></label>
                    </div>
                    
                    <div>
                        <input type="text" placeholder='Username' className='input-box'  value={name} onChange={(e) =>setName(e.target.value)}  />
                    </div>
                    
                </div>
                <div>
                    <div>
                    <label className='label' ><span className='label-text'>Password</span></label>
                    </div>
                    <div>
                    <input type="text" placeholder='Password' className='input-box' value={password} onChange={(e) =>setPassword(e.target.value)}  />
                    </div>
                   
                </div>
                {action==="sign up"? <div>
                    <button type="submit" className={action==="sign in to Your Account"?"signup-butt ":"signup-butt"} onClick={()=>{setAction("sign up")}}>sign up</button>
                </div>:   <div>
                    <button type="submit" className={action==="sign up"?"signup-butt " : "signup-butt "} onClick={()=>{setAction("sign in")}}>Sign in</button>
                </div>}
                
                
                {action==="sign up"? <div>
                    <button type="button" className={action==="sign in to Your Account"? "signin-yourAccount " :"signin-yourAccount "} onClick={()=>{setAction("sign in")}}>Sign in to yout account</button>
                </div>:   <div>
                    <button type="button" className={action==="sign up"?"signin-yourAccount " : "signin-yourAccount "} onClick={()=>{setAction("sign up")}}>create account</button>
                </div>}
                
                
                
            </div>
            </form>
            
        </div>



    </div>
    
  )
}
