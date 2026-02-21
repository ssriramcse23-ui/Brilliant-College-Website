import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Stats.css';

function StatsHeadline() {
  const stats = [
    { value: 1000, label: "Students" },
    { value: 120, label: "Faculty" },
    { value: 95, label: "Placement", suffix: "%" },
    { value: 5, label: "Courses" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  // Count-up animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => prev.map((c, i) => {
        const increment = Math.ceil(stats[i].value / 100);
        if (c < stats[i].value) return Math.min(c + increment, stats[i].value);
        return c;
      }));
    }, 20);
    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div className="stats-section py-5"> {/* Full-width background */}
      <div className="container text-center">
        {/* Headline */}
        <h1 className="display-4 fw-bold headline" style={{color : "#1362c9"}} >Empowering Your Future</h1>
        <p className="lead mb-5">Join thousands of students achieving success every day!</p>

        {/* Stats Cards */}
        <div className="row justify-content-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div className="p-4 rounded shadow-sm fade-in stat-card">
                <h2 className="fw-bold stat-number">
                  {counts[index]}{stat.suffix ? stat.suffix : "+"}
                </h2>
                <p className="mb-0 stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsHeadline;