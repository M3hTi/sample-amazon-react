import Link from "../ui/Link";

function ArtCraftNavLinks() {
  return (
    <ul className="absolute top-[60px] w-full space-y-3 rounded-lg border border-gray-100 bg-white px-6 py-4 shadow-lg">
      <Link to="/electronics/laptop">Crafting</Link>
      <Link to="/electronics/computers-tablets">
        Painting, Drawing &amp; Art Supplies
      </Link>
    </ul>
  );
}

export default ArtCraftNavLinks;
