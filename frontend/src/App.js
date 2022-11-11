import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="update/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}


/*
ini comment biasa aja 
*/

export default App;
