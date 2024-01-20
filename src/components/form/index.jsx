import { useState } from "react";
import { fetchLogin, userProfile } from "../../store/api";
import { useDispatch } from "react-redux";
import { setLogin, setToken, setUser } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

import "./style.scss";

export default function Form() {
    // Préremplie pour les besoin du projet
    const [email, setEmail] = useState('tony@stark.com');
    const [password, setPassword] = useState('password123');

    const [errorLoginMessage, setErrorLoginMessage] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetchLogin({
                email: email,
                password: password,
            })
            console.log(response);
            console.log(`Email: ${email}`);
            console.log(`Password: ${password}`);
            if (response.status === 200) {
                dispatch(setLogin(true));
                dispatch(setToken(response.body.token))
                const profile = await userProfile(response.body.token)
                const data = await profile.body
                console.log(data)
                dispatch(setUser(data))
                navigate("/UserLogin")
            }

            if (response.status === 400) {
                setErrorLoginMessage(true)
                navigate("/Login")
            }

        }
        catch (error) {
            console.log(error)
        }

    }

    let errorMessage = null;
    if (errorLoginMessage) {
        errorMessage = <p style={{ color: "red" }}>Erreur dans l&apos;identifiants ou le mot de passe !</p>
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    autoComplete="current-email"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
                type="submit"
                className="sign-in-button">Sign in</button>
            {errorMessage}
        </form>
    );
}
