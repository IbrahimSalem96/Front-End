import "./Home.css"
import { Hero, CardHero, Trending, MostPlayed, Categories, Cta } from "../../component/index.js"

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <CardHero></CardHero>
            <Trending></Trending>
            <MostPlayed></MostPlayed>
            <Categories></Categories>
            <Cta></Cta>
        </>
    )
}
