import Calendar from './Calendar.js';
import './App.css';

const now = new Date();

function App() {
  return (
    <Calendar date={now} />
  );
}

export default App;

