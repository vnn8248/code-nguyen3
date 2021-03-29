// Stylesheets
import styles from "../styles/modules/Resume.module.scss"

// Components
import Tech from "./Tech";


function Resume() {
  return (
    <section id="skills" className={styles.resume}>

      <div className="container">
        <div className={styles.top}>
          <h2 className="heading">Skills. Front to Back.</h2>
          <p className={styles.description}>I enjoy coding in all things <em><u>JavaScript</u></em>. Although my preferred stack is <strong>MERN</strong>, I can't hold back my wandering soul. These are all the techs and tools I enjoy using the most.</p>
          <div className={styles.stack}>
            <Tech 
              alt="MongoDB"
              name="mongodb"
            />
            <Tech 
              used={true}
              alt="Express.JS"
              name="express"
            />
            <Tech 
              used={true}
              alt="React.JS"
              name="reactjs"
            />
            <Tech 
              used={true}
              alt="Node.JS"
              name="nodejs"
            />
          </div>
        </div>

        {/* Techs Table */}
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h4 className="heading">Frameworks</h4>
              <ul>
                <Tech
                  alt="Angular.JS"
                  name="angular"
                />
                <Tech
                  used={true}
                  alt="Bootstrap"
                  name="bootstrap"
                />
                <Tech
                  alt="EJS"
                  name="ejs"
                />
                <Tech
                  used={true}
                  alt="Express"
                  name="express"
                />
                <Tech
                  alt="JQuery"
                  name="jquery"
                />
                <Tech
                  used={true}
                  alt="React.JS"
                  name="reactjs"
                />
                <Tech
                  used={true}
                  alt="Next.JS"
                  name="nextjs"
                />
                <Tech
                  used={true}
                  alt="Sass"
                  name="sass"
                />
                <Tech
                  alt="Typescript"
                  name="typescript"
                />
              </ul>
            </div>
            <div className={styles.col}>
              <h4 className="heading">Tools</h4>
              <ul>
                <Tech
                  alt="Atom"
                  name="atom"
                />
                <Tech
                  used={true}
                  alt="Chrome Dev Tools"
                  name="chrome"
                />
                <Tech
                  used={true}
                  alt="Git"
                  name="git"
                />
                <Tech
                  used={true}
                  alt="Github"
                  name="github"
                />
                <Tech
                  used={true}
                  alt="Heroku"
                  name="heroku"
                />
                <Tech
                  used={true}
                  alt="NPM"
                  name="npm"
                />
                <Tech
                  used={true}
                  alt="Postman"
                  name="postman"
                />
                <Tech
                  used={true}
                  alt="VSCode"
                  name="vscode"
                />
                <Tech
                  used={true}
                  alt="Vercel"
                  name="vercel"
                />
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className="heading">CMS</h4>
              <ul>
                <Tech
                  alt="Strapi"
                  name="strapi"
                />
                <Tech
                  used={true}
                  alt="Ghost"
                  name="ghost"
                />
                <Tech
                  alt="Squarespace"
                  name="squarespace"
                />
                <Tech
                  alt="Contentful"
                  name="contentful"
                />
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.used}>These techs were used for building this site.</p>
      </div>

    </section>


  )
}

export default Resume;