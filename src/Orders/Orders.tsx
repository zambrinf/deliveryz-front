import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import OrderLocation from "./OrderLocation";
import "./orders-styles.css";
import ProductList from "./ProductList";
import StepsHeader from "./StepsHeader";
import { OrderLocationData, Product } from "./types";

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
    </div>
  );
}
