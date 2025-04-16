import React from 'react';
import './App.css';
import TelaLogin from './components/auth/ScreenLogin/TelaLogin';
import DashboardPage from './pages/DashboardPage';
import { FuncionariosPage } from './pages/FuncionariosPage';
import { AgendaPage } from './pages/AgendaPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<TelaLogin />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/funcionarios" element={<FuncionariosPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
