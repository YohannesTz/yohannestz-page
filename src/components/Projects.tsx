import { Button, Card } from "flowbite-react"
import { BsGithub } from "react-icons/bs"
import { ProjectsModalComponent } from "./ProjectsModalComponent"
import { useState } from "react"

interface Project {
    name: string,
    link: string,
    description: string,
    mdName: string
}

interface ProjectsPropTypes {
    data: Project[]
}

export const Projects: React.FC<ProjectsPropTypes> = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>({});

    const openModal = (project: Project) => {
        setShowModal(true);
        setSelectedProject(project);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <div id="projects" className="py-6 md:px-6 text-left">
            <div className="prose py-7">
                <h1>Projects</h1>
            </div>
            <ProjectsModalComponent show={showModal} onClose={closeModal} project={selectedProject} />
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
                {data.map((item, index) => {
                    return (
                        <div className="hover:drop-shadow-xl" key={index}>
                            <div className="flex rounded-lg h-full border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col" data-testid="flowbite-card">
                                <div className="flex h-full flex-col justify-center gap-4 p-6">
                                    <a href={item.link} target="_blank" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</a>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                    {/* <a onClick={openModal} className="font-normal text-gray-700 dark:text-gray-400">View More</a> */}
                                    <Button pill onClick={() => openModal(item)} color="light">View More</Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="py-6 flex flex-row my-6 justify-center sm:text-xs">
                <Button pill>
                    <a href="https://github.com/yohannesTz" className="sm:truncate line-clamp-1" target="_blank">
                        Visit My Github Page for More
                    </a>

                    <div className="md:mx-3 sm:mx-0">
                        <BsGithub />
                    </div>
                </Button>
            </div>
        </div>
    )
}