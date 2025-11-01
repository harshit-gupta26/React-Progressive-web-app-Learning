import React from "react";
import {
  FaPhp,
  FaJava,
  FaReact,
  FaPython,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaCuttlefish,
  FaCode,
} from "react-icons/fa";
import "./Tutorials.css";

const Tutorials = () => {
  const tutorials = [
    {
      title: "PHP Tutorial",
      desc: "Learn backend scripting with PHP.",
      icon: <FaPhp />,
    },
    {
      title: "C++ Tutorial",
      desc: "Master object-oriented programming.",
      icon: <FaCode />,
    },
    {
      title: "Java Tutorial",
      desc: "Develop robust backend systems.",
      icon: <FaJava />,
    },
    {
      title: "React JS Tutorial",
      desc: "React is an open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!",
      icon: <FaReact />,
    },
    {
      title: "C Tutorial",
      desc: "C language is considered as the mother language of all programming languages. It is a powerful general-purpose programming language. It can be used to develop software like database, OS, compiler, etc.",
      icon: <FaCuttlefish />,
    },
    {
      title: "Python Tutorial",
      desc: "Python is a high-level, interpreted, general-purpose programming language.",
      icon: <FaPython />,
    },
    {
      title: "JavaScript Tutorial",
      desc: "JavaScript is a lightweight, cross-platform, OOP language.",
      icon: <FaJs />,
    },
    {
      title: "CSS Tutorial",
      desc: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media.",
      icon: <FaCss3Alt />,
    },
    {
      title: "HTML Tutorial",
      desc: "The word hypertext markup language is composed of the words “hypertext” and “markup language”. The term hypertext refers to the linking of text with other documents and markup language  refers to a language that uses a set of tags.",
      icon: <FaHtml5 />,
    },
  ];

  return (
    <section className="tutorials-page">
      <h1>🎓 Explore Tutorials</h1>
      <p>Choose a topic and start learning with interactive guides.</p>

      <div className="tutorials-grid">
        {tutorials.map((tutorial, index) => (
          <div className="tutorial-card" key={index}>
            <div className="tutorial-icon">{tutorial.icon}</div>
            <h2>{tutorial.title}</h2>
            <p>{tutorial.desc}</p>
            <button className="learn-btn">Start Learning</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
