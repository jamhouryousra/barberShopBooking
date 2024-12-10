import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import BookingForm from './components/BookingForm';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  const [page, setPage] = useState('home'); // tracks the current page: home,booking, or confirmation
  const [appointment, setAppointment] = useState(null); // tracks appointment details

  const startBooking = () => {
    setPage('booking'); // go to booking form
  };

  const confirmAppointment = (appointmentDetails) => {
    setAppointment(appointmentDetails); // save appointment details
    setPage('confirmation'); // go to confirmation page
  };

  return (
    <div className="App">
      { page === 'home' && // check if page is at the home page true , then the homepage component is rendered  
        <HomePage startBooking={startBooking} /> 
        // and the startBooking is passed as a prop to HomePage 
      }
      { page === 'booking' && 
        <BookingForm confirmAppointment={confirmAppointment} />
      }
      { page === 'confirmation' && 
        <ConfirmationPage appointment={appointment} />
      }
    </div>
  );
}

export default App;