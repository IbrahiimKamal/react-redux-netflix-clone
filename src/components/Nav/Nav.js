import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`${show ? 'nav nav__black' : 'nav'}`}>
      <div className="nav__content">
        <img
          onClick={() => history.push('/')}
          className="nav__logo"
          src="https://gfx4arab.com/wp-content/uploads/2020/09/Netflix-Logo.wine_.png"
          alt="netflix logo"
        />

        <img
          onClick={() => history.push('/profile')}
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
