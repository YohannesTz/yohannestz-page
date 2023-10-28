import { Timeline, Button } from "flowbite-react"
import { FaCalendar } from "react-icons/fa";

interface Experience {
    title: string,
    company: string,
    time: string
}

interface ExperienceProps {
    data: Experience[]
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
    return (
        <div id="experience" className="py-6 px-10 text-gray-800 text-left whitespace-break-normal">
            <div className="prose py-7">
                <h1>Experience</h1>
            </div>

            <Timeline>

                {data.map((item, index) => {
                    return (
                        <Timeline.Item key={index}>
                            <Timeline.Point icon={FaCalendar} />
                            <Timeline.Content>
                                <Timeline.Time>
                                    {item.time}
                                </Timeline.Time>
                                <Timeline.Title>
                                    {item.title}
                                </Timeline.Title>
                                <Timeline.Body>
                                    {item.company}
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </div>
    )
}