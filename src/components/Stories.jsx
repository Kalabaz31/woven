import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const stories = [
  {
    title: "Well, ARE YOU?",
    overview: "Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?",
    date: "12.30.19",
    image: "https://wovenmagazine.com/content/uploads/2019/10/08_ShantellMartin_wide.jpg",
  },
  {
    title: "Faculty Department",
    overview: "Photographer Justin Chung’s project Faculty Department is an ode to the inspiration found in his subjects.",
    date: "10.21.19",
    image: "https://wovenmagazine.com/content/uploads/2019/10/02_JustinChung_tall.jpg",
  },
  {
    title: "The Journey of Departure",
    overview: "s a tribuAte to his mother and the pain of losing her to cancer, Joekenneth Museau writes about the depths of pain, and the heights of growth he’s experienced through healing.",
    date: "10.17.19",
    image: "https://wovenmagazine.com/content/uploads/2019/10/02_Joekenneth_wide.jpg",
  },
  {
    title: "Eons of Earth",
    overview: "As a photographer and solo traveler, Cody Cobb elevates the grandeur of the natural world beyond the boundary of civilization.",
    date: "10.01.19",
    image: "https://wovenmagazine.com/content/uploads/2019/09/03_CodyCobb_Wide.jpg",
  },
];
const Stories = () => {
  return (
    <div className="bg-neutral-200 py-10 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <img src="https://wovenmagazine.com/content/themes/woven/assets/images/logo-secondarymark.png" alt="" className="w-28" />
        <h1 className="text-2xl font-medium tracking-wider">THE STORIES</h1>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap px-20">
        {stories &&
          stories.map((story) => (
            <div className="group relative flex flex-col p-4 md:w-1/2 2xl:w-1/4 h-[30rem] overflow-hidden rounded-sm">
              <div className="relative h-2/3 w-full">
                <img src={story.image} alt="" className="h-full w-full object-cover" />
                <a href="" className="hidden group-hover:flex flex-col absolute bg-white/90 top-0 left-0 right-0 bottom-0 justify-center items-center text-3xl text-medium text-emerald-500	">
                  READ STORY
                  <span><CgArrowLongRight fontSize={48} /></span>
                </a>
              </div>

              <div className="flex flex-col bg-white group-hover:bg-green-200 text-left p-4 ">
                <a href="" className="text-xl  underline underline-offset-8 decoration-sky-500/50">
                  {story.title}
                </a>
                <p className="text-sm py-2">{story.overview.length < 30 ? story.overview : `${story.overview.slice(0, 100)}..`}</p>
                <span className="text-right font-bold text-sm">.{story.date}.</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Stories;
