import rajlaxmiPhoto from '../assets/about/rajlaxmi-id.jpg'

function About({ activeProfile }) {
  const isSoftware = activeProfile === 'software'

  return (
    <section className="about-section" id="about">

      {/* =========================
          LEFT SIDE — ABOUT TEXT
      ========================== */}
      <div className="about-left">

        <p className="about-number">
          03 / ABOUT
        </p>

        <h2>
          A LITTLE
          <br />
          ABOUT <span>ME.</span>
        </h2>

        <div className="about-text">

          <p>
            I'm Raj Laxmi, a Computer Science student who enjoys
            building products that combine thoughtful engineering
            with practical problem solving.
          </p>

          <p>
            My work spans full-stack development and artificial
            intelligence — from web applications and APIs to
            machine learning and computer vision systems.
          </p>

        </div>

        <div className="about-status">

          <span className="status-dot"></span>

          <span>
            CURRENT PROFILE —
            {isSoftware
              ? ' SOFTWARE DEVELOPMENT'
              : ' AI / ML ENGINEERING'}
          </span>

        </div>

      </div>


      {/* =========================
          RIGHT SIDE — ID CARD
      ========================== */}
      <div className="about-right">

        <p className="flip-instruction">
          HOVER / TAP TO FLIP ↻
        </p>


        {/* =========================
            COMPLETE ID BADGE
        ========================== */}
        <div className="badge-wrapper">


          {/* =========================
              LANYARD / ID BELT
          ========================== */}
          <div className="lanyard">

            {/* Fabric strap */}
            <div className="lanyard-strap"></div>


            {/* Small connector */}
            <div className="lanyard-connector">
              <span>RL</span>
            </div>


            {/* Metal clip */}
            <div className="lanyard-clip"></div>

          </div>


          {/* =========================
              FLIPPING CARD CONTAINER
          ========================== */}
          <div className="id-card-container">

            <div className="id-card">


              {/* =========================
                  FRONT SIDE
              ========================== */}
              <div className="id-card-face id-card-front">


                {/* Card header */}
                <div className="id-top">

                  <span>RL</span>

                  <span>
                    {isSoftware
                      ? '01 / 02'
                      : '02 / 02'}
                  </span>

                </div>


                {/* Photo area */}
                <div className="id-photo">
                  <img
                    src={rajlaxmiPhoto}
                    alt="Raj Laxmi"
                    className="id-photo-image"
                  />

                  <span className="id-photo-label">
                    PHOTO / 01
                  </span>
                </div>


                {/* Main information */}
                <div className="id-main">

                  <p>
                    DEVELOPER ID
                  </p>

                  <h3>
                    RAJ
                    <br />
                    LAXMI
                  </h3>

                  <div className="id-role">

                    {isSoftware
                      ? 'SOFTWARE DEVELOPER'
                      : 'AI / ML ENGINEER'}

                  </div>

                </div>


                {/* Bottom information */}
                <div className="id-bottom">

                  <span>
                    PORTFOLIO / 2026
                  </span>

                  <span>
                    FLIP ↗
                  </span>

                </div>

              </div>


              {/* =========================
                  BACK SIDE
              ========================== */}
              <div className="id-card-face id-card-back">


                {/* Back header */}
                <div className="id-back-top">

                  <span>
                    DEVELOPER ID
                  </span>

                  <span>
                    RL.
                  </span>

                </div>


                {/* Personal information */}
                <div className="id-back-content">


                  <div className="id-info-row">

                    <span>
                      NAME
                    </span>

                    <strong>
                      Raj Laxmi
                    </strong>

                  </div>


                  <div className="id-info-row">

                    <span>
                      EDUCATION
                    </span>

                    <strong>
                      B.Tech — Computer Science
                    </strong>

                  </div>


                  <div className="id-info-row">

                    <span>
                      INSTITUTE
                    </span>

                    <strong>
                      BIT Mesra
                    </strong>

                  </div>


                  <div className="id-info-row">

                    <span>
                      FOCUS
                    </span>

                    <strong>

                      {isSoftware
                        ? 'Full-Stack Development'
                        : 'Artificial Intelligence'}

                    </strong>

                  </div>


                  <div className="id-info-row">

                    <span>
                      INTERESTS
                    </span>

                    <strong>

                      {isSoftware
                        ? 'Web • APIs • Databases'
                        : 'ML • Computer Vision • GenAI'}

                    </strong>

                  </div>

                </div>


                {/* Signature area */}
                <div className="id-signature">

                  <p>
                    BUILDING • LEARNING • CREATING
                  </p>

                  <h4>
                    RL.
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About