import { contactData } from '../data/contact'


function Contact() {

  return (

    <footer
      className="contact-section"
      id="contact"
    >

      {/* =====================================
          TOP LABEL
      ===================================== */}

      <div className="contact-top">

        <p>
          10 / CONTACT
        </p>

        <span>
          OPEN TO OPPORTUNITIES
        </span>

      </div>


      {/* =====================================
          MAIN CTA
      ===================================== */}

      <div className="contact-main">

        <div className="contact-heading">

          <p className="contact-eyebrow">
            HAVE AN IDEA OR OPPORTUNITY?
          </p>


          <h2>

            LET'S

            <br />

            <span>
              build something.
            </span>

          </h2>

        </div>


        <div className="contact-intro">

          <p>

            I'm open to opportunities,
            collaborations and conversations
            across software development,
            AI/ML, computer vision and research.

          </p>


          <a
            href={`mailto:${contactData.email}`}
            className="contact-email-button"
          >

            <span>
              START A CONVERSATION
            </span>

            <span className="contact-button-arrow">
              ↗
            </span>

          </a>

        </div>

      </div>


      {/* =====================================
          SOCIAL LINKS
      ===================================== */}

      <div className="contact-links">

        {contactData.links.map((link) => (

          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >

            <div className="contact-link-top">

              <span className="contact-link-number">
                {link.id}
              </span>


              <span className="contact-link-arrow">
                ↗
              </span>

            </div>


            <div className="contact-link-bottom">

              <span>
                {link.label}
              </span>


              <h3>
                {link.name}
              </h3>

            </div>

          </a>

        ))}


        {/* EMAIL CARD */}

        <a
          href={`mailto:${contactData.email}`}
          className="contact-link"
        >

          <div className="contact-link-top">

            <span className="contact-link-number">
              04
            </span>


            <span className="contact-link-arrow">
              ↗
            </span>

          </div>


          <div className="contact-link-bottom">

            <span>
              SAY HELLO
            </span>


            <h3>
              Email
            </h3>

          </div>

        </a>

      </div>


      {/* =====================================
          EMAIL DISPLAY
      ===================================== */}

      <div className="contact-email-display">

        <span>
          EMAIL
        </span>


        <a
          href={`mailto:${contactData.email}`}
        >
          {contactData.email}
        </a>

      </div>


      {/* =====================================
          FOOTER
      ===================================== */}

      <div className="portfolio-footer">

        <div>

          <strong>
            RAJ LAXMI
          </strong>

          <span>
            SOFTWARE DEVELOPER × AI/ML ENGINEER
          </span>

        </div>


        <div className="footer-center">
          BUILT WITH CURIOSITY & CODE
        </div>


        <div className="footer-year">
          © 2026
        </div>

      </div>

    </footer>

  )

}


export default Contact