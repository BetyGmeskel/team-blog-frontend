// components/CombinedBlog.tsx
import Image from "next/image";
import { Share2, Bookmark, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function CombinedBlog() {
  // Data used in RelatedPosts and Sidebar/Tags/TopPosts
  const relatedPosts = [
    {
      title: "Mastering the Art of Quick Weeknight Dinners",
      desc: "Simple recipes and smart tips to make dinner stress-free.",
      author: "James",
      date: "July 14, 2022",
      image: "/images/images/post1.jpg",
      avatar: "/images/images/down1.jpg",
    },
    {
      title: "Best Coding Practices for Modern Web Developers",
      desc: "From clean code to optimized performance — here’s what matters.",
      author: "Robert",
      date: "July 14, 2022",
      image: "/images/images/post2.jpg",
      avatar: "/images/images/down2.png",
    },
    {
      title: "Building AI Projects Without Burning Out",
      desc: "A guide to balancing innovation with personal well-being.",
      author: "Mary",
      date: "July 14, 2022",
      image: "/images/images/post3.jpg",
      avatar: "/images/images/down3.png",
    },
    {
      title: "Design Secrets: Making Your UI Stand Out",
      desc: "Small tweaks that can dramatically improve user experience.",
      author: "Jon Kanster",
      date: "July 14, 2022",
      image: "/images/images/post4.jpg",
      avatar: "/images/images/down4.png",
    },
  ];

  const tags = ["#Foodie", "#CodingLife", "#DesignTips", "#AI", "#Lifestyle"];

  const topPosts = [
    {
      title: "Morning Rituals for a Productive Day",
      image: "/images/images/side1.jpg",
      description: "Kickstart your day with these energizing habits.",
    },
    {
      title: "Hiking Trails You Need to Explore",
      image: "/images/images/side2.jpg",
      description: "From lush forests to breathtaking peaks.",
    },
    {
      title: "Remote Work: Staying Focused and Motivated",
      image: "/images/images/side3.jpg",
      description: "Pro tips for a distraction-free workspace.",
    },
    {
      title: "Photography Hacks for Stunning Shots",
      image: "/images/images/side4.jpg",
      description: "Capture the moment like a pro.",
    },
    {
      title: "Minimalist Living: Less Is More",
      image: "/images/images/side5.jpg",
      description: "Why simplicity might just be the key to happiness.",
    },
  ];

  // === BlogContent component ===
  function BlogContent() {
    return (
      <div className="prose max-w-none mt-4">
        <h2>
          <strong>Live Fully, Laugh Often, Love Always</strong>
        </h2>
        <p>
          Life moves fast, but the moments that matter are often the quiet ones. The smell of freshly brewed coffee, the sound of laughter over dinner, or the first step onto a trail you've never walked before — these are the snapshots that make life rich.
        </p>
        <p>
          Success isn’t always about bigger goals; sometimes it’s about appreciating where you are now. Embrace the journey, learn from the detours, and never underestimate the joy of simple pleasures.
        </p>
      </div>
    );
  }

  // === BlogHero component ===
  function BlogHero() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">
          How to Spend the Perfect Day on Croatia’s Most Magical Island
        </h1>

        <Image
          src="/images/images/hero.jpg"
          alt="Hero"
          width={1000}
          height={1000}
          className="rounded-lg w-full object-cover mb-2"
        />

        <div className="flex justify-center gap-8 text-sm text-gray-500 text-center mb-16">
          <span>📅 July 14, 2023</span>
          <span>💬 10 Comments</span>
          <span>🏷️ Lifestyle</span>
        </div>

        <BlogContent />
      </div>
    );
  }

  // === InteractionBar component ===
  function InteractionBar() {
    return (
      <div className="flex justify-between px-4 py-2 bg-white shadow-sm rounded-md text-gray-700 text-sm font-medium gap-4">
        {/* Share */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition border rounded-md px-3 py-2 w-28 justify-center">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </div>

        {/* Marking */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition border rounded-md px-3 py-2 w-28 justify-center">
          <Bookmark className="w-4 h-4" />
          <span>Save</span>
        </div>

        {/* Comment */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition border rounded-md px-3 py-2 w-28 justify-center">
          <MessageCircle className="w-4 h-4" />
          <span>Comment</span>
        </div>
      </div>
    );
  }

  // === TagsSection component ===
  function TagsSection() {
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

  // === TopPosts component ===
  function TopPosts() {
    return (
      <div className="p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Top Posts</h2>

        <div className="space-y-4">
          {topPosts.map((post, index) => (
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

  // === Sidebar component ===
  function Sidebar() {
    return (
      <div className="space-y-3">
        <InteractionBar />
        <TagsSection />
        <TopPosts />
      </div>
    );
  }

  // === RelatedPosts component ===
  function RelatedPosts() {
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
          {relatedPosts.map((post, index) => (
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

  // === Final rendered layout ===
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Left content */}
        <div className="w-full lg:w-2/3">
          <BlogHero />
        </div>

        {/* Right sidebar */}
        <div className="w-full lg:w-1/3">
          <Sidebar />
        </div>
      </div>

      {/* Related posts */}
      <RelatedPosts />
    </main>
  );
}
