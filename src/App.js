import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react'

function App() {
  // use Hook
  let [name, setName] = useState('Minh Long')//name là giá trị của biến, setName là function xl khi biến thay đổi
  let [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'id01', title: 'choi game' },
    { id: 'id02', title: 'hoc bai' },
    { id: 'id03', title: 'an choi' },
  ])
  // let name = "Long"
  let age = 20
  let obj = {
    name: 'Minh Long', age: 22
  }
  // let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=9'

  const handelOnclick = () => {
    if (!address) {
      alert('Err!!')
      return;
    }
    let newTodo = { id: 'id', title: address }
    setTodos([...todos, newTodo]) //copy lại mảng todos, thêm newTodo vào mảng
    setAddress('')
  }

  const handelOnchange = (e) => {
    setAddress(e.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Heloo {name}, toi {age} tuoi
        </p>
        {/* list todos */}
        <div className='todos-container'>
          {todos.map(item => {
            return (
              <li className='todos-child' key={item.id}>{item.title}</li>
            )
          })}

        </div>
        {/* sử dụng css inline, đổi chuổi từ đối tượng */}
        <p style={{ color: 'red' }} >{JSON.stringify(obj)}</p>

        {/* <a href={link} rel="noreferrer" target='_blank' >CLICK</a> */}
        <input type='text' value={address} onChange={(e) => handelOnchange(e)}></input>

        <button type='button' onClick={() => handelOnclick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
