import React from "react";

const Product1 = () => {
  return (
    <div className="container mx-auto py-5" style={{maxWidth:"860px"}}>
      <h1 className="text-center text-primary mb-4">
        AHAM-Adjustable Height Assistive Technology for Wheelchairs
      </h1>
      <p className="mt-5">
        This is an initiative undertaken by students of the School of
        Engineering, Jawaharlal Nehru University under the name “Makardhwaj” to
        develop creative, impactful, tech-driven healthcare solutions. Our team
        is competing in the Med Tech/Bio Tech/Health Tech category with a vision
        to provide upliftment in the health sector for elderly people.
      </p>

      <p>
        Our proposed solution is a modular, attachable system that allows
        wheelchair seats to be raised or lowered using electric actuators and
        clever control mechanisms.
      </p>

      <p>
        This project, AHAM-Adjustable Height Assistive Technology for
        wheelchairs, is a patentable innovation designed to improve mobility,
        comfort, and safety of wheelchair users. We are in the process of
        applying for a patent to protect our intellectual property rights and
        ensure that this initiative reaches those who need it the most. Our
        mission is to use cutting-edge and cost-effective techniques to
        transform elderly and disabled care.
      </p>

      <h3 className="text-primary my-3">Theoretical Material</h3>
      <p>
        The core idea behind our solution is to provide wheelchair users with an
        adjustable seat height, enhancing comfort and mobility. The system
        consists of an attachment that integrates seamlessly with the
        wheelchair, enabling smooth and easy height adjustments.
      </p>

      <h3 className="text-primary my-3">Technical Working & Features</h3>
      <div className="row my-5">
        <div className="col-md-6">
          <ul>
            <li>
              <strong>Attachment and Installation:</strong> Universal
              clamps/brackets allow for secure attachment to any wheelchair.
            </li>
            <li>
              <strong>Power Source:</strong> Runs on the wheelchair's built-in
              battery or an additional power pack.
            </li>
            <li>
              <strong>Safety Sensors:</strong> Maintains stability by
              automatically applying brakes during height adjustments.
            </li>
            <li>
              <strong>User Operation:</strong> Simple modifications via a
              control panel, voice instructions, or mobile app, as per user
              preference.
            </li>
            <li>
              <strong>Braking Sensors:</strong> Improves safety by preventing
              unexpected movement.
            </li>
          </ul>
        </div>
        <div className="col-md-6 mb-5">
          <img
            src="/images/img2.png"
            alt="Technical Features"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div className="text-center my-4">
        <img
          src="/images/img3.png"
          alt="Technical Features"
          className="img-fluid rounded"
        />
      </div>

      <h3 className="text-primary my-3">Technology Used</h3>
      <div className="row mb-5">
        <div className="col-md-6">
          <ul>
            <li>
              <strong>Electric Actuators:</strong> TiMOTION's TA9 actuators
              enable smooth and efficient adjustments.
            </li>
            <li>
              <strong>Microcontroller:</strong> A Raspberry Pi manages real-time
              operations.
            </li>
            <li>
              <strong>Sensors:</strong> Stability and braking sensors ensure
              safety during operation.
            </li>
            <li>
              <strong>Seatbelt System:</strong> Added to increase user safety
              during adjustments.
            </li>
            <li>
              <strong>Embedded Control:</strong> C/C++ and Python are used for
              embedded control and automation.
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          {/* <img
            src="/images/img1.png"
            alt="Technology Used"
            className="img-fluid rounded"
          /> */}
        </div>
      </div>

      <h3 className="text-primary my-3">System Design and Prototype</h3>
      <p>
        The prototype of our design is currently being tested. Below is a demo
        of our current system design, showcasing the integration of actuators,
        sensors, and the result.
      </p>
      <div className="text-center">
        <video controls className="img-fluid rounded">
          <source src="\images\demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Product1;
