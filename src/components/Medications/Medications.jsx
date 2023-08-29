import "./Medications.css";

const Medications = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">
          <b>Medications</b>
        </h3>
        <button className="grid-c-title-icon">
          <b>. . .</b>
        </button>
      </div>

      <div className="boxes-container">
        <div className="separator" />
        <div className="box">
          <p className="name">Acetaminophen 500 mg</p>
          <p className="bio">Take with food every morning</p>
        </div>
        <div className="separator" />
        <div className="box">
          <p className="name">Doxycycline 100 mg</p>
          <p className="bio">Take 1 with foood twice a day, and avoid drining alcohol for 2 hours after.</p>
        </div>
        <div className="separator" />
        <div className="box">
          <p className="name">Hydrochlorothiazide 23 mg</p>
          <p className="bio">Take 3 tablets 3 time a day for 7 days.</p>
        </div>
      </div>
    </div>
  )
}

export default Medications
