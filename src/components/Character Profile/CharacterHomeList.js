import { Link } from "react-router-dom";
import "./Character.css"

export const CharacterHomeList = ({ character, currentUser }) => {

    return character.userId === currentUser.id ? (
      <>
        <div className="ui special cards">
          <div className="card" key={`character--${character.id}`}>
            <div className="blurring dimmable image">
              <div className="ui dimmer">
                <div className="content">
                  <div className="center">
                    <div className="ui inverted button">See Profile</div>{" "} {/* Need to do a fetch so I can link to individual page */}
                  </div>
                </div>
              </div>
              <img className="ui image" src={character.characterImage}/>
            </div>
            <div className="content">
              <a className="header">
                {character.firstName} {character.lastName}
              </a>
              <div className="meta">
                <span className="date">
                  Created by {character.user.username} on {character.dateCreated}
                  <Link to={`/characters/${character.id}`}><button className="ui button">See Profile</button></Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    ) 
    : ("");
}