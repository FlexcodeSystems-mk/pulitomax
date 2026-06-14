import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SERVICES } from "@/content/services";
import { SERVICE_AREAS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const { t, locale } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    name: z.string().min(2, t("form.errName")),
    email: z.string().email(t("form.errEmail")),
    phone: z.string().min(6, t("form.errPhone")),
    city: z.string().optional(),
    service: z.string().min(1, t("form.errService")),
    message: z.string().min(5, t("form.errMessage")),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      service: defaultService ?? "",
      message: "",
    },
  });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-2xl border bg-card p-10 text-center"
        data-testid="quote-success"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
          <CheckCircle2 className="h-9 w-9 text-secondary" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-primary">{t("form.successTitle")}</h3>
        <p className="mb-6 max-w-md text-muted-foreground">{t("form.successMsg")}</p>
        <Button
          variant="outline"
          onClick={() => {
            reset();
            setSubmitted(false);
          }}
          data-testid="button-reset-form"
        >
          {t("form.another")}
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm"
      data-testid="quote-form"
      noValidate
    >
      <h3 className="mb-6 text-2xl font-bold text-primary">{t("form.quoteTitle")}</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("form.name")} error={errors.name?.message}>
          <Input {...register("name")} data-testid="input-name" autoComplete="name" />
        </Field>
        <Field label={t("form.email")} error={errors.email?.message}>
          <Input type="email" {...register("email")} data-testid="input-email" autoComplete="email" />
        </Field>
        <Field label={t("form.phone")} error={errors.phone?.message}>
          <Input {...register("phone")} data-testid="input-phone" autoComplete="tel" />
        </Field>
        <Field label={t("form.city")} error={errors.city?.message}>
          <Select value={watch("city")} onValueChange={(v) => setValue("city", v)}>
            <SelectTrigger data-testid="select-city">
              <SelectValue placeholder={t("form.city")} />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_AREAS.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <div className="sm:col-span-2">
          <Field label={t("form.service")} error={errors.service?.message}>
            <Select value={watch("service")} onValueChange={(v) => setValue("service", v, { shouldValidate: true })}>
              <SelectTrigger data-testid="select-service">
                <SelectValue placeholder={t("form.servicePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((s) => (
                  <SelectItem key={s.slug} value={s.slug}>
                    {s.content[locale].name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label={t("form.message")} error={errors.message?.message}>
            <Textarea
              rows={4}
              {...register("message")}
              placeholder={t("form.messagePlaceholder")}
              data-testid="input-message"
            />
          </Field>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={isSubmitting}
        data-testid="button-submit-quote"
      >
        {isSubmitting ? t("form.submitting") : t("form.submit")}
      </Button>
      <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
        {t("form.privacy")}
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}
