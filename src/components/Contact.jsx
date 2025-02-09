export const  Contact = () => {
    return (
      <section className="bg-secondary text-white border border-secondary  mt-5 pt-5 px-5" id="contact-us" >
        <div className="mx-auto" style={{maxWidth:"870px"}}>
        <div className="row">
    <div className="col-md-4 my-auto">
  <img src="\images\message.png" alt="img" className="img-fluid" />
    </div>

    {/* Contact Form on the Left */}
    <div className="col-md-8  mt-5 mt-md-0">
      <div className="border border-secondary rounded p-4">
        <h3>Get in Touch</h3>
        <form>
          <div className="form-group p-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group p-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="form-group p-3">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary d-block mx-auto my-4">Submit</button>
        </form>
      </div>
    </div>
  </div>
        </div>
 
  <hr className="my-3 border-white" />
</section>

    );
  };
  