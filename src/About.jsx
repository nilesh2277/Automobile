import "./About.css";

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <header className="about-hero">
        <h1>About Sinha Interprises Pvt. Ltd</h1>
        <p>
          Turning Passion into Excellence in AutoParts Industry
        </p>
      </header>

      {/* Company Story */}
      <section className="company-story">
        <h2>Our Journey</h2>
        <p>
          Sinha Interprises was founded by <strong>Mr. Rajesh Kumar Sinha</strong>
          with a very small capital but an enormous vision. With immense patience,
          dedication, and hard work, the company has grown steadily and became a
          <strong> Private Limited Company in 2019</strong>. Mr. Sinha’s story is
          highly motivating, demonstrating that with perseverance, dreams can be
          realized.
        </p>
      </section>

      {/* Founder Highlight */}
      <section className="founder-highlight">
        <h2>Founder’s Vision</h2>
        <p>
          Mr. Rajesh Kumar Sinha believes that consistent hard work and patience
          are the keys to success. His vision has guided the company to become a
          trusted name in the auto parts industry.
        </p>
      </section>

      {/* Digital Transformation */}
      <section className="digital-transformation">
        <h2>Digital Innovation</h2>
        <p>
          His son, <strong>Nilesh Sinha</strong>, has designed this website to help
          his father modernize the business digitally. Through this platform,
          customers can now explore products, place orders online, and connect
          directly with the company.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <p>
          Join us in our journey and experience quality auto parts, backed by a
          legacy of trust, patience, and dedication.
        </p>
      </section>
    </div>
  );
}

export default About;
