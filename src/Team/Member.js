export const teamData = [
  {
    img1: "https://i.pinimg.com/564x/54/12/1d/54121d42396f39c4e71567749d591a65.jpg",
    name1: "RAHUL",
    desig1: "Team Lead",
    description1: "Motivation for innovation helps me to evolve into a leads from a follower."
  },
  {
    img1: "https://i.pinimg.com/564x/5f/d6/f4/5fd6f45edadf1c108c754dc182365f10.jpg",
    name1: "KIRAN",
    desig1: "Team Lead",
    description1: "Not a searcher for consensus but a molder of it helps me to become a genuine leader."
  },
  {
    img1: "https://i.pinimg.com/564x/f3/b4/d1/f3b4d19decb98671f47a348643842e1e.jpg",
    name1: "SAKSHAM",
    desig1: "Teachnical Lead",
    description: "In a tech world which is changing quickly, it's quite risky for me not to take a risk."
  },
  {
    img1: "https://i.pinimg.com/736x/ca/b4/90/cab490f5f3fbba9c6ffca415c692b79a.jpg",
    name1: "ARJUN",
    desig1: "Mechanical Lead",
    description1: "The great happiness of life, I find, after all, to consist in regular discharge of some MECHANICAL DUTY."
  },
  {
    img1: "https://i.pinimg.com/564x/3a/eb/40/3aeb40ea943e1c72b953fa4e9b3a9113.jpg",
    name1: "DHANUSH",
    desig1: "Electronics Lead",
    description1: "Lost in the electronic architecture of robotics with a keen interest in predictive analytics."
  },
  {
    img1: "https://i.pinimg.com/564x/d9/85/a1/d985a1bb65f10c093d27cf56f8639f0a.jpg",
    name1: "ANVAY",
    desig1: "Electronics Lead",
    description1: "Passionate to make complex PCB designs simple, them lowering the system cost using FPGA integral."
  },
  {
    img1: "https://i.pinimg.com/564x/d8/ad/8d/d8ad8dce33d8991ffd2bdbaac7649e6a.jpg",
    name1: "ADITYA",
    desig1: "Software Lead",
    description1: "Yet to be decided."
  },
  {
    img1: "https://i.pinimg.com/564x/35/6c/42/356c42cda77596659b4f1c246e752017.jpg",
    name1: "SHASHANK",
    desig1: "Software Lead",
    description1: "Competitor-focused have to wait for competition, quality-focused motivates me to become the competitor."
  },
   {
    img1: "https://i.pinimg.com/564x/35/6c/42/356c42cda77596659b4f1c246e752017.jpg",
    name1: "SHRAVASTI",
    desig1: "Software Lead",
    description1: "Yet to be decided."
  },
  {
    img1: "https://i.pinimg.com/564x/16/00/fd/1600fdab611480f75641beebb2f743d1.jpg",
    name1: "ROHITH",
    desig1: "Event Management",
    description1: "Yet to be decided."
  },
  {
    img1: "https://i.pinimg.com/564x/6d/93/84/6d9384bd55361e4a6cc48623f19fffec.jpg",
    name1: "SWETHA",
    desig1: "Social Media",
    description1: "Piercing the mundane to find the marvelous, helps me to make my designs look fabulous."
  },
  {
    img1: "https://i.pinimg.com/564x/0e/fe/7d/0efe7d3c8ef9ef2397724600bb0edd76.jpg",
    name1: "MUTHU",
    desig1: "Treasurer & Sponsorships",
    description1: "Knowledge is the treasure, but judgement is the treasurer of a wise personality."
  },
  {
    img1: "https://i.pinimg.com/564x/a3/84/4c/a3844c61ebed971eaf947953482e62f8.jpg",
    name1: "KRISHNA",
    desig1: "Inventory",
    description1: "Yet to be decided."
  },
];

export default function Member(props) {
  const data = teamData[props.id];
  return (
    <div className="team_alt_wrap">
      <div className="team_alt_card">
        <div className="team_alt_card-liner">
          <figure>
            <img src={data.img1} alt="Member Image" />
          </figure>
          <div className="team_alt_card--social">
            <ul>
              <li className="twitter">
                <a href="#0">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="linkedin">
                <a href="#0">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="team_alt_card--title">
            <h3>{data.name1}</h3>
            <p>{data.desig1}</p>
          </div>
          <div className="team_alt_card--desc">
            <hr />
            <p>
            {data.description1}
            </p>
          </div>
          <div className="team_alt_card--btn">
            <a href="#0">
              <span className="team_alt_moreinfo">
                <i className="fa fa-info-circle"></i> More Info
              </span>
              <span className="team_alt_fullprof">View Full Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
