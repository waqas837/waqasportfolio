"use client";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col gap-4">
        {/* Programming Section */}
        <div className="bg-gray-800 text-white p-6 rounded-r-2xl">
          <h3 className="text-2xl font-bold mb-4">Programming</h3>
          <div className="space-y-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="bg-white border border-gray-200 p-6 rounded-r-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-4">PORTFOLIO</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
              Web Development
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
              Mobile Apps
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
              UI/UX
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
