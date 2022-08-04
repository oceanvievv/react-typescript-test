import { IProduct } from "../models";
import { useState } from "react";
import "./product.css";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-blue-300" : "bg-blue-400";

  const btnClasses = ["py-2 px-4 border rounded mt-5", btnBgClassName];

  return (
    <div className="border bg-green-100 py-6 px-4 rounded flex flex-col items-center mb-5">
      <img src={product.image} className="w-1/6 mb-5" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold mt-2">{product.price}</span>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide details" : "Get details"}
      </button>

      {details && (
        <div className="mt-5">
          <p className="text-center">{product.description}</p>
          {product && product.rating && (
            <p className="text-center mt-2">
              Rate:&nbsp;
              <span style={{ fontWeight: "bold" }}>{product.rating.rate}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
