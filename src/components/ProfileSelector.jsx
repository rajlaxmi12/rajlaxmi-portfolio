function ProfileSelector({ activeProfile, setActiveProfile }) {
  return (
    <section className="profile-section" id="profile">

      <div className="section-heading">
        <p className="section-number">02 / PROFILE</p>

        <h2>
          WHAT I <span>DO.</span>
        </h2>

        <p className="section-description">
          My work lives at the intersection of software engineering
          and artificial intelligence. Choose a profile to explore.
        </p>
      </div>

      <div className="profile-grid">

        <button
          className={`profile-card ${
            activeProfile === 'software' ? 'active' : ''
          }`}
          onClick={() => setActiveProfile('software')}
        >
          <div className="profile-card-top">
            <span>01</span>
            <span>↗</span>
          </div>

          <div className="profile-icon">
            &lt;/&gt;
          </div>

          <div className="profile-card-content">
            <p className="profile-small">PROFILE</p>

            <h3>
              SOFTWARE
              <br />
              DEVELOPMENT
            </h3>

            <p>
              Building responsive web applications, REST APIs
              and scalable digital experiences.
            </p>
          </div>

          <div className="profile-explore">
            {activeProfile === 'software'
              ? 'SELECTED ✓'
              : 'EXPLORE →'}
          </div>
        </button>


        <button
          className={`profile-card ${
            activeProfile === 'ai' ? 'active' : ''
          }`}
          onClick={() => setActiveProfile('ai')}
        >
          <div className="profile-card-top">
            <span>02</span>
            <span>↗</span>
          </div>

          <div className="profile-icon">
            ✦
          </div>

          <div className="profile-card-content">
            <p className="profile-small">PROFILE</p>

            <h3>
              AI / ML
              <br />
              ENGINEERING
            </h3>

            <p>
              Building intelligent systems with machine learning,
              computer vision and generative AI.
            </p>
          </div>

          <div className="profile-explore">
            {activeProfile === 'ai'
              ? 'SELECTED ✓'
              : 'EXPLORE →'}
          </div>
        </button>

      </div>

    </section>
  )
}

export default ProfileSelector