import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("kierstenswhite@gmail.com")
    const navigate = useNavigate()
    //handleLogin creates function for Login button
    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`) // makes a call to json server, seeing if anybody's email matches the data it has
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("current_user", JSON.stringify({ // if email is valid, it sets localStorage to "current_user"
                        id: user.id,
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="ui form" onSubmit={handleLogin}>
                    <h1>Character Hub</h1>
                    <h2>“Characters are not created by writers. They pre-exist and have to be found.” - Elizabeth Bowen</h2>
                    <h3>Please login</h3>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="ui form"
                            placeholder="kierstenswhite@gmail.com"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button class ="ui button" type="submit">
                            Start Creating
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

