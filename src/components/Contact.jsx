import React, { useRef, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Contact.css';

function Contact() {
  const formRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section py-5">
      <div className="container" ref={formRef}>
        <h2 className={`display-5 fw-bold headline mb-4 ${visible ? 'animate-in' : 'hidden-card'}`}>
          Contact Us
        </h2>
        <p className={`lead mb-5 text-center ${visible ? 'animate-in' : 'hidden-card'}`}>
          Have any questions? We'd love to hear from you.
        </p>

        <form className={`contact-form ${visible ? 'animate-in' : 'hidden-card'}`} onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Your Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="form-floating mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Your Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="form-floating mb-4">
            <textarea 
              className="form-control" 
              placeholder="Your Message" 
              id="message" 
              style={{height: '120px'}}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Your Message</label>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-contact px-5 py-2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;