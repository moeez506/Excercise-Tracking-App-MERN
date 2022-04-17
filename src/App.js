import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    
    <BrowserRouter>
    <div className="container">
    <Navbar />    
    <Routes>
    <Route exact path="/"  element={<ExercisesList />} />
    <Route exact path="/edit/:id" element={<EditExercise />} />
    <Route exact path="/create" element={<CreateExercise />} />
    <Route exact path="/user" element={<CreateUser />} />
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
