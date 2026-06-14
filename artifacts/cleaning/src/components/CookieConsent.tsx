import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const KEY = "pp_cookie_consent";

export function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          data-testid="cookie-consent"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 rounded-xl border bg-card p-5 shadow-xl sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
              <p className="text-sm text-muted-foreground">{t("cookie.text")}</p>
            </div>
            <div className="flex shrink-0 gap-2 sm:ml-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => decide("declined")}
                data-testid="button-cookie-decline"
              >
                {t("cookie.decline")}
              </Button>
              <Button
                size="sm"
                onClick={() => decide("accepted")}
                data-testid="button-cookie-accept"
              >
                {t("cookie.accept")}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
