import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
// import { deleteProject, getUser } from "../../actions/user";
// import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
//   id,
}) => {
//   const dispatch = useDispatch();

//   const deleteHandler = async (id) => {
//     await dispatch(deleteProject(id));
//     dispatch(getUser());
//   };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
        //   onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects=[1,2,3] }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={1}
            key={1}
            url={"www.google.com"}
            projectImage={"https://imgs.search.brave.com/3XJZG8tKcAG7Q2qSP3OswsJs8XqPVvhsL-vfEr_We4Q/rs:fit:1200:994:1/g:ce/aHR0cHM6Ly9hbGFu/bWFqY2hyb3dpY3ou/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzAxL2dsYWNp/ZXJfcGVha19pbWFn/ZV9sYWtlX25vcnRo/X2Nhc2NhZGVzX3dh/c2hpbmd0b25fNTgy/NDUuanBn"}
            projectTitle={"title"}
            description={"description"}
            technologies={"mongodb, react, nodejs,express"}
            
            // id={item._id}
            // key={item._id}
            // url={item.url}
            // projectImage={item.image.url}
            // projectTitle={item.title}
            // description={item.description}
            // technologies={item.techStack}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
