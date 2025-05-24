import Accordions from "../ui/Accordions";

function FAQ() {
  return (
    <div className="mx-auto my-12 max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">
      <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
        Frequently Asked Questions
      </h1>
      <Accordions>
        <Accordions.Accordion>
          <Accordions.Title name="What is this project?">
            What is this project?
          </Accordions.Title>
          <Accordions.Desc name="What is this project?">
            This is a sample Amazon-like e-commerce front-end built with React,
            Vite, and Tailwind CSS. It demonstrates modern React patterns and UI
            components.
          </Accordions.Desc>
        </Accordions.Accordion>
        <Accordions.Accordion>
          <Accordions.Title name="Which technologies are used?">
            Which technologies are used?
          </Accordions.Title>
          <Accordions.Desc name="Which technologies are used?">
            The project uses React 19, Vite for fast development, Tailwind CSS
            for styling, React Router for routing, and React Icons for
            iconography.
          </Accordions.Desc>
        </Accordions.Accordion>
        <Accordions.Accordion>
          <Accordions.Title name="How is the project structured?">
            How is the project structured?
          </Accordions.Title>
          <Accordions.Desc name="How is the project structured?">
            The source code is organized into components, pages, and UI folders
            under the src directory. There are separate files for layout,
            navigation, and reusable UI elements.
          </Accordions.Desc>
        </Accordions.Accordion>
        <Accordions.Accordion>
          <Accordions.Title name="What features are included?">
            What features are included?
          </Accordions.Title>
          <Accordions.Desc name="What features are included?">
            The project includes a homepage with a carousel, navigation tabs, a
            responsive header and footer, and example pages for About Us and
            Customer Service.
          </Accordions.Desc>
        </Accordions.Accordion>
      </Accordions>
    </div>
  );
}

export default FAQ;
