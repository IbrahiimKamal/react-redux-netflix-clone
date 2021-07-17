import Banner from '../../components/Banner/Banner';
import Nav from '../../components/Nav/Nav';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
    </div>
  );
};

export default HomeScreen;
