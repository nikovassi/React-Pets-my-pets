import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as authService from "./services/authService"
import Header from "./components/Header/Header";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Login from "./components/Login/Login";
import MyPets from "./components/MyPets/MyPets";
import Register from "./components/Register/Register";

 

function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
    username: "",
  });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    })
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    });
  };

  return (
    <div id="container">
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>
    </div>
  );
}

export default App;
