import { create } from "zustand";

const store = (set) => ({
  items: [
    {
      title: "Clothing Store Website",
      images: [
        "images/clothingstore/clothingstorewebsite1.png",
        "images/clothingstore/clothingstorewebsite2.png",
        "images/clothingstore/clothingstorewebsite3.png",
        "images/clothingstore/clothingstorewebsite4.png",
        "images/clothingstore/clothingstorewebsite5.png",
        "images/clothingstore/clothingstorewebsite6.png",
      ],
      description:
        "E-commerce Clothing Store website with integrated eSewa payment where users can browse clothes according to category.",
      techStack: ["HTML", "CSS", "JS", "Bootstrap", "PHP", "MySQL"],
      github: "subin-shk/Clothing-Store-Website",
      githubLink: "https://github.com/subin-shk/Clothing-Store-Website",
    },
    {
      title:
        "Music Recommendation System with Facial Emotion Detection using CNN",
      images: [
        "images/musicrecommendation/musicrecommendation1.png",
        "images/musicrecommendation/musicrecommendation2.png",
        "images/musicrecommendation/musicrecommendation3.png",
        "images/musicrecommendation/musicrecommendation4.png",
        "images/musicrecommendation/musicrecommendation5.png",
        "images/musicrecommendation/musicrecommendation6.png",
      ],
      description:
        "FaceTune is a music recommendation system where users can get music recommendations based on their real time facial moods and expression. ",
      techStack: ["HTML", "CSS", "JS", "Bootstrap", "Flask", "TensorFlow"],
      github:
        "subin-shk/Music-Recommendation-Using-Facial-Expresssion-Detection",
      githubLink:
        "https://github.com/subin-shk/Music-Recommendation-Using-Facial-Expresssion-Detection",
    },
    {
      title: "Blog Website",
      images: [
        "images/blog/blog1.png",
        "images/blog/blog2.png",
        "images/blog/blog3.png",
      ],
      description:
      "Simple Blog website with the use of dummy JSON to handle API calls with the fuctions of adding blogs, form handling and more. ",
    techStack: ["HTML", "CSS", "JS", "Tailwind", "React"],
    github:
      "subin-shk/React-Blog",
    githubLink:
      "https://github.com/subin-shk/React-Blog",
    },

  ],
});

const useProjectStore = create(store);

export default useProjectStore;
