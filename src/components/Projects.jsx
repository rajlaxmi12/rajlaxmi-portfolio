import { useEffect, useState } from 'react'

import { projectsData } from '../data/projects'


function Projects({ activeProfile }) {

  const projects = projectsData[activeProfile]

  const [hoveredProject, setHoveredProject] =
    useState(null)

  const [activeVideo, setActiveVideo] =
    useState(null)


  /* ==========================================
     VIDEO MODAL — ESC + BODY SCROLL LOCK
  ========================================== */

  useEffect(() => {

    const handleEscape = (event) => {

      if (event.key === 'Escape') {
        setActiveVideo(null)
      }

    }


    if (activeVideo) {

      document.body.style.overflow = 'hidden'

      window.addEventListener(
        'keydown',
        handleEscape
      )

    }


    return () => {

      document.body.style.overflow = ''

      window.removeEventListener(
        'keydown',
        handleEscape
      )

    }

  }, [activeVideo])


  return (

    <section
      className="projects-section"
      id="work"
    >


      {/* ==========================================
          HEADING
      ========================================== */}

      <div className="projects-heading">

        <div>

          <p className="projects-number">
            05 / SELECTED WORK
          </p>


          <h2>
            THINGS I'VE
            <br />
            <span>BUILT.</span>
          </h2>

        </div>


        <div className="projects-heading-right">

          <p>
            Selected projects where ideas,
            engineering and experimentation
            became working products.
          </p>


          <div className="projects-profile">

            <span>
              VIEWING
            </span>


            <strong>

              {activeProfile === 'software'
                ? 'SOFTWARE DEVELOPMENT'
                : 'AI / ML ENGINEERING'}

            </strong>

          </div>

        </div>

      </div>



      {/* ==========================================
          PROJECT LIST
      ========================================== */}

      <div className="projects-list">

        {projects.map((project) => {

          const isHovered =
            hoveredProject === project.id


          return (

            <article
              className={
                isHovered
                  ? 'project-item active'
                  : 'project-item'
              }

              key={`${activeProfile}-${project.id}`}

              onMouseEnter={() =>
                setHoveredProject(project.id)
              }

              onMouseLeave={() =>
                setHoveredProject(null)
              }
            >


              {/* PROJECT NUMBER */}

              <div className="project-index">

                <span>
                  {project.id}
                </span>

              </div>



              {/* ==========================================
                  PROJECT INFORMATION
              ========================================== */}

              <div className="project-main">


                {/* META */}

                <div className="project-meta">

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {project.year}
                  </span>

                </div>



                {/* TITLE */}

                <h3>
                  {project.title}
                </h3>



                {/* SUBTITLE */}

                <p className="project-subtitle">
                  {project.subtitle}
                </p>



                {/* DESCRIPTION */}

                <p className="project-description">
                  {project.description}
                </p>



                {/* TECHNOLOGIES */}

                <div className="project-tech">

                  {project.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>



                {/* ==========================================
                    PROJECT ACTIONS
                ========================================== */}

                <div className="project-actions">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GITHUB ↗
                  </a>


                  {/* WATCH DEMO ONLY IF VIDEO EXISTS */}

                  {project.video && (

                    <button
                      type="button"
                      className="project-demo-button"

                      onClick={() =>
                        setActiveVideo({
                          src: project.video,
                          title: project.title,
                        })
                      }
                    >
                      WATCH DEMO ▶
                    </button>

                  )}

                </div>

              </div>



              {/* ==========================================
                  PROJECT VISUAL
              ========================================== */}

              <div className="project-visual">

                {project.image ? (

                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                  />

                ) : (

                  <div className="project-placeholder">


                    <span className="placeholder-number">
                      {project.id}
                    </span>


                    <div className="placeholder-title">

                      {project.title
                        .split(' ')
                        .map((word) => (

                          <span key={word}>
                            {word}
                          </span>

                        ))}

                    </div>


                    <span className="placeholder-label">
                      PROJECT PREVIEW
                    </span>


                  </div>

                )}

              </div>



              {/* PROJECT ARROW */}

              <div className="project-arrow">
                ↗
              </div>


            </article>

          )

        })}

      </div>



      {/* ==================================================
          VIDEO MODAL

          IMPORTANT:
          This is OUTSIDE projects-list and project-item.
      ================================================== */}

      {activeVideo && (

        <div
          className="project-video-modal"

          onClick={() =>
            setActiveVideo(null)
          }
        >


          <div
            className="project-video-dialog"

            onClick={(event) =>
              event.stopPropagation()
            }
          >


            {/* MODAL HEADER */}

            <div className="project-video-header">

              <div>

                <span>
                  PROJECT DEMO
                </span>

                <h3>
                  {activeVideo.title}
                </h3>

              </div>


              <button
                type="button"
                className="project-video-close"

                onClick={() =>
                  setActiveVideo(null)
                }

                aria-label="Close project demo"
              >
                ×
              </button>

            </div>



            {/* YOUTUBE VIDEO */}

            <div className="project-video-player">

              <iframe
                src={`${activeVideo.src}?autoplay=1&rel=0`}
                title={`${activeVideo.title} project demonstration`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

            </div>

            {/* MODAL FOOTER */}

            <div className="project-video-footer">

              <span>
                ESC TO CLOSE
              </span>

              <span>
                PORTFOLIO / 2026
              </span>

            </div>


          </div>

        </div>

      )}


    </section>

  )

}


export default Projects