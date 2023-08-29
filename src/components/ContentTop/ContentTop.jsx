import { iconsImgs, personsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { searchIcon } from "../../data/data";

const ContentTop = () => {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="" />
        </button>
        <h3 className="content-top-title"></h3>

        <div className="drop-down">
          <div className="select-container">
            <div className="select-icon">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M6 0L0 6h12z" />
              </svg>
            </div>
            <select value={dropdownOptions} className="custom-select">
              <option className="drop-down-value" value="Default">
                Default
              </option>
              {dropdownOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="search-bar">
          <div className="search-icon">
            <img
              src={searchIcon.image}
              className="search"
              alt={searchIcon.title}
            />
          </div>
          <input
            type="text"
            placeholder="Search by doctor's name/ speciality etc.."
            className="search-input"
          />
        </div>
      </div>
      <div className="content-top-btns">
        <button className="notification-btn content-top-btn">
          <img src={iconsImgs.bell} alt="bell icon" />
          <span className="notification-btn-dot"></span>
        </button>
        <div className="vertical-line"></div>
        <div className="user-info-avatar">
          <div className="info-img-avatar img-fit-cover">
            <img src={personsImgs.person_one} alt="profile image" />
          </div>
          <div className="select-icon-avatar">
            <svg width="12" height="12" viewBox="0 0 12 12" >
              <path d="M6 12L12 6H0z" fill="#858585"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
