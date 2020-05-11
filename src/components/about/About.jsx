import React, { useState } from 'react';

const About = () => {
  const [IsOpened, setIsOpened] = useState(false);
  const [FAQ, setFAQ] = useState([
    {
      id: 1,
      question: `Why choose us for your building planner`,
      answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sit consectetur reiciendis asperiores
      blanditiis. Asperiores omnis voluptate nobis dicta alias fugit ab ullam. Qui laborum officia ipsa error,
      tenetur provident nulla aperiam ad similique ea blanditiis asperiores, cum unde consequuntur eaque illum
      minus numquam id quasi. Quas nemo perspiciatis eaque!`
    },
    {
      id: 2,
      question: `Why choose us for your building planner`,
      answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sit consectetur reiciendis asperiores
      blanditiis. Asperiores omnis voluptate nobis dicta alias fugit ab ullam. Qui laborum officia ipsa error,
      tenetur provident nulla aperiam ad similique ea blanditiis asperiores, cum unde consequuntur eaque illum
      minus numquam id quasi. Quas nemo perspiciatis eaque!`
    },
    {
      id: 3,
      question: `Why choose us for your building planner`,
      answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sit consectetur reiciendis asperiores
      blanditiis. Asperiores omnis voluptate nobis dicta alias fugit ab ullam. Qui laborum officia ipsa error,
      tenetur provident nulla aperiam ad similique ea blanditiis asperiores, cum unde consequuntur eaque illum
      minus numquam id quasi. Quas nemo perspiciatis eaque!`
    }
  ]);
  const toggle = () => {
    setIsOpened(!IsOpened);
    const navbar = document.querySelector('.box-word');
    if (!IsOpened) {
      navbar.classList.add('new');
    } else {
      navbar.classList.remove('new');
    }
  };
  return (
    <div className="about">
      <h3>About us & FAQ's</h3>
      <div className="about-grid">
        <div className="about-content">
          <div className="message">
            <h4>We build dream for better life with great idea.</h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
            <br />
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make.
            </p>
            <br />
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled
            </p>
            <div className="about-btn">
              <a to="/" className="btn">
                KNOW MORE
              </a>
            </div>
          </div>
        </div>
        <div className="questions-and-answers">
          <div className="box">
            {FAQ.map((qa) => (
              <>
                <div className="box-title" key={qa.id}>
                  <h4>{qa.question}</h4>
                  <span onClick={toggle}>{IsOpened ? '^' : '>'}</span>
                </div>
                <div className="box-word">
                  <p>{qa.answer} </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
