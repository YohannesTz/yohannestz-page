import { Button } from "flowbite-react";
import { TypeAnimation } from "react-type-animation";

export const MiddleText = () => {

    return (
        <div id="middletext" className="py-12 px-6 text-gray-800 text-left whitespace-break-normal">

            <TypeAnimation
                sequence={[
                    'Web',
                    2500,
                    'Fullstack',
                    2500,
                    'Android',
                    2500,
                    'Flutter',
                    2500
                ]}
                wrapper="h1"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2.8em' }}
                className="py-4"
            />

            <p>
                Hi Yohannes here, a computer science student who constantly seeks out innovative solutions to everyday problems. 
                I have been interested in technology since my early ages. I have been writing programs that do simple tasks since I was 17. 
                In those years I've honed my analytical thinking and collaboration skills, and I love working with a team. I love collaborating and making connections.
                My specialties include Java, Android, React, Flutter and kotlin.

                <br /> <br />
                I am always open to chatting about tech startups and would love for you to connect with me.Please feel free also to message me if you want a work to be done.
                <br />
                Skills: Java, Android, React, Flutter and kotlin.
                <br />
                Open to: Remote jobs and internships
            </p>
            <div className="flex flex-row my-6">
                <div>
                    <Button pill href="https://drive.google.com/file/d/1zv9AVfD7IVZD52sL__AmPTJhNSGfWe4s/view?usp=sharing">
                        Download Resume
                    </Button>
                </div>
            </div>
        </div>
    )
}