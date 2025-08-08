import Image from "next/image";
import BlogContent from "./BlogContent"; // 👈 Make sure the path is correct

export default function BlogHero() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        How to Spend the Perfect Day on Croatia’s Most Magical Island
      </h1>

      <Image
        src="/images/hero.jpg"
        alt="Hero"
        width={1000}
        height={1000}
        className="rounded-lg w-full object-cover mb-2" // 👈 reduced bottom margin
      />

      <div className="flex justify-center gap-8 text-sm text-gray-500 text-center mb-16">
        <span>📅 July 14, 2023</span>
        <span>💬 10 Comments</span>
        <span>🏷️ Sport</span>
      </div>

      <BlogContent />
    </div>
  );
}
