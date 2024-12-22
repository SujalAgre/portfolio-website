import React from 'react'
import Link from 'next/link'


const LeftSide = () =>{
    return(
        <div className='left-side'>
            <p>
                I'm <b><Link href="">Sujal Agre</Link></b> (pronounced [su-jəl aɡ-rē]; born in India) studying for a Bachelor of Computer Applications at Somaiya Vidyavihar University. I enjoy coding, making <Link id="links" href="https://www.youtube.com/@okayaszu" target="_blank">
                <u>videos</u></Link>, and creating <Link id="links" href="https://www.youtube.com/@SlothSujal" target="_blank" >
                <u>music</u>
                </Link>.
                <br />
                -------------------------
                <br />
                here are my projects:
                <br />
                <br />
                <Link id="links" className="project-links" href="https://subu.vercel.app" target="_blank">
                    <b>Subu</b>
                </Link>
                <br />
                A Platform Empowering Women.
                <br />
                <br />
                <Link id="links" className="project-links" href="https://github.com/SujalAgre/Discord-Status-Widget-in-Next.js" target="_blank">
                    <b>Discord Status Widget</b>
                </Link>
                <br />
                Easy to integrate Discord Status Widget.
                <br />
                <br />
                <Link id="links" className="project-links" href="https://github.com/SujalAgre/portfolio-website" target="_blank">
                    <b>Personal Portfolio Website</b>
                </Link>
                <br />
                My personal portfolio website made using HTML, CSS and JavaScript.
            </p>
        </div>
    );
}

export default LeftSide;
