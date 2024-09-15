import React from 'react';
import styles from '../../constants/contacts.module.css';

function Contacts() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contactez-nous</h1>
      <p className={styles.text}>Si vous avez des questions, des problèmes, ou si vous avez besoin de quelque chose, n&apos;hésitez pas à nous contacter. Nous serons heureux de vous aider !</p>

      <p>Vous pouvez nous contacter de la manière suivante :</p>
      <ul className={styles.contactlist}>
        <li className={styles.contactitem}>Téléphone : <a href="tel:+123456789" className={styles.contactlink}>+12 34 56 78 9</a></li>
        <li className={styles.contactitem}>Email : <a href="mailto:contact@example.com" className={styles.contactlink}>contact@example.com</a></li>
      </ul>

      {/* Add your contact form or other contact information here */}
    </div>
  );
}

export default Contacts;
