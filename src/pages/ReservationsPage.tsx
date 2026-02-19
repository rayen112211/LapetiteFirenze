import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { z } from "zod";
import heroImg from "@/assets/locale-1.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const partySizes = ["1-2", "2-4", "4-6", "6-8", "8+"];

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00",
];

const ReservationsPage = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const reservationSchema = z.object({
    name: z.string().trim().min(1, t.validation.nameRequired).max(100),
    email: z.string().trim().email(t.validation.emailInvalid).max(255),
    date: z.string().min(1, t.validation.dateRequired),
    time: z.string().min(1, t.validation.timeRequired),
    guests: z.string().min(1, t.validation.partySizeRequired),
    requests: z.string().max(500).optional(),
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = reservationSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0])
          fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    // Don't reset form or navigate — keep everything visible
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const inputBase =
    "w-full px-4 py-3.5 bg-background border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none transition-colors duration-200";
  const inputClass = (field: string) =>
    `${inputBase} ${errors[field] ? "border-red-400 focus:border-red-500" : "border-border focus:border-primary"}`;
  const labelClass =
    "block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-medium";

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="La Petite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/75" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3">
            {t.reservationsPage.heroSubtitle}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary-foreground">
            {t.reservationsPage.heroTitle}
          </h1>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center text-muted-foreground mb-10">
              {t.reservationsPage.intro}{" "}
              <a
                href="tel:+39055212701"
                className="text-primary hover:underline"
              >
                +39 055 212 701
              </a>{" "}
              o{" "}
              <a
                href="https://wa.me/393311222676"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {t.reservationsPage.whatsappUs}
              </a>
              .
            </p>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-4"
              >
                <CheckCircle
                  size={24}
                  className="text-emerald-600 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-emerald-800 font-bold text-sm mb-1">
                    Grazie, {form.name}!
                  </p>
                  <p className="text-emerald-700 text-sm">
                    We'll confirm your reservation via WhatsApp within 2 hours.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Form — always visible */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    {t.reservationsPage.fullName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.reservationsPage.yourName}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>
                    {t.reservationsPage.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    {t.reservationsPage.dateLabel}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={minDate}
                    className={inputClass("date")}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.date}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>
                    {t.reservationsPage.timeLabel}
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={inputClass("time")}
                  >
                    <option value="">{t.reservationsPage.selectTime}</option>
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Party Size */}
              <div>
                <label className={labelClass}>
                  {t.reservationsPage.partySize}
                </label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={inputClass("guests")}
                >
                  <option value="">{t.reservationsPage.numberOfGuests}</option>
                  {partySizes.map((size) => (
                    <option key={size} value={size}>
                      {size} {t.reservationsPage.guests}
                    </option>
                  ))}
                </select>
                {errors.guests && (
                  <p className="text-red-500 text-xs mt-1.5">
                    {errors.guests}
                  </p>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <label className={labelClass}>
                  {t.reservationsPage.specialRequests}
                </label>
                <textarea
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                  placeholder={
                    t.reservationsPage.specialRequestsPlaceholder
                  }
                  rows={3}
                  className={inputClass("requests")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold hover:bg-gold-dark transition-colors duration-300"
              >
                {t.reservationsPage.confirm}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ReservationsPage;
