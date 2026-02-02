interface AvatarProps {
  avatarUrl: string;
  alt?: string;
}

export function Avatar({ avatarUrl, alt = 'Avatar' }: AvatarProps) {
  return (
    <div className="mb-6 flex justify-center">
      <img
        src={avatarUrl}
        alt={alt}
        className="w-32 h-32 rounded-full border-4 border-pink-500 shadow-lg object-cover"
      />
    </div>
  );
}
