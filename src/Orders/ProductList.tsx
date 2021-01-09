import { checkSelected } from "./helpers";
import "./orders-styles.css";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  selectedProducts: Product[];
};

export default function ProductList({
  products,
  onSelectProduct,
  selectedProducts,
}: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkSelected(selectedProducts, product)}
          />
        ))}
        <p className="observacao">
          ** caso esteja acessando pela primeira vez pode ser necessário
          aguardar o Heroku inicializar **
        </p>
      </div>
    </div>
  );
}
