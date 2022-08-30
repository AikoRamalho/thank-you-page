import one from '../assets/one.svg';
import two from '../assets/two.svg';
import three from '../assets/three.svg';
import { Container } from './style'


export function WhatsNext() {
  return (
    <Container>
      <div className='section-title'> Whats next? </div>

      <div className='card-container'> 
        <div className='card'>
          <header>
            <img src={one} />
            <span className="card-title">
              Confirm Your Moving Requirement 
            </span>
          </header>

          <p className="card-text">
            We Will Call you and Confirm all the details so we can provide you better results
            or you can confirm your moving requirements by yourself clicking on 
            (Confirm Now) button.
          </p>
        </div>

        <div className='card'>
          <header>
            <img src={two} />
            <span className="card-title">
            Filter Trusted & Best Movers for you
            </span>
          </header>

          <p className="card-text">
          When you confirmed your moving requirements,
          our system will filtered best packers and movers for you.

          </p>
        </div> 

        <div className='card'>
          <header>
            <img src={three} />
            <span className="card-title">
              You Get Rates & Their Contact Details
            </span>
          </header>

          <p className="card-text">
            When our system filtered best packer movers list for you, 
            The list comes with 3-4 phone Numbers and you can call them or either you will get quotation from them, 
            now you can easily get rates for your moving.
          </p>
        </div> 
      </div>
    </Container>
  )
}