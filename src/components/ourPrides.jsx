import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ourPrides.css';

function OurPrides() {
  // Images and corresponding text content + year
  const prides = [
    {
      year: "2016",
      img: "pride1.webp",
      text: "The first B.Ed. College opened in Thiruthuraipoondi offering access to quality Higher Education for rural parts of Thiruthuraipoondi town of Thiruvarur District. Affiliated to Tamilnadu Teachers Education University and recognized by NCTE, New Delhi."
    },
    {
      year: "2017",
      img: "pride2.webp",
      text: "The first Integrated College in Thiruvarur district and among the Top 10 colleges in Tamilnadu to offer B.Sc.B.Ed. program. This innovative program allows students to complete UG + professional B.Ed. degree in just 4 years, saving time and money."
    },
    {
      year: "2025",
      img: "pride3.webp",
      text: "The first B.Ed. College to get converted into a Multidisciplinary Institution in Tamilnadu. Early adopter of National Education Policy, giving students access to UG courses like AI, Machine Learning, and Computer Science for better job opportunities."
    }
  ];

  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setTimeout(() => { // stagger animation
              setVisible(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200); // stagger 200ms
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="our-prides-section py-5">
      <div className="container text-center">
        <h2 className="display-5 fw-bold headline mb-5" style={{color : "#1362c9"}}>Our Prides</h2>

        <div className="row justify-content-center">
          {prides.map((pride, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div
                ref={el => cardRefs.current[index] = el}
                data-index={index}
                className={`rounded shadow-sm pride-card ${visible[index] ? 'animate-in' : 'hidden-card'}`}
              >
                <img src={pride.img} alt={`Pride ${index + 1}`} className="pride-img" />
                <h3 className="pride-year mt-3">{pride.year}</h3>
                <p className="pride-text p-3">{pride.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPrides;