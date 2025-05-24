import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState("");

  const open = (name) => setActiveTab(name);
  const close = () => {
    setActiveTab("");
  };

  return (
    <TabsContext.Provider value={{ open, close, activeTab }}>
      <>{children}</>
    </TabsContext.Provider>
  );
}

function Tab({ children, name }) {
  const { open, close } = useContext(TabsContext);
  return (
    <div
      className="relative"
      onMouseEnter={() => open(name)}
      onMouseLeave={close}
    >
      {children}
    </div>
  );
}

function Nav({ children }) {
  return <nav>{children}</nav>;
}

function List({ children, name: nameList }) {
  const { activeTab, open, close } = useContext(TabsContext);

  if (activeTab !== nameList) return null;

  return (
    <ul
      className="absolute top-full left-0 z-50 min-w-[200px] space-y-1 rounded-lg border border-gray-100 bg-white px-2 py-2 shadow-lg"
      onMouseEnter={() => open(nameList)}
      onMouseLeave={close}
    >
      {children}
    </ul>
  );
}

Tabs.Tab = Tab;
Tabs.Nav = Nav;
Tabs.List = List;

export default Tabs;
