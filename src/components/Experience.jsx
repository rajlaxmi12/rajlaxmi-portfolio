import { experienceData } from '../data/experience'


function Experience({ activeProfile }) {

  const experiences =
    experienceData[activeProfile] || []


  return (

    <section
      className="experience-section"
      id="experience"
    >

      {/* =====================================
          INTRO
      ===================================== */}

      <div className="experience-intro">

        <p className="experience-number">
          06 / EXPERIENCE
        </p>


        <div className="experience-title-row">

          <h2>
            HOW I'VE
            <br />

            <span>
              GROWN.
            </span>
          </h2>


          <p className="experience-intro-copy">
            Each experience added another
            layer to how I build, think,
            research and solve problems.
          </p>

        </div>

      </div>


      {/* =====================================
          STACKING CARDS
      ===================================== */}

      <div className="experience-stack">

        {experiences.map((experience, index) => (

          <article
            className="growth-card"
            key={experience.id}

            style={{
              '--card-index': index,
              '--card-count': experiences.length,
            }}
          >

            <div className="growth-card-inner">


              {/* TOP ROW */}

              <div className="growth-card-top">

                <div className="growth-card-number">

                  {String(index + 1)
                    .padStart(2, '0')}

                </div>


                <div className="growth-card-type">
                  {experience.type}
                </div>


                <div className="growth-card-period">
                  {experience.period}
                </div>

              </div>


              {/* MAIN */}

              <div className="growth-card-main">

                <div className="growth-card-heading">

                  <p>
                    {experience.organization}
                  </p>


                  <h3>
                    {experience.title}
                  </h3>

                </div>


                <div className="growth-card-description">

                  <p>
                    {experience.description}
                  </p>

                </div>

              </div>


              {/* BOTTOM */}

              <div className="growth-card-bottom">

                <div className="growth-highlights">

                  <span className="growth-label">
                    KEY AREAS
                  </span>


                  {experience.highlights.map(
                    (highlight, highlightIndex) => (

                      <div
                        className="growth-highlight"
                        key={highlight}
                      >

                        <span>
                          {String(highlightIndex + 1)
                            .padStart(2, '0')}
                        </span>


                        <p>
                          {highlight}
                        </p>

                      </div>

                    )
                  )}

                </div>


                <div className="growth-technologies">

                  <span className="growth-label">
                    TECHNOLOGIES
                  </span>


                  <div>

                    {experience.technologies.map(
                      (technology) => (

                        <span
                          key={technology}
                          className="growth-tech"
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </div>


              {/* DECORATIVE NUMBER */}

              <div className="growth-background-number">

                {String(index + 1)
                  .padStart(2, '0')}

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>

  )

}


export default Experience