import './App.css';
import JoinSession from './Screens/JoinSession/JoinSession';

function App() {
  return (
    <div className="App">
      <JoinSession
      roomCode={"12345"}
      name={"Amanda"}
      giftTitle={"blanket"}
      giftImg={""}>
      </JoinSession>
    </div>
  );
}

export default App;
