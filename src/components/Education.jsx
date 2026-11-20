import {
  useEffect,
  useRef,
  useState,
} from 'react'

import { educationData } from '../data/education'
import { certificationsData } from '../data/certifications'


function Education({ activeProfile }) {

  const certifications =
    certificationsData[activeProfile] || []

  const [activeCertificate, setActiveCertificate] =
    useState(certifications[0]?.id || null)

  const certificateRefs = useRef([])


  /* ==========================================
     RESET WHEN PROFILE CHANGES
  ========================================== */

  useEffect(() => {

    const firstCertificate =
      certificationsData[activeProfile]?.[0]

    setActiveCertificate(
      firstCertificate?.id || null
    )

  }, [activeProfile])


  /* ==========================================
     SCROLL-ACTIVE CERTIFICATE
  ========================================== */

  useEffect(() => {

    const elements =
      certificateRefs.current.filter(Boolean)

    if (!elements.length) return


    const observer = new IntersectionObserver(

      (entries) => {

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )

        if (visibleEntries.length > 0) {

          const id =
            visibleEntries[0].target.dataset.id

          setActiveCertificate(id)

        }

      },

      {
        root: null,

        /*
          Focus zone around the middle
          of the screen.
        */

        rootMargin: '-35% 0px -35% 0px',

        threshold: [
          0,
          0.25,
          0.5,
          0.75,
          1,
        ],
      }

    )


    elements.forEach((element) =>
      observer.observe(element)
    )


    return () => {
      observer.disconnect()
    }

  }, [activeProfile, certifications.length])


  return (

    <section
      className="education-section"
      id="education"
    >

      {/* ======================================
          LEFT — STICKY
      ====================================== */}

      <div className="education-intro">

        <div className="education-intro-sticky">

          <p className="education-section-number">
            08 / EDUCATION & CERTIFICATIONS
          </p>


          <h2>
            ALWAYS
            <br />

            <span>
              learning.
            </span>
          </h2>


          <p className="education-intro-text">

            An academic foundation strengthened
            through continuous learning across
            software development, artificial
            intelligence and data science.

          </p>


          <div className="education-profile-indicator">

            <span>
              CURRENT VIEW
            </span>

            <strong>

              {activeProfile === 'software'
                ? 'SOFTWARE DEVELOPMENT'
                : 'AI / ML ENGINEERING'}

            </strong>

          </div>

        </div>

      </div>


      {/* ======================================
          RIGHT
      ====================================== */}

      <div className="education-content">


        {/* ====================================
            EDUCATION
        ==================================== */}

        <div className="education-block">

          <div className="education-block-heading">

            <span>01</span>

            <p>EDUCATION</p>

          </div>


          {educationData.map((education) => (

            <div
              className="degree-card"
              key={education.id}
            >

              <h3>
                {education.degree}
              </h3>


              <p className="degree-specialization">
                {education.specialization}
              </p>


              <p className="degree-institution">
                {education.institution}
              </p>


              <div className="degree-meta">

                <div>

                  <span>PERIOD</span>

                  <strong>
                    {education.period}
                  </strong>

                </div>


                <div>

                  <span>CGPA</span>

                  <strong>
                    {education.cgpa} / 10
                  </strong>

                </div>

              </div>


              <p className="degree-description">
                {education.description}
              </p>

            </div>

          ))}

        </div>


        {/* ====================================
            CERTIFICATION TIMELINE
        ==================================== */}

        <div className="certifications-block">

          <div className="education-block-heading">

            <span>02</span>

            <p>CERTIFICATIONS</p>

          </div>


          <div className="certificate-timeline">

            <div className="certificate-timeline-line" />


            {certifications.map(
              (certificate, index) => {

                const isActive =
                  activeCertificate ===
                  certificate.id


                return (

                  <article
                    key={certificate.id}

                    ref={(element) => {
                      certificateRefs.current[index] =
                        element
                    }}

                    data-id={certificate.id}

                    className={
                      `certificate-milestone ${
                        isActive ? 'active' : ''
                      }`
                    }

                    onClick={() =>
                      setActiveCertificate(
                        certificate.id
                      )
                    }
                  >

                    {/* DOT */}

                    <div className="certificate-node">

                      <span>
                        {String(index + 1)
                          .padStart(2, '0')}
                      </span>

                    </div>


                    {/* CONTENT */}

                    <div className="certificate-milestone-content">

                      <span className="certificate-year">
                        {certificate.year}
                      </span>


                      <h3>
                        {certificate.title}
                      </h3>


                      <p className="certificate-issuer">
                        {certificate.issuer}
                      </p>


                      <div className="certificate-active-details">

                        <span>
                          {certificate.category}
                        </span>


                        {certificate.link && (

                          <a
                            href={certificate.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            VIEW CERTIFICATE ↗
                          </a>

                        )}

                      </div>

                    </div>

                  </article>

                )

              }
            )}

          </div>

        </div>

      </div>

    </section>

  )

}


export default Education