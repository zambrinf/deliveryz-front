import React, { useEffect, useState } from "react";
import { fetchProducts, saveOrder } from "../api";
import Footer from "../Footer/Footer";
import { checkSelected } from "./helpers";
import OrderLocation from "./OrderLocation";
import "./orders-styles.css";
import OrderSummary from "./OrderSummary";
import ProductList from "./ProductList";
import StepsHeader from "./StepsHeader";
import { OrderLocationData, Product } from "./types";
import { toast } from "react-toastify";

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch(() => toast.warning("Erro ao listar produtos"));
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
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning("Erro ao enviar pedido");
      });
  };

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
