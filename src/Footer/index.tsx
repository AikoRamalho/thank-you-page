import logo from '../assets/logo.svg';
import { Container } from './style';

export function Footer() {
  return (
    <Container>
      <div className='logo-wrapper'> 
        <div className='footer-logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
      
      <div className='footer-text'>
        <p> Made with in INDIA </p>
        <p> Copyright © 2021 AskNavigator Inc. All Rights Reserved. </p>
        <p> Privacy Policy   |   Terms of Service   |   Disclaimer </p>
      </div>

      <p className='copyright'> Copowered by Digiheadway </p> 
    </Container>
  )
}