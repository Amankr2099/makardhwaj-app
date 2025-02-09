import React from 'react';

const Achievements = () => {
  return (
    <section className="py-5 my-5 p-5" style={{backgroundColor:"#A6F1E0"}} id='achievement'>
  <h2 className="text-primary text-center">Our Achievements</h2>

  <div className="container">
    <div className="row align-items-center" style={{ maxWidth: "960px", margin: "0 auto" }}>
      
      {/* Image on the Left */}
      <div className="col-md-6 mb-4 mb-md-0">
        <img src="/images/img8.jpg" alt="img4" className="img-fluid rounded" />
      </div>

      {/* Text on the Right */}
      <div className="col-md-6">
        <p>
          At EngQuest 3.0, the tech-fest at the School of Engineering, JNU, we captured the Gold Medal 🏆 with our groundbreaking Adjustable Height Assistive Technology for Wheelchairs, branded as “Aham,” in the Ideathon, a start-up pitching event by Phoenix JNU. We also dominated the Intra University Hackathon, becoming the first team to secure a spot in the Smart India Hackathon—2024, an initiative by the Government of India, proving our solution's transformative power and impact.
        </p>

        <p>
          These achievements push us to improve our solution and compete in the next national and worldwide tournaments, with the goal of gaining recognition, securing funding, and driving real-world adoption.
        </p>
      </div>
      
    </div>
  </div>
</section>

  );
}

export default Achievements;
