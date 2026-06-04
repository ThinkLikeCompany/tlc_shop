"use client";

import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const items = ["catalogue", "fashion", "favourite", "lifestyle", "setup"];

export default function NavBarButtons() {
  const [open, setOpen] = useState(false);
  const buttons = items.map((item, i) => (
    <motion.button
      key={item}
      whileTap={{ scale: 0.95 }}
      className={cn(
        buttonVariants({
          variant: i === items.length - 1 ? "default" : "ghost",
        }),
      )}
    >
      {item.toUpperCase()}
    </motion.button>
  ));

  return (
    <div className="relative">
      <nav aria-label="Navigation" className="hidden gap-4 md:flex">
        {buttons}
      </nav>
      <button
        aria-label="open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="mobile navigation"
          className="absolute top-full right-0 z-10 mt-2 flex flex-col gap-1 rounded-xl bg-white p-2 shadow-lg md:hidden"
        >
          {buttons}
        </nav>
      )}
    </div>
  );
}
