import React from "react";
import '../helpers/css/domains.css';
import { domains } from './domain_info.js'
import { domain_comp } from './domain_info.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faGears} from "@fortawesome/free-regular-svg-icons"
import { faRss, faCircleNodes, faMicrochip, faEye, faLocationDot, faMountainCity, faGears, faWrench, faCode, faBrain, faDharmachakra, faScrewdriverWrench, faCartFlatbed, faPlug, faCarBattery } from "@fortawesome/free-solid-svg-icons"

import Footer from "../Footer";
function Domain() {

  return (
    <div className="domain_block">
      {domains.map(domain => (
        <div className="domain" key={domain.id}>

          <div className="domain_text">
            <h1>{domain.title}</h1>
            <p>{domain.desc}</p>
            {/* <a href="#">Button</a> */}
            <div className="domain_comp">

              {domain_comp.map(component => (
                component.domain_id === domain.id &&
                <div className="comp">
                  {component.id === 1 && <FontAwesomeIcon icon={faGears} size = "xl"/>}
                  {component.id === 2 && <FontAwesomeIcon icon={faRss} size = "xl"/>}
                  {component.id === 3 && <FontAwesomeIcon icon={faCircleNodes} size = "xl"/>}
                  {component.id === 4 && <FontAwesomeIcon icon={faMicrochip} size = "xl"/>}
                  {component.id === 5 && <FontAwesomeIcon icon={faEye} size = "xl"/>}
                  {component.id === 6 && <FontAwesomeIcon icon={faLocationDot} size = "xl"/>}
                  {component.id === 7 && <FontAwesomeIcon icon={faMountainCity} size = "xl"/>}
                  {component.id === 8 && <FontAwesomeIcon icon={faWrench} size = "xl"/>}
                  {component.id === 9 && <FontAwesomeIcon icon={faCode} size = "xl"/>}
                  {component.id === 10 && <FontAwesomeIcon icon={faBrain} size = "xl"/>}
                  {component.id === 11 && <FontAwesomeIcon icon={faDharmachakra} size = "xl"/>}
                  {component.id === 12 && <FontAwesomeIcon icon={faScrewdriverWrench} size = "xl"/>}
                  {component.id === 13 && <FontAwesomeIcon icon={faCartFlatbed} size = "xl"/>}
                  {component.id === 14 && <FontAwesomeIcon icon={faPlug} size = "xl"/>}
                  {component.id === 15 && <FontAwesomeIcon icon={faCarBattery} size = "xl"/>}
                  <p>{component.comp}</p>
                </div>
              ))}

            </div>
          </div>

          <div className="domain_img">
            <img src={domain.image} alt="domain_image" />
          </div>

        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Domain;
