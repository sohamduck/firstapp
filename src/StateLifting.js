function App() {
    //State lifting then prop drilling
    const [fruits] = useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
    ]);
  
    return (
      <div className="StateLifting">
        <div>
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits}/>
            <FruitsCounter fruits={fruits}/>
        </div>
      </div>
    );
  }