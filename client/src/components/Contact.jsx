import React from 'react';

const Contact = () => {
  return (
    <div className="d-flex flex-column" id="contact">
      
      <header className="py-1 bg-primary text-white text-center shadow">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">Contact Me</h1>
          <p className="lead animate__animated animate__fadeIn animate__delay-1s">
          I'd love to hear from you. Drop us a message and we'll get back to you shortly.
          </p>
        </div>
      </header>
      {/* Contact Section */}
    <main
      className="py-5 d-flex flex-column align-items-center"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container px-4">
        <div className="card border-0 rounded-4 overflow-hidden">
          
          <div className="p-4">
            <h5 className="fw-bold mb-3 text-center">Send a Message</h5>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control border-0 bg-light"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control border-0 bg-light"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control border-0 bg-light"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-md-6">
                  <select className="form-select border-0 bg-light">
                    <option value="">Select Topic</option>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0 bg-light"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                    style={{
                      background: "linear-gradient(45deg, #0062cc 0%, #0096ff 100%)",
                      border: "none",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Contact;