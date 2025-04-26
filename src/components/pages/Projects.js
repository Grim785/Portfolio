import React from "react";
import "./Projects.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from "../ProjectCard";
import img from "../../assets/images/wp4522190.jpg";
import img2 from "../../assets/images/1243419727481667686-1243473950709780520-b50b4768194455943ca0f1cf07fcf9af.gif";

class Projects extends React.Component {
  render() {
    const projects = [
      {
        id: 1,
        title: "Dự Án 1",
        description: "Mô tả ngắn gọn về dự án.",
        image: img,
        link: "https://github.com/link_dự_án_1",
        stack: ["React", "Node.js", "MongoDB"], // Tech Stack cho Dự Án 1
      },
      {
        id: 2,
        title: "Dự Án 2",
        description: "Mô tả ngắn gọn về dự án.",
        image: img2,
        link: "https://github.com/link_dự_án_2",
        stack: ["Vue.js", "Firebase", "Tailwind CSS","Boostrap","Web socket"], // Tech Stack cho Dự Án 2
      },
      {
        id: 2,
        title: "Dự Án 2",
        description: "Mô tả ngắn gọn về dự án.Mô tả ngắn gọn về dự ánMô tả ngắn gọn về dự ánMô tả ngắn gọn về dự ánMô tả ngắn gọn về dự ánMô tả ngắn gọn về dự ánMô tả ngắn gọn về dự án",
        image: img2,
        link: "https://github.com/link_dự_án_2",
        stack: ["Vue.js", "Firebase", "Tailwind CSS","Boostrap","Web socket"], // Tech Stack cho Dự Án 2
      },
      // Thêm các dự án khác tại đây
    ];
    return (
        <article className="Projects row">
          <div className="col-12">
            <div className="container py-5">
              <div className="row">
                <div className="col-12 text-center mb-4">
                  <h2 className="text-center">My Projects</h2>
                </div>
                <div className="col-12 d-flex flex-column align-items-center justify-content-center mb-4">
                  My projects showcase my skills and passion for web development. Each project is a step in my journey as a developer, and I’m excited to share them with you.
                </div>
                  <ProjectCard projects={projects} />
              </div>
            </div>
          </div>
        </article>
    );
  }
}

export default Projects;