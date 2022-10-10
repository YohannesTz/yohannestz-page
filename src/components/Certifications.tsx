import { Button, Card } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Certifications = () => {
    return (
        <div id="certifications" className="text-left px-6">
            <div className="prose py-6">
                <h1>Certifications</h1>
            </div>

            <div className="my-6">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Google African Developers Scholarship - Android Development
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100">
                        Issued on May 2022
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Button
                            color="light"
                            href="https://adscerts.com/scholar/7FBBCC49E3BA672"
                            pill={true}>
                            Show credentials 
                            <div className="px-2 justify-center ">
                                <FaExternalLinkAlt/>
                            </div>
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="my-4">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Tech Camp Ethiopia - Full-stack web Development 
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100">
                        Issued on Jun 2021
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        <Button
                            color="light"
                            href="https://drive.google.com/file/d/1w9k9cI3vI62Y3qoHilAmP75g7sZZRC7B/view?usp=sharing"
                            pill={true}>
                            Show credentials 
                            <div className="px-2 justify-center ">
                                <FaExternalLinkAlt/>
                            </div>
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="my-6">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Udacity - Java Nano Degree
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100">
                        Issued on Jun 2021
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        <Button
                            color="light"
                            href="https://confirm.udacity.com/GG9NUUKN"
                            pill={true}>
                            Show credentials 
                            <div className="px-2 justify-center ">
                                <FaExternalLinkAlt/>
                            </div>
                        </Button>
                    </div>
                </Card>
            </div>

            
        </div>
    )
}