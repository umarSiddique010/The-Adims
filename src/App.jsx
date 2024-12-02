import React from 'react';
import Navbar from './components/NavBar.jsx';
import SectionSlides from './components/SectionSlides.jsx';
import SectionCard from './components/SectionCard.jsx';
import cardsData from './cardData.jsx'
import SectionText from './components/SectionText.jsx'
import Footer from './components/Footer.jsx'

function App() {
 

  return (
    <>
      <Navbar />
      <main>
        <SectionSlides />
        <h1 className='text-center  p-2 h-12 bg-slate-100 font-semibold font-serif italic'>
          Step into comfort, walk out in style. Every journey begins with the perfect pair.
        </h1>

      
        <div className="p-4  mt-16 flex justify-center items-center flex-wrap gap-24">
          {cardsData.map((card, index) => (
            <SectionCard 
              key={index}
              title={card.title}
              imgSrc={card.imgSrc}
              description={card.description}
            />
          ))}
        </div>

        <SectionText />
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;