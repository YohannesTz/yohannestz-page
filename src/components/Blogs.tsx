import { Button, Card } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Blogs = () => {
    return (
        <div id="certifications" className="text-left px-6">
            <div className="prose py-6">
                <h1>Blogs/Writing</h1>
            </div>

            <div className="my-6">
                <Card>
                    <p className="font-normal text-gray-700 dark:text-gray-100">
                        I have putted a few blogs on Medium.com, mostly focusing on Java, Kotlin, Android development, and other related stuff.
                        If you are passionate about these topics or seeking valuable insights in the realm of programming and mobile app development, I invite
                        you to explore my blog series.
                        <br /> <br />
                        Feel free to check them out, leave comments, and share your thoughts. Your feedback is always helpful! ;)
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Button
                            color="light"
                            pill>

                            <a href="https://medium.com/@yohannes222ethiopia" target="_blank">
                                Medium Profile
                            </a>

                            <div className="px-2 justify-center">
                                <FaExternalLinkAlt />
                            </div>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}