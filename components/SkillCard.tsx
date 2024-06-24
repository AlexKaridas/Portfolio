import Image from "next/image";
import { IconType } from 'react-icons';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSass, SiExpo } from 'react-icons/si';

type SkillName = 'react.js' | 'html5' | 'css' | 'javascript' | 'next.js' | 'typescript' | 'tailwind' | 'scss' | 'react native' | 'expo';

interface SkillProps {
    skill: string,
    category: string,
}

const skillIcons: { [key in SkillName]: IconType } = {
    'react.js': FaReact,
    html5: FaHtml5,
    css: FaCss3Alt,
    javascript: FaJsSquare,
    'next.js': SiNextdotjs,
    typescript: SiTypescript,
    tailwind: SiTailwindcss,
    scss: SiSass,
    'react native': FaReact,
    expo: SiExpo,
};


export default function SkillCard({ skill, category }: SkillProps) {
    const lowerCasedSkill = skill.toLowerCase() as SkillName;  // Type assertion

    const IconComponent = skillIcons[lowerCasedSkill];
    return (
        <div className="bg-zinc-900 rounded-lg flex items-center gap-4 p-4 border-gray-800 border z-20 sm:gap-6 sm:p-6">
            <div className="flex-shrink-0">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    {IconComponent ? <IconComponent size={40} className="text-gray-100" /> : null}
                </div>
            </div>
            <div className="flex flex-col items-start justify-start">
                <p className="font-semibold text-md sm:text-lg text-gray-100">{skill}</p>
                <p className="font-light text-sm sm:text-md text-gray-400">{category}</p>
            </div>
        </div>
    );
}
