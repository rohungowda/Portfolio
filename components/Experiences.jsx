"use client";

import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5"; // For a better close button icon

const experience = [
  { num: "Software Development Intern", title: "La-Z-Boy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" },
  { num: "Software Engineer Intern", title: "Walmart", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { num: "Computer Science Tutor", title: "Juni Learning", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
];

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpenPopup = (experience) => {
    setSelectedExperience(experience);
  };

  const handleClosePopup = () => {
    setSelectedExperience(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      handleClosePopup();
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {experience.map((exp, index) => (
            <div
              key={index}
              onClick={() => handleOpenPopup(exp)}
              className="flex items-center justify-between p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition"
            >
              <div>
                <div className="text-3xl font-extrabold text-white pb-5">{exp.num}</div>
                <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
              </div>
              <BsArrowRightCircle className="text-5xl text-white hover:text-accent transition" />
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <div
          id="popup-overlay"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-2/3 lg:w-2/3 xl:w-1/2 max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-6 right-5 text-accent hover:text-accent-hover transition text-3xl"
            >
              <IoCloseCircle />
            </button>

            <h3 className="text-black text-2xl font-bold mb-4">{selectedExperience.title}</h3>
            <h4 className="border-b border-accent text-accent text-2xl font-bold mb-4">{selectedExperience.num}</h4>
            <p className="text-gray-700 mb-6">{selectedExperience.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experiences;
