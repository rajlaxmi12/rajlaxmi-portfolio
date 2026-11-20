import { useState } from 'react'

import { achievementsData } from '../data/achievements'


function Achievements() {

  const [activeAchievement, setActiveAchievement] =
    useState(null)


  return (

    <section
      className="achievements-section"
      id="achievements"
    >

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="achievements-header">

        <p className="achievements-number">
          09 / ACHIEVEMENTS
        </p>


        <div className="achievements-title-row">

          <h2>
            PROUD <span>moments.</span>
          </h2>


          <p>
            Milestones built through consistency,
            problem solving and competition.
          </p>

        </div>

      </div>


      {/* =====================================
          HORIZONTAL MILESTONES
      ===================================== */}

      <div
        className={
          `achievement-strip ${
            activeAchievement
              ? 'has-active'
              : ''
          }`
        }
      >

        {achievementsData.map((achievement) => {

          const isActive =
            activeAchievement === achievement.id


          return (

            <article
              key={achievement.id}

              className={
                `milestone-card ${
                  isActive ? 'active' : ''
                }`
              }

              onMouseEnter={() =>
                setActiveAchievement(
                  achievement.id
                )
              }

              onMouseLeave={() =>
                setActiveAchievement(null)
              }

              onClick={() =>
                setActiveAchievement(
                  isActive
                    ? null
                    : achievement.id
                )
              }
            >


              {/* TOP */}

              <div className="milestone-top">

                <span className="milestone-number">
                  {achievement.id}
                </span>


                <span className="milestone-category">
                  {achievement.category}
                </span>

              </div>


              {/* MAIN */}

              <div className="milestone-main">

                <p className="milestone-small">
                  {achievement.shortText}
                </p>


                <h3>
                  {achievement.value}
                </h3>


                <h4>
                  {achievement.title}
                </h4>

              </div>


              {/* BOTTOM */}

              <div className="milestone-bottom">

                <span className="milestone-tag">
                  {achievement.tag}
                </span>


                <span className="milestone-arrow">
                  ↗
                </span>

              </div>


              {/* HIDDEN DETAIL */}

              <div className="milestone-detail">

                <p>
                  {achievement.detail}
                </p>

              </div>

            </article>

          )

        })}

      </div>

    </section>

  )

}


export default Achievements