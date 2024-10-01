import React from "react"
import Header from "../../components/header/header";
import './styles.css';
import Footer from "../../components/footer/footer";

const Card = ({ className, text }) => {
    return (
      <div className={`card ${className}`}>
        {text}
      </div>
    );
  };
  
  const ActorCardsContainer = ({ cards, className }) => {
    return (
      <div className={className}>
        <div className="cards-contentx">
          {cards.map((card, index) => (
            <Card key={index} className={card.className} text={card.text} />
          ))}
        </div>
      </div> 
    );
  };
  

function Fotos(){

    const container1Cards = [
        { className: 'banner-1', text: 'POSTER BATMAN' },
        { className: 'banner-2', text: 'CARTAZ BATMAN' },
        { className: 'banner-3', text: 'BATMAN' },
      ];
    
      const container2Cards = [
        { className: 'banner-4', text: 'PENGUIN' },
        { className: 'banner-5', text: 'SELINA KYLE' },
        { className: 'banner-6', text: 'BELLA REÁL' },
      ];
    
      const container3Cards = [
        { className: 'banner-7', text: 'CENAS - BATMAN' },
        { className: 'banner-8', text: 'CENAS - BATMAN' },
        { className: 'banner-9', text: 'CENAS - BATMAN' },
      ];

    return (
        <>
          <Header />

          <div>
            <ActorCardsContainer cards={container1Cards} className="actor-cards-container" />
            <ActorCardsContainer cards={container2Cards} className="actor-cards-container2" />
            <ActorCardsContainer cards={container3Cards} className="actor-cards-container3" />
        </div>
            
        <Footer />
            
        </>
    )
}

export default Fotos;

