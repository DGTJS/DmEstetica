/* eslint-disable jsx-a11y/alt-text */
import FotoDani from '../../Img/FotoDani.png'
import './PresentationStyles.css'

function PresentationDani(){
    return(
        <>
        <header className='HeaderPresentation'>
            <div className='ImgPresentation'>
                <img src={FotoDani} className='FotoDani'/>
            </div>
            <div className='TextPresentation'>
                <h1 className='TitlePresentation'>Daniele martins<br/>Biomedica Esteta</h1>
                <p className='DescriptionPresentation'>Tratando microvasos com excelência 💉<br/>A mais de 2 anos transformando vidas ❣️<br/>Sua auto-estima é minha prioridade!</p>
            </div>
        </header>
        </>
    )
}
export default PresentationDani