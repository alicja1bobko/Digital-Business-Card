import Header from './components/Header';
import PersonInfo from './components/PersonInfo';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css';
// import { library } from '@fortawesome/fontawesome-svg-core';



function App() {
  return (
    <div>
      <Header />
      <div className='page-wrapper'>
      <PersonInfo />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
