import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import "./orders-styles.css";
import ProductList from "./ProductList";
import StepsHeader from "./StepsHeader";
import { Product } from "./types";

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductList products={products} />
    </div>
  );
}
