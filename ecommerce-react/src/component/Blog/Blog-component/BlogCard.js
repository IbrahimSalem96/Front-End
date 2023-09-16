function BlogCard(props) {
    return (
        <>
            <div className="blog-card">
                <a href="#">
                    <img src={props.img} alt={props.alt}
                        width="300" className="blog-banner" />
                </a>
                <div className="blog-content">
                    <a href="#" className="blog-category">{props.category}</a>
                    <a href="#">
                        <h3 className="blog-title">{props.title}</h3>
                    </a>
                    <p className="blog-meta">
                        By <cite>Mr Admin</cite> / <time dateTime={props.date}>{props.dateM}</time>
                    </p>
                </div>
            </div>
        </>
    )
}
export default BlogCard
