import truck from '../assets/truck.svg';
import { Container } from './style';

export function Verify() {
  return (
    <Container>
      <div className="top-text">
        Hey Mohit , We Got Your Details
        & We Will Call you Within Few Minutes
      </div>

      <img src={truck} alt="Truck" />

      <div className='body-text'>
        While you wait for our call, you can directly verify yourself via call and get packers movers details here.
      </div>

      <button>
        Verify Via Call
      </button>

      <div className='bottom-text'>
        Learn more about Service
      </div>

    </Container>
  )
}