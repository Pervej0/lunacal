/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TfiLayoutGrid2 } from "react-icons/tfi";

export function ProfileTab() {
  const tabs = [
    {
      title: "About Me",
      value: "about",
      content: (
        <div className="p-6 text-gray-200 text-sm leading-relaxed">
          <p className="font-semibold text-lg text-white/90 mb-3">
            Hello! I’m Pervej, your sales rep here from Salesforce.
          </p>
          <p>
            I’ve been working at this awesome company for 3 years now. I live in
            Santa Carla with my wife Tiffany and our twin daughters — Emma and
            Ella.
          </p>
        </div>
      ),
    },
    {
      title: "Experiences",
      value: "experiences",
      content: (
        <div className="p-6 text-gray-200 text-sm leading-relaxed">
          <p className="font-semibold text-lg text-white/90 mb-3">
            Professional Experience
          </p>
          <p>
            Over 3 years at Salesforce, managing client relationships and CRM
            optimization.
          </p>
        </div>
      ),
    },
    {
      title: "Recommended",
      value: "recommended",
      content: (
        <div className="p-6 text-gray-200 text-sm leading-relaxed">
          <p className="font-semibold text-lg text-white/90 mb-3">
            Recommendations
          </p>
          <p>
            Recommended by clients for exceptional communication and teamwork.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-5">
      <div
        className="relative flex flex-col rounded-2xl max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto w-full items-center justify-center"
        style={{ boxShadow: "5px 4px 6px rgba(0,0,0,0.6)" }}
      >
        <TabsWrapper tabs={tabs} />
      </div>
    </section>
  );
}

const TabsWrapper = ({ tabs }: { tabs: any[] }) => {
  const [active, setActive] = useState(tabs[0].value);
  const [bgStyle, setBgStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeButton = container.querySelector(
      `button[data-value="${active}"]`
    ) as HTMLElement;

    if (activeButton) {
      setBgStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
        top: activeButton.offsetTop,
        height: activeButton.offsetHeight,
      });
    }
  }, [active, tabs]);

  const activeTab = tabs.find((t) => t.value === active);

  return (
    <div className="relative w-full flex flex-col items-center bg-gray-700 pt-10 px-2 rounded-2xl">
      <div className="flex justify-between gap-4">
        <div>
          <FaRegCircleQuestion size="20px" className="text-gray-400 -mt-2" />
        </div>
        <div
          ref={containerRef}
          className="relative flex gap-4 mb-6 bg-gray-900 py-2 md:px-10 px-auto rounded-2xl"
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute bg-[#232d41] rounded-lg shadow-lg z-0"
            style={{
              left: bgStyle.left,
              width: bgStyle.width,
              top: bgStyle.top,
              height: bgStyle.height,
            }}
          />

          {tabs.map((tab) => (
            <button
              key={tab.value}
              data-value={tab.value}
              onClick={() => setActive(tab.value)}
              className={cn(
                "relative overflow-hidden md:w-32 w-24 text-xs md:text-sm font-semibold md:px-4 px-auto py-2 rounded-lg transition-all duration-300 group z-10",
                active === tab.value
                  ? "text-white scale-105 shadow-[0_22px_38px_rgba(0,0,0,0.7)]"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {active !== tab.value && (
                <span className="absolute inset-0 bg-gray-800 opacity-0 scale-x-0 origin-left transition-all duration-400 ease-linear group-hover:opacity-70 group-hover:scale-x-100"></span>
              )}

              <span className="relative z-10">{tab.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative w-full flex justify-between gap-10 h-80 md:h-96 border-gray-600 border-t shadow-lg overflow-hidden">
        <div>
          <TfiLayoutGrid2 size="14px" className="text-gray-400 mt-20" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {activeTab?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
