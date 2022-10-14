import { Button, Card } from "flowbite-react"
import { BsGithub } from "react-icons/bs"

export const Projects = () => {
    return (
        <div id="projects" className="py-6 px-6 text-left">
            <div className="prose py-7">
                <h1>Projects</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                <div className="hover:drop-shadow-xl">
                    <Card>
                        <a href="https://github.com/yohannesTz/okami" target="_blank" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Okami
                        </a>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            An Android app that uses the kitsu api to let users explore anime and manga.
                        </p>
                    </Card>
                </div>


                <div className="hover:drop-shadow-xl">
                    <Card>
                        <a href="https://github.com/YohannesTz/BoidsFX" target="_blank" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            BoidsFX
                        </a>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Boids is an artificial life program developed by Craig Reynolds in 1986,
                            which simulates the flocking behaviour of birds.
                        </p>
                    </Card>
                </div>

                <div className="hover:drop-shadow-xl">
                    <Card>
                        <a href="https://github.com/YohannesTz/WorldHappinessScore" target="_blank" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            WorldHappinesScore
                        </a>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            A fairly simple app made with react and react-globe.gl which uses Three.js under to visualize worlds
                            happiness and other related social data. based on the example provided by react-globe.gl.
                            <br /> <br/>
                        </p>
                    </Card>
                </div>

                <div className="hover:drop-shadow-xl">
                    <Card>
                        <a href="https://github.com/YohannesTz/ChapaKt" target="_blank" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            ChapaKt
                        </a>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Simple api wrapper and utilities for chapa payment gateway. I know this is a hacky or
                            not a really good solution but that's all what we got now until chapa releases an official
                            Android-Sdk or just a rest api for everybody to use.
                        </p>
                    </Card>
                </div>
            </div>

            <div className="py-6 flex flex-row my-6 justify-center">
                <Button pill href="https://github.com/yohannesTz">
                    Visit Github My Page for More
                    <div className="mx-3">
                        <BsGithub />
                    </div>
                </Button>
            </div>
        </div>
    )
}