import { Link, useLocation } from "react-router-dom";
import { formatPrice } from "../Orders/helpers";
import { OrderLocationData, Product } from "../Orders/types";
import "./success-styles.css";
import "../w3css.css";
import React from "react";
import Footer from "../Footer";

export type SuccessProps = {
  orderLocation: OrderLocationData;
  products: Product[];
  totalPrice: number;
};
export default function Success(props: SuccessProps) {
  let location = useLocation<SuccessProps>();
  console.log(location.state?.orderLocation);
  return (
    <>
      <div className="success-container">
        <div className="success-content">
          <h1 className="success-title w3-center">
            Pedido enviado com sucesso!
          </h1>
          <h3 className="success-subtitle">Confira as informações abaixo</h3>
          <div className="w3-container">
            {location.state?.orderLocation.address}
          </div>
          <div className="w3-row success-table">
            <table className="w3-table">
              <tr>
                <th>Produto</th>
                <th>Preço</th>
              </tr>
              {location.state?.products.map((prod) => (
                <>
                  <tr>
                    <td>{prod.name}</td>
                    <td>{formatPrice(prod.price)}</td>
                  </tr>
                </>
              ))}
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>{formatPrice(location.state?.totalPrice)}</strong>
                </td>
              </tr>
            </table>
            <Link className="success-btn-home w3-center" to="/">
              INÍCIO
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
