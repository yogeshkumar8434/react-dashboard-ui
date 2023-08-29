import "./PopularProducts.css";
import { popularProductsCard } from "../../data/data";
import { BoxCard } from "./BoxCard";

const PopularProducts = () => {
  return (
    <div>
      <div className="heading">
        <p className="heading-first">Popular Products</p>
        <p className="view-all">
          View all{" "}
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M12 6L0 0v12z" fill="blue" />
          </svg>
        </p>
      </div>
      <div className="box-container">
        {popularProductsCard.map((val) => {
          return (
            <BoxCard
              key={val.id}
              name={val.name}
              price={val.price}
              discount={val.discount}
              avatar={val.avatar}
            ></BoxCard>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
