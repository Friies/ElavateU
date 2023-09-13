import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

// components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
//import LoginPage from "./components/login(na)/loginPage";
import WorkoutPresetMain from "./components/workoutPresets/workoutPresetMain";

function App() {
  return (
    /*<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Goals" element={<Goals />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Exercises" element={<SearchExercises />} />
    </Routes>*/

    <Box width="400px" sx={{ width: { xl: "auto" } }} m="auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout_preset" element={<WorkoutPresetMain />} />
      </Routes>
    </Box>
  );
}

export default App;
