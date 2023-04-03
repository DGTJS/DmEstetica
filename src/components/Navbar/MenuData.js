import { FaHome } from '../../../node_modules/react-icons/fa'
import {FaRegAddressBook} from '../../../node_modules/react-icons/fa'
import {AiTwotoneCalendar} from '../../../node_modules/react-icons/ai'
import {TiLocation} from '../../../node_modules/react-icons/ti'

export const menuData = [
    {
        title: 'Home',
        url:'#',
        cName:'Nav-links',
        icon: <FaHome/>
    },

    {
        title: 'Contato',
        url:'https://wa.me/5511930612987',
        cName:'Nav-links',
        icon: <FaRegAddressBook/>
    },

    {
        title: 'Agendar',
        url:'#',
        cName:'Nav-links',
        icon: <AiTwotoneCalendar/>
    },
    
    {
        title: 'Localização',
        url:'https://www.google.com/maps/place/R.+Mangaratiba,+18+-+Parque+Sao+Miguel,+Guarulhos+-+SP,+07260-230/@-23.4573778,-46.4133079,3a,75y,99.08h,92.41t/data=!3m6!1e1!3m4!1s7IVvJplQnr1925n0yI_pQQ!2e0!7i16384!8i8192!4m7!3m6!1s0x94ce62447923628d:0xb4063399199db1b8!8m2!3d-23.4573776!4d-46.413236!10e5!16s%2Fg%2F11qg1f3sf8',
        cName:'Nav-links',
        icon: <TiLocation/>
    }
]