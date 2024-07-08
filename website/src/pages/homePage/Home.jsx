import React from 'react';
import LeftBody from '../../components/leftBodySection/LeftBody';
import './Home.css';
import Hero from '../../components/heroSection/Hero';

const Home = () => {
  return (
    <div className="homeBody">
      <div className="heroctr">
        <Hero />
      </div>
      <div className="bodyCtr">
        <div className="leftCtr">
          <LeftBody />
        </div>
        <div className="rightCtr">leftCtr</div>
      </div>
    </div>
  );
};

export default Home;
