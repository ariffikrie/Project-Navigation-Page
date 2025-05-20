// File: Projects.tsx
import React from 'react';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    status: 'Live' | 'Cached' | 'GitHub';
    statusLink: string;
    extraStatusLink?: string;
    imageUrl: string;
    altText: string;
}

const projects: Project[] = [
    {
        title: 'ChertNodes',
        description: 'Minecraft servers hosting',
        techStack: ['HTML', 'SCSS', 'Python', 'Flask'],
        status: 'Live',
        statusLink: '#',
        extraStatusLink: '#',
        imageUrl: '/images/chertnodes.png',
        altText: 'ChertNodes Screenshot'
    },
    {
        title: 'Kahoot Answers Viewer',
        description: 'Get answers to your kahoot quiz',
        techStack: ['CSS', 'Express', 'Node.js'],
        status: 'Live',
        statusLink: '#',
        imageUrl: '/images/kahoot.png',
        altText: 'Kahoot Viewer Screenshot'
    },
    {
        title: 'ProtectX',
        description: 'Discord anti-crash bot',
        techStack: ['React', 'Express', 'Discord.js', 'Node.js'],
        status: 'Cached',
        statusLink: '#',
        imageUrl: '/images/protectx.png',
        altText: 'ProtectX Screenshot'
    },
    {
        title: 'Kotik Bot',
        description: 'Multi-functional discord bot',
        techStack: ['HTML', 'CSS', 'JS'],
        status: 'Live',
        statusLink: '#',
        imageUrl: '/images/kotik.png',
        altText: 'Kotik Bot Screenshot'
    },
    {
        title: 'Portfolio',
        description: "You're using it rn",
        techStack: ['Vue', 'TS', 'Less'],
        status: 'GitHub',
        statusLink: '#',
        imageUrl: '/images/portfolio.png',
        altText: 'Portfolio Screenshot'
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-[#1e1e2f] rounded-md shadow-md p-4 flex flex-col gap-2">
            <img
                src={project.imageUrl}
                alt={project.altText}
                className="rounded-md object-cover w-full h-32 mb-2"
            />
            <div className="text-sm text-gray-400">{project.techStack.join(' ')}</div>
            <div className="text-white text-xl font-semibold">{project.title}</div>
            <div className="text-sm text-gray-300 mb-2">{project.description}</div>
            <div className="flex gap-2">
                <a
                    href={project.statusLink}
                    className="bg-purple-600 px-3 py-1 rounded-md text-white text-xs hover:bg-purple-700"
                >
                    {project.status}
                </a>
                {project.extraStatusLink && (
                    <a
                        href={project.extraStatusLink}
                        className="bg-gray-700 px-3 py-1 rounded-md text-white text-xs hover:bg-gray-800"
                    >
                        Cached
                    </a>
                )}
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <section className="p-6 bg-[#10101a] min-h-screen">
            <h1 className="text-3xl font-bold text-white mb-2">/projects</h1>
            <p className="text-gray-400 mb-6">List of my projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
