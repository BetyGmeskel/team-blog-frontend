export default function TagsSection() {
  const tags =
   ["#Croatia",
     "#IslandLife", 
     "#TravelTips", 
     "#Sport", 
     "#Kayak"];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-sm bg-gray-200 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
