import { useState } from "react";
import logo from "../../assets/imgs/logo.png";
import exit from "../../assets/icons/exit.png";
import search from "../../assets/icons/search.png";
import Foto1 from "../../assets/imgs/Card_Img1.png";
import Foto2 from "../../assets/imgs/Card-img2.png";
import Foto3 from "../../assets/imgs/Card-img3.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <p className="title-logo">AutoLuby</p>
          <input type="search" className="search" >            
            </input>
        </div>

        <button className="btn-logout">
          Sair
          <img src={exit} alt="exit"></img>
        </button>
        <section>
          <p className="p1">Bem-vindo, Adriano</p>
          <label className="menu">Menu</label>
        </section>

        <div className="div-central">
          <div className="card" >
            <div className="section">
              <img src={Foto1} alt="Foto1" />
            </div>
            <p className="card-p1"> Veículos reservados e vendidos</p>
            <label className="card-p2"> Veículos reservados e vendidos por você</label>
            <label className="card-p3"> 0 veículos</label>
          </div>
            <section hight='10px'/>


          <div className="card" onClick={() => navigate('/cars')}>
            <div className="section">
              <img src={Foto2} alt="Foto2" />
            </div>
            <p className="card-p1"> Listagem geral de veículos</p>
            <label className="card-p2"> Listagem de veículos de toda a empresa</label>
            <p className="card-p3"> 7 veículos</p>
          </div>
          <section height='10px'/>


          <div className="card" onClick={() => navigate('/employees')}>
            <div className="section">
              <img src={Foto3} alt="Foto3" />
            </div>
            <p className="card-p1"> Funcionários da empresa</p>
            <label className="card-p2"> Listagem de todos os funcionários da empresa</label>
            <p className="card-p3"> 5 funcionários</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;
