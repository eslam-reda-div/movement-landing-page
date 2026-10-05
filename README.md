# Movement — Full Website Project

آخر نسخة من موقع Movement، تشمل العربية والإنجليزية، شاشات المنتج الفعلية، السلايدر التلقائي، نموذج طلب الديمو، وروابط التواصل ومتاجر التطبيقات والأسئلة الشائعة.

## التشغيل

1. فك ضغط الملف وافتح مجلد Movement في VS Code أو أي محرر.
2. ثبّت Node.js 22.13 أو أحدث (يفضّل إصدار LTS).
3. افتح Terminal داخل المجلد ونفّذ:

```sh
corepack enable
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

افتح http://localhost:5173

إذا كان Corepack غير متاح:

```sh
npm install -g pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

## بناء نسخة الإنتاج

```sh
corepack pnpm build
corepack pnpm start
```

راجع الرابط الذي يعرضه Terminal لفتح نسخة الإنتاج المحلية.

## أهم الملفات

- app/page.tsx: المحتوى والمكونات والتفاعل وتبديل اللغة.
- app/globals.css: تصميم الموقع والموبايل وRTL.
- app/layout.tsx: إطار الصفحة والبيانات التعريفية.
- public/product: سكرينات الإدارة والطالب والمشرف.
- public/fonts: الخطوط المحلية.
- public: الصور والشعار والأصول.
- components/ui: مكونات الواجهة المستخدمة والمتاحة.

## ملاحظات

- التقنية: React + Vinext (متوافق مع Next.js) + Tailwind CSS.
- اللاندنج عامة ولا تتطلب تسجيل دخول.
- نموذج الديمو يجهّز رسالة WhatsApp؛ المستخدم يراجعها ويرسلها بنفسه.
- اللغة الافتراضية العربية؛ استخدم ?lang=en للإنجليزية.
- الصور الطويلة محفوظة بالكامل وتُعرض بالتمرير داخل الموكب.
- لا توجد مفاتيح سرية أو بيانات دخول مطلوبة لتشغيل اللاندنج.
- مجلد node_modules وملفات البناء غير مضمنة؛ تثبيت الحزم ينشئها تلقائيًا.
- توجد ملفات دعم من القالب للنشر وميزات اختيارية، ولا تحتاج تفعيلها لتشغيل اللاندنج.
- ملف .openai/hosting.json يربط المشروع بالنشر الحالي، ولا يحتوي بيانات دخول.

Source version: 6b260df56b7cc60c586cb7642d3b1fb5e236a3ea (published version 17).
