"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function WhatsAppFloat({ whatsappUrl }: { whatsappUrl: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Belén por WhatsApp" initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }} whileHover={reduceMotion ? undefined : { scale: 1.06 }} whileTap={reduceMotion ? undefined : { scale: 0.96 }} transition={{ duration: 0.35, delay: 0.6 }}>
      <MessageCircle aria-hidden="true" size={27} />
    </motion.a>
  );
}
