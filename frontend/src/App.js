import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {TicketList} from "./components/TicketList";
import {TicketDetails} from "./components/TicketDetails";
import {MainPage} from "./components/MainPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/tickets" element={<TicketList/>} />
              <Route path="/ticket/:id" element={<TicketDetails/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
