import { Card, Dropdown } from "flowbite-react"

export const Testimonials = () => {
    return (
        <div id="testemonials" className="px-6">
            <div className="prose py-6 text-left">
                <h1>Testimonials</h1>
            </div>

            <div className="grid mx-auto lg:grid-cols-3 sm:grid-cols-1 gap-4">

                <div className="flex flex-col text-left col-span-1 px-5 hover:drop-shadow-xl">
                    <Card>
                        <div className="mb-2">
                            <p className="text-gray-700 text-base">
                                I have been lucky enough and have the opportunity to work with Yohannes. He is passionate, skillful, and most of all fun to work with.
                                Anyone who values being on top of projects and is looking for a highly competent full-stack/android developer will be glad to work with him.
                            </p>
                        </div>

                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="/images/ak_ysh.jpeg" alt="Avatar of Jonathan Reinink" />
                            <div className="text-sm">
                                <p className="text-gray-900 font-medium leading-none">Akotet Y.</p>
                                <p className="text-gray-600 pt-1">Research intern at ISIL, KAIST</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="flex flex-col text-left px-5 col-span-1 hover:drop-shadow-xl">
                    <Card>
                        <div className="mb-2">
                            <p className="text-gray-700 text-base">
                                I have been lucky enough and have the opportunity to work with Yohannes.
                            </p>
                        </div>

                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="/images/bes_m.png" alt="Avatar of Jonathan Reinink" />
                            <div className="text-sm">
                                <p className="text-gray-900 font-medium leading-none">Besufikad M.</p>
                                <p className="text-gray-600 pt-1">Software Engineering student at ASTU</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="flex flex-col text-left px-5 col-span-1 hover:drop-shadow-xl">
                    <Card>
                        <div className="mb-2">
                            <p className="text-gray-700 text-base">
                                I have been lucky enough and have the opportunity to work with Yohannes.competent full-stack/android developer will be glad to work with him.
                            </p>
                        </div>

                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src="/images/ak_ysh.jpeg" alt="Avatar of Jonathan Reinink" />
                            <div className="text-sm">
                                <p className="text-gray-900 font-medium leading-none">Kiya T.</p>
                                <p className="text-gray-600">Aug 18</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div >
        </div>
    )
}