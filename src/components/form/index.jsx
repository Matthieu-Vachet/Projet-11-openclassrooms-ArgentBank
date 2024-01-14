import { useState } from "react";
import "./style.scss";

function Form() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function onSubmit(event) {
        event.preventDefault();

        console.log("State email :", email);
        console.log("State password :", password);
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                    onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"
                    onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign in</button>
        </form>
    );
}

export default Form;