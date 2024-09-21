import { useState } from "react";
import Logo from "./../assets/Logo.png";
import RightArrow from "./../assets/icons/RightArrow.svg";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircle
} from "lucide-react";

const navLinks = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Activity", icon: Clock3 },
  { name: "Analytics", icon: BarChart2 },
  { name: "Transactions", icon: ArrowRightLeft },
  { name: "Help center", icon: HelpCircle }
];

const variants = {
  expanded: { width: "20%" },
  notExpanded: { width: "5%" }
};
function NavigationBar() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      animate={isExpanded ? "expanded" : "notExpanded"}
      variants={variants}
      className={
        "py-12 flex flex-col border border-r-1 w-1/5 h-screen fixed bg-white z-[1] " +
        (isExpanded
          ? "px-9"
          : "px-2")
      }>
      <div className="logo-div flex space-x-3 items-center">
        <img src={Logo} />
        <span className={isExpanded ? "block" : "hidden"}>Resource AI</span>
      </div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-6 h-6 bg-[#FF8C8C] rounded-full absolute -right-2.5 top-12 flex items-center justify-center p-1">
        <img src={RightArrow} className="w-[8px]" />
      </div>
      <div className="mt-10 flex flex-col space-y-8 ">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 w-full p-2 rounded " +
              (activeNavIndex === index
                ? " bg-[#FF8C8C] text-white font-semibold"
                : " text-black")
            }
            onClick={() => setActiveNavIndex(index)}>
            <item.icon />
            <span className={isExpanded ? "block" : "hidden"}>{item?.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NavigationBar;
