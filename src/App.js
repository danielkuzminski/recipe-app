import './App.css';
import {useCollection} from './hooks/useCollection'


function App() {

  const {documents: recipes} = useCollection('recipes')

  return (
    <div className="App">

    </div>
  );
}

export default App;
