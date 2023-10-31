import style from "./About.module.css"
import linkedIn from "../../assets/linkedIn.png"
import gitHub from "../../assets/github-svgrepo-com.svg"

const About = ()=>{
    return(
        <footer className={style.about}>
            
            <p>Developed and designed by: Maximiliano Andrade.</p>
            <a href="https://github.com/Maxxiandrade/ProyectoHenry">
            <img src={gitHub} className={style.github}/>
            </a>
            <a href="https://www.linkedin.com/in/maximiliano-andrade-8ab0b6213/">
            <img src={linkedIn} alt="" className={style.linkedin}/>
            </a>
        </footer>
    )
};

export default About;