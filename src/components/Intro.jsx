import React from "react";

function Intro() {
  return (
    <div
      className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6"
    >
      <h1
        className="text-5xl md:text-7x1 dark:text-white
            mb-1 md:mb-5 font-bold"
      >
        Alejandro Velásquez
      </h1>
      <p
        className="text-base md:text-2xl mb-4
            font-medium"
      >
        Developer and Data Scientist
      </p>
      <p
        className="text-m max-w-xl mb-6
            font-semi-bold"
      >
        I am a developer and data scientist with experience in software and web
        development for Colombian and American companies. I have experience and
        knowledge in NodeJs, Angular, Vue and NestJS for both Frontend and
        Backend development, and I am familiar with SQL and noSQL databases.
        Also, I am a data scientist, with experience in Python, PyTorch,
        PySpark, PowerBI and other tools to perform data analysis and develop AI
        models.
      </p>
    </div>
  );
}

export default Intro;
