"use client";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si';

const Resume = {
    title: "About Me",
    description: "I am a Frontend Developer, Mobile Developer, UX Designer, and a Passionate Creator. I have a strong passion for creating beautiful and functional user interfaces. I am always eager to learn new technologies and improve my skills.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Jon-Daniel Coombs",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+1876) 292 2254",
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Jamaican",
        },
        {
            fieldName: "Email",
            fieldValue: "jon.coombs14@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, German",
        },
    ],
}
const experience = {
    title: "Experience",
    description: "I have 5+ years of experience in Web Development and UI/UX Design. I have worked with various clients and companies to create beautiful and functional websites and applications.",
    info: [
        {
            title: "Frontend Developer",
            description: "I have worked as a Frontend Developer for 3+ years. I have experience in HTML, CSS, JavaScript, React, and Tailwind CSS.",
            icon: <FaHtml5 />,
        },
        {
            title: "Mobile Developer",
            description: "I have worked as a Mobile Developer for 2+ years. I have experience in React Native, Next.js, and Node.js.",
            icon: <FaReact />,
        },
        {
            title: "UX Designer",
            description: "I have worked as a UX Designer for 2+ years. I have experience in Figma, Adobe XD, and Sketch.",
            icon: <FaFigma />,
        },
    ],

}
const About = () => {
    return (
        <section id="about" className="About">
            <div className="about-content">
                <h1 className='about' data-bg-color = '#000000' data-fg-color='#ffff'>“Design is not just what it looks like and feels like. Design is how it works.”</h1>
            </div>
        </section>
    );
}

export default About;