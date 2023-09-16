import Showcase from './Showcase'

function ShowcaseContainer(props) {
    return (
        <>
            <div className="showcase-container">
                <Showcase img={props.img} title={props.title} category={props.category} price={props.price} des={props.des} />
            </div>
        </>
    )
}

export default ShowcaseContainer
