import logoImg from '../assets/logo.svg';
import relatedServices from '../assets/related_services.svg';
import learn from '../assets/learn.svg';
import faq from '../assets/faq.svg';
import support from '../assets/support.svg';

import { Container, Content } from './style';

export function Header() {
  return (
    <Container>
      <Content>
          <img src={logoImg} alt="Logo" />
          <nav>
            <a href="#">
              <img src={relatedServices} alt="Related Services" />
              Related Services
            </a>
            <a href="#">
              <img src={learn} alt="Learn" />
              Learn
            </a>
            <a href="#">
              <img src={faq} alt="FAQ" />
              FAQ
            </a>
            <a href="#">
              <img src={support} alt="Support" />
              Support
            </a>
          </nav>
      </Content>
    </Container>
  );
}