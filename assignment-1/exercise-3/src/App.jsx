function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}><strong>{fruit}</strong></li>
        ))}
      </ul>
    </div>
  );
}

export default App;