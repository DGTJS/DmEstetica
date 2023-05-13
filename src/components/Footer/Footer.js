import Logo from '../../Img/Logo.png'
import {TbBrandGmail} from '../../../node_modules/react-icons/tb'
import {BsWhatsapp} from '../../../node_modules/react-icons/bs'
import {BsInstagram} from '../../../node_modules/react-icons/bs'
import {BsFacebook} from '../../../node_modules/react-icons/bs'

import './FooterStyle.css'

function Footer(){
    return(
      <>
        <footer className="p-5 row py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <img className='LogoFooter' src={Logo}/>
      </a>
    </div>


    <div className="col mb-3">
      <h5>Links Úteis</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="https://wa.me/5511930612987" className="nav-link p-0 ">Contato</a></li>
        <li className="nav-item mb-2"><a href="https://www.google.com/maps/place/R.+Mangaratiba,+18+-+Parque+Sao+Miguel,+Guarulhos+-+SP,+07260-230/@-23.4573778,-46.4133079,3a,75y,99.08h,92.41t/data=!3m6!1e1!3m4!1s7IVvJplQnr1925n0yI_pQQ!2e0!7i16384!8i8192!4m7!3m6!1s0x94ce62447923628d:0xb4063399199db1b8!8m2!3d-23.4573776!4d-46.413236!10e5!16s%2Fg%2F11qg1f3sf8" className="nav-link p-0 ">Localização</a></li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Redes Sociais</h5>
      <ul className="nav  RedeSociais">
        <li className="nav-item mb-2"><a href="https://www.instagram.com/danielemartinsbiomed/?fbclid=IwAR1buR1PYKnlmdU8-yXbl4HVzxEs4mGXy8iDga2Cx2gOnv3SKR5DOdR0Lzk" className="nav-link p-0 IconRedeSociais insta"><BsInstagram/></a></li>
        <li className="nav-item mb-2"><a href="https://www.facebook.com/profile.php?id=100088701464274&mibextid=ZbWKwL" className="nav-link p-0 IconRedeSociais face"><BsFacebook/></a></li>
        <li className="nav-item mb-2"><a href="https://wa.me/5511930612987" className="nav-link p-0 IconRedeSociais wpp"><BsWhatsapp/></a></li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5>Atendimento ao cliente</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="https://api.whatsapp.com/send/?phone=5511930612987&text&type=phone_number&app_absent=0" className="nav-link p-0 atendiWhats"><BsWhatsapp/> (11)930612987</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 AtendiEmail"><TbBrandGmail/>bioesteticadanielemartins@gmail.com</a></li>
      </ul>
    </div>


  </footer>
        <a href='https://devank.com.br/'><p className='CopyRight'>©Devank-2023</p></a>
        </>
    )
}

export default Footer;