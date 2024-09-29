import BuddyCard from "./BuddyCard/BuddyCard";
import profile1 from "./assets/profile1.png";
import profile2 from "./assets/profile2.png";
import profile3 from "./assets/profile3.png"

function Find() {
  const buddies = [
    {
      id: 1,
      username: "JaneyJane",
      picture: profile1,
      language: "EN",
      bio: "Hi everyone! I need some help staying on track to save up money for a home.",
      financialGoals: ["Home Buying", "Emergency Fund"]
    },
    {
      id: 2,
      username: "HombreCash",
      picture: profile2,
      language: "SP",
      bio: "hola gente necesito ayuda porque me quedo sin dinero cada mes",
      financialGoals: ["Budgeting"]
    },
    {
      id: 3,
      username: "TheGodfather",
      picture: profile3,
      language: "EN",
      bio: "Need some help on learning how to invest. I can keep you accountable for your spending.",
      financialGoals: ["Investing", "Retirement"]
    }
  ];

  return (
    <section style={{ padding: "1.5rem 6rem", display: "flex" }}>
      {buddies.map((buddy) => {
        return (
          <BuddyCard
            key={buddy.id}
            username={buddy.username}
            picture={buddy.picture}
            language={buddy.language}
            bio={buddy.bio}
            financialGoals={buddy.financialGoals}
          />
        );
      })}
    </section>
  );
}

export default Find;
