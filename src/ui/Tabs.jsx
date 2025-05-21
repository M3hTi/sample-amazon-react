import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const TabsContext = createContext();

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState("");

  const open = (name) => setActiveTab(name);
  const close = () => {
    setActiveTab("");
  };

  return (
    <TabsContext.Provider value={{ open, close, activeTab }}>
      <div className="flex items-center justify-center gap-4">{children}</div>
    </TabsContext.Provider>
  );
}

function Tab({ children, tab: tabName }) {
  const { open, close } = useContext(TabsContext);

  return cloneElement(children, {
    onMouseEnter: () => open(tabName),
    onMouseLeave: () => {
      // Give a small delay to allow moving to the dropdown
      setTimeout(close, 4000);
    },
  });
}

function List({ children, name: listName }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== listName) return null;
  return createPortal(children, document.getElementById("root"));
}

Tabs.Tab = Tab;
Tabs.List = List;

export default Tabs;
