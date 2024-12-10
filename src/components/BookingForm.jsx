import React, { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = ({ confirmAppointment }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [barber, setBarber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmAppointment({ date, time, barber });
  };

  return (
    <div className={styles.bookingForm}>
      <div className={styles.styleBookingForm}>
          <div className={styles.firstPartForm}>Book Your Appointment</div>
          <div className={styles.secondPartForm}>
            <form className={styles.styleForm} onSubmit={handleSubmit}>
              <div className={styles.dispatchForm}>
                <div className={styles.partsForm}>
                    <label>
                    Select Date:
                    <input 
                      type="date" 
                      value={date} 
                      onChange={(e) => setDate(e.target.value)} 
                      required 
                    />
                  </label>
                </div>
                <div className={styles.partsForm}>
                    <label>
                      Select Time:
                      <input 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                      />
                    </label>
              </div>
              <div className={styles.partsForm}>
                    <label>
                      Choose Barber:
                      <select 
                        value={barber} 
                        onChange={(e) => setBarber(e.target.value)} 
                        required
                      >
                        <option value="">Select Barber</option>
                        <option value="Sara">Sara</option>
                        <option value="Joudia">Joudia</option>
                        <option value="Hiba">Hiba</option>
                      </select>
                    </label>
              </div>
              <div className={styles.partsForm}>
                    <button className={styles.bookingButton} type="submit">Confirm Appointment</button>
              </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default BookingForm;
