import React from "react";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Room from "../components/ChatRoomComponents/RoomPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const AuthPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="room" element={<Room />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AuthPage;