import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Footerr from '../components/Footerr';
import Createacc from '../components/Createacc';
import TopNav from '../components/TopNav';
import NewHeader from '../components/NewHeader';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function CreateAcc() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [signedUp, setSignedUp] = useState(false); // Initialize state

  const handleSignUp = () => {
    // Handle the sign-up logic here

    // Assuming successful sign-up
    // Set the state to indicate sign-up
    setSignedUp(true);
  };

  useEffect(() => {
    // Check if signedUp is true, and navigate to the homepage
    if (signedUp) {
      navigate('/'); // Replace '/' with the actual path to your homepage
    }
  }, [signedUp, navigate]);

  return (
    <div>
      <Createacc onSignUp={handleSignUp} />
      <Footer />
      <Footerr />
    </div>
  );
}
