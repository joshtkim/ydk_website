import './App.css';
import Navbar from './components/Navbar'
import Information from './components/Information'
import SocialMedia from './components/SocialMedia'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Coverflow from 'react-coverflow';

const App = () => {
  const aboutUs = "Just a group of friends trying to make a fun podcast"
  const info = "follow us at this and this and that"
  const color = {
    test1: {
      backgroundColor: 'red'
    },
    test2: {
      backgroundColor: 'lightblue'
    }
  }

  const fn = function () {
    /* do you want */  
  }

  return (
    <Container className="App" fluid>
      {/* <h1>Hello</h1> */}
      <Row style={color.test1}>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            <img
              src='[image/path/please_change]'
              alt='title or description'
              style={{ display: 'block', width: '100%' }}
            />
          </div>
          <img src='[image/path/please_change]' alt='title or description' data-action="https://open.spotify.com/episode/1Q0Ld3aaTDgcXBnpDMLbgK"/>
          <img src='[image/path/please_change]' alt='title or description' data-action="https://open.spotify.com/episode/23sE5eYlDjkXgQDAS7N6VA"/>
        </Coverflow>
        <Information aboutUs={aboutUs}/>
      </Row>
      <Row style={color.test2}>
        <Information info={info}/>
      </Row>
      <SocialMedia />
    </Container>
  );
}

export default App;
