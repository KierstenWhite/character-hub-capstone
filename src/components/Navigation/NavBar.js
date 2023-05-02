import { Link, useNavigate } from "react-router-dom"
import { Menu } from "semantic-ui-react"
import "./NavBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

    return <div>
        <Menu>
            <img alt='logo' src='https://i.imgur.com/bHqV4NP.png' id="navBarLogo" />
            <Menu.Item><Link className="navbar_link" to="/">Home</Link></Menu.Item>
            <div className="ui simple dropdown item">
                <div className="text"><Link className="navbar_link" to="/my_hub">My Hub</Link></div>
                    <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item"><Link className="navbar_link" to="/add_a_new_character_form">Add a New Character</Link></div>
                            <div className="item"><Link className="navbar_link" to="/character_home">Character Home</Link></div>
                            <div className="item"><Link className="navbar_link" to="/writing_resources">Writing Resources</Link></div>
                        </div>      
            </div>
            <Menu.Item><Link className="navbar_link" to="/message_board">Message Board</Link></Menu.Item>
            <Menu.Item><Link className="navbar_link" to="/around_the_hub">Around the Hub</Link></Menu.Item>
            <Menu.Item position="right"><Link className="navbar_link" to="/profile">Profile</Link></Menu.Item>
            {
                localStorage.getItem("current_user")
                    ? <Menu.Item>
                        <Link className="navbar_link" to="" onClick={() => {
                            localStorage.removeItem("current_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </Menu.Item>
                    : ""
            }
        </Menu>
    </div>
}