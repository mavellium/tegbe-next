"use client";

import { useState } from "react";

export default function SectionTextImage({
  title = "",
  description = "",
}: {
  title: string;
  description: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  const videoId = "Z_RAN9BaWZc";

  return (
    <section
      id="section-text-image"
      className="pt-20 px-4 bg-black py-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-[1300px] w-full mx-auto">
        {/* Bloco de vídeo */}
        <figure
          className="w-full max-w-[700px] aspect-video flex items-center justify-center rounded-2xl overflow-hidden bg-black relative group cursor-pointer border-2 border-[#CA1A41] shadow-[0_4px_12px_rgba(202,26,65,0.25)] hover:shadow-[0_8px_20px_rgba(202,26,65,0.45)] transition-all duration-300"
          onClick={() => setShowVideo(true)}
        >
          {showVideo ? (
            <iframe
              key={videoId}
              className="w-full h-full rounded-2xl"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Tegbe - Conheça nossas soluções!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          ) : (
            <>
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Preview do vídeo Tegbe"
                className="w-full h-full object-cover brightness-90 saturate-125 transition-all duration-300 group-hover:scale-[1.02] group-hover:brightness-100 group-hover:saturate-150"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#EEC35A]/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#EEC35A] shadow-[0_0_20px_rgba(202,26,65,0.6)] group-hover:shadow-[0_0_30px_rgba(202,26,65,0.8)]">
                  <div
                    className="ml-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "18px solid transparent",
                      borderBottom: "18px solid transparent",
                      borderLeft: "28px solid white",
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </figure>

        <div className="text-[#F0F0F0] max-w-[600px]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10 text-center lg:text-left" dangerouslySetInnerHTML={{ __html: title }}>
          </h2>
          <p className="text-base md:text-lg leading-[1.8] text-justify" dangerouslySetInnerHTML={{ __html: description }}>
          </p>
        </div>
      </div>
    </section>
  );
}