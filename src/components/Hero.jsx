import {
  useEffect,
  useRef,
  useState,
} from 'react'

import rajLaxmiCutout from '../assets/hero/rajlaxmi-cutout.png'


function Hero({ activeProfile }) {

  const isSoftware =
    activeProfile === 'software'

  const heroRef = useRef(null)

  const [scrollProgress, setScrollProgress] =
    useState(0)


  /* ==========================================
     SCROLL PROGRESS
  ========================================== */

  useEffect(() => {

    let animationFrame = null


    const updateScroll = () => {

      if (!heroRef.current) return


      const section =
        heroRef.current

      const rect =
        section.getBoundingClientRect()


      const scrollableDistance =
        section.offsetHeight -
        window.innerHeight


      if (scrollableDistance <= 0) {
        setScrollProgress(0)
        return
      }


      const travelled =
        Math.min(
          Math.max(-rect.top, 0),
          scrollableDistance
        )


      const progress =
        travelled /
        scrollableDistance


      setScrollProgress(progress)
    }


    const handleScroll = () => {

      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }


      animationFrame =
        requestAnimationFrame(updateScroll)
    }


    updateScroll()

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    window.addEventListener(
      'resize',
      handleScroll
    )


    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      )

      window.removeEventListener(
        'resize',
        handleScroll
      )

      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }

    }

  }, [])


  /* ==========================================
     SCROLL VALUES
  ========================================== */

  const portraitScale =
    1 + scrollProgress * 0.72

  const portraitY =
    scrollProgress * 65

  const nameY =
    scrollProgress * -90

  const roleY =
    scrollProgress * -35

  const backgroundScale =
    1 + scrollProgress * 0.28

  const contentOpacity =
    Math.max(
      0,
      1 - scrollProgress * 1.35
    )

  const descriptionOpacity =
    Math.max(
      0,
      1 - scrollProgress * 2
    )


  return (

    <section
      ref={heroRef}
      className="cinematic-hero-scroll"
      id="home"
    >

      {/* =====================================
          STICKY SCENE
      ===================================== */}

      <div className="cinematic-hero">


        {/* ===================================
            BACKGROUND
        =================================== */}

        <div className="hero-background">

          <span
            className="hero-background-number"
            style={{
              transform:
                `translate(-50%, -50%)
                 scale(${backgroundScale})`,
            }}
          >
            {isSoftware ? '01' : '02'}
          </span>


          <span className="hero-background-word">
            PORTFOLIO
          </span>

        </div>


        {/* ===================================
            TOP
        =================================== */}

        <div
          className="hero-top"
          style={{
            opacity: contentOpacity,
          }}
        >

          <p>
            PORTFOLIO / 2026
          </p>


          <p>
            {isSoftware
              ? 'SOFTWARE DEVELOPMENT'
              : 'ARTIFICIAL INTELLIGENCE / ML'}
          </p>

        </div>


        {/* ===================================
            NAME
        =================================== */}

        <div
          className="hero-name"
          style={{
            transform:
              `translateY(${nameY}px)`,

            opacity:
              contentOpacity,
          }}
        >

          <span>
            HELLO, I'M
          </span>


          <h1>
            RAJ LAXMI
          </h1>

        </div>


        {/* ===================================
            PERSON
        =================================== */}

        <div
          className="hero-person-wrapper"
          style={{
            transform:
              `translateX(-50%)
               translateY(${portraitY}px)
               scale(${portraitScale})`,
          }}
        >

          <div className="hero-person-glow" />


          <img
            src={rajLaxmiCutout}
            alt="Raj Laxmi"
            className="hero-person"
          />

        </div>


        {/* ===================================
            ROLE
        =================================== */}

        <div
          className="hero-role"
          key={`role-${activeProfile}`}
          style={{
            transform:
              `translateY(${roleY}px)`,

            opacity:
              contentOpacity,
          }}
        >

          <span className="hero-role-number">
            {isSoftware
              ? '01 /'
              : '02 /'}
          </span>


          <h2>

            {isSoftware ? (

              <>
                SOFTWARE
                <br />
                <em>
                  developer.
                </em>
              </>

            ) : (

              <>
                AI / ML
                <br />
                <em>
                  engineer.
                </em>
              </>

            )}

          </h2>

        </div>


        {/* ===================================
            DESCRIPTION
        =================================== */}

        <div
          className="hero-description"
          style={{
            opacity:
              descriptionOpacity,

            transform:
              `translateY(${
                scrollProgress * -30
              }px)`,
          }}
        >

          <p>

            {isSoftware
              ? 'I build thoughtful digital experiences across frontend, backend and full-stack development.'
              : 'I explore intelligent systems through machine learning, deep learning and computer vision.'}

          </p>

        </div>


        {/* ===================================
            SCROLL
        =================================== */}

        <div
          className="hero-scroll"
          style={{
            opacity:
              Math.max(
                0,
                1 - scrollProgress * 4
              ),
          }}
        >

          <span>
            SCROLL TO EXPLORE
          </span>


          <div className="hero-scroll-line">
            <span />
          </div>

        </div>


        {/* ===================================
            PROGRESS
        =================================== */}

        <div className="hero-progress">

          <span>
            {String(
              Math.round(
                scrollProgress * 100
              )
            ).padStart(2, '0')}
          </span>


          <div className="hero-progress-track">

            <div
              className="hero-progress-fill"
              style={{
                transform:
                  `scaleY(${scrollProgress})`,
              }}
            />

          </div>


          <span>
            100
          </span>

        </div>


      </div>

    </section>

  )

}


export default Hero