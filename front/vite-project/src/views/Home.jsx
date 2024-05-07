import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Courses from "../components/Courses"

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
                <Header />
            </header>
            <main>
                <Courses/>
            </main>
        </>
    )
}

export default Home