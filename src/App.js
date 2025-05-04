import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm/LoginForm';
import RegisterForm from './components/auth/RegisterForm/RegisterForm';
import DashboardPage from './pages/dashboardPage/DashboardPage';
import AgendaPage from './pages/agendaPage/AgendaPage';
import ServicosPage from './pages/servicosPage/ServicosPage';
import FuncionariosPage from './pages/funcionariosPage/FuncionariosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/funcionarios" element={<FuncionariosPage />} />
      </Routes>
    </Router>
  );
}

export default App;