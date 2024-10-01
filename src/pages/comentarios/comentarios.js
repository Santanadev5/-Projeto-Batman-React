import React from "react"
import Header from "../../components/header/header";
import './styles.css';
import Footer from "../../components/footer/footer";
import Logos from '../../assets/batmancomentario.jpg';

function Comentario() {
  return (
    <>
        <Header />
        <div className="bo">   
          <div className="container">
            <div className="form-image">
            <img id="logos" src={Logos}/>
            </div>
            <div className="form">
              <form action="#">
                <div className="form-header">
                  <div className="title">
                    <h1>Comentarios</h1>
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
                      required
                    />
                  </div>

                  <div className="caixaM">
                    <textarea
                      name="mensagem"
                      id="mensagem"
                      rows="10"
                      placeholder="Digite sua mensagem"
                    />
                  </div>

                  <div className="caixaM">
                    <textarea
                      name="mensagem2"
                      id="mensagem2"
                      rows="10"
                      placeholder="Digite sua segunda mensagem"
                    />
                  </div>
                </div>

                <div className="continue-button">
                  <button type="submit">ENVIAR</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
        </>


  );
}

export default Comentario;
