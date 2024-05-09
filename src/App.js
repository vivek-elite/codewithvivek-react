import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import EpisodesPage from './pages/EpisodesPage';
import RegisterPage from './pages/RegisterPage';
import PythonPage from './pages/PythonPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <main id="page-body">
          <Routes>
            <Route path="/" element={<HomePage/>} exact />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/articles-list" element={<ArticlesPage/>} />
            <Route path="/courses" element={<HomePage/>} />
            <Route path="/courses/:title" element={<EpisodesPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/python-tuitions" element={<PythonPage/>} />
          </Routes>
          </main>
          {/* <iframe 
                width="546" 
                height="410"
                title="Coding for Kids"
                src="https://www.youtube.com/embed/videoseries?list=PLO05Yrns4dMv_eOGdsSE5vh1o9alhUdNP"
                loading="lazy">
            </iframe> */}
          <Footer />
      </div>
    </Router>
  );
}

export default App;
