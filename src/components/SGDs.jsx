const SDGs = () => {
  const sdgData = [
    {
      id: 3,
      text: "Good Health and Well-Being - Increases mobility, lowers injury risks, and improves quality of life.",
      img: "/images/sg3.png",
    },
    {
      id: 7,
      text: "Affordable and Clean Energy - Future iterations will integrate solar charging and energy-efficient components.",
      img: "/images/sg7.png",
    },
    {
      id: 9,
      text: "Industry, Innovation, and Infrastructure - Introduces a patented, advanced healthcare mobility solution.",
      img: "/images/sg9.png",
    },
    {
      id: 10,
      text: "Reduced Inequalities - Offers an inexpensive, helpful option for empowering people with mobility limitations.",
      img: "/images/sg10.png",
    },
    {
      id: 11,
      text: "Sustainable Cities and Communities - Improves accessibility in urban areas and makes public places more inclusive.",
      img: "/images/sg11.png",
    },
    {
      id: 12,
      text: "Responsible Consumption and Production - Built with long-lasting materials and energy-efficient components.",
      img: "/images/sg12.png",
    },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h3 className="text-primary mt-5">
          The Sustainable Development Goals (SDGs)
        </h3>
        <p>
          Our Adjustable Height Assistive Technology for Wheelchairs promotes
          inclusion, accessibility, and well-being, which are all UN Sustainable
          Development Goals (SDGs). Our innovation addresses several important
          SDGs, including:
        </p>
        <div className="row">
          {sdgData.map((sdg) => (
            <div key={sdg.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card shadow-sm border-primary text-center">
                <div className="card-body">
                  <img
                    src={sdg.img}
                    alt={`SDG ${sdg.id}`}
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "100px" }}
                  />
                  <p className="card-text">
                    <strong>SDG {sdg.id}:</strong> {sdg.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGs;
