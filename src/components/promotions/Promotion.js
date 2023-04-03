/* eslint-disable jsx-a11y/anchor-is-valid */
import './PromotionsStyle.css'

import { PromoData } from './PromoData'
import UserCountdown from '../hooks/UseCountdown'
import Counter from './contagemRegre'
import {AiTwotoneCalendar} from '../../../node_modules/react-icons/ai'

function Promotions(){

    const [day, hour, minute, second] = UserCountdown('May, 1, 2023 00:00:00')


    return(
        <>
        <div className='Promocao'>
            <div className="container">
                <div className='PromoContagem'>
                <h2>Promoções do mês de março</h2>
                <p className='TempoRestante'>Tempo restante</p>
                <div className='ContadorPromo'>
                <Counter title={'Dias'} number={day}/>
                <Counter title={'Horas'} number={hour}/>
                <Counter title={'Minutos'} number={minute}/>
                <Counter title={'Segundos'} number={second}/>
                </div>
                </div>
                <div className='containerCards'>
                        <ul className="cards">
                            {PromoData.map((item,index)=>{
                                return(
                                <li key={index} className="card">
                                    <h1>{item.titile}</h1>
                            <div href={item.url}>
                                <div className={item.cName}>
                                <img src={item.img} className='Promo'/>
                                </div>
                            </div>
                            <div className="card-link-wrapper">
                                <a href="" className="card-link">Mais informações</a>
                                <a href="" className="card-link agendar"><AiTwotoneCalendar/>agendar</a>
                            </div>
                            
                            </li>
                            )
                            })}
                        </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Promotions