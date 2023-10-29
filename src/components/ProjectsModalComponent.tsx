'use client';

import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import MarkdownPreview from '@uiw/react-markdown-preview';

interface Project {
    name: string,
    link: string,
    description: string,
    mdName: string
}

interface ProjectsModalComponent {
    show: boolean;
    onClose: () => void;
    project: Project
}

export const ProjectsModalComponent: React.FC<ProjectsModalComponent> = ({ show, onClose, project }) => {
    const [markDownContent, setMarkDownContent] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            const response = await fetch("/mds/" + project.mdName);
            const text = await response.text();
            console.log(text);
            setMarkDownContent(text);
        };

        fetchMarkdown();
    }, [project.mdName]);

    return (

        <Modal show={show} onClose={onClose}>
            <Modal.Header>{project.name}</Modal.Header>
            <Modal.Body>
                <div className="overflow-y-auto max-h-[350px] text-gray-800">
                    {/* <ReactMarkdown>
                        {markDownContent}
                    </ReactMarkdown> */}
                    <MarkdownPreview
                        source={markDownContent}
                        wrapperElement={{
                            "data-color-mode": "light"
                        }}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose} size="sm">
                    <a href={project.link} target='_blank'>Github</a>
                </Button>
                <Button color="gray" onClick={onClose} size="sm">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
