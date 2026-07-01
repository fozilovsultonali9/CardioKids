# CardioKids - Bolalarda Tug'ma Yurak Nuqsonlarini Aniqlash Platformasi

## 📋 Loyiha Haqida

**CardioKids** - yangi tug'ilgan chaqaloqlardan 18 yoshgacha bo'lgan bolalarda tug'ma va orttirilgan yurak nuqsonlarini erta aniqlashga yordam beruvchi, professional va ta'limiy veb-platformasi.

Sayt **to'liq o'zbek tilida** va **tibbiy ta'lim uchun** maqsad bilan ishlab chiqilgan. Bu tashxis qo'yish o'rnini bosmaydi - faqat ogohlantiruv va ta'lim vasitasi.

---

## 🎯 Maqsad va Auditoriya

### Asosiy Maqsadlar:
- ✅ Ota-onalarga yurak nuqsonlarining ogohlantiruvchi belgilarini o'rgatish
- ✅ Bolalarda yurak muammolarining erta aniqlashga yordam berish
- ✅ Tibbiyot talabalari va shifokorlarga ta'lim resursi sifatida xizmat qilish
- ✅ Qachon shifokorga murojaat qilishni tushuntirish

### Auditoriya:
- 👨‍👩‍👧 Ota-onalar va homilador ayollar
- 👨‍⚕️ Oilaviy shifokorlar va pediatrlar
- 🎓 Tibbiyot talabalari
- 👶 Bolalar sog'lig'iga qiziqadigan shaxslar

---

## 🌟 Sayt Xususiyatlari

### 📱 Bo'limlar va Funksiyalar:

1. **Hero Bo'lim** - Jozibali sarlavha va missiyadagi tugma
2. **Yosh Guruhlari Bo'yicha Alomatlar** - Interaktiv tab/accordion:
   - Yangi tug'ilgan (0–28 kun)
   - Chaqaloq (1–12 oy)
   - Maktabgacha (1–6 yosh)
   - Maktab yoshi va o'smir (7–18 yosh)

3. **8 Ta Eng Keng Tarqalgan Tug'ma Yurak Nuqsonlari**:
   - Ovalis Delik (PFO)
   - Atrial Septum Nuqsoni (ASD)
   - Qorincha Oralig'i Nuqsoni (VSD)
   - Patent Ductus Arteriosus (PDA)
   - Fallo Tetradasi (TOF)
   - Magistral Tomirlar Transpozitsiyasi (TGA)
   - Aorta Torayishi (CoA)
   - Chap Yurak Sindromi (HLV)

4. **Xavf Omillari** - Homiladorlik davridagi va boladan keyingi omillar
5. **Screening va Diagnostika Yo'li** - Vizual timeline
6. **Shoshilinch Holatlar** - Qizil rangda belgilangan faqat zarur choralar
7. **O'z-O'zini Tekshirish** - Interaktiv so'rovnoma va xavf darajasi hisoblash
8. **AI Yordamchi** - Chatbot (faqat ta'lim ma'lumoti beradi)
9. **Klinikalar Katalogi** - Tashkentdagi kardiologiya markazlari
10. **FAQ** - Tez-tez so'raladigan savollar

---

## 🎨 Dizayn

### Rang Palitrasi:
- **Asosiy:** Chuqur ko'k (#0099cc) - ishonch va tibbiyot
- **Ikkinchi:** Turkuaz (#00bfff) - yangilash
- **Xavf:** Qizil (#ff4444) - faqat shoshilinch uchun
- **Fon:** Och kulrang va oq

### Xususiyatlari:
- ✨ Nozik yurak zarbi animatsiyasi
- 📱 To'liq responsive (mobil-birinchi)
- ⚡ Silliq scroll animatsiyalari
- 🎯 Aniq o'qiladigan katta shriftlar
- ♿ Faqat sodda, tushunarli ikonalar

---

## 📁 Fayl Strukturasi

```
CardioKids/
├── index.html          # Asosiy HTML sahifasi
├── styles.css          # CSS stillar
├── script.js           # JavaScript funksiyalari
├── README.md           # Bu fayl
└── CardioKids_PROMPT.md # To'liq prompt (AI uchun)
```

---

## ⚙️ Texnik Tafsilotlar

### Texnologiyalar:
- **HTML5** - Semantik struktura
- **CSS3** - Responsive dizayn, gradient, animatsiya
- **Vanilla JavaScript** - Interaktivlik (jQuery yo'q)
- **No Dependencies** - Sof kod, tashqi kutubxonalar yo'q

### Funksional Xususiyatlari:
- ✅ Accordion/Tab switching
- ✅ Interactive self-assessment form
- ✅ Chatbot (rule-based responses)
- ✅ Smooth scroll navigation
- ✅ Intersection Observer animation
- ✅ XSS protection (HTML escaping)

### Performance:
- 🚀 Bitta HTML fayl - tez yuklash
- 💾 Minimal CSS va JS - kam traffic
- 📦 Veb-serverda ishlaydi (CDN keraksiz)

---

## 🚀 Ishlatish

### Mahalliy Ishlatish:
```bash
# Fayl tizimida oching
open index.html

# Yoki web-server orqali
python -m http.server 8000
# Keyin http://localhost:8000 ni oching
```

### Deploy (GitHub Pages):
```bash
git push origin main
# Settings > Pages > Deploy from main branch
```

---

## ⚠️ Muhim Disclaimer

```
🔴 BU SAYT TIBBIY TASHXIS QO'YMAYDI!

- Sayt FAQAT ta'lim va ogohlantiruv uchun
- HECH QANDAY aniq tashxis bermasin
- HAR DOIM shifokorga murojaat qiling
- Shoshilinch holatda 103 ga qo'ng'iroq qiling
```

---

## 📊 O'z-O'zini Tekshirish Funksiyasi

Bolalarning alomatlari asosida xavf darajasini hisoblaydi:
- 🟢 **Past Xavf** (0-33%) - Muntazam monitoring
- 🟡 **O'rta Xavf** (34-66%) - Pediatrga murojaat qiling
- 🔴 **Yuqori Xavf** (67-100%) - DARHOL kardiologga!

---

## 💬 Chatbot Funksiyasi

AI Yordamchi odamlarning savollarga javob beradi:
- Bolalarda yurak nuqsonlari haqida umumiy ma'lumot
- Alomatlar tavsiflanadi
- Har doim "shifokorga murojaat qiling" ogohlantirishi bilan yakunlanadi
- Hech qanday tashxis bermaydi

---

## 🏥 Klinikalar Katalogi

Tashkentdagi asosiy kardiologiya markazlari:
1. Republican Specialized Scientific-Practical Medical Center of Pediatrics
2. Republican Specialized Scientific-Practical Medical Center of Cardiology
3. Tashkent Medical Academy Hospital
4. Childrens' National Medical Center

---

## 📝 Qo'llanmalar va Resurslar

Sayt quyidagi resurslarni taqdim etadi:
- 📄 PDF qo'llanmalar
- 📚 Amaliy maslahatlar
- 🔗 Xalqaro tibbiy manbalar

---

## 🔄 Kelajakdagi Yangilanishlar

- [ ] Real ChatGPT API integratsiyasi
- [ ] Multilingual (English, Russian)
- [ ] Pediatr kardiologlar uchun ro'yxat
- [ ] Foydalanuvchi akkauntlari
- [ ] SMS/Email notifikatsiyalari
- [ ] Backend database
- [ ] Mobile app versiyasi

---

## 📞 Aloqa

- **Email:** info@cardiokids.uz
- **Tel:** +998-71-XXX-XX-XX
- **GitHub:** [CardioKids Repository](https://github.com/fozilovsultonali9/CardioKids)

---

## 📜 Litsenziya

Ushbu loyiha ta'lim va tibbiy tadqiqot maqsadlari uchun ishlatiladi.

---

## 🙏 Mukofotlar va O'zida Almashuvlar

Yuqori sifatli ta'lim va shifokorlarga shukrona!

**CardioKids - Bolalar Yurak Sog'lig'i Uchun!** ❤️

---

## 📚 Manbalar

- WHO Pediatric Cardiology Guidelines
- American Heart Association (AHA)
- European Society of Cardiology (ESC)
- O'zbekiston Sog'liq Saqlash Vazirligi ma'lumotlari

---

**Oxirgi Yangilash:** 2026-07-01
**Versiya:** 1.0