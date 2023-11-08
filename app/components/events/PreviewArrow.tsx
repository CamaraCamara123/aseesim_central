import "./event.css"
const PrevArrow = (props:any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src="/images/icons/preview.png" alt="next" className="preview"/>
      </div>
    );
  };

export default PrevArrow;