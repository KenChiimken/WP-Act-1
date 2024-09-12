import './App.css';
import Greeting from './Greeting.js'
import Footer from './components/Footer.js'
import './Custom.css'

function App() {
  const name = "React Learner";
  return (
    <div>
      <h1>Nice to meet you, {name}!</h1>
      <p>I don't know what to put here... just welcome, I guess?</p>
      <Greeting greeting="Okaeri" name="KC"/>
      <Greeting greeting="Nice to see you" name="Ken"/>
      
      <Footer/>
    </div>
  );
}


export default App;
