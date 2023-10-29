import { Button, Card } from "flowbite-react";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Certification {
    title: string,
    issueDate: string,
    description: string,
    link: string
}

interface CertificationsProps {
    data: Certification[]
}

export const Certifications: React.FC<CertificationsProps> = ({ data }) => {
    return (
        <div id="certifications" className="text-left px-6">
            <div className="prose py-6">
                <h1>Certifications</h1>
            </div>

            {data.map((item, index) => {
                return (
                    <div className="my-6" key={index}>
                        <div className="flex rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-slate-400 dark:border-gray-700 dark:bg-gray-800 flex-col" data-testid="flowbite-card">
                            <div className="flex h-full flex-col justify-center gap-4 p-6">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.title}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-100">
                                    {item.issueDate}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <Button
                                        color="light"
                                        pill={true}>
                                        <a href={item.link} target="_blank">
                                            Show credentials
                                        </a>

                                        <div className="px-2 justify-center ">
                                            <FaExternalLinkAlt />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}