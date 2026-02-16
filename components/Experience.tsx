import React from "react";

import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        <span className="text-purple">Open to work</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 gap-10">
        <Button
          duration={12000}
          borderRadius="1.75rem"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-3">
            <h1 className="text-start text-xl md:text-2xl font-bold">
              Open to internships and entry-level opportunities
            </h1>
            <p className="text-start text-white-100 mt-1 font-semibold">
              I am actively looking for opportunities to contribute, learn fast,
              and grow as a developer.
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Experience;
