import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header, Footer } from "./Section/index.js"
import { Container } from "./component/index.js"
import { Home, Shop, Product, ContactUS, SingIn } from "./Pages/index.js"



const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Shop" element={<Shop />} />
                        <Route path="/Product" element={<Product />} />
                        <Route path="/ContactUS" element={<ContactUS />} />
                        <Route path="/SingIn" element={<SingIn />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}

export default App;


// 2 part
// import "./App.css"

// const App = () => {
//     return (
//         <div>
//             <Header />
//             <Container />
//             <Footer />
//         </div>
//     )
// }

// export default App;

{/* <Router>
<Header />
<Container>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>

</Container>
<Footer />
</Router> */}