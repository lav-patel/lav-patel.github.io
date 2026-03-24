"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const noMotionVariants = {
  initial: { scale: 1 },
  hover: { scale: 1 },
  tap: { scale: 1 },
};

interface AnimatedButtonProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

export default function AnimatedButton({
  href,
  className,
  children,
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      variants={prefersReducedMotion ? noMotionVariants : buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Link className={className} href={href}>
        {children}
      </Link>
    </motion.div>
  );
}
