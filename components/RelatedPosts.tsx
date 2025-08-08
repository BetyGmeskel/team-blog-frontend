import Image from 'next/image';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

const posts = [
  {
    title: "10 Cooking Lessons To Use In Everyday Life",
    desc: "Can I learn the necessary computer science...",
    author: "James",
    date: "July 14, 2022",
    image: "/images/post1.jpg",
    avatar: "/images/down1.jpg",
  },
  {
    title: "How to choose Right Laptop for programmer",
    desc: "What we're told we must do each day...",
    author: "Robert",
    date: "July 14, 2022",
    image: "/images/post2.jpg",
    avatar: "/images/down2.png",
  },
  {
    title: " How To Build A Self-Driving Car In One Month",
    desc: "Cooking requires confident guesswork...",
    author: "Mary",
    date: "July 14, 2022",
    image: "/images/post3.jpg",
    avatar: "/images/down3.png",
  },
  {
    title: "Typography Can Make Or Break Your Design",
    desc: "One of the most important skills as a designer...",
    author: "Jon Kanster",
    date: "July 14, 2022",
    image: "/images/post4.jpg",
    avatar: "/images/down4.png",
  },
];

export default function RelatedPosts() {
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          <span className="text-pink-600">●</span> Related Posts
        </h2>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ChevronLeft size={16} />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3"
          >
            <Image
              src={post.image}
              alt="Post image"
              width={400}
              height={200}
              className="rounded-md w-full object-cover h-48"
            />
            <h3 className="text-md font-semibold mt-4 text-gray-900">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{post.desc}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-2">
                <Image
                  src={post.avatar}
                  alt="avatar"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
              <Bookmark className="text-gray-400 hover:text-gray-600" size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
