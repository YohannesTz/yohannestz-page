import React, { ReactNode } from 'react';
import { Icon } from '@iconify/react';

type TextAndSvgProps = {
    text: string;
    svg: string;
};

const techStackOne = [
    {
        id: 1,
        text: "JavaScript",
        svg: "logos:javascript",
    },
    {
        id: 2,
        text: "Java",
        svg: "logos:java",
    },
    {
        id: 3,
        text: "Kotlin",
        svg: "logos:kotlin-icon",
    },
    {
        id: 4,
        text: "PHP",
        svg: "logos:php",
    },
    {
        id: 5,
        text: "Android",
        svg: "openmoji:android",
    },
    {
        id: 6,
        text: "NodeJs",
        svg: "logos:nodejs"
    },
    {
        id:7,
        text: "Laravel",
        svg: "logos:laravel"
    },
];

const techStackTwo = [
    {
        id: 8,
        text: "MySql",
        svg: "logos:mysql",
    },
    {
        id: 9,
        text: "Postgres",
        svg: "logos:postgresql",
    },
    {
        id: 10,
        text: "MongoDb",
        svg: "logos:mongodb"
    },
    {
        id: 11,
        text: "TypeScript",
        svg: "logos:typescript",
    },
    {
        id: 12,
        text: "Apache Server",
        svg: "devicon-plain:apache-wordmark",
    },
    {
        id: 13,
        text: "Prisma",
        svg: "logos:prisma"
    },
    {
        id: 14,
        text: "Telegram Bots",
        svg: "bx:bot"
    }
];

const TextAndSvgComponent: React.FC<TextAndSvgProps> = ({ text, svg }) => {
    return (
        <div className="flex flex-row items-center px-4 text-gray-600">
            <div className='px-4'><Icon icon={svg} height="50" width="50" /></div>
            <span className="text-lg font-semibold">{text}</span>
        </div>
    );
};

export default function Technologies() {
    return (
        <div id="technologies" className="py-6 px-6 text-left">
            <div className="prose py-7">
                <h1>Technologies</h1>
            </div>

            <div className="relative flex overflow-x-hidden hover:pause [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <div className="py-12 animate-marquee whitespace-nowrap">
                    <div className="flex flex-row">
                        {techStackOne.map((data) => (
                            <TextAndSvgComponent key={data.id} text={data.text} svg={data.svg} />
                        ))}
                    </div>
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                    <div className="flex flex-row">
                        {techStackTwo.map((data) => (
                            <TextAndSvgComponent key={data.id} text={data.text} svg={data.svg} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
