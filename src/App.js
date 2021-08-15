import './App.css';
import Navbar from './components/Navbar'
import Information from './components/Information'
import SocialMedia from './components/SocialMedia'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const App = () => {
  const aboutUs = "Just a group of friends trying to make a fun podcast"
  const info = "follow us at this and this and that"

  return (
    <Container className="App">
      <h1>Hello</h1>
      <Row>
        <Information aboutUs={aboutUs}/>
      </Row>
      <Row>
        <Information info={info}/>
      </Row>
      <SocialMedia />
    </Container>
  );
}

export default App;
