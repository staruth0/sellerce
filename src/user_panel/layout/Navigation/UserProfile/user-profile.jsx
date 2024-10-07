import React, { useEffect, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import './user-profile.css';
import { useAuth } from '../../../utils/Authentication/AuthContext';
import profilePic from '../../../assets/icons/home/profilr.JPG'
import Popup from '../../../commons/popUp/popUp';
import fetchUserData from '../../../utils/useManagement/getUserById';
import handleApiError from '../../../utils/handleApiError';
import getUserNamePart from '../../../utils/useManagement/getNamesParts';
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';

const UserProfile = ({passedHero}) => {
  const {isLoggedIn,handleLogout}= useAuth()
  const [isError,setIsError]=useState(false);
  const [message, setMessage]=useState('')
  const [redirectto, setRedirectTo]=useState('/')
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserData(setMessage, setIsError,handleApiError)
        .then(data => {
          setUserData(data);
        })
        .catch(error => {
          handleApiError(error,setIsError)
          console.error('Error fetching user data:', error);
        });
    }
  }, [isLoggedIn]);

  const HandleLogout = (e) => {
    e.preventDefault();
    handleLogout(setMessage,setIsError)
      .then(() => {
        setLogoutSuccess(true);
        // setTimeout(() => {
        //   setLogoutSuccess(false);
        // }, 10000); // Set the duration for the pop-up to be displayed
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };
  const handleRedirect=()=>{
    setRedirectTo('/login')
    window.location.href = redirectto;
  }
  return (
    <div className="user-profile">
        {logoutSuccess && (
        <Popup
          action={handleRedirect}
          actionText='OK'
          message={message}
          isError={isError}
          autoCloseTime={2000} // Close the pop-up automatically after 3 seconds
        />
      )}
      
      {isLoggedIn ? (
        <>
          <Link to="/profile" className="sign-up-button primary-btn user-profile">
          <svg
                className="svg"
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.4438 0C9.41551 0 0.443848 8.97167 0.443848 20C0.443848 31.0283 9.41551 40 20.4438 40C31.4722 40 40.4438 31.0283 40.4438 20C40.4438 8.97167 31.4722 0 20.4438 0ZM13.7772 35.2733V35C13.7772 31.3233 16.7672 28.3333 20.4438 28.3333C24.1205 28.3333 27.1105 31.3233 27.1105 35V35.2733C25.0672 36.1683 22.8138 36.6667 20.4438 36.6667C18.0738 36.6667 15.8205 36.1683 13.7772 35.2733ZM30.3188 33.4183C29.5588 28.6533 25.4205 25 20.4438 25C15.4672 25 11.3305 28.6533 10.5688 33.4183C6.45218 30.38 3.77718 25.4967 3.77718 20C3.77718 10.81 11.2538 3.33333 20.4438 3.33333C29.6338 3.33333 37.1105 10.81 37.1105 20C37.1105 25.4967 34.4355 30.38 30.3188 33.4183ZM20.4438 8.33333C16.7672 8.33333 13.7772 11.3233 13.7772 15C13.7772 18.6767 16.7672 21.6667 20.4438 21.6667C24.1205 21.6667 27.1105 18.6767 27.1105 15C27.1105 11.3233 24.1205 8.33333 20.4438 8.33333ZM20.4438 18.3333C18.6055 18.3333 17.1105 16.8383 17.1105 15C17.1105 13.1617 18.6055 11.6667 20.4438 11.6667C22.2822 11.6667 23.7772 13.1617 23.7772 15C23.7772 16.8383 22.2822 18.3333 20.4438 18.3333Z" />
            </svg>
            <span className={`${!passedHero?'user-name darks':'user-name white'}`}>{userData && (getUserNamePart(userData.name, 'first', setMessage, setIsError) || 'user name').toUpperCase()}
</span>
            <div className="dropdown">
                <div>
                    <div>
                        <img src={profilePic} alt="Profile" className="profile-picture" />
                    </div>
                    
                    <div className='personal-info'>
                        <div className="user-name">{userData && capitalizeFirstLetter((userData.name || 'full name').toLowerCase(),setMessage,setIsError,handleApiError)}</div>
                        <div className="user-email"><i>{userData && (userData.email || 'address email')}</i></div>
                    </div>
                    <div className='view-wrapper'>
                        <Link className='view' to="/profile">Manage Profile</Link>
                    </div>
                </div>
            
                <div>
                    <button onClick={HandleLogout} className='sign-up-button primary-btn logout' >Logout</button>
                </div>
            </div>
          </Link>
        </>
      ) : (
        <Link to="/login" className="sign-up-button primary-btn">
          <svg
                className="svg"
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.4438 0C9.41551 0 0.443848 8.97167 0.443848 20C0.443848 31.0283 9.41551 40 20.4438 40C31.4722 40 40.4438 31.0283 40.4438 20C40.4438 8.97167 31.4722 0 20.4438 0ZM13.7772 35.2733V35C13.7772 31.3233 16.7672 28.3333 20.4438 28.3333C24.1205 28.3333 27.1105 31.3233 27.1105 35V35.2733C25.0672 36.1683 22.8138 36.6667 20.4438 36.6667C18.0738 36.6667 15.8205 36.1683 13.7772 35.2733ZM30.3188 33.4183C29.5588 28.6533 25.4205 25 20.4438 25C15.4672 25 11.3305 28.6533 10.5688 33.4183C6.45218 30.38 3.77718 25.4967 3.77718 20C3.77718 10.81 11.2538 3.33333 20.4438 3.33333C29.6338 3.33333 37.1105 10.81 37.1105 20C37.1105 25.4967 34.4355 30.38 30.3188 33.4183ZM20.4438 8.33333C16.7672 8.33333 13.7772 11.3233 13.7772 15C13.7772 18.6767 16.7672 21.6667 20.4438 21.6667C24.1205 21.6667 27.1105 18.6767 27.1105 15C27.1105 11.3233 24.1205 8.33333 20.4438 8.33333ZM20.4438 18.3333C18.6055 18.3333 17.1105 16.8383 17.1105 15C17.1105 13.1617 18.6055 11.6667 20.4438 11.6667C22.2822 11.6667 23.7772 13.1617 23.7772 15C23.7772 16.8383 22.2822 18.3333 20.4438 18.3333Z" />
            </svg>
          <span>Sign-up</span>
        </Link>
      )}
    </div>
  );
};

export default UserProfile;
