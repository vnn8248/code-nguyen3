// Stylesheets
import styles from "../styles/modules/Resume.module.scss"

// Components
import SkillProgress from "./SkillProgress";
import Tech from "./Tech";


function Resume() {
  return (
    <section id="skills" className={styles.resume}>

      <div className="container">

        {/* Progress bars */}
        <div>
          <h2 className="heading">Skills. Front to Back.</h2>
          <div>
          <ul className="frontEnd">
              <SkillProgress 
                name="html"
                alt="HTML"
                color="#e07a5f"
                now="75"
              />
              <SkillProgress 
                name="css"
                alt="CSS"
                color="#3d405b"
                now="75"
              />
              <SkillProgress 
                name="javascript"
                alt="JavaScript"
                color="#f2cc8f"
                now="80"
              />
            </ul>
            <ul className="backEnd">
              <SkillProgress 
                name="nodejs"
                alt="Node.JS"
                color="#81b29a"
                now="70"
              />
              <SkillProgress
                name="mongodb"
                alt="MongoDB"
                color="#81b29a"
                now="60"
              />
            </ul>
          </div>
        </div>

        {/* Techs Table */}
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h4 className="heading">Frameworks</h4>
              <ul>
                <Tech
                  used={true}
                  alt="Sass"
                  name="sass"
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
                <Tech 
                   alt="Craft"
                   name="craft"
                 />
               </ul> 
            </div>
          </div>
        </div>

        <h4 className={styles.used}>These techs were used for building this site.</h4>
      </div>

    </section>
    
    
  )
}

export default Resume;