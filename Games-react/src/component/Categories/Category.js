
const Category = (props) => {
    return (
        <>
            <div className="item">
                <h4>{props.status}</h4>
                <div className="thumb">
                    <a href="#"><img src={props.image} alt="categories 1" /></a>
                </div>
            </div>
        </>
    )
}



export default Category;
