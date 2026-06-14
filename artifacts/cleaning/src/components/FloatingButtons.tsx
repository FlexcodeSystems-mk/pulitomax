import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import { SITE, whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function FloatingButtons() {
  const { t } = useI18n();
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("contact.whatsapp")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
        data-testid="button-whatsapp"
      >
        <SiWhatsapp className="h-7 w-7" />
      </motion.a>
      <motion.a
        href={`tel:${SITE.phoneHref}`}
        aria-label={t("nav.callNow")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20"
        data-testid="button-call"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
