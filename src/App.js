import Header from "./components/Header";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import {Routes, Route} from "react-router-dom"
import Page from "./pages/Page";
import Blogs from "./pages/Blogs";
import Footer from "./components/footer";

const App = () =>{
    return (
        <>



<Routes>
    <Route path="/" element={
        <>
        <Header/>
        <Section/>
        <Section2/>
        <Footer/>
        </>
    }/>
    <Route  path="/blogs" element={
        <>
        <Header/>
        <Page/>
        </>
    }/>
    <Route  path="/blog" element={
        <>
        <Header/>
    <Blogs/>
        </>
    
}
    />
</Routes>
        </>

        
    )
}

export default App;