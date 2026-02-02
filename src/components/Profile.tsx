interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl?: string;
}

export function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="text-center mb-12 animate-fade-in">
      {avatarUrl && (
        <div className="mb-6 flex justify-center">
          <img
            src={avatarUrl}
            alt={name}
            className="w-32 h-32 rounded-full border-4 border-pink-500 shadow-lg"
          />
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        {name}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        {bio}
      </p>
    </div>
  );
}
