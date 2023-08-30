import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export const Contact_Info = {
    main : {
        mini: {
            es: "My Contacto",
            en: "My Contact"
        },
        title_first: {
            es: "Contáctame",
            en: "Contact"
        },
        title_second: {
            es: "Aquí",
            en: "Me Here"
        }           
    },
    contact: {
        mail: {
            title: {
                es: "Email:",
                en: "Email:"
            },
            icon: <AiOutlineMail />,
            text: "francoalvarezstevenot838@gmail.com"            
        },
        phone: {
            title: {
                es: "Teléfono:",
                en: "Phone:"
            },
            icon: <AiOutlinePhone />,
            text: "+54 351 614-9890"
        }
    }
}