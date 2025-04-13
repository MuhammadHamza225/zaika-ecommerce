import React from "react";
import Card from "./Card";

const CardSection = ({ count }) => {
  const cards = [
    {
      image:
        "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
      date: "09 JUN 2020",
      category: "STARTUP BUSINESS",
      title: "NEW ORGANIZATION ARE ADDED SEAL THERE",
      description:
        "Was drawing natural fat respect husband. These tried for way joy wrote...",
    },
    {
      image:
        "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
      date: "13 JUN 2020",
      category: "ECOMMERCE",
      title: "WAS DRAWING NATURAL FAT RESPECT HUSBAND",
      description:
        "Was drawing natural fat respect husband. These tried for way joy wrote...",
    },
    {
      image:
        "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
      date: "13 JUN 2020",
      category: "ECOMMERCE",
      title: "WAS DRAWING NATURAL FAT RESPECT HUSBAND",
      description:
        "Was drawing natural fat respect husband. These tried for way joy wrote...",
    },
    {
      image:
        "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
      date: "13 JUN 2020",
      category: "ECOMMERCE",
      title: "WAS DRAWING NATURAL FAT RESPECT HUSBAND",
      description:
        "Was drawing natural fat respect husband. These tried for way joy wrote...",
    },
    {
      image:
        "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
      date: "13 JUN 2020",
      category: "ECOMMERCE",
      title: "WAS DRAWING NATURAL FAT RESPECT HUSBAND",
      description:
        "Was drawing natural fat respect husband. These tried for way joy wrote...",
    },
    {
      image:
        "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
      date: "13 JUN 2020",
      category: "ECOMMERCE",
      title: "WAS DRAWING NATURAL FAT RESPECT HUSBAND",
      description:
        "Was drawing natural fat respect husband. These tried for way joy wrote...",
    },
    {
      image:
        "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
      date: "13 JUN 2020",
      category: "ECOMMERCE",
      title: "WAS DRAWING NATURAL FAT RESPECT HUSBAND",
      description:
        "Was drawing natural fat respect husband. These tried for way joy wrote...",
    },
    // add more cards if needed
  ];

  const cardToShow = count ? cards.slice(0, count) : cards;
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex justify-center gap-8 flex-wrap">
        {cardToShow.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
