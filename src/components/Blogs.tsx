import { Button, Card } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Blog {
    text: string,
    link: string
}

interface BlogProps {
    data: Blog[]
}

const addLineBreak = (str: string) =>
    str.split('\n').map((subStr) => {
        return (
            <>
                {subStr}
                <br />
            </>
        );
    });

export const Blogs: React.FC<BlogProps> = ({ data }) => {
    return (
        <div id="certifications" className="text-left px-6">
            <div className="prose py-6">
                <h1>Blogs/Writing</h1>
            </div>

            <div className="my-6">
                {data.map((item, index) => {
                    return (
                        <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col" data-testid="flowbite-card" key={index}>
                            <div className="flex h-full flex-col justify-center gap-4 p-6">
                                <p className="font-normal text-gray-700 dark:text-gray-100">{addLineBreak(item.text)}</p>
                                <div className="flex flex-wrap gap-2">
                                    <Button color="light" pill>

                                        <a href={item.link} target="_blank">
                                            Medium Profile
                                        </a>

                                        <div className="px-2 justify-center">
                                            <FaExternalLinkAlt />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}