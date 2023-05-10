//Handles JSX for NavBar

import { Link, useNavigate } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Menu secondary id="navbar">
        <img alt="logo" src="https://i.imgur.com/QoFHnAR.png" id="navBarLogo" />
        <Menu.Item id="menuItem">
          <Link className="navbar_link" to="/">
            HOME
          </Link>
        </Menu.Item>
        <div className="ui simple dropdown item" id="menuItem">
          <div className="text">
            <Link className="navbar_link" to="/my_hub">
              MY HUB
            </Link>
          </div>
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item" id="selectitem">
              <Link className="navbar_link" to="/add_a_new_character_form">
                ADD A NEW CHARACTER
              </Link>
            </div>
            <div className="item" id="selectitem">
              <Link className="navbar_link" to="/character_home">
                CHARACTER HOME
              </Link>
            </div>
            <div className="item" id="selectitem">
              <Link className="navbar_link" to="/writing_resources">
                WRITING RESOURCES
              </Link>
            </div>
          </div>
        </div>
        <Menu.Item id="menuItem">
          <Link className="navbar_link" to="/message_board">
            MESSAGE BOARD
          </Link>
        </Menu.Item>
        <Menu.Item id="menuItem">
          <Link className="navbar_link" to="/around_the_hub">
            AROUND THE HUB
          </Link>
        </Menu.Item>
        <Menu.Item id="menuItem" position="right">
          <Link className="navbar_link" to="/profile">
            PROFILE
          </Link>
        </Menu.Item>
        {localStorage.getItem("current_user") ? (
          <Menu.Item>
            <Link
              className="navbar_link"
              to=""
              onClick={() => {
                localStorage.removeItem("current_user");
                navigate("/", { replace: true });
              }}
            >
              LOGOUT
            </Link>
          </Menu.Item>
        ) : (
          ""
        )}
      </Menu>
    </div>
  );
};
