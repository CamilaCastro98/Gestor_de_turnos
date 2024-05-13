import Header from "../../components/Header/Header"
import Courses from "../../components/Courses/Courses"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Courses/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Home