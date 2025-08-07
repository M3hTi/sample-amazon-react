import { createContext, useContext, useState } from "react";

import ShoppingCart from "../features/carts/ShoppingCart";

const OverlayContext = createContext();

function OverlayProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OverlayContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <ShoppingCart />
        </div>
      )}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  const context = useContext(OverlayContext);
  return context;
}

export default OverlayProvider;
