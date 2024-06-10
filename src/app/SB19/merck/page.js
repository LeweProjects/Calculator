import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-center">
        <iframe
          width="1000"
          height="800"
          src="https://www.youtube.com/embed/KJtefGsQIXo?si=Yy7H7dGiQEQSs6oN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default page;
