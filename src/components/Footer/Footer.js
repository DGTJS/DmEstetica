import Logo from '../../Img/Logo.png'
import {TbBrandGmail} from '../../../node_modules/react-icons/tb'
import {BsWhatsapp} from '../../../node_modules/react-icons/bs'
import {BsInstagram} from '../../../node_modules/react-icons/bs'
import {BsFacebook} from '../../../node_modules/react-icons/bs'

import './FooterStyle.css'

function Footer(){
    return(
        <footer className="p-5 row py-5 my-5 border-top border-bottom">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <img className='LogoFooter' src={Logo}/>
      </a>
      <p>©Devank-2023</p>
    </div>

    <div className="col mb-3">
      <h5>Links Úteis</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Contato</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Agendar</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Localização</a></li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Redes Sociais</h5>
      <ul className="nav  RedeSociais">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 IconRedeSociais insta"><BsInstagram/></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 IconRedeSociais"><BsFacebook/></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 IconRedeSociais wpp"><BsWhatsapp/></a></li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Atendimento ao cliente</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="https://api.whatsapp.com/send/?phone=5511930612987&text&type=phone_number&app_absent=0" className="nav-link p-0 atendiWhats"><BsWhatsapp/> (11)930612987</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 AtendiEmail"><TbBrandGmail/> Exemplo@Gmail.com</a></li>
      </ul>
    </div>


  </footer>
    )
}

export default Footer;