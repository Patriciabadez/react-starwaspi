import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss'

interface CSSProperties extends React.CSSProperties {
  [key: string]: any;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'Luke@skywalker.com.br' && password === 'r2d2') {
      navigate('/character-list');
    } else {
      setError('Credenciais inválidas');
    }
  };

  const backgroundStyle: CSSProperties = {
    backgroundImage: `url('../../../fundo.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={backgroundStyle}>
      <div className='login'>
        <div className='container'>
        <h2 className='login-title mb-3 mt-4'>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
        />
        <button onClick={handleLogin} className="btn btn_entrar">
          Entrar
        </button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
      </div>
    </div>
  );
};

export default Login;