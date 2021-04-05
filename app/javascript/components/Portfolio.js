import React from "react";
import pro1 from "../../assets/images/desert2.jpg";
import pro2 from "../../assets/images/desert2.jpg";
import pro3 from "../../assets/images/desert2.jpg";
import pro4 from "../../assets/images/desert2.jpg";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "../../../node_modules/react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  
  const openPopupbox1 = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={pro1} alt="Project 1..."/>
    <p> asdfasdfasdfasdfasdf</p>
    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://polimium.herokuapp.com/")}>https://polimium.herokuapp.com/</a>
    </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Polimium 1",
        },
      },
    });
  }

  const popupboxConfig1 = {
    titleBar: {
      enable: true,
      text: "Polimium clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupbox2 = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={pro1} alt="Project 2..."/>
    <p> asdfasdfasdfasdfasdf</p>
    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://polimium.herokuapp.com/")}>https://polimium.herokuapp.com/</a>
    </>
    )
    PopupboxManager.open({ content });
      PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Polimium 2",
        },
      },
    });
  }

  const popupboxConfig2 = {
    titleBar: {
      enable: true,
      text: "Polimium clone project.2"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupbox3 = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={pro1} alt="Project 3..."/>
    <p> asdfasdfasdfasdfasdf</p>
    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://polimium.herokuapp.com/")}>https://polimium.herokuapp.com/</a>
    </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Polimium 3",
        },
      },
    });
  }

  const popupboxConfig3 = {
    titleBar: {
      enable: true,
      text: "Polimium clone project.3"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupbox4 = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={pro1} alt="Project 4..."/>
    <p> asdfasdfasdfasdfasdf</p>
    <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://polimium.herokuapp.com/")}>https://polimium.herokuapp.com/</a>
    </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Polimium 4",
        },
      },
    });
  }

  const popupboxConfig4 = {
    titleBar: {
      enable: true,
      text: "Polimium clone project.4"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
        <div className="portfolio-image-box" onClick={openPopupbox1}>
          <img className="portfolio-image" src={pro1} alt="project 1..."/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="portfolio-image-box" onClick={openPopupbox2}>
          <img className="portfolio-image" src={pro2} alt="project 2..."/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="portfolio-image-box" onClick={openPopupbox3}>
          <img className="portfolio-image" src={pro3} alt="project 3..."/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="portfolio-image-box" onClick={openPopupbox4}>
          <img className="portfolio-image" src={pro4} alt="project 4..."/>
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig1} />
      <PopupboxContainer {...popupboxConfig2} />
      <PopupboxContainer {...popupboxConfig3} />
      <PopupboxContainer {...popupboxConfig4} />
    </div>
  )
}

export default Portfolio;
