import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
// import Todo from "./views/Todos";
import Covid from "./views/Covid";
function App() {
  // use Hook
  let [name, setName] = useState("Minh Long"); //name là giá trị của biến, setName là function xl khi biến thay đổi
  let [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "id01", title: "choi game", type: "long" },
    { id: "id02", title: "hoc bai", type: "tien" },
    { id: "id03", title: "an choi", type: "tien" },
    { id: "id04", title: "ngu nghi", type: "long" },
  ]);
  // let name = "Long"
  let age = 20;
  let obj = {
    name: "Minh Long",
    age: 22,
  };
  // let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=9'

  const handelOnclick = () => {
    if (!address) {
      alert("Err!!");
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 1000 + 1), title: address };
    setTodos([...todos, newTodo]); //copy lại mảng todos, thêm newTodo vào mảng
    setAddress("");
  };

  const handelOnchange = (e) => {
    setAddress(e.target.value);
  };

  const deleteTodo = (idTodo) => {
    let curentTodo = todos;
    curentTodo = curentTodo.filter((item) => item.id !== idTodo);
    setTodos(curentTodo);
  };
  // hàm useEffect chạy mỗi khi giao diện render lại
  // có thể dùng nhìu hàm useEffect
  // chạy 1 lần khi address thay đổi
  useEffect(() => {
    console.log("use Effect");
  }, [address]);

  useEffect(() => {
    console.log("use Effect todo");
  }, [todos]);

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Heloo {name}, toi {age} tuoi
        </p>
        <Covid />

        {/* list todos */}
        {/* <Todo todos={todos} title="All todo" deleteTodo={deleteTodo} />

        <Todo
          todos={todos.filter((item) => item.type === "long")} //lọc từng phần tử, xuất ra các phẩn tử có type === 'long'
          title="Long todo"
        /> */}

        {/* sử dụng css inline, đổi chuổi từ đối tượng */}
        {/* <p style={{ color: "red" }}>{JSON.stringify(obj)}</p> */}

        {/* <a href={link} rel="noreferrer" target='_blank' >CLICK</a> */}
        {/* <input
          type="text"
          value={address}
          onChange={(e) => handelOnchange(e)}
        ></input>

        <button type="button" onClick={() => handelOnclick()}>
          Click me
        </button> */}
      </header>
    </div>
  );
}

export default App;
