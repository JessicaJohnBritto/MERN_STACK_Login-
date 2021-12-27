import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () =>{
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/register" exact element={<Register/>}></Route>
                <Route path="/dashboard" exact element={<Dashboard/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;