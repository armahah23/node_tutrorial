import { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prevent submission if fields are empty
        if (!username || !password) {
            alert('Please fill in both username and password');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert('User created successfully!');
                // Clear form fields
                setUsername('');
                setPassword('');
            } else {
                alert('Error: ' + data.error);
            }
        } catch (error) {
            alert('Failed to submit: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
