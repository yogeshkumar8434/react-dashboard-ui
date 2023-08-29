import { personsImgs } from "../../utils/images";
import "./UpcomingConsultationnt.css";

const UpcomingConsultationnt = () => {
  return (
    <div>
      <div className="heading">
        <p className="heading-first">Upcoming Consultationnt</p>
      </div>

      <div className="box-upcoming-con-box">
        <div className="box-header-upcoming-con">
          <div className="info-img-avatar-upcoming-con-products img-fit-cover avatar avatar-upcoming-con-box">
            <img src={personsImgs.person_three} alt="profile image" />
          </div>
          <div className="upcoming-con-box-title-subtitle">
            <p className="upcoming-con-box-name">
              <b>Dr. Darlene Robertson</b>
            </p>
            <p className="upcoming-con-box-subtitle">Dental Specialist</p>
          </div>
        </div>

        <div className="upcoming-event-details">
          <span className="event-date">
            {" "}
            <svg
              className="calendar-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="M22.5 3H21V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h-4V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1H7V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H2.5A1.5 1.5 0 0 0 1 4.5v18A1.5 1.5 0 0 0 2.5 24h20a1.5 1.5 0 0 0 1.5-1.5v-18A1.5 1.5 0 0 0 22.5 3zM19 2h1v3h-1zm-7 0h1v3h-1zM5 2h1v3H5zM2.5 4H4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h1.5a.5.5 0 0 1 .5.5V8H2V4.5a.5.5 0 0 1 .5-.5zm20 19h-20a.5.5 0 0 1-.5-.5V9h21v13.5a.5.5 0 0 1-.5.5z"
                fill="#231f20"
              />
            </svg>
            <p>27 Oct 2021</p>
          </span>

          <span className="event-time">
            <svg
              className="clock-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <defs>{/* <style>.cls-1{fill:#231f20}</style> */}</defs>
              <g id="clock_1" data-name="clock 1">
                <path
                  className="cls-1"
                  d="M12.5 1A11.5 11.5 0 1 0 24 12.5 11.51 11.51 0 0 0 12.5 1zm0 22A10.5 10.5 0 1 1 23 12.5 10.51 10.51 0 0 1 12.5 23z"
                />
                <path
                  className="cls-1"
                  d="M13 12.6V5.5a.5.5 0 0 0-1 0v7.32a.48.48 0 0 0 .16.36l5 4.68a.45.45 0 0 0 .34.14.5.5 0 0 0 .34-.86z"
                />
              </g>
            </svg>
            11:00 - 12:00 AM
          </span>
        </div>

        <div className="button">
          <div className="cancel-button">
            <button>Cancel</button>
          </div>
          <div className="reschedule-button">
            <button>Reschedule</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingConsultationnt;
