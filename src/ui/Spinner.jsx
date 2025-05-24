import { hourglass } from "ldrs";
hourglass.register();

// Default values shown

function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60">
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75"
        color="black"
      ></l-hourglass>
    </div>
  );
}

export default Spinner;
