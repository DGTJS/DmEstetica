import React from 'react';
import Capilar from '../../Img/Cabelo-Branco.svg'
import IconFacial from '../../Img/Facial-Branco.svg'
import Corporal from '../../Img/Corporal-Branco.svg'
// 
import ReactDOM  from 'react-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TelaAgendamento.css'
import {AiOutlineCalendar} from 'react-icons/ai'

// Img Facial
import LimpezaDePele  from '../../Img/facial.jpeg'
import Flacidez from '../../Img/4dd8f9_ff71d911c79a43dab2299e8271432a8b~mv2.webp'
import Rejuvenescimento from '../../Img/Rejuveni.webp'
import Melasma from '../../Img/melasma.jpg'
import Microagulhamento from '../../Img/Microagualhamento.jpg'
import Papada from '../../Img/papada.png'
import Acne from '../../Img/Acne.webp'
// 
//img corporal 
import GorduraLocalizada from '../../Img/GorduraLocalizada.jpg'
import FlacidezCorporal from '../../Img/Flacidez.jpg'
import Enzima from '../../Img/Enzima.jpeg'
import Varizes from '../../Img/Varizes.jpg'
import Drenagem from '../../Img/Drenagem.jpg'
import Modeladora from '../../Img/Modeladora.jpg'
// img capilar
import Alopecia from '../../Img/Alopecia.jpg'
import Barba from '../../Img/barba.jpg'
import Cabelo from '../../Img/Cabelo.jpeg'




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
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Facial+de+Limpeza+de+Pele'
    },
    {
        img: Flacidez,
        title: 'Flacidez',
        description: 'O tratamento de flacidez facial pode trazer benefícios como: firmeza da pele, redução de rugas, aparência mais jovem, melhora na autoestima e resultados duradouros. É importante consultar um profissional para determinar qual tratamento é melhor para cada caso.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Facial+para+Flacidez'
    },
    {
        img: Rejuvenescimento,
        title: 'Rejuvenescimento',
        description: 'O rejuvenescimento facial pode reduzir rugas e linhas finas, melhorar a textura da pele, promover a produção de colágeno e elastina, além de proporcionar uma aparência mais jovem e saudável. É importante buscar um profissional especializado para obter os melhores resultados.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Facial+de+Rejuvenescimento+'
    },
    {
        img: Melasma,
        title: 'Melasma',
        description: 'Não deixe que o melasma afete a sua autoestima. Agende uma consulta para conhecer mais sobre o meu tratamento personalizado e como posso ajudá-lo a ter uma pele radiante e livre de manchas escuras.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Facial+de+Melasma'
    },
    {
        img: Microagulhamento,
        title: 'Microagulhamento ',
        description: 'O microagulhamento é um tratamento que usa pequenas agulhas para estimular a produção de colágeno e elastina na pele. Os benefícios incluem redução de cicatrizes de acne e estrias, melhora da textura da pele, redução de rugas e linhas finas, além de uma aparência mais jovem e saudável.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Facial+de+Microagulhamento+'
    },
    {
        img: Papada,
        title: 'Papada',
        description: 'O tratamento para a papada oferece a redução do excesso de gordura e melhora da aparência geral da região do pescoço. Os benefícios incluem definição do queixo, melhora da firmeza da pele e tonificação. Além disso, existem opções de tratamentos não invasivos disponíveis.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Facial+para+Papada'
    },
    {
        img: Acne,
        title: 'Cicatriz de acne',
        description: 'O tratamento para cicatriz de acne pode ajudar a melhorar a aparência da pele, reduzindo a profundidade e a visibilidade das cicatrizes. Dentre os benefícios, destacam-se a melhora da autoestima, a redução da inflamação e vermelhidão e a obtenção de uma pele mais uniforme e saudável.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Facial+para+Cicatriz+de+acne'
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
                                        <a href={item.href} target="_blank"><Button variant="success"><AiOutlineCalendar/>Agendar</Button></a>
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
        img: GorduraLocalizada,
        title: 'Gordura Localizada',
        description: 'tratamento corporal de gordura localizada pode melhorar a aparência do corpo e aumentar a autoestima, eliminando o acúmulo de gordura em áreas específicas.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Corporal+para+Gordura+Localizada'
    },
    {
        img:FlacidezCorporal,
        title: 'Flacidez',
        description: 'Nosso tratamento estético utiliza tecnologias avançadas para estimular a produção de colágeno e elastina, melhorando a flacidez corporal e deixando a pele mais firme e rejuvenescida. É uma opção segura e não invasiva para quem busca melhorar a aparência da pele.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Corporal+para+Gordura+Localizada'

    },
    {
        img: Enzima,
        title: 'Enzima Intramuscular',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Corporal+de+Enzima+Intermuscular',
        description: 'enzima intramuscular alivia dores e desconfortos musculares ao quebrar e eliminar toxinas. É composta por ingredientes naturais e aplicada por profissionais qualificados, garantindo segurança e eficácia no tratamento.'
    },
    {
        img: Varizes,
        title: 'Microvasos',
        description: 'tratamentos para varizes melhoram a circulação sanguínea, reduzem o tamanho das varizes e aliviam os sintomas. São seguros, não invasivos e oferecidos por profissionais experientes para melhorar a qualidade de vida dos pacientes.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Corporal+para+varizes',

    },
    {
        img: Drenagem,
        title: 'Drenagem linfática',
        description: 'drenagem linfática estimula o sistema linfático, reduzindo o inchaço, eliminando retenção de líquidos e melhorando a aparência da pele. É segura, indolor e pode ser aplicada em várias partes do corpo. Proporciona bem-estar e relaxamento aos pacientes.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Corporal+de+drenagem+linf%C3%A1tica',

    },
    {
        img:Modeladora,
        title: 'Massagem modeladora',
        description: 'massagem modeladora reduz medidas, combate a celulite e melhora a aparência da pele. Estimula a circulação sanguínea, a queima de gordura e a eliminação de toxinas. É aplicada por profissionais experientes e personalizada para cada paciente.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Corporal+de+massagem+modeladora+',

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
                                       <a href={item.href}target="_blank"><Button variant="success"><AiOutlineCalendar/>Agendar</Button></a>
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
        img: Alopecia,
        title: 'Alopécia',
        description: 'solução para alopecia estimula o crescimento capilar, fortalece os fios e melhora a aparência do couro cabeludo. É segura, não invasiva e oferecida por profissionais experientes para melhorar a autoestima dos pacientes.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Capilar+para+Alop%C3%A9cia+'
    },
    {
        img: Cabelo,
        title: 'Fortalecimento capilar',
        description: 'fortalecimento capilar nutre o couro cabeludo, fortalece os fios e previne a queda capilar. É segura, sem efeitos colaterais e oferecida por profissionais experientes para melhorar a saúde e a aparência dos cabelos dos pacientes.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Capilar+Fortalecimento+capilar'
    },
    {
        img: Barba,
        title: 'Crescimento da barba',
        description: 'solução para crescimento de barba estimula o crescimento dos fios, melhora a aparência e previne falhas na região. É segura, sem efeitos colaterais e oferecida por profissionais experientes para melhorar a autoestima dos pacientes.',
        href: 'https://wa.me/5511930612987?text=Gostaria+de+agendar+um+Tratamento+Capilar+para+Crescimento+de+barba'
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
                                        <a href={item.href} target="_blank"><Button variant="success" onclick={item.onClick} ><AiOutlineCalendar/>Agendar</Button></a>
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


