import blogImg1 from '../../assets/images/blog-1.jpg'
import blogImg2 from '../../assets/images/blog-2.jpg'
import blogImg3 from '../../assets/images/blog-3.jpg'
import blogImg4 from '../../assets/images/blog-4.jpg'
import BlogCard from './Blog-component/BlogCard'

function Blog() {
    return (
        <>
            <div className="blog">
                <div className="container">
                    <div className="blog-container has-scrollbar">
                        <BlogCard img={blogImg1} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" category="Fashion" title="Clothes Retail KPIs 2021 Guide for Clothes Executives." date="2022-04-06" dateM="Apr 06, 2022" />

                        <BlogCard img={blogImg2} alt="Curbside fashion Trends: How to Win the Pickup Battle." category="Clothes" title="Curbside fashion Trends: How to Win the Pickup Battle." date="2022-01-18" dateM="Jan 18, 2022" />

                        <BlogCard img={blogImg3} alt="EBT vendors: Claim Your Share of SNAP Online Revenue." category="Shoes" title="EBT vendors: Claim Your Share of SNAP Online Revenue." date="2022-02-10" dateM="Feb 10, 2022" />

                        <BlogCard img={blogImg4} alt="Curbside fashion Trends: How to Win the Pickup Battle." category="Electronics" title="Curbside fashion Trends: How to Win the Pickup Battle." date="2022-03-15" dateM="Mar 15, 2022" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
