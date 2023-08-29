
export const HealthPackage = ({name, avatar, subtitle}) => {
  return (
    <div className="box-health-box ">
      <div className="box-header-health">
        <div className="info-img-avatar-health-products img-fit-cover avatar avatar-health-box">
          <img src={avatar} alt="profile image" />
        </div>
        <div className="health-box-title-subtitle">
          <p className="health-box-name">
            <b>{name}</b>
          </p>
          <p className="health-box-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="three-dots">
        <b>. . .</b>
      </div>
    </div>
  )
}
