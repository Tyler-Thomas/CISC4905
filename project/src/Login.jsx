import React from 'react';
import { Link } from 'react-router-dom';
import { useStorageState, login } from './login';

const  Signup = ({history}) =>{

    const [data, setData] = React.useState({});
    const[user, setUser]=React.useState('horse');
    const[pwd,setPwd]=React.useState('horse');
    const[msg,setMSG]=React.useState(<p>Don't have an account? <Link to="signup">Create One.</Link></p>);
    const [usr, setUsr] = useStorageState('User', 'user-context');
    React.useEffect(() => {
         fetch("/login")
          .then((res) => res.json())
          .then((data) =>{ 
           setData(data.source)
          console.log('hello there!', {data})
          });
     }, []);
    const checkLogin=(event)=>{
        event.preventDefault();
        let n=data.userlist.indexOf(user);
        console.log('n: ',n )
        if(n!==-1&&data.users[n].password===pwd){
            setUsr(user);
            history.push("/");
        }
        else
            setMSG(<p>Those credentials are incorrect. <Link to="/signup">If you don't have an account, you can sign up.</Link></p>)
    }
    const handleUserChange=(event)=>{
    setUser(event.target.value);    
    }
    const handlePassChange=(event)=>{
    setPwd(event.target.value);
    }
  return(
    <div className='LoginDiv'>
    <div className='FormDiv'>
    <form className='form' onSubmit={checkLogin}>
    <label>
        Username:
      <textarea value={user} onChange={(handleUserChange)} />
    </label>
    <label>
        Password:
        <textarea value={pwd} onChange={handlePassChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  </div>
  {msg}
  </div>
  );
}

export default Signup;