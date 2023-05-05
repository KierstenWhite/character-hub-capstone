import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Header, Input, TextArea } from "semantic-ui-react"
import "./Register.css"

export const Register = () => {
    const [user, setUser] = useState({
        email: "",
        preferredName: "",
        username: "",
        userImage: "",
        age: 0,
        location: "",
        status: "",
        bio: "",
        memberSince: new Date()
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
        <>
        <Header id="registrationFormHeader" as="h1">
            Create a New Account
            <Header.Subheader>
                Join a community of other writers and creators.
            </Header.Subheader>
        </Header>
            <Form className="ui form" id="registrationForm" onSubmit={handleRegister}>
                <Form.Group widths='equal'>
                    <Form.Field
                    control={Input}
                    onChange={updateuser}
                    label="Email"
                    htmlFor="email"
                    placeholder="Email"
                    id="email"
                    required/>
                     <Form.Field
                    control={Input}
                    onChange={updateuser}
                    label="Username (this cannot be changed)"
                    htmlFor="username"
                    placeholder="Username"
                    id="username"
                    required/>
                    <Form.Field
                    control={Input}
                    onChange={updateuser}
                    label="Preferred Name"
                    htmlFor="preferredName"
                    placeholder="Preferred Name"
                    id="preferredName"
                    required/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    onChange={updateuser}
                    label="Age"
                    htmlFor="age"
                    placeholder="Age"
                    id="age"
                    />
                    <Form.Field
                    control={Input}
                    onChange={updateuser}
                    label="Location"
                    htmlFor="location"
                    placeholder="Location"
                    id="location"
                    />
                    <Form.Field
                    control={Input}
                    onChange={updateuser}
                    label="Profile Image"
                    htmlFor="userImage"
                    placeholder="Add a link to your profile image"
                    id="userImage"
                    />
                </Form.Group>
                <Header as="h3" id="registrationForm">
                    Additional Information
                </Header>
                <Form.Group>
                    <Form.Field
                    control={Input}
                    onChange={updateuser}
                    label="Status"
                    htmlFor="status"
                    placeholder="Status"
                    id="status"
                    />
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    onChange={updateuser}
                    label="Bio"
                    htmlFor="bio"
                    placeholder="Tell us more about you..."
                    id="bio"
                    />
                <Form.Field control={Button} id="registrationButton">Register New Account</Form.Field>
            </Form>
        </>
    )
}

