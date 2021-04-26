import React from 'react'

const Login = () => {

return(
    <form>
    <div className='container' >
        <h1>Welcome</h1>
        <p className='login'>Login or <span><a href=''>Create an account</a></span></p>
        <label>
          {/* Username */}
          <input
            name='username'
            type='text'
            // value={}
            // onChange={}
            placeholder='Username'
          />
        </label>
        <br/>
        <label>
          {/* Password */}
          <input
            name='password'
            type='password'
            // value={}
            // onChange={}
            placeholder='Password'
          />
        </label>
        <br/>
        <label>
          {/* Phone Number */}
          <input
            name='phone'
            type='text'
            // value={}
            // onChange={}
            placeholder='(123)456-7890'
          />
        </label>
        <br/>
        <div className='submit'>
        <button>Login</button>
        </div>
        </div>
    </form>
    )
}

export default Login