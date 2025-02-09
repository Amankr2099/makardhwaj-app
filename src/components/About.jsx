const About = () => {
  const teamMembers = [
    {
      name: "Sarthak Arya",
      role: "Head of Research and Innovation",
      img: "/images/sr_img.jpg",
    },
    {
      name: "Aman Kumar",
      role: "Web Developer",
      img: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
    },
  ];

  return (
    <section className="container py-5 text-center  border border-secondary rounded my-5 p-5" id="about-us" style={{maxWidth:"760px"}}>
            <h2 className="text-primary">About Us</h2>

      <p>
        This is an initiative undertaken by students of the School of
        Engineering, Jawaharlal Nehru University under the name
        <strong> “Makardhwaj”</strong> to develop creative, impactful,
        tech-driven healthcare solutions. Our team is competing in the Med
        Tech/Bio Tech/Health Tech category with a vision to provide upliftment
        in the health sector for elderly people.
      </p>
      {/* <p>
        Our Project,{" "}
        <strong>
          “Aham-Adjustable Height Assistive Technology for Wheelchairs”
        </strong>
        , is a patentable innovation designed to improve mobility, comfort, and
        safety of wheelchair users. We are in the process of applying for a
        patent to protect our intellectual property rights and ensure that this
        initiative reaches those who need it the most. Our mission is to use
        cutting-edge and cost-effective techniques to transform elderly and
        disabled care.
      </p> */}

      <h2 className="text-center my-5">Our Team</h2>
      <div className="d-flex flex-wrap gap-5 justify-content-around">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="team-img mb-2"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <p className="fw-semibold">{member.name}</p>
            <p >{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
