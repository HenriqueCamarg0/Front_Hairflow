import './App.css';
import React from 'react';
import TelaLogin from './components/auth/ScreenLogin/TelaLogin';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import AgendaPage from './pages/AgendaPage/AgendaPage';
import ServicosPage from './pages/ServicosPage/ServicosPage';
import FuncionariosPage from './pages/FuncionariosPage/FuncionariosPage';
import RegisterForm from './components/auth/RegisterForm/RegisterForm';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<TelaLogin />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/funcionarios" element={<FuncionariosPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
