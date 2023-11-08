import "./event.css";


const NextArrow = (props : any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src="/images/icons/next.png" alt="next" className="next"/>
      </div>
    );
  };
  export default NextArrow;
  
  
  
  
  
  