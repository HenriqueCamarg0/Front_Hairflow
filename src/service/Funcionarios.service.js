import api from './api.service'; 

// Cadastrar profissional
export async function cadastrarFuncionario(funcionarioData) {
  const response = await api.post('/Professional/new/professional', funcionarioData);
  return response.data;
}

// Listar profissionais
export async function listarFuncionarios() {
  const response = await api.get('/Professional/list/professionals');
  return response.data;
}

// Buscar profissional por ID
export async function buscarFuncionarioPorId(id) {
  const response = await api.get(`/Professional/find/professional/${id}`);
  return response.data;
}

// Atualizar profissional
export async function atualizarFuncionario(id, funcionarioData) {
  const response = await api.post(`/Professional/update/professional/${id}`, funcionarioData);
  return response.data;
}

// Deletar profissional
export async function deletarFuncionario(id) {
  const response = await api.get(`/Professional/delete/professional/${id}`);
  return response.data;
}
