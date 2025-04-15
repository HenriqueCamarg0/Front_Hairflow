import React, { useState } from 'react';
import Toolbar from '../components/Shared/layout/toolbar/Toolbar';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Toolbar lateral */}
      <Toolbar
        items={['Dashboard', 'Agenda', 'Funcionários', 'Serviços']}
        onSelect={setActiveSection}
      />

      {/* Conteúdo dinâmico baseado na seção ativa */}
      <div style={{ flex: 1, padding: '1rem' }}>
        {activeSection === 'dashboard' && <h1>Bem-vindo, Administrador!</h1>}
        {activeSection === 'agenda' && <p>Aqui está sua Agenda.</p>}
        {activeSection === 'funcionarios' && <p>Gerencie seus Funcionários.</p>}
        {activeSection === 'servicos' && <p>Edite ou adicione Serviços.</p>}
      </div>
    </div>
  );
}
