import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App () {
  const divStyle = {
    margin: '40px',
    minWidth: '200px' ,
    maxWidth: '200px' ,  
  };

  const center = {
    display: 'flex',  
    justifyContent: 'center' ,
    
  };
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div style={center}>
      <div style={divStyle}>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      </div>

      <hr />

      <div>
        <Cards characters={characters} onClose={() => window.alert('Emulamos que se cierra la card')}/>
      </div>

      <hr />

      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
