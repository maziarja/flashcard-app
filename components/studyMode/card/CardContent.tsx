"use client";
import { AnimatePresence, motion } from "motion/react";
import PatternStarBlue from "@/components/ui/pattern-star-blue";
import PatternStarPink from "@/components/ui/pattern-star-pink";
import PatternStarYellow from "@/components/ui/pattern-star-yellow";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useCardContext } from "@/app/_contexts/CardContext";
import { MASTERED_LEVEL } from "@/lib/const";

function CardContent() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { filteredCards: cards, currentIndex } = useCardContext();
  const currentCard = cards[currentIndex];

  return (
    <div
      role="button"
      onClick={() => setShowAnswer((prevState) => !prevState)}
      className={`relative flex h-100 cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-neutral-900 transition-all duration-200 ${!showAnswer ? "bg-pink-400" : "bg-blue-400"} bg-[url("/assets/images/pattern-flashcard-bg.svg")] px-4 py-5 shadow-[2px_2px_0_0_#2e1401]`}
    >
      <div className="absolute top-10 right-8">
        {!showAnswer ? <PatternStarBlue /> : <PatternStarPink />}
      </div>
      <div
        className={`absolute bottom-15 transition-all duration-200 ${!showAnswer ? "left-10" : "left-7"}`}
      >
        <PatternStarYellow />
      </div>

      <div className="bg-neutral-0 rounded-full border border-neutral-900 px-3 py-1.5 capitalize shadow-[1px_1px_0_0_#000000]">
        <span className="text-preset-6 text-neutral-900 capitalize">
          {currentCard.category}
        </span>
      </div>
      <div
        className={`flex h-full ${!showAnswer ? "w-3/4" : "w-full"} flex-col items-center justify-center gap-4 text-center`}
      >
        <AnimatePresence>
          {!showAnswer ? (
            <>
              <motion.p
                key="question"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: -20 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                }}
                className="text-preset-1 text-neutral-900"
              >
                {currentCard.question}
              </motion.p>
              <motion.p
                key="hint"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 20 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="text-preset-4-medium text-neutral-900 opacity-80"
              >
                Click to reveal answer
              </motion.p>
            </>
          ) : (
            <>
              <motion.p
                key="answer-label"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="text-preset-4-medium text-neutral-900 opacity-80"
              >
                Answer:
              </motion.p>
              <motion.p
                key="answer-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                }}
                className="text-preset-1 text-neutral-900"
              >
                {currentCard.answer}
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="mx-auto flex items-center gap-2">
        <Progress
          className="w-15"
          value={(currentCard.knownCount / MASTERED_LEVEL) * 100}
        />
        <p className="text-preset-6 text-neutral-900">
          {currentCard.knownCount}/5
        </p>
      </div>
    </div>
  );
}

export default CardContent;
