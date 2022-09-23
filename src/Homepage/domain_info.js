// import {faGear} from "@fortawesome/free-solid-svg-icons"

import domain from "../helpers/images/domain_img.jpg"
import domain1 from "../helpers/images/Embedded_systems.png"
import domain2 from "../helpers/images/computer-vision-illustration.png"
import domain3 from "../helpers/images/Control_system_illustration.png"

export const domains = [
    {
        title: 'Embedded System',
        desc: 'Brain of the robot',
        image: domain1,
        id: 1
    },
    {
        title: 'Computer Vision',
        desc: 'Perception of the environment',
        image: domain2,
        id: 2
    },
    {
        title: 'Control System',
        desc: 'Movement and functions of the robot',
        image: domain3,
        id: 3
    },
    {
        title: 'Mechanical',
        desc: 'Robust design of structure of the robot',
        image: domain,
        id: 4
    },
    {
        title: 'BMS',
        desc: 'Providing power to the robot',
        image: domain,
        id: 5
    },
]

export const domain_comp = [
    { comp: 'Controlling actuators', icons: "Gear", domain_id: 1, id: 1 },
    { comp: 'Receiving signals from sensors', icons: "Rss", domain_id: 1, id: 2 },
    { comp: 'Managing data connections from the processing unit to external components', icons: "Gear", domain_id: 1, id: 3 },
    { comp: 'Designing custom printed circuit boards', icons: "Gear", domain_id: 1, id: 4 },
    { comp: 'Sensors and cameras', icons: "Gear", domain_id: 2, id: 5 },
    { comp: 'Autonomous Navigation', icons: "Gear", domain_id: 2, id: 6 },
    { comp: 'Assistance for traversal of any terrain', icons: "Gear", domain_id: 2, id: 7 },
    { comp: 'Mechanical aspects', icons: "Gear", domain_id: 3, id: 8 },
    { comp: 'System Programming', icons: "Gear", domain_id: 3, id: 9 },
    { comp: 'Artificial Intelligence', icons: "Gear", domain_id: 3, id: 10 },
    { comp: 'Drive and suspension', icons: "Gear", domain_id: 4, id: 11 },
    { comp: 'Chassis and mounts', icons: "Gear", domain_id: 4, id: 12 },
    { comp: 'Instruments for objects transportation', icons: "Gear", domain_id: 4, id: 13 },
    { comp: 'Develop custom solutions to distribute power', icons: "Gear", domain_id: 5, id: 14 },
    { comp: 'Coordinate with mechanical team to develop the best power delivery system for their needs', icons: "Gear", domain_id: 5, id: 15 }
]
