import React from "react";
import "../helpers/css/tier.css";
import outline1 from "../helpers/images/01.png";
import outline2 from "../helpers/images/02.png";
import outline3 from "../helpers/images/03.png";
import gif from "../helpers/images/cutee.gif";
import gif2 from "../helpers/images/sponsor.gif";
import o1 from "../helpers/images/1.png";
import o2 from "../helpers/images/2.png";
import o3 from "../helpers/images/3.png";

class Tier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size1: 30,
      size2: 30,
      size3: 30,
    };
  }
  handleScroll() {
    document.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop,
        windowHeight = window.innerHeight,
        height = document.body.scrollHeight - windowHeight,
        scrollPercentage = scrollTop / height;
      if (scrollPercentage > 0.2) {
        let newSize = this.state.size1 + 10;
        this.setState({
          size1: newSize,
        });
      }
    });
  }
  render() {
    return (
      <>
        <>
          <div className="back"></div>
          <div className="about-astra">
            <h1>Why Sponsor Us?</h1>
            <p>
              The team participates in several National and International
              competitions, bagging podium positions in every event. Sponsors
              play a significant role in our achievements, and help us attain
              greater laurels. Our sponsor's logos will be displayed on all our
              prototypes, banners, publicity, news coverage material which will
              help in improving the visibility of the company. We undertake
              workshops and teaching programs in several prestigious schools and
              colleges within the city of Bengaluru. Partnering with us will
              increase the outreach and aid in the branding of the company. The
              Team comprises of undergraduates from diverse background and
              streams, who can help the establishment in the development and
              testing of the company's products and services. The contributions
              are exempted under section 80G of the Income Tax Act and can be
              attributed under the Corporate Social Responsibility (CSR). In
              lieu of support to the team, our developmental prototypes will be
              available for display at the company's promotional events,
              exhibitions and conferences, the same being communicated at least
              two weeks prior to the commencement of the event.
            </p>
          </div>
          {/*<div className="sponsorship_tiers_heading">
            <span>How can you help us?</span>
          </div>
          <div className="sponsorship_tiers_description">
            <p>
              . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, earum aut, facere nesciunt, asperiores distinctio
              dolore porro fuga rem exercitationem doloremque debitis corrupti
              architecto labore aperiam adipisci quibusdam qui saepe.
            </p>
    </div>*/}
          {/* <div id="bck">
            <div className="back" />
          </div> */}
          <div className="tier-container">
            <div className="back"></div>
            <div className="sponsorship-tiers" id="sponsorship-container">
              <div className="extra1">
                <img src={gif} alt="" className="" width={150} height={200} />
                <img src={gif2} alt="" className="" width={220} height={180} />
              </div>
              <div className="dummy"></div>
              <div className="text1">
                <p className="sponsorship-tier-number">Tier 1</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, consequuntur modi molestiae fugit tempore sunt
                  officia itaque nulla obcaecati suscipit tempora quod?
                  Doloremque impedit adipisci suscipit? Quod ad quia minima?
                </p>
              </div>
              <div className="image1">
                <img
                  src={o1}
                  alt="Tier One"
                  className=""
                  height={200}
                  width={200}
                />
              </div>
              <div className="text2">
                <p className="sponsorship-tier-number">Tier 2</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, consequuntur modi molestiae fugit tempore sunt
                  officia itaque nulla obcaecati suscipit tempora quod?
                  Doloremque impedit adipisci suscipit? Quod ad quia minima?
                </p>
              </div>
              <div className="image2">
                <img
                  src={o2}
                  alt="Tier Two"
                  className=""
                  height={200}
                  width={200}
                />
              </div>
              <div className="text3">
                <p className="sponsorship-tier-number">Tier 3</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, consequuntur modi molestiae fugit tempore sunt
                  officia itaque nulla obcaecati suscipit tempora quod?
                  Doloremque impedit adipisci suscipit? Quod ad quia minima?
                </p>
              </div>
              <div className="image3">
                <img
                  src={o3}
                  alt="Tier Three"
                  className=""
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div className="extra2"></div>
          </div>
        </>
      </>
    );
  }
}
export default Tier;
