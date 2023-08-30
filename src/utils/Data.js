import {FaReact, FaCss3, FaJsSquare} from 'react-icons/fa';
import { SiTailwindcss, SiAdobephotoshop, SiHtml5 } from 'react-icons/si';

import Project1 from '../assets/Project1.png'
import expenses_control from '../assets/expenses_project.png'
import modernUi from '../assets/modern_ui_project.png'

export const Skills = [
    {
        id: 0,
        tech: 'React',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'CSS',
        icon: <FaCss3 />
    },
    {
        id: 2,
        tech: 'JavaScript',
        icon: <FaJsSquare />
    },
    {
        id: 3,
        tech: 'Tailwind CSS',
        icon: <SiTailwindcss />
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

export const projectDetails = {
    en: [
        {
            id: 0,
            project_name: "Cost Control",
            project_desc: "Pellentesque nec est sit amet elit posuere egestas eu eget tellus. Nunc faucibus metus non posuere condimentum. Sed non augue vitae ex imperdiet pretium id ut felis. Nam scelerisque gravida faucibus.",
            tech_stack: ['React', 'CSS', 'Vite'],
            project_img: expenses_control,
            project_url: 'https://superlative-parfait-506a46.netlify.app/',
            reverse: false
        },
        {
            id: 1,
            project_name: "Second Project",
            project_desc: "Pellentesque nec est sit amet elit posuere egestas eu eget tellus. Nunc faucibus metus non posuere condimentum. Sed non augue vitae ex imperdiet pretium id ut felis. Nam scelerisque gravida faucibus.",
            tech_stack: ['React', 'Styled Components', 'MySql'],
            project_img: modernUi,
            project_url: 'https://www.youtube.com',
            reverse: false
        },
        {
            id: 2,
            project_name: "Third Project",
            project_desc: "Pellentesque nec est sit amet elit posuere egestas eu eget tellus. Nunc faucibus metus non posuere condimentum. Sed non augue vitae ex imperdiet pretium id ut felis. Nam scelerisque gravida faucibus.",
            tech_stack: ['HTML 5', 'CSS', 'Javascript'],
            project_img: Project1,
            project_url: 'https://www.youtube.com',
            reverse: false
        }
    ],
    es: [
        { 
            id: 0,
            project_name: "Control de Gastos",
            project_desc: "Aplicación para controlar gastos a partir de un presupuesto determinado por el usuario. Permitiendo editar y eliminar los gastos, y utilizar filtros mostrando los cambios en tiempo real.",
            tech_stack: ['React', 'CSS', 'Local Storage'],
            project_img: expenses_control,
            project_url: 'https://superlative-parfait-506a46.netlify.app/',
            reverse: false
        },
        {
            id: 1,
            project_name: "UI Moderna",
            project_desc: "Interfaz de usuario moderna creada en Vite usando TailwindCSS.",
            tech_stack: ['React', 'TailwindCSS', 'Vite'],
            project_img: modernUi,
            project_url: 'https://glistening-starlight-256505.netlify.app/',
            reverse: false
        },
        {
            id: 2,
            project_name: "Tercer Proyecto",
            project_desc: "Texto de prueba del idioma de react en español para ver que funcione el contexto multi lenguaje vargui culiao hola probando 42 veintiuno sapo.",
            tech_stack: ['HTML 5', 'CSS', 'Javascript'],
            project_img: Project1,
            project_url: 'https://www.youtube.com',
            reverse: false
        }
    ]
  };

