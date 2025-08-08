import Image from 'next/image';

export default function PostCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
