import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        preferredName: "",
        username: "",
        userImage: "",
        age: 0,
        location: "",
        status: "",
        bio: "",
        memberSince: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("current_user", JSON.stringify({
                        id: createdUser.id,
                    }))

                    navigate("/")
                }
            })
    }

    // fix this to include username
    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateuser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="ui form" onSubmit={handleRegister}>
                <h1 className="form_header">Create a new Character Hub Account</h1>
                <div className="fields">
                <fieldset className="field">
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateuser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="preferredName"> Preferred Name </label>
                    <input onChange={updateuser}
                           type="text" id="preferredName" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="username"> Username (This cannot be changed) </label>
                    <input onChange={updateuser}
                           type="text" id="username" className="form-control"
                           placeholder="Enter your a unique username" required autoFocus />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="userImage"> Profile Image </label>
                    <input onChange={updateuser}
                           type="link" id="userImage" className="form-control"
                           placeholder="Link to an image" required autoFocus />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="age"> Age </label>
                    <input onChange={updateuser}
                           type="number" id="age" className="form-control"
                           placeholder="Enter your age" required autoFocus />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="location"> Location </label>
                    <input onChange={updateuser}
                           type="text" id="location" className="form-control"
                           placeholder="Enter your location" required autoFocus />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="status"> Update your status </label>
                    <input onChange={updateuser}
                           type="text" id="status" className="form-control"
                           placeholder="Enter your current status" required autoFocus />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="bio"> Bio - Tell us about yourself! </label>
                    <input onChange={updateuser}
                           type="text" id="bio" className="form-control"
                           placeholder="Enter your bio" required autoFocus />
                </fieldset>
                <fieldset className="field">
                    <label htmlFor="memberSince"> Today's Date </label>
                    <input onChange={updateuser}
                           type="date" id="memberSince" className="form-control"
                           placeholder="05/01/2023" required autoFocus />
                </fieldset>
                <fieldset>
                    <button type="submit" className="ui button"> Register </button>
                </fieldset>
                </div>
            </form>
        </main>
    )
}

