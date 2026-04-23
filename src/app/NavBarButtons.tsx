'use client';

import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items = ['catalogue', 'fashion', 'favourite', 'lifestyle', 'setup'];

export default function NavBarButtons() {
  return (
    <div className="flex gap-4">
      {items.map((item, i) => (
        <motion.button
          key={item}
          whileTap={{ scale: 0.95 }}
          className={cn(buttonVariants({ variant: i === items.length - 1 ? "default" : "ghost" }))}
        >
          {item.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}
