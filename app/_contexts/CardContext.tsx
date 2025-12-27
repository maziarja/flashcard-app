"use client";

import cartsData from "@/data.json";
import { MASTERED_LEVEL } from "@/lib/const";
import { CardType } from "@/lib/schemas/CardType";
import { createContext, useContext, useReducer } from "react";

type CardContextType = {
  filteredCards: CardType[];
  dispatch: React.Dispatch<Action>;
  currentIndex: number;
  selectedCategories: string[];
  cards: CardType[];
};

type Action =
  | { type: "ADD_CARD"; payload: CardType }
  | { type: "REMOVE_CARD"; payload: string }
  | { type: "SET_CARDS"; payload: CardType[] }
  | { type: "NEXT_CARD"; visibleLength: number }
  | { type: "PREV_CARD"; visibleLength: number }
  | { type: "CHECKED_CARD"; payload: string }
  | { type: "RESET_PROGRESS_CARD"; payload: string }
  | { type: "HIDE_MASTERED"; payload: boolean }
  | { type: "TOGGLE_CATEGORY"; payload: string };

const CardContext = createContext<CardContextType | undefined>(undefined);

const initialState = {
  cards: cartsData.flashcards,
  currentIndex: 0,
  hideMastered: false,
  selectedCategories: [],
};

function reducer(
  state: {
    cards: CardType[];
    currentIndex: number;
    hideMastered: boolean;
    selectedCategories: string[];
  },
  action: Action,
) {
  switch (action.type) {
    case "SET_CARDS":
      if (action.payload.length === 0) {
        return initialState;
      }

      return {
        ...state,
        cards: action.payload,
        currentIndex: 0,
      };

    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case "REMOVE_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };

    case "NEXT_CARD":
      if (state.cards.length === 0) return state;
      const next =
        state.currentIndex >= action.visibleLength - 1
          ? 0
          : state.currentIndex + 1;
      return {
        ...state,
        currentIndex: next,
      };

    case "PREV_CARD":
      if (state.cards.length === 0) return state;
      const prev =
        state.currentIndex <= 0
          ? action.visibleLength - 1
          : state.currentIndex - 1;

      return {
        ...state,
        currentIndex: prev,
      };

    case "CHECKED_CARD":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? {
                ...card,
                knownCount:
                  card.knownCount >= MASTERED_LEVEL
                    ? card.knownCount
                    : card.knownCount + 1,
              }
            : card,
        ),
      };

    case "RESET_PROGRESS_CARD":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? {
                ...card,
                knownCount: 0,
              }
            : card,
        ),
      };

    case "HIDE_MASTERED":
      return {
        ...state,
        hideMastered: action.payload,
        currentIndex: 0,
      };

    case "TOGGLE_CATEGORY":
      const exists = state.selectedCategories.includes(action.payload);

      return {
        ...state,
        selectedCategories: exists
          ? state.selectedCategories.filter((c) => c !== action.payload)
          : [...state.selectedCategories, action.payload],
        currentIndex: 0,
      };

    default:
      return state;
  }
}

function CardProvider({ children }: { children: React.ReactNode }) {
  const [{ cards, currentIndex, hideMastered, selectedCategories }, dispatch] =
    useReducer(reducer, initialState);

  const hideMasteredCards = hideMastered
    ? cards.filter((card) => card.knownCount < MASTERED_LEVEL)
    : cards;

  const filteredCards =
    selectedCategories.length === 0
      ? hideMasteredCards
      : hideMasteredCards.filter((card) =>
          selectedCategories.includes(card.category),
        );

  return (
    <CardContext.Provider
      value={{
        filteredCards,
        dispatch,
        currentIndex,
        selectedCategories,
        cards,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

function useCardContext() {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
}

export { CardProvider, useCardContext };
