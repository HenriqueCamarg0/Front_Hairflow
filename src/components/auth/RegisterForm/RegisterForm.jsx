import React from 'react';
import styles from './RegisterForm.module.css';

export default function RegisterForm() {

    function handleRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('Name:', name, 'Email:', email, 'Password:', password);
    }

    return (
        <form onSubmit={handleRegister} className={styles.registerForm}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}