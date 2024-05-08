import Header from "../components/Header/Header"
import Courses from "../components/Courses/Courses"

const Home = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Courses/>
            </main>
        </>
    )
}

export default Home