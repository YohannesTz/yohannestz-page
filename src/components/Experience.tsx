import { Timeline, Button } from "flowbite-react"
import { FaCalendar } from "react-icons/fa";

export const Experience = () => {
    return (
        <div id="experience" className="py-6 px-10 text-gray-800 text-left whitespace-break-normal">
            <div className="prose py-7">
                <h1>Experience</h1>
            </div>

            <Timeline>
                <Timeline.Item>
                    <Timeline.Point icon={FaCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>
                            Aug 2023 - present
                        </Timeline.Time>
                        <Timeline.Title>
                            Software Developer Intern
                        </Timeline.Title>
                        <Timeline.Body>
                            KurazTech
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={FaCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>
                            Sep 2022 - Oct 2023
                        </Timeline.Time>
                        <Timeline.Title>
                            Freelance Android Developer
                        </Timeline.Title>
                        <Timeline.Body>
                            Upwork
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={FaCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>
                            Nov 2021 - Nov 2022
                        </Timeline.Time>
                        <Timeline.Title>
                            Volunteer full-stack web developer
                        </Timeline.Title>
                        <Timeline.Body>
                            Ethiopian National Association of Deafblind
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={FaCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>
                            Sep 2021 - Nov 2021
                        </Timeline.Time>
                        <Timeline.Title>
                            Talent Pool memeber as Juniour Android Developer
                        </Timeline.Title>
                        <Timeline.Body>
                            Gebeya Talent
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}