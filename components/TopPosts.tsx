// components/TopPosts.tsx
import Image from 'next/image';

const posts = [
  {
    title: "Exploring Island Cultures",
    image: "/images/side1.jpg",
    description: "Discover the unique traditions.",
  },
  {
    title: "Top 10 Ocean Adventures",
    image: "/images/side2.jpg",
    description: "Dive into thrilling ocean activities.",
  },
  {
    title: "Hidden Gems: Side Streets of Europe",
    image: "/images/side3.jpg",
    description: "Uncover charming, lesser-known alleys.",
  },
  {
    title: "Packing Smart for Island Life",
    image: "/images/side4.jpg",
    description: "Tips to pack light yet smart.",
  },
  {
    title: "Sunsets You Can't Miss",
    image: "/images/side5.jpg",
    description: "The most breathtaking sunset.",
  },
];

export default function TopPosts() {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Top Posts</h2>
      
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div>
              <p className="text-base font-semibold text-gray-900">{post.title}</p>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
