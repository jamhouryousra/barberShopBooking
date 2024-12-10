import React from 'react';
import styles from './ConfirmationPage.module.css'; 

const ConfirmationPage = ({ appointment }) => {
  return (
    <div className={styles.confirmationPage}>
      <div className={styles.titleConfirmation}>Appointment Confirmed</div>
      <div className={styles.confirmationText}>Thank you for booking your appointment!</div>
      <div>
        <span className={styles.confirmationDetails}>Date:</span> {appointment.date}
      </div>
      <div>
        <span className={styles.confirmationDetails}>Time:</span> {appointment.time}
      </div>
      <div>
        <span className={styles.confirmationDetails}>Barber:</span> {appointment.barber}
      </div>
    </div>
  );
};

export default ConfirmationPage;
