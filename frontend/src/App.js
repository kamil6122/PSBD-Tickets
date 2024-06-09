import './App.css';
import { Navbar } from './components/Navbar.js'
import { Ticket } from './components/Ticket.js'
import {TicketList} from "./components/TicketList";

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/*<Ticket/>*/}
        <TicketList/>
    </div>
  );
}

export default App;
