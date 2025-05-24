import { createContext, useContext, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const AccordionsContext = createContext();

function Accordions({ children }) {
  /**
   * State variable to manage the currently active accordion tab.
   * The setter function is used to update the active tab.
   */
  const [accordionTab, setAccordionTab] = useState("");
  function open(name) {
    setAccordionTab(name);
  }
  function close() {
    setAccordionTab("");
  }
  return (
    <AccordionsContext.Provider value={{ accordionTab, open, close }}>
      <section className="space-y-4">{children}</section>
    </AccordionsContext.Provider>
  );
}

function Accordion({ children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-md">
      {children}
    </div>
  );
}

function Title({ children, name }) {
  const { accordionTab, open, close } = useContext(AccordionsContext);
/**
 * Handles the click event for an accordion tab.
 * Toggles the open/closed state of the tab identified by `name`.
 * If the tab is currently closed or a different tab is open, it opens the clicked tab using the `open` function.
 * If the clicked tab is already open, it closes it using the `close` function.
 * Relies on `accordionTab`, `name`, `open`, and `close` from the surrounding scope.
 */
  function handleClick() {
    accordionTab === "" || accordionTab !== name ? open(name) : close();
  }
  const isOpen = accordionTab === name;
  return (
    <button
      onClick={handleClick}
      className={`flex w-full items-center justify-between px-6 py-4 text-lg font-semibold text-gray-800 transition-colors duration-200 focus:outline-none ${isOpen ? "bg-yellow-50" : "bg-white hover:bg-yellow-50"}`}
      aria-expanded={isOpen}
    >
      <span>{children}</span>
      <span className="ml-4 text-2xl text-yellow-500">
        {isOpen ? <HiChevronUp /> : <HiChevronDown />}
      </span>
    </button>
  );
}

function Desc({ children, name }) {
  const { accordionTab } = useContext(AccordionsContext);
  if (accordionTab !== name) return null;
  return (
    <div className="animate-fadeIn px-6 pb-6 text-base text-gray-700">
      {children}
    </div>
  );
}



Accordions.Accordion = Accordion;
Accordions.Title = Title;
Accordions.Desc = Desc;
export default Accordions;
