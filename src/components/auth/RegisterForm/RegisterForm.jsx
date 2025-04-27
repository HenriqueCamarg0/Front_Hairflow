import { useState } from 'react';
import { AuthService } from '../../../service/auth.service';
import { useNavigate } from 'react-router-dom';
import InputRegister from '../Inputs/InputRegister';
import styles from './RegisterForm.module.css'; // Importando o CSS para o formulário

export default function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState(''); // Novo estado para o nome
  const [senha, setSenha] = useState('');
  const [funcao, setFuncao] = useState(''); // Novo estado para a função
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    if (email && nome && senha && funcao) {
      try {
        const response = await AuthService.register({ email, nome, password: senha, funcao });
        localStorage.setItem('token', response.token);
        navigate('/dashboard');
      } catch (error) {
        setErrorMessage('Erro ao realizar o registro. Tente novamente mais tarde.');
        console.error(error);
      }
    } else {
      setErrorMessage('Por favor, preencha todos os campos!');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleRegister}>
      <div className={styles.header}>
        <h1>Registrar Conta</h1>
        <p>Preencha as informações abaixo para criar sua conta</p>
      </div>

      <InputRegister 
        label="E-mail" 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Digite seu e-mail" 
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />

      <InputRegister 
        label="Nome" 
        type="text" 
        id="nome" 
        name="nome" 
        placeholder="Digite seu Nome" 
        required={true}
        value={nome}
        onChange={(e) => setNome(e.target.value)} 
      />

      <InputRegister 
        label="Senha" 
        type="password" 
        id="senha" 
        name="senha" 
        placeholder="Digite sua senha" 
        required={true}
        value={senha}
        onChange={(e) => setSenha(e.target.value)} 
      />

      <InputRegister 
        label="Função" 
        type="text" 
        id="funcao" 
        name="funcao" 
        placeholder="Digite sua Função" 
        required={true}
        value={funcao}
        onChange={(e) => setFuncao(e.target.value)} 
      />

      {errorMessage && <div className="error-message">{errorMessage}</div>}  {/* Exibindo erro */}

      <button type="submit" className={styles.registerButton}>Cadastrar</button>

      <div className={styles.loginContainer}>
        <p>Já tem uma conta?</p>
        <button 
          type="button" 
          className={styles.loginLink}
          onClick={() => navigate('/login')}
        >
          Fazer login
        </button>
      </div>
    </form>
  );
}
