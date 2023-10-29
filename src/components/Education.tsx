import { Card } from "flowbite-react"

interface Education {
    schoolName: string;
    time: string;
    type: string;
    description: string;
}

interface EducationProps {
    data: Education[]
}

export const Education: React.FC<EducationProps> = ({ data }) => {
    return (
        <div id="education" className="text-left px-6">
            <div className="prose py-6">
                <h1>Education</h1>
            </div>

            {data.map((item, index) => {
                return (
                    <div className="my-4" key={index}>
                        <div className="flex rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-slate-400 dark:border-gray-700 dark:bg-gray-800 flex-col" data-testid="flowbite-card">
                            <div className="flex h-full flex-col justify-center gap-4 p-6">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.schoolName}
                                </h5>
                                <p className="font-normal text-gray-600 dark:text-gray-100">
                                    {item.time}
                                </p>
                                <p className="font-normal text-gray-600 dark:text-gray-700">
                                    {item.type}
                                </p>
                                <p className="font-normal text-gray-800 dark:text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}