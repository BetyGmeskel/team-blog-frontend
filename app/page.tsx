import BlogHero from '@/components/BlogHero';
import BlogContent from '@/components/BlogContent';
import Sidebar from '@/components/Sidebar';
import RelatedPosts from '@/components/RelatedPosts';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Section: BlogHero + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Left: BlogHero - takes 2/3 width on large screens */}
        <div className="w-full lg:w-2/3">
          <BlogHero />
        </div>

        {/* Right: Sidebar - takes 1/3 width on large screens */}
        <div className="w-full lg:w-1/3">
          <Sidebar />
        </div>
        
      </div>

     
      {/* Bottom Section: RelatedPosts */}
      <section>
        <RelatedPosts />
      </section>
    </main>
  );
}
