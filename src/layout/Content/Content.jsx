import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <hr className="horizontal-line" />
      <p className="welcome-back-text">Welcome Back</p>
      <p className="user-name-text">Jubed Ahmedd</p>
      <ContentMain />
    </div>
  )
}

export default Content
