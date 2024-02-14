import { createContext, useContext, useState } from "react";

const CardStateContext = createContext({
  cardState: "normal",
  setCardState: () => {},
});

export default CardStateContext;

export const useCardStateContext = () => {
  const { cardState, setCardState } = useContext(CardStateContext);

  return {
    cardState,
    setCardState,
  };
};
