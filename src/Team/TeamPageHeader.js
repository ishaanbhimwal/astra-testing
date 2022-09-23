import { removeData } from "jquery";
import React from "react";
import "../helpers/css/TeamPageHeader.css";
class TeamPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          background: "#2A2C39",
          text: "#ffffff",
          bold: "#FF4056",
        },
        {
          background: "#FCF751",
          text: "#2A2C39",
          bold: "#14151c",
        },
      ],
      background: null,
      text: null,
      bold: null,
    };
  }

  componentDidMount() {
    this.RandomBackground();
  }

  RandomBackground() {
    let getRandomInt = (min, max) => {
      return 0/*Math.floor(Math.random() * (max - min + 1) + min);*/
    };

    let RandomID = getRandomInt(0, 1),
      SelectColor = this.state.colors[RandomID];

    this.setState({
      background: this.state.colors[RandomID].background,
      text: this.state.colors[RandomID].text,
      bold: this.state.colors[RandomID].bold,
    });
  }

  render() {
    const { normalText, emphasisText } = { ...this.props };
    let sectionStyle = {
      backgroundColor: this.state.background,
      color: this.state.text,
    };
    let boldStyle = {
      color: this.state.bold
    };

    return (
      <section
        className="teamPageHeader"
        style={sectionStyle}
      >
        <h1 className="middle">
          {normalText}{" "}
          <span className="bold" style={boldStyle}>
            {emphasisText}
          </span>
          .
        </h1>
      </section>
    );
  }
}

export default TeamPageHeader;
