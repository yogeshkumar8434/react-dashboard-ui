import { cardContant } from "../../data/data";
import { CardContain } from "./CardContain";
import "./TopDoctors.css";

const TopDoctors = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">
          <b>Top Doctors</b>
        </h3>
        <button className="grid-c-title-icon">
          <p className="grid-c-title-icon-text">View all</p>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M12 6L0 0v12z" fill="blue" />
          </svg>
        </button>
      </div>
      <div className="cards-grid">
        {cardContant.map((val) => {
          return (
            <CardContain
              key={val.id}
              name={val.name}
              specialist={val.specialist}
              rating={val.rating}
              img={val.avatar}
              review={val.review}
            ></CardContain>
          );
        })}
      </div>
    </div>
  );
};

export default TopDoctors;
