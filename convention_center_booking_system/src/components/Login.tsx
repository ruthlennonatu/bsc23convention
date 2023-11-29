import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginComponent: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = () => {
        console.log('Login button clicked');
        
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
        console.log('Redirect to register');
    }

    return (
        <div>
            <form>
                <h3>Login</h3>

                <table style={{ margin: "auto" }}>
                    <tr>
                        <td><label>Email address: </label></td>
                        <td><input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={handleEmailChange}
                        /></td>
                    </tr>
                    <tr>
                        <td><label>Password: </label></td>
                        <td><input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={handlePasswordChange}
                        /></td>
                    </tr>
                </table >
                <div className="d-grid">
                    <button type="button" className="btn btn-primary" onClick={handleLoginClick}>
                        Login
                    </button>
                    <br />
                    <button type="button" className="btn btn-link" onClick={handleRegisterRedirect}>
                        {"Don't have an account? Register"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginComponent;
