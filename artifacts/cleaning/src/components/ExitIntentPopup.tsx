import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";

const KEY = "pp_exit_popup_seen";

export function ExitIntentPopup() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(KEY)) return;

    const trigger = () => {
      if (localStorage.getItem(KEY)) return;
      localStorage.setItem(KEY, "1");
      setOpen(true);
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const timer = setTimeout(trigger, 25000);
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
    setTimeout(() => setOpen(false), 2200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
          data-testid="exit-popup"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-card p-8 shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted-foreground hover-elevate rounded-md p-1"
              data-testid="button-exit-close"
            >
              <X className="h-5 w-5" />
            </button>

            {done ? (
              <div className="flex flex-col items-center py-6 text-center">
                <CheckCircle2 className="mb-3 h-12 w-12 text-secondary" />
                <p className="text-lg font-semibold">{t("exit.success")}</p>
              </div>
            ) : (
              <>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Sparkles className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-primary">
                  {t("exit.title")}
                </h3>
                <p className="mb-5 text-muted-foreground">{t("exit.desc")}</p>
                <form onSubmit={submit} className="flex flex-col gap-3">
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("exit.placeholder")}
                    data-testid="input-exit-email"
                  />
                  <Button type="submit" size="lg" data-testid="button-exit-submit">
                    {t("exit.cta")}
                  </Button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    {t("exit.dismiss")}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
