import logo from "./logo.svg";
import "./App.css";
import MyForm from "./components/MyForm";
import Display from "./components/Dispaly";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (name, email) => {
    if (editIndex !== null) {
      const updated = data.map((item, index) => (
        index === editIndex ? {name, email} : item
      ));
      setData(updated);
      setEditIndex(null);
    } else {
      setData((prev) => [...prev, { name, email }]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index)
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  }

  return (
    <div className="App">
      <h1>Home Page</h1>
      <div className="mainpage">
        <MyForm onGet={handleSubmit} />
        <Display allData={data} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
