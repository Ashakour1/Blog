import Header from "./components/Header";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import {Routes, Route} from "react-router-dom"

import Blogs from "./pages/Blogs";
import Footer from "./components/footer";




const App = () =>{

// const [page, setPage] =useState("");
// useEffect(() =>{
//     document.title = page;
// },[page])
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
        <Blogs/>
        </>
    }/>
    <Route  path="/blog" element={
        <>
        <Header/>
    {/* <Blogs/> */}
        </>
    
}
    />
</Routes>
        </>

        
    )
}

export default App;