import './PromotionsStyle.css'
import { CategoryData } from './Cards';
import React from 'react';
import {BsCalendar2Week} from 'react-icons/bs'





function Promotions(){



    return(
        <>

        <div className='Promotions'>
            <div className='contentText'>
                <h1 className='TextTratamento'>Tratamentos Mais Populares</h1>
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
            </div>
                
        </div>    
        <div className='TelaAgendamento' id='TelaAgendamento'>
        </div>
        </>
    )
}

export default Promotions