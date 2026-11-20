import { researchData } from '../data/research'


function Research() {

  return (

    <section
      className="research-section"
      id="research"
    >

      {/* =========================
          HEADING
      ========================== */}

      <div className="research-heading">

        <div>

          <p className="research-number">
            07 / RESEARCH
          </p>

          <h2>
            IDEAS INTO
            <br />
            <span>IMPACT.</span>
          </h2>

        </div>


        <div className="research-heading-right">

          <p>
            Exploring computer vision and deep
            learning through research focused on
            solving real-world visual problems.
          </p>


          <div className="research-profile-note">

            <span>
              RESEARCH FOCUS
            </span>

            <strong>
              COMPUTER VISION × DEEP LEARNING
            </strong>

          </div>

        </div>

      </div>


      {/* =========================
          RESEARCH ITEMS
      ========================== */}

      <div className="research-list">

        {researchData.map((research) => (

          <article
            className="research-card"
            key={research.id}
          >


            {/* =========================
                LEFT SIDE
            ========================== */}

            <div className="research-card-left">


              <div className="research-card-top">

                <span>
                  {research.id} / {research.type}
                </span>


                <span className="research-status">
                  {research.status}
                </span>

              </div>


              <div className="research-title-area">

                <p className="research-subject">
                  {research.subject}
                </p>


                <h3>
                  {research.title}
                </h3>


                <h4>
                  {research.fullTitle}
                </h4>

              </div>


              {/* ORGANIZATION / VENUE */}

              <div className="research-venue">

                <span>

                  {research.type === 'RESEARCH PAPER'
                    ? 'CONFERENCE'
                    : 'ORGANIZATION'}

                </span>


                <p>
                  {research.organization}
                </p>

              </div>


              {/* META INFORMATION */}

              <div className="research-meta">


                <div>

                  <span>
                    ROLE
                  </span>

                  <strong>
                    {research.role}
                  </strong>

                </div>


                <div>

                  <span>
                    {research.paperId
                      ? 'PAPER ID'
                      : 'PERIOD'}
                  </span>

                  <strong>

                    {research.paperId
                      ? research.paperId
                      : research.period}

                  </strong>

                </div>


              </div>

            </div>


            {/* =========================
                RIGHT SIDE
            ========================== */}

            <div className="research-card-right">


              <p className="research-small-label">
                THE IDEA
              </p>


              <p className="research-description">
                {research.description}
              </p>


              {/* =========================
                  METRICS
              ========================== */}

              <div className="research-metrics">

                {research.metrics.map((metric) => (

                  <div
                    className="research-metric"
                    key={metric.label}
                  >

                    <strong>
                      {metric.value}
                    </strong>

                    <span>
                      {metric.label}
                    </span>

                  </div>

                ))}

              </div>


              {/* =========================
                  APPROACH
              ========================== */}

              <div className="research-approach">

                <p className="research-small-label">
                  APPROACH
                </p>


                <p>
                  {research.approach}
                </p>

              </div>


              {/* =========================
                  TECHNOLOGIES
              ========================== */}

              <div className="research-technologies">

                {research.technologies.map(
                  (technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>

  )

}


export default Research