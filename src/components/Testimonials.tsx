import { Card, Dropdown } from "flowbite-react"

export const Testimonials = () => {
    return (
        <div id="testemonials" className="px-6">
            <div className="prose py-6 text-left">
                <h1>Testimonials</h1>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="hover:drop-shadow-xl">
                    <Card>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                src="/images/ak_ysh.jpeg"
                                alt="Akotet Yeshaw"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Akotet Yeshaw
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Student at Korea Advanced Institute of Science & Technology
                            </span>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                I have been lucky enough and have the opportunity to work with Yohannes. He is passionate, skillful, and most of all fun to work with. 
                                Anyone who values being on top of projects and is looking for a highly competent full-stack/android developer will be glad to work with him.
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="hover:drop-shadow-xl">
                    <Card>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie image"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Somebody else
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Visual Designer
                            </span>
                            <p className="font-normal py-3 text-gray-700 dark:text-gray-400">
                                Boids is an artificial life program developed by Craig Reynolds in 1986,
                                which simulates the flocking behaviour of birds.
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="hover:drop-shadow-xl">
                    <Card>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie image"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Somebody else
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Visual Designer
                            </span>
                            <p className="font-normal py-3 text-gray-700 dark:text-gray-400">
                                Boids is an artificial life program developed by Craig Reynolds in 1986,
                                which simulates the flocking behaviour of birds.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}