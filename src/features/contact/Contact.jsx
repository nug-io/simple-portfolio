import ContactDetail from "../../shared/components/ContactDetail";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // nanti ganti ke fetch API
    console.log("submit form");
  };

  return (
    <section id="contact">
      <div className="contact main-container">
        <div className="contact-left">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div>
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              <button className="btn-submit">Send Message</button>
            </div>
          </form>
        </div>

        <ContactDetail
          address="3424 Layman Avenue, Fayetteville, NC"
          phone="(501) 414-1541"
          email="dummyemail@gmail.com"
        />
      </div>
    </section>
  );
}
