import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {

  const {userInfo, setUserInfo} = useContext(UserContext);

  // useEffect(() => {
  //   fetch('http://localhost:4000/profile', {
  //     credentials: 'include',
  //   }).then(response => {
  //     response.json().then(userInfo => {
  //       setUserInfo(userInfo);
  //     })
  //   });
  // }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  
  return (
    <header>
        <Link to='/' className='logo'>My Blog</Link>
        <nav>
          {username && (
            <>
              <Link to='/create'>Post</Link>
              <a href="/test" onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>
          )}
        </nav>
    </header>
  )
}

export default Header