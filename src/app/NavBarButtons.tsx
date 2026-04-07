'use client';

import { Flex } from "@radix-ui/themes";
import { motion } from "motion/react";

export default function NavBarButtons() {
  return (
    <Flex gap="4">
      {['catalogue', 'fashion', 'favourite', 'lifestyle', 'setup']
        .map(
          item =>
            <motion.button
              key={item}
              whileTap={{ scale: 0.95 }}
              className="mx-2 px-3 py-2 font-medium hover:bg-gray-200 rounded-md transition-colors last:bg-black last:text-white last:hover:bg-black">
              {item.toUpperCase()}
            </motion.button>)}
    </Flex>
  )
}
