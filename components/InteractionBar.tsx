// components/InteractionBar.tsx
import { Share2, Bookmark, MessageCircle } from 'lucide-react';

export default function InteractionBar() {
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
        <span>Marking</span>
      </div>

      {/* Comment */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition border rounded-md px-3 py-2 w-28 justify-center">
        <MessageCircle className="w-4 h-4" />
        <span>Comment</span>
      </div>
    </div>
  );
}
