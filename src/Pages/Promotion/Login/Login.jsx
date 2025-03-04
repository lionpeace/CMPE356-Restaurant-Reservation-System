import React, { useState } from "react";
import "/public/Libs/css/Promotion/Login/login.css";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-form-container">
            <h2 className="login-title"> rezTable</h2>
            <form id="login-form">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />

                <div className="input-group">
                    <label htmlFor="password">
                        Password
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </span>
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;