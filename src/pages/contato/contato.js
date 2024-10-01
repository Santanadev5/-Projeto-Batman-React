import React, { useState } from 'react'; 
import Header from '../../components/header/header';
import Logos from '../../assets/batman-pag-cont.webp';
import './styles.css';
import Footer from '../../components/footer/footer';

function Contato() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="bo">   
        <div className="container">
          <div className="form-image">
            <img id="logos" src={Logos} alt="Logos" />
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-header">
                <div className="title">
                  <h1>Cadastre-se</h1>
                </div>
                <div className="login-button">
                  <button type="button">
                    <a href="#">Entrar</a>
                  </button>
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <label htmlFor="firstname">Primeiro Nome</label>
                  <input 
                    id="firstname" 
                    type="text" 
                    name="firstname" 
                    placeholder="Digite seu primeiro nome" 
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="lastname">Sobrenome</label>
                  <input 
                    id="lastname" 
                    type="text" 
                    name="lastname" 
                    placeholder="Digite seu sobrenome" 
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="email">E-mail</label>
                  <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="Digite seu e-mail" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="number">Celular</label>
                  <input 
                    id="number" 
                    type="tel" 
                    name="number" 
                    placeholder="(xx) xxxx-xxxx" 
                    value={formData.number}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="password">Senha</label>
                  <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    placeholder="Digite sua senha" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="confirmPassword">Confirme sua Senha</label>
                  <input 
                    id="confirmPassword" 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Digite sua senha novamente" 
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <div className="gender-inputs">
                <div className="gender-title">
                  <h6>Gênero</h6>
                </div>

                <div className="gender-group">
                  <div className="gender-input">
                    <input 
                      id="female" 
                      type="radio" 
                      name="gender" 
                      value="female"
                      onChange={handleInputChange}
                      checked={formData.gender === 'female'}
                    />
                    <label htmlFor="female">Feminino</label>
                  </div>

                  <div className="gender-input">
                    <input 
                      id="male" 
                      type="radio" 
                      name="gender" 
                      value="male"
                      onChange={handleInputChange}
                      checked={formData.gender === 'male'}
                    />
                    <label htmlFor="male">Masculino</label>
                  </div>

                  <div className="gender-input">
                    <input 
                      id="others" 
                      type="radio" 
                      name="gender" 
                      value="others"
                      onChange={handleInputChange}
                      checked={formData.gender === 'others'}
                    />
                    <label htmlFor="others">Outros</label>
                  </div>

                  <div className="gender-input">
                    <input 
                      id="none" 
                      type="radio" 
                      name="gender" 
                      value="none"
                      onChange={handleInputChange}
                      checked={formData.gender === 'none'}
                    />
                    <label htmlFor="none">Prefiro não dizer</label>
                  </div>
                </div>
              </div>

              <div className="continue-button">
                <button type="submit">Continuar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contato;
