import './App.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Name from './Composants/Name';
import Description from './Composants/Description';
import Image from './Composants/Image';
import Price from './Composants/Price';

function App() {
  return (
    <div className="App">
    
    <Name/>
    <Price/>
    <Image/>
    <Description/> 
    </div>
  );
}

export default App;
