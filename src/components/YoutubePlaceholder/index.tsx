import { useState } from "react";

export default function YoutubePlaceholder({ videoId }: { videoId: string }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative w-full max-w-[500px] cursor-pointer aspect-video rounded-xl">
      {showVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full rounded-xl"
          loading="lazy"
        ></iframe>
      ) : (
        <div onClick={() => setShowVideo(true)} className="relative w-full h-full">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Vídeo"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="absolute top-1/2 left-1/2 w-[48px] h-[48px] -translate-x-1/2 -translate-y-1/2 bg-[url('https://cdn-icons-png.flaticon.com/512/727/727245.png')] bg-no-repeat bg-center bg-contain pointer-events-none" />
          </div>
        </div>
      )}
    </div>
  );
}
