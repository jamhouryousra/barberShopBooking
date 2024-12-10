import React from 'react';
import styles from './HomePage.module.css'; 

const HomePage = ({ startBooking }) => {
  return (
    <div className={styles.homePage}> 
      <div className={styles.styleWelcome}>
        <div className={styles.welcomeLine}>Welcome to Yousra's Barbershop</div>
        <div className={styles.styleMiddle}>Ready to book an appointment ?</div>
        <div className={styles.bookingButtonDiv}>
          <button onClick={startBooking} className={styles.bookingButton}>Start Booking</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
