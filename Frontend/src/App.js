import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/UI/Login/Login';
import Home from './components/UI/Landing Page/Home';
import OurFeatures from './components/UI/Our Features/OurFeatures';
import Profile from './components/UI/Profile/Profile';
import Resume from './components/UI/Forms/Resume/Resume';
import Resume1 from './components/Templates/Resume/Resume1';
import Resume2 from './components/Templates/Resume/Resume2';
import OfferLetter1 from './components/Templates/Offer Letter/OfferLetter';
import OfferLetter from './components/UI/Forms/OfferLetter/OfferLetter';
import PrivacyPolicy from './components/UI/Policies/PrivacyPolicy';
import TermsOfServices from './components/UI/Policies/TermsOfServices';

function App() {

  const [user, setUser] = useState(null);
  const [resume, setResume] = useState(null);
  const [offerLetter, setOfferLetter] = useState(null);

  const getUser = async() => {
    try {
      const url = `http://localhost:5011/auth/login/success`;
      const {data} = await axios.get(url, {withCredentials: true});
      console.log(data);

      await axios.get('/resume/history/').then((response) => {
        setResume(response.data);
        console.log('data received!');
      })
      .catch((err) => {
        alert('error!')
      })

      await axios.get('/offer_letter/history/').then((response) => {
        setOfferLetter(response.data);
        console.log('data received');
      })
      .catch((err) => {
        alert('error!')
      })

      setUser(data.user._json);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <BrowserRouter>
      {window.location.href !== "http://localhost:3000/login" && (
        <Navbar user={user}/>
      )}
      <Routes>
        <Route exact path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route exact path='/terms-of-services' element={<TermsOfServices/>}/>
        <Route exact path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
        <Route exact path='/' element={
          <div>
            <Home/>
            <OurFeatures/>
          </div>
        }/>
        <Route exact path='/profile' element={
          user ? (
            <Profile
              resume={resume}
              offerLetter={offerLetter}
              email={user.email}
              setResume={setResume}
              setOfferLetter={setOfferLetter}
            />
          ) : (
            <Navigate to='/login'/>
          )
        } />
        <Route exact path='/edit/resume/:id' element={user ? <Resume/> : <Navigate to='/login' />} />
        <Route exact path='/resume/details' element={user ? <Resume/> : <Navigate to='/login' />} />
        <Route exact path='/resume/templates1' element={user ? <Resume1/> : <Navigate to='/login' />} />
        <Route exact path='/resume/templates2' element={user ? <Resume2 /> : <Navigate to='/login' />} />
        <Route exact path='/edit/offer_letter/:id' element={user ? <OfferLetter/> : <Navigate to='/login'/>} />
        <Route exact path='/offer_letter/details' element={user ? <OfferLetter/> : <Navigate to='/login'/>} />
        <Route exact path='/offer_letter/templates/1' element={user ? <OfferLetter1/> : <Navigate to='/login'/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
