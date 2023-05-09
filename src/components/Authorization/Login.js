import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { Button, Form, Header, Input, Segment, TextArea } from "semantic-ui-react"
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

                    navigate("/my_hub")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <>
        <Segment id="headerSegment">
        <img src="https://i.imgur.com/QoFHnAR.png" alt="Character Hub Logo" id="characterHubLogo"/>
        </Segment>
        <Header id="loginPageHeader" as="h1">
            <Header.Subheader id="subheader">
                <img src="https://i.imgur.com/FVdXWs7.png"/>
            </Header.Subheader>
        </Header>
            <Form id="loginForm" onSubmit={handleLogin}>
                <Form.Field
                control={Input}
                onChange={evt => set(evt.target.value)}
                class="form-control"
                label="Enter Your Email"
                placeholder="Email"
                autoFocus />
            <Form.Field control={Button} id="loginButton">Login</Form.Field>
            <Link to="/register">Not a member yet?</Link>
            </Form>
        </>
    )
}

