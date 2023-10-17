import React from 'react';
import Analytic from '../../assets/svg/analysis.svg';
import Profiles from '../../assets/svg/profiles.svg';
import Contact from '../../assets/svg/mobile-phone.svg';

function FeatureSection2() {
  return (
    <>
      <section id="secondary">
        <div class="cols container-lg">
          <section id="always-improving">
            <img
              src={Analytic}
              alt="Your SVG"
              style={{ width: '250px', height: '250px' }} // Adjust the size as needed
            />
            <h2 class="common-UppercaseText">Reporting and Analytics</h2>
            <p class="common-BodyText">
              Gain valuable insights through data visualization and detailed
              reports, aiding informed decision-making and strategy development
              based on trends, patterns, and performance metrics.
            </p>
            <a
              class="common-BodyText common-Link common-Link--arrow"
              href="firewall"
            >
              Learn More
            </a>
          </section>

          <section id="global-scale">
            <img
              src={Profiles}
              alt="Your SVG"
              style={{ width: '250px', height: '250px' }} // Adjust the size as needed
            />
            <h2 class="common-UppercaseText">Profile Management</h2>
            <p class="common-BodyText">
              Maintain comprehensive profiles for each user or entity, enabling
              personalized experiences and efficient record-keeping of essential
              details and interactions.
            </p>
            <a class="common-BodyText common-Link common-Link--arrow" href="ip">
              Learn More
            </a>
          </section>
        </div>
        <div className="talk-style">
          <span>Interested? Let's talk</span>
          <img
            src={Contact}
            alt="Your SVG"
            style={{ width: '250px', height: '250px' }} // Adjust the size as needed
          />
        </div>
      </section>

      <br />
    </>
  );
}

export default FeatureSection2;
