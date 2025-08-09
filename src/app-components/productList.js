import React from "react";
import Product from "./product";

export default function productList(props) {
  return props.productList.length > 0
    ? props.productList.map((product, i) => {
        return (
          <Product
            product={product}
            key={i}
            incrementQuantity={props.incrementQuantity}
            decrementQuantity={props.decrementQuantity}
            index={i}
            remove={props.remove}
          />
        );
      })
    : "No items found in the Cart";
}
