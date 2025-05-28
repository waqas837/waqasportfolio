import { motion } from "framer-motion";

const SkillBar = ({ name, percentage }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-300">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
