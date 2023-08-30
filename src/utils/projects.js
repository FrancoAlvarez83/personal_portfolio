import Project1 from '../assets/Project1.png';
import expenses_control from '../assets/expenses_project.png';
import modernUi from '../assets/modern_ui_project.png'

export const projects = [ 
  {
    id: 0,
    project_name: {
        es: "Contro de Costos",
        en: "Cost Control"
    },
    desc: {
        es: "Aplicación para controlar gastos a partir de un presupuesto determinado por el usuario. Permitiendo editar y eliminar los gastos, y utilizar filtros mostrando los cambios en tiempo real.",
        en: "Application to control expenses from a budget determined by the user. Allowing to edit and delete expenses, and use filters showing changes in real time."
    },
    tech_stack: ['React', 'CSS', 'Local Storage'],
    project_img: expenses_control,
    project_url: "https://superlative-parfait-506a46.netlify.app/",
    reverse: false
  },
  {
    id: 1,
    project_name: {
        es: "UI Moderna",
        en: "Modern UI"
    },
    desc: {
        es: "Landing page moderna basada en la Fórmula 1. Creada en Vite usando Tailwind CSS y Framer Motion.",
        en: "Modern landing page based on Fórmula 1. Created using Vite, Framer Motion and Tailwind CSS"
    },
    tech_stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    project_img: modernUi,
    project_url: "https://glistening-starlight-256505.netlify.app/",
    reverse: false
  },
  {
    id: 2,
    project_name: {
        es: "Tercer Proyecto",
        en: "Third Project"
    },
    desc: {
        es: "Texto de prueba para verificar el cambio apropiado de idioma.",
        en: "Text to verify the proper work of the language switch."
    },
    tech_stack: ['HTML 5', 'CSS', 'Javascript'],
    project_img: Project1,
    project_url: "https://glistening-starlight-256505.netlify.app/",
    reverse: false
  }
]

