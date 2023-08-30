import {FaReact, FaCss3, FaJsSquare} from 'react-icons/fa';
import { SiTailwindcss, SiAdobephotoshop, SiHtml5 } from 'react-icons/si';

export const Skills = [
    {
        id: 0,
        tech: 'React',
        icon: <FaReact />,
        url: "https://es.react.dev/"
    },
    {
        id: 1,
        tech: 'CSS',
        icon: <FaCss3 />,
        url: "https://www.w3schools.com/css/"
    },
    {
        id: 2,
        tech: 'JavaScript',
        icon: <FaJsSquare />,
        url: "https://developer.mozilla.org/es/docs/Web/JavaScript"
    },
    {
        id: 3,
        tech: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        url: "https://tailwindcss.com/"
    },
    // {
    //     id: 4,
    //     tech: 'Photoshop',
    //     icon: <SiAdobephotoshop />
    // },
    // {
    //     id: 5,
    //     tech: 'HTML 5',
    //     icon: <SiHtml5 />
    // }
];