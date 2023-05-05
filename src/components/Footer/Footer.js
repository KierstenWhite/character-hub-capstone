import { Segment, Button } from 'semantic-ui-react'
import './Footer.css'

export const Footer = () => {

    return (

        <Segment id="footer">
            <div class="socialbuttons">
            <Button id="socialbutton" circular color='facebook' icon='facebook' />
            <Button id="socialbutton" circular color='twitter' icon='twitter' />
            <Button id="socialbutton" circular color='linkedin' icon='linkedin' />
            <Button id="socialbutton" circular color='google plus' icon='google plus' />
            </div>
        </Segment>
    )
}