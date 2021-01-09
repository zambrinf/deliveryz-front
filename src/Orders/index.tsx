import React, { useEffect, useState } from "react";
import { fetchProducts, saveOrder } from "../api";
import Footer from "../Footer";
import { checkSelected } from "./helpers";
import OrderLocation from "./OrderLocation";
import "./orders-styles.css";
import OrderSummary from "./OrderSummary";
import ProductList from "./ProductList";
import StepsHeader from "./StepsHeader";
import { OrderLocationData, Product } from "./types";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { SuccessProps } from "../Success";

export default function Orders(props: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [redirect, setRedirect] = useState<string>();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        toast.warning("Erro ao listar produtos");
        setRedirect("/");
      });
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkSelected(selectedProducts, product);
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº${response.data.id}`);
        setRedirect("/success");
      })
      .catch(() => {
        toast.warning("Erro ao enviar pedido");
      });
  };

  if (redirect) {
    if (loading) {
      return <Redirect to="/" />;
    }
    const props: SuccessProps = {
      orderLocation: orderLocation!,
      products: selectedProducts,
      totalPrice: totalPrice,
    };
    return <Redirect to={{ pathname: redirect, state: props }} />;
  }

  if (loading) {
    return (
      <>
        <div className="orders-container">
          <StepsHeader />
          <h3 className="orders-loading-products w3-center">
            Carregando produtos... *caso seja o primeiro acesso o Heroku irá
            inicializar o que pode levar cerca de 30s*
          </h3>
          <OrderLocation
            onChangeLocation={(location) => setOrderLocation(location)}
          />
          <OrderSummary
            amount={selectedProducts.length}
            totalPrice={totalPrice}
            onSubmit={handleSubmit}
          />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  );
}
