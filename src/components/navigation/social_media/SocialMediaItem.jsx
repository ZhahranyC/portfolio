import React from "react";

const SocialMediaItem = ({ socialMedia }) => {
  return (
    <div className="">
      <a
        href={socialMedia.url}
        className="fill-white hover:fill-light-green "
        target="_blank"
      >
        <div className="w-[20px] aspect-square relative">
          <div className="absolute w-full hover:w-[24px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
            {socialMedia.source}
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialMediaItem;
