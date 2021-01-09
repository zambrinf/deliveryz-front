import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./home-styles.css";
import { ReactComponent as MainImage } from "./main.svg";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido <br />
              que entregamos <br />
              pra você!
            </h1>
            <h3 className="home-subtitle">
              Escolha seu pedido e em poucos minutos <br />
              levaremos à sua porta
            </h3>
            <Link className="home-btn-order" to="/orders">
              FAZER PEDIDO
            </Link>
          </div>
          <div className="home-image">
            <MainImage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
