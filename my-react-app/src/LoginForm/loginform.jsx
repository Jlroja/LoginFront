import {} from "react";
import './loginform.css';

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="remenber-forgot">
                    <label><input type="checkbox"/>Remenber me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p> Dont have an account? <a href="#">Rgister</a></p>

                </div>
            </form>

        </div>
    );
};

export default LoginForm