import React from 'react';
import Capilar from '../../Img/Cabelo-Branco.svg'
import IconFacial from '../../Img/Facial-Branco.svg'
import Corporal from '../../Img/Corporal-Branco.svg'

// 
import ReactDOM  from 'react-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'
import {AiOutlineCalendar} from 'react-icons/ai'

// Img Facial
import LimpezaDePele  from '../../Img/facial.jpg'
import  Flacidez from '../../Img/4dd8f9_ff71d911c79a43dab2299e8271432a8b~mv2.webp'
import Rejuvenescimento from '../../Img/Rejuveni.webp'
import Melasma from '../../Img/melasma.jpg'
import Microagulhamento from '../../Img/Microagualhamento.jpg'
import Papada from '../../Img/papada.png'
import Acne from '../../Img/Acne.webp'
// 


export const CategoryData = [

    
    {
        title: 'Tratamento Facial',
        url: '#',
        img: IconFacial,
        onclick: TratamentoFacial,
    },
    {
        title: 'Tratamento Corporal',
        url: '#',
        img: Corporal,
        onclick: TratamentoCorporal,

    },
    {
        title: 'Tratamento Capilar',
        url: '#',
        img: Capilar,
        onclick: TratamentoCapilar,

    },


]

export const CardsFacial = [
    {
        img: LimpezaDePele,
        title: 'Limpeza de pele',
        description: 'A limpeza de pele remove impurezas, previne cravos e espinhas, estimula a renovação celular e melhora a circulação sanguínea.',
    },
    {
        img: Flacidez,
        title: 'Flacidez',
        description: 'O tratamento de flacidez facial pode trazer benefícios como: firmeza da pele, redução de rugas, aparência mais jovem, melhora na autoestima e resultados duradouros. É importante consultar um profissional para determinar qual tratamento é melhor para cada caso.',
    },
    {
        img: Rejuvenescimento,
        title: 'Rejuvenescimento',
        description: 'O rejuvenescimento facial pode reduzir rugas e linhas finas, melhorar a textura da pele, promover a produção de colágeno e elastina, além de proporcionar uma aparência mais jovem e saudável. É importante buscar um profissional especializado para obter os melhores resultados.',
    },
    {
        img: Melasma,
        title: 'Melasma',
        description: 'Não deixe que o melasma afete a sua autoestima. Agende uma consulta para conhecer mais sobre o meu tratamento personalizado e como posso ajudá-lo a ter uma pele radiante e livre de manchas escuras.',
    },
    {
        img: Microagulhamento,
        title: 'Microagulhamento',
        description: 'O microagulhamento é um tratamento que usa pequenas agulhas para estimular a produção de colágeno e elastina na pele. Os benefícios incluem redução de cicatrizes de acne e estrias, melhora da textura da pele, redução de rugas e linhas finas, além de uma aparência mais jovem e saudável.',
    },
    {
        img: Papada,
        title: 'Papada',
        description: 'O tratamento para a papada oferece a redução do excesso de gordura e melhora da aparência geral da região do pescoço. Os benefícios incluem definição do queixo, melhora da firmeza da pele e tonificação. Além disso, existem opções de tratamentos não invasivos disponíveis.',
    },
    {
        img: Acne,
        title: 'Cicatriz de acne',
        description: 'O tratamento para cicatriz de acne pode ajudar a melhorar a aparência da pele, reduzindo a profundidade e a visibilidade das cicatrizes. Dentre os benefícios, destacam-se a melhora da autoestima, a redução da inflamação e vermelhidão e a obtenção de uma pele mais uniforme e saudável.',
    },
]



let jaExecutouFacial = false; // adiciona uma variável para guardar o estado da execução da função
function TratamentoFacial(){
    
    const TelaAgendamento = document.getElementById('TelaAgendamento')
    TelaAgendamento.style.right = '0vw'
    const novoElemento = document.createElement('div'); // cria um novo elemento div
    novoElemento.id = 'NovoElemento'

    if (jaExecutouFacial === false) { // verifica se a função ainda não foi executada
        const ServicoFacial = () =>{
            TelaAgendamento.appendChild(novoElemento); // adiciona o novo elemento como filho de TelaAgendamento
            ReactDOM.render(
                <>
                <div>
                <div className='ButtonFechar' onClick={ButtonFechar}></div>
                    <h1 className='TituloServiço'><img src={IconFacial} style={{width:'4rem'}}/>Serviços Facial</h1>
                    <div className='Cards'>
                    {CardsFacial.map((item,index)=>{
                        return(
                            <>
                                <Card key={index} >
                                    <Card.Img variant="top" src={item.img} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}
                                        </Card.Text>
                                        <Button variant="success"><AiOutlineCalendar/>Agendar</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })}
                    </div>


                </div>
                </>,
                novoElemento // renderiza o componente dentro do novo elemento criado
            )
    
        }         
        
        ServicoFacial() // chama a função ServicoFacial diretamente
        jaExecutouFacial = true; // atualiza o estado da variável para indicar que a função já foi executada

    }         
    
        function ButtonFechar(){
        const TelaAgendamento = document.getElementById('TelaAgendamento')
        TelaAgendamento.style.right = '-120vw'
        TelaAgendamento.style.transition = 'ease-in-out 0.71s all'
        const NovoElemento = document.getElementById('NovoElemento')
        if(NovoElemento){
            TelaAgendamento.removeChild(NovoElemento)
        }
        jaExecutouFacial = false

    }

}





export const CardsCorporal = [
    {
        img: LimpezaDePele,
        title: 'Gordura Localizada',
        description: 'A limpeza de pele remove impurezas, previne cravos e espinhas, estimula a renovação celular e melhora a circulação sanguínea.',
    },
    {
        img: Flacidez,
        title: 'Flacidez',
        description: 'O tratamento de flacidez facial pode trazer benefícios como: firmeza da pele, redução de rugas, aparência mais jovem, melhora na autoestima e resultados duradouros. É importante consultar um profissional para determinar qual tratamento é melhor para cada caso.',
    },
    {
        img: Rejuvenescimento,
        title: 'Intramusculares',
        description: 'O rejuvenescimento facial pode reduzir rugas e linhas finas, melhorar a textura da pele, promover a produção de colágeno e elastina, além de proporcionar uma aparência mais jovem e saudável. É importante buscar um profissional especializado para obter os melhores resultados.',
    },
    {
        img: Melasma,
        title: 'P.E.I.M',
        description: 'Não deixe que o melasma afete a sua autoestima. Agende uma consulta para conhecer mais sobre o meu tratamento personalizado e como posso ajudá-lo a ter uma pele radiante e livre de manchas escuras.',
    },
    {
        img: Microagulhamento,
        title: 'Drenagem linfática',
        description: 'O microagulhamento é um tratamento que usa pequenas agulhas para estimular a produção de colágeno e elastina na pele. Os benefícios incluem redução de cicatrizes de acne e estrias, melhora da textura da pele, redução de rugas e linhas finas, além de uma aparência mais jovem e saudável.',
    },
    {
        img: Papada,
        title: 'Massagem modeladora',
        description: 'O tratamento para a papada oferece a redução do excesso de gordura e melhora da aparência geral da região do pescoço. Os benefícios incluem definição do queixo, melhora da firmeza da pele e tonificação. Além disso, existem opções de tratamentos não invasivos disponíveis.',
    },

]



let jaExecutouCorporal = false; // adiciona uma variável para guardar o estado da execução da função
function TratamentoCorporal(){

    const TelaAgendamento = document.getElementById('TelaAgendamento')
    TelaAgendamento.style.right = '0vw'
    const novoElemento = document.createElement('div'); // cria um novo elemento div
    novoElemento.id = 'NovoElemento'

    if (jaExecutouCorporal === false) { // verifica se a função ainda não foi executada
        const ServicoCorporal = () =>{
            TelaAgendamento.appendChild(novoElemento); // adiciona o novo elemento como filho de TelaAgendamento
            ReactDOM.render(
                <>
                <div>
                <div className='ButtonFechar' onClick={ButtonFechar}></div>
                    <h1 className='TituloServiço'><img src={Corporal} style={{width:'4rem'}}/>Serviços Corporal</h1>
                    <div className='Cards'>
                    {CardsCorporal.map((item,index)=>{
                        return(
                            <>
                                <Card key={index} >
                                    <Card.Img variant="top" src={item.img} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}
                                        </Card.Text>
                                        <Button variant="success"><AiOutlineCalendar/>Agendar</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })}
                    </div>
                    </div>
                </>,
                novoElemento // renderiza o componente dentro do novo elemento criado
            )
    
        }
        
        ServicoCorporal() // chama a função ServicoFacial diretamente
        jaExecutouCorporal = true; // atualiza o estado da variável para indicar que a função já foi executada
        
        function ButtonFechar(){
            const TelaAgendamento = document.getElementById('TelaAgendamento')
            TelaAgendamento.style.right = '-120vw'
            TelaAgendamento.style.transition = 'ease-in-out 0.71s all'
            const NovoElemento = document.getElementById('NovoElemento')
            if(NovoElemento){
                TelaAgendamento.removeChild(NovoElemento)
            }
            jaExecutouCorporal = false
            
        }
    }
    
}


export const CardsCapilar = [
    {
        img: LimpezaDePele,
        title: 'Alopécia',
        description: 'A limpeza de pele remove impurezas, previne cravos e espinhas, estimula a renovação celular e melhora a circulação sanguínea.',
    },
    {
        img: Flacidez,
        title: 'Flacidez',
        description: 'O tratamento de flacidez facial pode trazer benefícios como: firmeza da pele, redução de rugas, aparência mais jovem, melhora na autoestima e resultados duradouros. É importante consultar um profissional para determinar qual tratamento é melhor para cada caso.',
    },
    {
        img: Rejuvenescimento,
        title: 'Fortalecimento capilar',
        description: 'O rejuvenescimento facial pode reduzir rugas e linhas finas, melhorar a textura da pele, promover a produção de colágeno e elastina, além de proporcionar uma aparência mais jovem e saudável. É importante buscar um profissional especializado para obter os melhores resultados.',
    },
    {
        img: Melasma,
        title: 'Crescimento da barba',
        description: 'Não deixe que o melasma afete a sua autoestima. Agende uma consulta para conhecer mais sobre o meu tratamento personalizado e como posso ajudá-lo a ter uma pele radiante e livre de manchas escuras.',
    },
   
]



let jaExecutouCapilar = false; // adiciona uma variável para guardar o estado da execução da função
function TratamentoCapilar(){
   
    const TelaAgendamento = document.getElementById('TelaAgendamento')
    TelaAgendamento.style.right = '0vw'
    const novoElemento = document.createElement('div'); // cria um novo elemento div
    novoElemento.id = 'NovoElemento'

    if (jaExecutouCapilar === false) { // verifica se a função ainda não foi executada
        const ServicoCapilar = () =>{
            TelaAgendamento.appendChild(novoElemento); // adiciona o novo elemento como filho de TelaAgendamento
            ReactDOM.render(
                <>
                <div>
                     <div className='ButtonFechar' onClick={ButtonFechar}></div>
                    <h1 className='TituloServiço'><img src={Capilar} style={{width:'4rem'}}/>Serviços Capilar</h1>
                    <div className='Cards'>
                    {CardsCapilar.map((item,index)=>{
                        return(
                            <>
                                <Card key={index} >
                                    <Card.Img variant="top" src={item.img} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}
                                        </Card.Text>
                                        <Button variant="success"><AiOutlineCalendar/>Agendar</Button>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })}
                    </div>
                </div>
                </>,
                novoElemento // renderiza o componente dentro do novo elemento criado
            )
    
        }
        
        ServicoCapilar() // chama a função ServicoFacial diretamente
        jaExecutouCapilar = true; // atualiza o estado da variável para indicar que a função já foi executada

        function ButtonFechar(){
            const TelaAgendamento = document.getElementById('TelaAgendamento')
            TelaAgendamento.style.right = '-120vw'
            TelaAgendamento.style.transition = 'ease-in-out 0.71s all'
            const NovoElemento = document.getElementById('NovoElemento')
            if(NovoElemento){
                TelaAgendamento.removeChild(NovoElemento)
            }
            jaExecutouCapilar = false
    
        }
    
    } 
}


