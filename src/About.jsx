import SectionTitle from "./SectionTitle";
import aboutSvg from "./assets/about.svg";
const About = () => {
  return (
    <section className=" py-20 bg-white" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="aboutImg" className="w-full h-64" />
        <article>
          <SectionTitle text={"About"} />
          <p className="text-slate-600 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            distinctio numquam explicabo molestias mollitia, illo veniam
            temporibus voluptates impedit sunt ducimus esse aperiam eius ratione
            quaerat quibusdam facere! Tempora, minima.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
