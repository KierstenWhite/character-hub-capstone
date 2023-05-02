import { Link } from "react-router-dom"
import "./MyHub.css"

export const MyHubPage = () => {
    return (
        <>
        <section className="ui centered cards" id="MyHubCards">
            <div className="ui pink card">
                <a className="image" href="#">
                    <img src="https://i.imgur.com/FYHgGaC.png" />
                </a>
            <div className="content">
                <a className="header" href="#">Have an idea for a new character? Start here!</a>
                <button className="ui inverted pink button"><Link className="navbar_link" to="/add_a_new_character_form">Add a New Character</Link></button>
            </div>
            </div>

            <div className="ui green card">
                <a className="image" href="#">
                    <img src="https://i.imgur.com/XLLbPJw.png" />
                </a>
            <div className="content" id="cardContent">
                <a className="header" href="#">Want to make some changes to existing characters?</a>
                <button className="ui inverted green button"><Link className="navbar_link" to="/character_home">Character Home</Link></button>
            </div>
            </div>

            <div className="ui yellow card">
                <a className="image" href="#">
                    <img src="https://i.imgur.com/4fqic2V.png" />
                </a>
            <div className="content">
                <a className="header" href="#">Need some help getting started?</a>
                <button className="ui inverted yellow button"><Link className="navbar_link" to="/writing_resources">Writing Resources</Link></button>
            </div>
            </div>
            </section>
        </>
    )
}