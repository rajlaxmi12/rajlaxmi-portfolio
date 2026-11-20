import { useEffect, useState } from 'react'
import { skillsData } from '../data/skills'

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa'

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiTailwindcss,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiStreamlit,
  SiHuggingface,
  SiLangchain,
} from 'react-icons/si'

import {
  TbApi,
  TbDatabase,
  TbBrain,
  TbSparkles,
  TbEye,
} from 'react-icons/tb'


/* =========================================
   TECHNOLOGY ICON MAP
========================================= */

const skillIcons = {
  Java: FaJava,
  JavaScript: SiJavascript,
  Python: FaPython,
  SQL: TbDatabase,

  React: FaReact,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Tailwind: SiTailwindcss,

  'Node.js': FaNodeJs,
  Express: SiExpress,
  'REST APIs': TbApi,

  MongoDB: SiMongodb,
  MySQL: SiMysql,

  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  Docker: FaDocker,

  NumPy: SiNumpy,
  Pandas: SiPandas,
  'Scikit-learn': SiScikitlearn,

  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,

  OpenCV: SiOpencv,
  MediaPipe: TbEye,

  LLMs: TbBrain,
  RAG: TbSparkles,
  LangChain: SiLangchain,

  Streamlit: SiStreamlit,
  'Hugging Face': SiHuggingface,
}


/* =========================================
   SKILLS COMPONENT
========================================= */

function Skills({ activeProfile }) {

  const [activeCategory, setActiveCategory] = useState('All')

  const [hoveredSkill, setHoveredSkill] = useState(null)


  const skills = skillsData[activeProfile]


  /* =========================================
     CREATE CATEGORY LIST
  ========================================= */

  const categories = [
    'All',
    ...new Set(
      skills.map((skill) => skill.category)
    ),
  ]


  /* =========================================
     RESET FILTER WHEN PROFILE CHANGES
  ========================================= */

  useEffect(() => {

    setActiveCategory('All')

    setHoveredSkill(null)

  }, [activeProfile])


  /* =========================================
     FILTER SKILLS
  ========================================= */

  const visibleSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(
          (skill) =>
            skill.category === activeCategory
        )


  /* =========================================
     LOGO PREVIEW
  ========================================= */

  const PreviewIcon =
    hoveredSkill
      ? skillIcons[hoveredSkill.name]
      : null


  return (

    <section
      className="skills-section"
      id="skills"
    >


      {/* =========================
          HEADING
      ========================== */}

      <div className="skills-heading">

        <div>

          <p className="skills-number">
            04 / SKILLS
          </p>

          <h2>
            MY DIGITAL
            <br />
            <span>ELEMENTS.</span>
          </h2>

        </div>


        <p className="skills-intro">
          A collection of technologies I use
          to turn ideas into working products.
        </p>

      </div>


      {/* =========================
          FILTERS
      ========================== */}

      <div className="skills-toolbar">

        <p>
          FILTER BY
        </p>


        <div className="skill-filters">

          {categories.map((category) => (

            <button
              key={category}

              className={
                activeCategory === category
                  ? 'skill-filter active'
                  : 'skill-filter'
              }

              onClick={() => {
                setActiveCategory(category)
                setHoveredSkill(null)
              }}
            >

              {category}

            </button>

          ))}

        </div>

      </div>


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="skills-content">


        {/* =========================
            PERIODIC TABLE
        ========================== */}

        <div className="periodic-grid">

          {visibleSkills.map((skill) => {

            const SkillIcon =
              skillIcons[skill.name]

            const skillNumber =
              skills.findIndex(
                (item) =>
                  item.name === skill.name
              ) + 1


            return (

              <article

                className={
                  hoveredSkill?.name === skill.name
                    ? 'skill-element hovered'
                    : 'skill-element'
                }

                key={`${activeProfile}-${skill.name}`}


                /* DESKTOP */
                onMouseEnter={() =>
                  setHoveredSkill(skill)
                }

                onMouseLeave={() =>
                  setHoveredSkill(null)
                }


                /* MOBILE / TABLET */
                onClick={() =>
                  setHoveredSkill(
                    hoveredSkill?.name === skill.name
                      ? null
                      : skill
                  )
                }

              >


                <span className="skill-index">

                  {String(skillNumber).padStart(
                    2,
                    '0'
                  )}

                </span>


                <div className="skill-symbol">

                  {skill.symbol}

                </div>


                <p className="skill-name">

                  {skill.name}

                </p>


                <span className="skill-category">

                  {skill.category}

                </span>


                {/* SMALL LOGO */}

                {SkillIcon && (

                  <div className="skill-mini-icon">

                    <SkillIcon />

                  </div>

                )}

              </article>

            )

          })}

        </div>


        {/* =========================
            LOGO PREVIEW PANEL
        ========================== */}

        <aside className="skill-preview">


          {hoveredSkill ? (

            <div
              className="skill-preview-active"
              key={hoveredSkill.name}
            >


              <p className="preview-label">

                ELEMENT /
                {' '}
                {String(
                  skills.findIndex(
                    (skill) =>
                      skill.name ===
                      hoveredSkill.name
                  ) + 1
                ).padStart(2, '0')}

              </p>


              <div className="preview-logo">

                {PreviewIcon ? (

                  <PreviewIcon />

                ) : (

                  <span>
                    {hoveredSkill.symbol}
                  </span>

                )}

              </div>


              <h3>

                {hoveredSkill.name}

              </h3>


              <p className="preview-category">

                {hoveredSkill.category}

              </p>


              <div className="preview-line"></div>


              <p className="preview-profile">

                {activeProfile === 'software'
                  ? 'SOFTWARE DEVELOPMENT'
                  : 'AI / ML ENGINEERING'}

              </p>

            </div>

          ) : (

            <div className="skill-preview-empty">


              <p className="preview-label">

                INTERACTIVE / 04

              </p>


              <div className="preview-empty-symbol">

                +

              </div>


              <h3>
                HOVER AN
                <br />
                ELEMENT.
              </h3>


              <p>
                Move your cursor over a
                technology to explore it.
              </p>


              <div className="preview-profile-info">

                <span>
                  CURRENT PROFILE
                </span>

                <strong>

                  {activeProfile === 'software'
                    ? 'SOFTWARE'
                    : 'AI / ML'}

                </strong>

              </div>

            </div>

          )}


        </aside>

      </div>

    </section>

  )
}

export default Skills