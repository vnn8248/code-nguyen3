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
                name="Html"
                alt="HTML"
                color="#e07a5f"
                now="75"
              />
              <SkillProgress 
                name="CSS"
                alt="CSS"
                color="#3d405b"
                now="75"
              />
              <SkillProgress 
                name="JavaScript"
                alt="JavaScript"
                color="#f2cc8f"
                now="80"
              />
            </ul>
            <ul className="backEnd">
              <SkillProgress 
                name="NodeJS"
                color="#81b29a"
                now="70"
              />
              <SkillProgress
                name="MongoDB"
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
                  alt="Sass logo"
                  name="sass"
                />
                <Tech
                  alt="Bootstrap logo"
                  name="Bootstrap"
                />
                <Tech
                  alt="EJS logo"
                  name="EJS"
                />
                <Tech
                  alt="Express logo"
                  name="Express"
                />
                <Tech
                  alt="JQuery logo"
                  name="JQuery"
                />              
                <Tech
                  used={true}
                  alt="React logo"
                  name="ReactJS"
                />   
                <Tech
                  used={true}
                  alt="Next logo"
                  name="NextJS"
                />   
              </ul>
            </div>
            <div className={styles.col}>
              <h4 className="heading">Tools</h4>
              <ul>
                <Tech 
                  alt="Atom logo"
                  name="Atom"
                />
                <Tech 
                  used={true}
                  alt="Git logo"
                  name="Git"
                />
                <Tech 
                  used={true}
                  alt="Github logo"
                  name="Github"
                />
                <Tech 
                  used={true}
                  alt="Heroku logo"
                  name="Heroku"
                />
                <Tech 
                  used={true}
                  alt="NPM logo"
                  name="NPM"
                />
                <Tech 
                  used={true}
                  alt="Postman logo"
                  name="Postman"
                />
                <Tech 
                  used={true}
                  alt="VSCode logo"
                  name="VSCode"
                />
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className="heading">CMS</h4>
               <ul>
                <Tech 
                   alt="Strapi logo"
                   name="Strapi"
                />
                <Tech 
                  used={true}
                   alt="Ghost logo"
                   name="Ghost"
                 />
                <Tech 
                   alt="Squarespace logo"
                   name="Squarespace"
                 />
                <Tech 
                   alt="Contentful logo"
                   name="Contentful"
                 />
                <Tech 
                   alt="Craft logo"
                   name="Craft"
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