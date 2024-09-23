export default function Contact() {
  return (
    <section className="contact-section wrapper" id="contact">
      <section className="contact-data">
        <h1 className="lg-heading">get in touch!</h1>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-details"
        >
          <input
            type="hidden"
            name="access_key"
            value="9e38623d-5b9a-4347-8032-7a0fb5a77d5c"
          ></input>
          <label htmlFor="name">Name</label>
          <br />

          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
            required
          />

          <br />
          <label htmlFor="email">Email</label>
          <br />

          <input
            type="text"
            name="email"
            id="email"
            placeholder="enter your email"
            required
          />
          <br />
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="enter your message"
            required
          ></textarea>
          <br />
          <input type="checkbox" name="policy" id="policy" required />
          <label htmlFor="policy">
            I agree to <b>Privacy Policy</b> and <b>Terms of Use</b>
          </label>
          <br />
          <button className="btn primary-btn contact-btn" type="submit">
            contact with us now
          </button>
        </form>
      </section>
      {/* <section className="contact-img"> */}
      <img
        className="contact-img"
        src="/contact-images/contact-img.png"
        alt=""
      />
    </section>
  );
}
