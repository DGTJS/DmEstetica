const Counter = ({title,number}) =>{
    return(
        <div className="counter">
            <p className="counterNumber">{number}</p>
            <h3 className="counterTitle">{title}</h3>
        </div>
    )
}
export default Counter