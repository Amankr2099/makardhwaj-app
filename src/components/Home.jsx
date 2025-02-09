import { useState } from "react";
import SDGs from "./SGDs";
import Achievements from "./Achievements";
import { Motivation } from "./Motivation";
import About from "./About";


const Home = () => {
  const [showProblem, setShowProblem] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-white text-center bg-primary"
        style={{ height: "50vh", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "url('https://cdn.pixabay.com/photo/2024/07/31/11/20/pattern-8934361_1280.jpg') no-repeat center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            filter: "blur(2px)",
          }}
        ></div>
        <div className="container z-3">
          <h1 className="display-5 fw-bold" style={{ fontFamily: "Audiowide" }}>
            Makardhwaj
          </h1>
          <h4>Innovative Assistive Solutions</h4>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-5 text-center my-5">
        <div className="container" style={{maxWidth:"770px"}}>
          <h2 className="text-primary">Our Products</h2>
          <p>
            We provide <a href="/product-ahem">Aham</a> -an adjustable height wheelchair attachment, featuring
            electric actuators that allow effortless seat height adjustment.
            This innovation enhances accessibility, enabling users to reach
            higher surfaces, ease transfers, etc. designed to improve mobility
            and independence for elderly individuals.
          </p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setShowProblem(!showProblem)}
          >
            {showProblem ? "Hide" : "Show"} Problem Statement
          </button>
          {showProblem && (
            <div className="mt-4 p-3 bg-secondary text-white  mx-auto border rounded ">
              <h5>Problem Statement</h5>
              <p>
                Hospitals play a critical role in patient care, especially for
                those who are wheelchair equipped due to acute illnesses,
                chronic conditions, or after surgeries. Wheelchair users,often
                fall short of providing optimal care and comfort due to their
                limited features in adjustability, pressure management, and
                mobility support. Wheelchair users are particularly vulnerable
                to a range of complications including pressure ulcers, muscle
                atrophy, and decreased mental health due to isolation and
                immobility. Assistive additive wheelchair technologies enhance
                mobility, and comfort, and contribute to the dignity and
                recovery of patients. Wheelchair users often need a support
                person for transferring. Is acts as a major concern for their
                dignity and self respect, moreover all these transfers are not
                smooth due to tremendous amount of pressure being applied to
                lift up the patients. At times this leads to accidental
                situations such as the patient falling off during transfers or
                suffering some serious injuries if the caretaker is not
                experienced. This problem can be waived off , risks and efforts
                of transferring can be reduced if an ideal innovation helps
                reduces the height difference of the platforms which are engaged
                in transfers.
              </p>
            </div>
          )}
         <div className="text-center p-3 mx-auto d-flex justify-content-center gap-2 flex-wrap flex-sm-nowrap" style={{ maxWidth: "570px" }}>
  <img src="/images/wheelchair-1.jpg" alt="wheelchair 1" className="img-fluid rounded" />
  <img src="/images/wheelchair-2.jpg" alt="wheelchair 2" className="img-fluid rounded" />
</div>

        </div>
      </section>

      {/* Motivation */}
      <Motivation/>

      {/* Our Goals Section */}
          <SDGs />

          {/* achievements */}
      <Achievements/>

      <About/>
    </>
  );
};

export default Home;
