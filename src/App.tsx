import React, { useState } from 'react';
import './App.css';

type TOnChange = React.ChangeEvent<HTMLInputElement>
type TKeyPress = React.KeyboardEvent<HTMLDivElement>

const App = () => {
  const [list, setList] = useState("")
  const [bazarList, setBazarList] = useState<string[]>([])

  const addItem = () => {
    const updateList = [...bazarList, list]
    setBazarList(updateList)
    setList("")
  }
  const removeItem = (itemName: string) => {
    const removeItem = bazarList.filter(item => item !== itemName)
    setBazarList(removeItem)
  }

  const handleKeyPress = (e: TKeyPress) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bazar List</h1>
        <main>
          <input
            onChange={(e: TOnChange) => setList(e.target.value)}
            onKeyPress={handleKeyPress}
            value={list}
            type="text"
            name="item" />
          <button onClick={addItem}>Add Item</button>
          <ol>
            {
              bazarList.map(item =>
                <>
                  <li key={item}>{item} <button onClick={() => removeItem(item)}>X</button></li>
                </>
              )
            }
          </ol>
        </main>
      </header>
    </div>
  );
}

export default App;
