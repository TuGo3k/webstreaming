import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, content: "Card 1 Content" },
  { id: 2, content: "Card 2 Content" },
  { id: 3, content: "Card 3 Content" },
];

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const CardSwitcher = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change card every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-container">
      <AnimatePresence>
        {cards.map(
          (card, index) =>
            index === activeIndex && (
              <motion.div
                key={card.id}
                className="card"
                variants={fadeInOut}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {card.content}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardSwitcher;
