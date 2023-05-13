import './PromotionsStyle.css'
import { CategoryData } from '../TelaAgendamento/TelaAgendamento';
import React from 'react';
import {BsCalendar2Week} from 'react-icons/bs'
import DarkVariantExample from '../Carrousel/Carousel'
import Banner from '../../Img/Banner.gif'


function Promotions(){



    return(
        <>
        <div className='container'>
        <img className='Banner' src={Banner} alt="" />
        </div>
        <div className='Promotions'>
            <div className='contentText'>
                <h1 className='TextTratamento'>Faça seu agendamento <BsCalendar2Week className='CalendarioCategory'/></h1>
                <p className='TextTratamento'>Realce sua beleza com nossos procedimentos estéticos!</p>
            </div>
            <div className='ContainerCards'>
                <div className='ContainerCategory'>
                    {CategoryData.map((item, index)=>{
                        return(
                    <div key={index} className='ConentCategory' onClick={item.onclick}>
                        <div className='Icons-Text'>
                            <img src={item.img} className='ImgCategory'/>
                        <h2 className='TextCategory'>{item.title}</h2>
                        </div>
                        
                        <BsCalendar2Week className='CalendarioCategory'/>
                    </div>)
                    })}
                </div>
                <div className='align-items-center'>
                    <DarkVariantExample/>
                </div>
            </div>
                
        </div>    
        <div className='TelaAgendamento' id='TelaAgendamento'>
        </div>
        <div className='Agendar' id='Agendar'>

        </div>
        </>
    )
}

export default Promotions