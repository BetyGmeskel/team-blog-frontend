// components/Sidebar.tsx
import TagsSection from "./TagsSection";
import TopPosts from "./TopPosts";
import InteractionBar from "./InteractionBar";

export default function Sidebar() {
  return (
    <div className="space-y-3">
      <InteractionBar />
      <TagsSection />
      <TopPosts />
    </div>
  );
}
