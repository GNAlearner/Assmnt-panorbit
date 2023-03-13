import { useState } from "react"
import { useEffect } from "react";
import './App.css';
import Landingpage from './Components/Landingpage';
import Profilepage from './Components/Profilepage';
import { Routes, Route } from "react-router-dom";

function App() {
  // Fetching the data from API and passing to components such as Landingpage and Profilepage as props
  const [usersdata, setUsersdata] = useState([])

      useEffect(() => {
            const fetchData = async() => {
                  await fetch("https://panorbit.in/api/users.json")
                      .then(response => {
                          return response.json()
                        })
                      .then(data => {
                          setUsersdata(data)
                      })
                  }
                  fetchData();
            }, [])

  return (
    // Routes are used to naviage between the pages
      <Routes>
       <Route path="/" element={<Landingpage data={usersdata}/>} />
       <Route path="profilepage" element={<Profilepage data={usersdata}/>} />
      </Routes>
  );
}

export default App;
