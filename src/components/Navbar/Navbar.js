import Logo from '../../Img/Logo.png'
import { menuData } from './MenuData'
import './NavbarStyles.css'
import { Component } from 'react'

class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({
            clicked:
            !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <img src={Logo} className='LogoNavbar' ></img>
                <div className='Menu-icons' onClick={this.handleClick}>
                <i className={this.state.clicked ?  'bi bi-x-lg' : 'bi bi-list'}/>
                </div> 
                <ul className={this.state.clicked ? 'Nav-menu active' : 'Nav-menu '}>
                    {menuData.map((item,index)=>{
                        return(
                            <li key={index} onClick={function(){window.location = item.url}} className='ListNavBar'> 
                             <p className='TitleIconNav'>{item.title}</p> 
                        </li>
                        )
                    })}

                </ul>
            </nav>
        )
}
}
export default Navbar