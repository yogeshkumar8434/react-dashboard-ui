import "./ContentMain.css";
import TopDoctors from "../TopDoctors/TopDoctors";
import Medications from "../Medications/Medications";
import PopularProducts from "../PopularProductsBox/PopularProducts";
import HealthPackageCard from "../HealthPackage/HealthPackageCard";
import UpcomingConsultationnt from "../UpcomingConsultationnt/UpcomingConsultationnt";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <TopDoctors />
            <Medications />
        </div>

        <div className="content-grid-two">
            <PopularProducts />
            <div className="grid-two-item">
              <div className="subgrid-two">
                <HealthPackageCard />
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <UpcomingConsultationnt />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain
