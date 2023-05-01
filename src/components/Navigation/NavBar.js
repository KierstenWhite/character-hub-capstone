import { Menu, Image } from "semantic-ui-react"

export const NavBar = () => {
    return <div>
        <Menu>
            <Menu.Item><img alt='logo' src='https://i.imgur.com/bHqV4NP.png' size="large" /></Menu.Item>
            <Menu.Item>Home</Menu.Item>
            <div class="ui pointing dropdown link item">
                <div class="text">My Hub</div> {/* Dropdown not expanding */}
                    <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item">Add a New Character</div>
                            <div class="item">Character Home</div>
                            <div class="item">Writing Resources</div>
                        </div>      
            </div>
            <Menu.Item>My Hub</Menu.Item>
            <Menu.Item>Message Board</Menu.Item>
            <Menu.Item>Around the Hub</Menu.Item>
            <Menu.Item position="right">Profile</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
        </Menu>
    </div>
}