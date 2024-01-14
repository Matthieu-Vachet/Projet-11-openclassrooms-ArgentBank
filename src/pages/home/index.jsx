import HeroBanner from "../../components/heroBanner";
import Features from "../../components/features";

import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";

import "./style.scss";


function Home() {

  // Tableau des features
  const features = [
    {
      image: iconChat,
      alt: "Icon Chat",
      title: `You are our #1 priority`,
      description: `Need to talk to a representative? You can get in touch through our 
      24/7 chat or through a phone call in less than 5 minutes.`
    },
    {
      image: iconMoney,
      alt: "Icon Money",
      title: `More savings means higher rates`,
      description: `The more you save with us, the higher your interest rate will be!`
    },
    {
      image: iconSecurity,
      alt: "Icon Security",
      title: `Security you can trust`,
      description: `We use top of the line encryption to make sure your data and money 
      is always safe.`
    }
  ]

  return (
    <main>
      <HeroBanner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {/* Map sur le tableau features */}
        {features.map((e, index) => (
          <Features
            image={e.image}
            alt={e.alt}
            title={e.title}
            description={e.description}
            key={index}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;