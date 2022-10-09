import { Button, Timeline } from "flowbite-react"

export const MyTimeLine = () => {
    return (
        <div id="timeline" className="text-left px-6 whitespace-break-normal">
            <h1 className="prose text-2xl">Journey</h1>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            pre 2010
                        </Timeline.Time>
                        <Timeline.Title>
                            Basically was in Dark Age
                        </Timeline.Title>
                        <Timeline.Body>
                            Always thought The white big Tv-thingies were interesting. only seen them on tv or in an office. never knew what they actually did...
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            2012 - 2014/15
                        </Timeline.Time>
                        <Timeline.Title>
                            Basic IT knowledge
                        </Timeline.Title>
                        <Timeline.Body>
                            At this time, had basic knowledge of a computer. only knew how to open a folder, rename it, use word, encarta, play games and all the nostalgic things.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            2016 - 2018
                        </Timeline.Time>
                        <Timeline.Title>
                            My Java era
                        </Timeline.Title>
                        <Timeline.Body>
                            My classmate told me something called "Java" which people used to write software. I was fascinated, so started learning it. Mostly didn't know what I was doing but I built 
                            many desktop applications. those were primarly written in a java ui framework called JavaFx. I built a music player, video player, text editor, paint app.(sadly, I didn't use git 
                            so I don't have backup of them...) then somebody sent me an app and took 5 birr from me. that also inspired me to start Android development.(mostly development was on and off thing...)
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            2019
                        </Timeline.Time>
                        <Timeline.Title>
                            New Habits
                        </Timeline.Title>
                        <Timeline.Body>
                            Mostly spent my time watching tutorials. I tried almost everything I could get my hands on. I also thought my self to write more
                            Object oriented programs. I needed an Api for my Applications so I learned the cheapest I could find... PHP (duh!). then Abandond it
                            for other Platform as service like Back4App, Firebase. I read blogs, gone to talks and discussions.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            2020
                        </Timeline.Time>
                        <Timeline.Title>
                            Enlightenment
                        </Timeline.Title>
                        <Timeline.Body>
                            Through a slow process I knew most programming concepts. I needed api so I also built a little bit of PHP but then figured NodeJs is much easier.
                            also learned how to do web using the Mysql-ERN stack and did some flutter. also increased knowledge on Object Oriented programming, Android development, software development in general.
                            also was in entrepreneur-phase where me and my close friend spent almost 5/6 months developing/testing a backend for a future app which I eventually stopped. It was 
                            also by far the biggest project I have done.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            2021
                        </Timeline.Time>
                        <Timeline.Title>
                            Learning... More learning...
                        </Timeline.Title>
                        <Timeline.Body>
                            This year was mostly dedicated to learning. I was enrolled in many courses like GDG's fullstack course, the Google African Developer Scholarship,
                            Udacity Nanoo Degree and many other on Udemy and youtube.Accquired many skills, added more to that I already have. this year also tried to reach out
                            to the Ethiopian Dev community which Included being active on telegram groups and discussions, building projects, updating my abandond github and linkedin 
                            profile.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            2022
                        </Timeline.Time>
                        <Timeline.Title>
                            Change
                        </Timeline.Title>
                        <Timeline.Body>
                            On 2022 focused more on improving the skills that I have, more reaching out, more projects. this year also built a website for 
                            an NGO, landed my first job on upwork.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}