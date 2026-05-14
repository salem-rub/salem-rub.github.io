import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const content = {
  en: {
    dir: "ltr",
    nav: ["Problem", "Solution", "How It Works", "Pilot", "Contact"],
    badge: "Jordan-first B2B Procurement Marketplace",
    headline: "Get multiple verified supplier quotes faster — with a documented RFQ workflow.",
    subheadline:
      "ProcuraLink helps procurement teams in pharma, labs, schools, hospitals, and factories receive competitive quotations from trusted suppliers through one structured platform.",
    primaryCta: "Book a Meeting",
    secondaryCta: "See How It Works",
    proof1: "Built for local procurement",
    proof2: "Verified suppliers",
    proof3: "RFQ audit trail",
    heroCardTitle: "RFQ Snapshot",
    heroCardItems: [
      ["Category", "Lab Consumables"],
      ["Suppliers Invited", "5 verified vendors"],
      ["Quotes Received", "4 sealed quotes"],
      ["Buyer Action", "Compare & award"],
    ],
    problemTitle: "The current procurement process is slow and scattered.",
    problems: [
      "RFQs are shared through WhatsApp, phone calls, and emails.",
      "Quotes arrive in different formats and are hard to compare.",
      "Procurement teams need faster access to trusted suppliers.",
      "Supplier performance, response time, and deal history are not tracked.",
    ],
    solutionTitle: "One platform for RFQs, supplier matching, quotation comparison, and deal tracking.",
    solutionCards: [
      ["Submit RFQ", "Buyers submit purchase requirements with specs, quantity, deadline, and attachments."],
      ["Match Suppliers", "The platform routes the RFQ to relevant verified suppliers by category."],
      ["Compare Quotes", "Buyers compare sealed quotations by price, delivery, terms, and rating."],
      ["Track Performance", "Every RFQ, quote, award, review, and commission is documented."],
    ],
    howTitle: "How ProcuraLink works",
    steps: ["Buyer submits RFQ", "Verified suppliers quote", "Buyer compares offers", "Deal is awarded", "Supplier performance improves"],
    buyersTitle: "Built for institutional buyers",
    buyers: ["Pharma factories", "Analytical labs", "Schools & universities", "Hospitals", "Industrial factories", "Engineering & maintenance teams"],
    suppliersTitle: "Built for trusted suppliers",
    suppliers: ["Chemicals", "Lab supplies", "Consumables", "HPLC columns", "Calibration & validation", "Maintenance", "PPE & safety", "Engineering services"],
    featuresTitle: "Why prospects should take the meeting",
    features: [
      ["Fast quotation collection", "Receive multiple quotations without chasing suppliers manually."],
      ["Verified supplier network", "Work with categorized, reviewed, and approved suppliers."],
      ["Sealed-bid RFQ model", "Suppliers compete fairly without seeing each other’s prices."],
      ["Compliance-ready records", "Keep RFQ history, comparison notes, and award justification."],
      ["Supplier ratings", "Build a performance profile based on response, delivery, and quality."],
      ["Future AI insights", "Use accumulated data for price benchmarking and supplier recommendations."],
    ],
    pilotTitle: "Pilot proposal for early clients",
    pilotText:
      "We start with a focused pilot: selected buyer organizations, verified suppliers, and real RFQs in high-repeat categories like consumables, chemicals, filters, calibration, and maintenance.",
    pilotBullets: ["3–5 buyer organizations", "20–30 verified suppliers", "50 RFQs target", "3-month validation period"],
    buyerValueTitle: "Free for buyers. More opportunities for suppliers.",
    buyerValue: [
      ["Free for Buyers", "Buyers can submit RFQs, receive quotations, and compare suppliers without paying a subscription during launch."],
      ["No Procurement Risk", "The buyer can test the platform without changing the current purchasing process or adding new cost."],
      ["Supplier-Funded Model", "Suppliers pay only because they receive qualified RFQ opportunities and real sales leads."],
    ],
    finalCtaTitle: "Ready to test a smarter procurement workflow?",
    finalCtaText:
      "Let’s run a short pilot and measure RFQ speed, supplier response, quotation quality, and savings opportunities.",
    formTitle: "Meeting request",
    formFields: ["Name", "Company", "Email or phone", "What do you want to source?"],
    formButton: "Request Meeting",
    footer: "ProcuraLink — Linking Buyers with Trusted Suppliers",
  },
  ar: {
    dir: "rtl",
    nav: ["المشكلة", "الحل", "آلية العمل", "التجربة", "تواصل"],
    badge: "منصة مشتريات B2B تبدأ من الأردن",
    headline: "احصل على عدة عروض أسعار من موردين موثوقين بسرعة — ضمن نظام RFQ منظم وموثق.",
    subheadline:
      "ProcuraLink تساعد أقسام المشتريات في مصانع الأدوية، المختبرات، المدارس، المستشفيات، والمصانع على استلام عروض أسعار منافسة من موردين معتمدين عبر منصة واحدة.",
    primaryCta: "احجز اجتماع",
    secondaryCta: "شاهد آلية العمل",
    proof1: "مصممة للمشتريات المحلية",
    proof2: "موردون موثوقون",
    proof3: "سجل RFQ موثق",
    heroCardTitle: "مثال طلب RFQ",
    heroCardItems: [
      ["الفئة", "مستهلكات مختبر"],
      ["الموردون", "5 موردين موثقين"],
      ["العروض", "4 عروض مغلقة"],
      ["الإجراء", "مقارنة واختيار"],
    ],
    problemTitle: "عملية الشراء الحالية بطيئة ومبعثرة.",
    problems: [
      "طلبات الأسعار تتم عبر واتساب، اتصالات، وإيميلات متفرقة.",
      "العروض تصل بصيغ مختلفة ويصعب مقارنتها.",
      "أقسام المشتريات تحتاج وصول أسرع لموردين موثوقين.",
      "أداء الموردين وسرعة الرد وسجل الصفقات غير موثق بشكل واضح.",
    ],
    solutionTitle: "منصة واحدة لإدارة RFQ، مطابقة الموردين، مقارنة العروض، وتتبع الصفقات.",
    solutionCards: [
      ["إرسال الطلب", "المشتري يرسل المتطلبات مع المواصفات، الكمية، الموعد، والمرفقات."],
      ["مطابقة الموردين", "النظام يرسل الطلب للموردين المناسبين حسب التصنيف."],
      ["مقارنة العروض", "المشتري يقارن العروض حسب السعر، التسليم، الشروط، والتقييم."],
      ["تتبع الأداء", "كل طلب، عرض، اختيار، تقييم، وعمولة يتم توثيقه."],
    ],
    howTitle: "كيف تعمل ProcuraLink؟",
    steps: ["المشتري يرسل RFQ", "الموردون يقدمون عروض", "المشتري يقارن", "يتم اختيار المورد", "يتحسن أداء الموردين"],
    buyersTitle: "مصممة للمشترين المؤسسيين",
    buyers: ["مصانع الأدوية", "المختبرات التحليلية", "المدارس والجامعات", "المستشفيات", "المصانع", "أقسام الهندسة والصيانة"],
    suppliersTitle: "مصممة للموردين الموثوقين",
    suppliers: ["كيماويات", "مستلزمات مختبر", "Consumables", "HPLC Columns", "Calibration & Validation", "صيانة", "PPE وسلامة", "خدمات هندسية"],
    featuresTitle: "لماذا العميل المحتمل سيقبل الاجتماع؟",
    features: [
      ["سرعة جمع العروض", "استلام عدة عروض بدون ملاحقة الموردين يدويًا."],
      ["شبكة موردين موثوقين", "التعامل مع موردين مصنفين ومراجعين ومعتمدين."],
      ["نظام عروض مغلقة", "الموردون يتنافسون بشكل عادل بدون رؤية أسعار بعضهم."],
      ["توثيق مناسب للتدقيق", "حفظ سجل الطلبات، المقارنات، ومبررات الاختيار."],
      ["تقييم الموردين", "بناء سجل أداء حسب سرعة الرد، التسليم، والجودة."],
      ["ذكاء اصطناعي لاحقًا", "تحليل الأسعار وترشيح الموردين اعتمادًا على البيانات المتراكمة."],
    ],
    pilotTitle: "اقتراح تجربة Pilot للعملاء الأوائل",
    pilotText:
      "نبدأ بتجربة مركزة مع مؤسسات مختارة، موردين موثقين، وطلبات RFQ حقيقية في فئات متكررة مثل المستهلكات، الكيماويات، الفلاتر، المعايرة، والصيانة.",
    pilotBullets: ["3–5 مؤسسات مشترية", "20–30 مورد موثق", "هدف 50 RFQ", "مدة اختبار 3 أشهر"],
    buyerValueTitle: "مجاني للمشترين. وفرص أكثر للموردين.",
    buyerValue: [
      ["مجاني للمشترين", "المشتري يستطيع إرسال RFQ واستلام عروض ومقارنة الموردين بدون اشتراك في مرحلة الإطلاق."],
      ["بدون مخاطرة على المشتريات", "المشتري يجرّب المنصة بدون تغيير نظام الشراء الحالي وبدون إضافة تكلفة جديدة."],
      ["النموذج ممول من الموردين", "المورد يدفع لأنه يحصل على فرص RFQ حقيقية وعملاء مؤهلين."],
    ],
    finalCtaTitle: "جاهز تختبر طريقة أذكى للمشتريات؟",
    finalCtaText:
      "نبدأ Pilot قصير ونقيس سرعة RFQ، استجابة الموردين، جودة العروض، وفرص التوفير.",
    formTitle: "طلب اجتماع",
    formFields: ["الاسم", "الشركة", "الإيميل أو الهاتف", "ما الذي تريد توريده؟"],
    formButton: "اطلب اجتماع",
    footer: "ProcuraLink — ربط المشترين بالموردين الموثوقين",
  },
};

function Badge({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
      <Icon className="h-4 w-4 text-emerald-600" />
      {children}
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-8 text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default function ProcuraLinkLandingPage() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <main dir={t.dir} className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-slate-900 text-white shadow-lg">
              <Layers3 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight">ProcuraLink</div>
              <div className="text-xs font-medium text-slate-500">B2B Procurement Marketplace</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {t.nav.map((item) => (
              <a key={item} href="#contact" className="transition hover:text-emerald-700">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:border-emerald-300"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:bg-emerald-700 sm:inline-flex"
            >
              {t.primaryCta}
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(15,23,42,0.12),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge icon={Sparkles}>{t.badge}</Badge>
            <h1 className="mt-8 text-4xl font-black tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              {t.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{t.subheadline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-emerald-200 transition hover:bg-emerald-700"
              >
                {t.primaryCta}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-800 shadow-sm transition hover:border-emerald-300"
              >
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Badge icon={Globe2}>{t.proof1}</Badge>
              <Badge icon={ShieldCheck}>{t.proof2}</Badge>
              <Badge icon={FileCheck2}>{t.proof3}</Badge>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-200 to-slate-300 opacity-70 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white bg-white p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-emerald-700">PROC-RFQ-001</div>
                  <h3 className="text-2xl font-black text-slate-950">{t.heroCardTitle}</h3>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <ClipboardList className="h-7 w-7" />
                </div>
              </div>
              <div className="space-y-3">
                {t.heroCardItems.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
                    <span className="text-sm font-semibold text-slate-500">{label}</span>
                    <span className="text-sm font-black text-slate-900">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                <div className="mb-3 flex items-center gap-2 text-emerald-300">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-bold">Procurement outcome</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-2xl font-black">24h</div>
                    <div className="text-xs text-slate-300">Response</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-2xl font-black">4</div>
                    <div className="text-xs text-slate-300">Quotes</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-2xl font-black">1</div>
                    <div className="text-xs text-slate-300">Award</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-black leading-tight">{t.problemTitle}</h2>
            <div className="mt-8 space-y-4">
              {t.problems.map((p) => (
                <div key={p} className="flex gap-3 rounded-2xl bg-white/8 p-4">
                  <Zap className="mt-1 h-5 w-5 flex-none text-emerald-300" />
                  <p className="leading-7 text-slate-200">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-black leading-tight text-slate-950">{t.solutionTitle}</h2>
            <div className="mt-8 grid gap-4">
              {t.solutionCards.map(([title, body], idx) => (
                <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-sm font-black text-emerald-700">{idx + 1}</div>
                    <h3 className="font-black text-slate-950">{title}</h3>
                  </div>
                  <p className="leading-7 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle title={t.howTitle} />
          <div className="grid gap-4 md:grid-cols-5">
            {t.steps.map((step, idx) => (
              <div key={step} className="relative rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-black text-white">
                  {idx + 1}
                </div>
                <p className="font-bold text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <div className="mb-5 flex items-center gap-3">
              <Building2 className="h-7 w-7 text-emerald-600" />
              <h2 className="text-2xl font-black">{t.buyersTitle}</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.buyers.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <div className="mb-5 flex items-center gap-3">
              <Handshake className="h-7 w-7 text-emerald-600" />
              <h2 className="text-2xl font-black">{t.suppliersTitle}</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.suppliers.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle title={t.featuresTitle} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.features.map(([title, body], idx) => {
              const icons = [Zap, ShieldCheck, FileCheck2, ClipboardList, Star, Sparkles];
              const Icon = icons[idx];
              return (
                <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-lg">
                  <Icon className="mb-5 h-8 w-8 text-emerald-300" />
                  <h3 className="mb-3 text-xl font-black text-white">{title}</h3>
                  <p className="leading-7 text-slate-300">{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pilot" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-600 to-slate-950 p-8 text-white shadow-xl">
            <h2 className="text-3xl font-black">{t.pilotTitle}</h2>
            <p className="mt-5 leading-8 text-emerald-50">{t.pilotText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.pilotBullets.map((item) => (
                <div key={item} className="rounded-2xl bg-white/12 p-4 font-bold">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-black">{t.buyerValueTitle}</h2>
            <div className="mt-8 space-y-4">
              {t.buyerValue.map(([title, body]) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                  <Users className="mt-1 h-6 w-6 flex-none text-emerald-600" />
                  <div>
                    <h3 className="font-black text-slate-950">{title}</h3>
                    <p className="mt-1 leading-7 text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
            <h2 className="text-4xl font-black tracking-tight">{t.finalCtaTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t.finalCtaText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge icon={Mail}>hello@procuralink.com</Badge>
              <Badge icon={Globe2}>ProcuraLink.com</Badge>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-lg">
            <h3 className="mb-5 text-2xl font-black">{t.formTitle}</h3>
            <div className="space-y-4">
              {t.formFields.map((field, idx) => (
                <input
                  key={field}
                  placeholder={field}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  type={idx === 2 ? "text" : "text"}
                />
              ))}
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 font-black text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700">
                {t.formButton}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8 text-center text-sm font-semibold text-slate-500">
        {t.footer}
      </footer>
    </main>
  );
}
