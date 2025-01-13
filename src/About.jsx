import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div id="about" className="about text-justify">
        <h1 className="mb-5 text-center">About</h1>
        <p>
          As a computer science student with a passion for creativity, my
          interests extend far beyond the confines of code and algorithms. While
          I immerse myself in the intricacies of programming languages and
          problem-solving, I find solace and inspiration in my hobbies.
        </p>
        <p>
          I have a wide range of hobbies, with a strong passion for both music
          and movies from different genres. Whenever I'm not off exploring new
          places or getting absorbed in marathon sessions of my favorite shows,
          I find myself diving into the pages of a captivating book or honing my
          artistic talents through sketching. These varied interests bring
          richness to my life, offering creativity and balance alongside the
          structured nature of computer science.
        </p>
        <p>
          I am proficient in communicating in English, Nepali, and Nepal Bhasa
          languages.
        </p>
      </div>

      <Skills />
    </>
  );
};

export default About;
