import React, { useState } from "react";
import "/public/Libs/css/Promotion/Signup/signup.css";

const countryCodes = [
    {code: "+1", country: "US"},
    {code: "+44", country: "UK"},
    {code: "+90", country: "TR"},
    {code: "+61", country: "AU"},
    {code: "+55", country: "BR"},
    {code: "+86", country: "CN"},
    {code: "+33", country: "FR"},
    {code: "+49", country: "DE"},
    {code: "+91", country: "IN"},
    {code: "+39", country: "IT"},
    {code: "+81", country: "JP"},
    {code: "+52", country: "MX"},
    {code: "+31", country: "NL"},
    {code: "+64", country: "NZ"},
    {code: "+7", country: "RU"},
    {code: "+27", country: "ZA"},
    {code: "+34", country: "ES"},
    {code: "+46", country: "SE"},
    {code: "+41", country: "CH"},
    {code: "+971", country: "AE"}
];

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="signup-form-container">
            <h2 className="signup-title"> rezTable</h2>
            <form id="signup-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" name="surname" required />

                <label htmlFor="DateOfBirth">Date Of Birth</label>
                <input type="date" id="DateOfBirth" name="DateOfBirth" required />

                <label htmlFor="telephone">Telephone Number</label>
                <div className="telephone-container">
                    <select id="country-code" name="country-code" required>
                        {countryCodes.map(({ code, country }) => (
                            <option key={code} value={code}>
                                {code} ({country})
                            </option>
                        ))}
                    </select>
                    <input type="tel" id="telephone" name="telephone" placeholder="" required />
                </div>

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

                <div className="input-group">
                    <label htmlFor="confirm-password">
                        Confirm Password
                        <span
                            className="toggle-password"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? "Hide" : "Show"}
                        </span>
                    </label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm-password"
                        name="confirm-password"
                        required
                    />
                </div>

                <button type="submit">Sign Up</button>
            </form>
            <div className="social-login">
                <p>Or continue with</p>
                <button className="google-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" />
                    Continue with Google
                </button>
                <button className="facebook-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Logo" />
                    Continue with Facebook
                </button>
                <button className="apple-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" />
                    Continue with Apple
                </button>
            </div>
        </div>
    );
};

export default SignUpForm;