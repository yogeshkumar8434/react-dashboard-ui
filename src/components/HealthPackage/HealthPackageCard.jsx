import { healthPackageCard } from "../../data/data";
import { HealthPackage } from "./HealthPackage";
import "./HealthPackage.css";

const HealthPackageCard = () => {
  return (
    <div>
      <div className="heading">
        <p className="heading-first">Health Package</p>
        <p className="view-all">
          View all{" "}
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M12 6L0 0v12z" fill="blue" />
          </svg>
        </p>
      </div>
      <div className="box-container-health">
        {healthPackageCard.map((val) => {
          return (
            <HealthPackage
              key={val.id}
              name={val.name}
              avatar={val.avatar}
              subtitle={val.subtitle}
            ></HealthPackage>
          );
        })}
      </div>
    </div>
  );
};

export default HealthPackageCard;
