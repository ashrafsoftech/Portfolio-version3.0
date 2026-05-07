import SectionTitle from "./SectionTitle";
import aboutSvg from "./assets/about.svg";
const About = () => {
  return (
    <section className=" py-20 bg-white" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="aboutImg" className="w-full h-64" />
        <article>
          <SectionTitle text={"My Journey"} />
          <p className="text-slate-600 leading-loose">
            I’m Ashraf, a frontend developer passionate about building clean,
            responsive, and user-friendly web experiences. I began my academic
            journey studying Materials and Metallurgical Engineering in Nigeria,
            but discovered a strong interest in web development and technology.
            <br />
            <br />
            Since then, I’ve been focused on learning and building with HTML,
            CSS, JavaScript, React, and Bootstrap while improving my
            understanding of modern frontend tools and best practices.
            <br />
            <br />
            I enjoy turning ideas into interactive interfaces and continuously
            improving my skills through projects and real-world practice. My
            long-term goal is to grow into a full-stack developer and work on
            impactful digital products. <br />
            When I’m not coding, I enjoy exploring new technologies, improving
            my design skills, and learning better ways to build modern web
            applications.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
