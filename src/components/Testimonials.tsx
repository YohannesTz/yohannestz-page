import { Card, Dropdown } from "flowbite-react"

interface Testimonial {
    name: string,
    title: string,
    content: string,
    photoUrl: string
}

interface TestimonialsPropTypes {
    data: Testimonial[]
}

export const Testimonials: React.FC<TestimonialsPropTypes> = ({ data }) => {
    return (
        <div id="testemonials" className="px-6 text-left">
            <div className="prose py-6">
                <h1>Testimonials</h1>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-4 gap-4">
                {data.map((item, index) => {
                    return (
                        <div className="hover:drop-shadow-xl" key={index}>
                            <div className="flex rounded-lg h-full border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col" data-testid="flowbite-card">
                                <div className="flex h-full flex-col justify-center gap-4 p-6">
                                    <div className="mb-2 flex-grow">
                                        <p className="text-gray-700 text-base">{item.content}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full mr-4" src={item.photoUrl} alt={`Avatar of ${item.name}`} />
                                        <div className="text-sm">
                                            <p className="text-gray-900 font-medium leading-none">{item.name}</p>
                                            <p className="text-gray-600 pt-1">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div >
        </div>
    )
}
