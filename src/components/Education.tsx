import { Card } from "flowbite-react"

export const Education = () => {
    return (
        <div id="education" className="text-left px-6">
            <div className="prose py-6">
                <h1>Education</h1>
            </div>

            <div className="my-4">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Microlink IT College
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100">
                        2021 - 2024
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-700">
                        Bsc - Computer Science
                    </p>
                </Card>
            </div>

            <div className="my-6">
                <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Dejazmach Wondirad Preparatory School
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-100">
                        2018 - 2020
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-700">
                        Highscool Diploma - Natural Sciences
                    </p>
                </Card>
            </div>
        </div>
    )
}