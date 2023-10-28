import { Button } from "flowbite-react";
import { TypeAnimation } from "react-type-animation";

interface MiddleTextProps {
    data: {
        stacks: string[];
        personalIntroOne: string;
        personalIntroTwo: string;
        personalSkills: string;
        openTo: string;
        resumeLink: string;
    };
}

export const MiddleText: React.FC<MiddleTextProps> = ({ data }) => {
    return (
        <div id="middletext" className="py-12 px-6 text-gray-800 text-left whitespace-break-normal">

            <TypeAnimation
                sequence={data.stacks.flatMap((element) => [element, 2500])}
                wrapper="h1"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2.8em' }}
                className="py-4"
            />

            <p>
                {data.personalIntroOne}
                <br /> <br />
                {data.personalIntroTwo}
                <br />
                {data.personalSkills}
                <br />
                {data.openTo}
            </p>
            <div className="flex flex-row my-6">
                <div>
                    <Button pill>
                        <a href={data.resumeLink} target="_blank">
                            Download Resume
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
