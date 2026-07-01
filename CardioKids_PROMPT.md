SAYT YARATISH UCHUN PROMPT
"CardioKids" — Bolalarda tug'ma yurak nuqsonlarini erta aniqlash platformasi

Quyidagi promptni istalgan AI kod generatoriga (Claude, boshqa AI website builder) nusxa ko'chirib bering.

PROMPT (to'liq matn):

Men uchun "CardioKids" nomli, yangi tug'ilgan chaqaloqlardan 18 yoshgacha bo'lgan bolalarda tug'ma va orttirilgan yurak nuqsonlarini erta aniqlashga yordam beruvchi, professional, ishonchli va vizual jihatdan yuqori sifatli bitta sahifali (single-page) veb-sayt yarat. Sayt to'liq o'zbek tilida bo'lsin. Bu tibbiy ta'lim va skrining vositasi bo'lib, tashxis qo'yish o'rnini bosmaydi — bu jihat saytda aniq ko'rsatilishi shart.

1. MAQSAD VA AUDITORIYA
Asosiy auditoriya: ota-onalar, homilador ayollar, oilaviy shifokorlar, pediatrlar, tibbiyot talabalari.
Maqsad: yurak nuqsonlarining ogohlantiruvchi belgilarini yosh guruhlariga qarab tanib olish, qачон shifokorga murojaat qilish kerakligini tushunish, screening dasturlari haqida ma'lumot berish.

2. SAYT TUZILISHI (bo'limlar)
Hero bo'lim — jozibali sarlavha, qisqa missiya, "Alomatlarni tekshirish" tugmasi.
Yosh guruhlari bo'yicha alomatlar xaritasi — interaktiv tab/accordion:
Yangi tug'ilgan (0–28 kun): sianoz, tez-tez nafas olish, emishda charchash, terlash, vazn qo'shmaslik
Chaqaloq (1–12 oy): o'sishda orqada qolish, taxikardiya, shishlar
Maktabgacha (1–6 yosh): jismoniy faollikda tez charchash, sinkopa (hushidan ketish)
Maktab yoshi va o'smir (7–18 yosh): jismoniy mashqlarda nafas qisilishi, ko'krak og'rig'i, yurak urishi sezilishi (palpitatsiya)
Tug'ma yurak nuqsonlari turlari — eng keng tarqalgan 8–10 turi haqida qisqa, tushunarli tavsif (masalan: qorincha oralig'idagi nuqson, Fallo tetradasi, magistral tomirlar transpozitsiyasi va h.k.), har biriga sodda infografika.
Xavf omillari — homiladorlik davridagi omillar (genetik, infeksiyalar, dorilar, diabet), oilaviy anamnez.
Screening va diagnostika yo'li — pulsoksimetriya skrining (chaqaloqlarda), EXO-KG, EKG, pediatr kardiologga yo'llanma bosqichlari — vizual "yo'l xaritasi" (timeline) ko'rinishida.
"Qачон shoshilinch yordam kerak?" — qizil rangda ажратилган shoshilinch belgilar bloki (kuchli sianoz, hushidan ketish, nafas olishning to'xtashi va h.k.) + shoshilinch tel. raqamlarga qo'ng'iroq qilish chaqirig'i.
AI-Yordamchi (chatbot) — ota-onalar o'z kuzatuvlarini o'zbek tilida yozadi, AI umumiy yo'naltiruvchi ma'lumot beradi, LEKIN har doim "bu tashxis emas, shifokorga murojaat qiling" degan ogohlantirish bilan yakunlanadi.
Pediatr kardiologlar va klinikalar katalogi (joy egallovchi/demo ma'lumot bilan; keyin real ma'lumotlar bilan to'ldiriladi).
Ota-onalar uchun resurslar — PDF qo'llanmalar, tez-tez so'raladigan savollar (FAQ).
Footer — tibbiy ogohlantirish (disclaimer), aloqa, manbalar.

3. DIZAYN YO'NALISHI
Zamonaviy, tibbiy-ishonchli, lekin sovuq/klinik emas — iliq va tinchlantiruvchi.
Rang palitrasi: chuqur ko'k/turkuaz (ishonch, tibbiyot) + yumshoq oq/och kulrang fon + qizil faqat shoshilinch ogohlantirishlar uchun aksent sifatida.
Yurak zarbi (heartbeat/EKG chizig'i) motividan animatsiyalarda foydalanish — scroll bilan uyg'unlashgan nozik animatsiya.
Tipografiya: aniq o'qiladigan, katta shrift o'lchamlari (ota-onalar barcha yoshda o'qiy oladigan).
To'liq responsive (mobil-first, chunki ko'p ota-onalar telefondan foydalanadi).
Ikonografiya: sodda, tibbiy bo'lmagan odamlar ham tushunadigan chiziqli ikonalar.

4. FUNKSIONAL TALABLAR
Yosh guruhi tanlanganda mos alomatlar ro'yxati dinamik ko'rsatiladi.
"O'z-o'zini tekshirish" interaktiv so'rovnoma (checklist) — belgilarni belgilagandan so'ng, natija sifatida faqat umumiy xavf darajasi ko'rsatiladi ("past/o'rta/yuqori ehtimollik — shifokorga murojaat qiling"), hech qanday tashxis bermaydi.
Barcha shoshilinch holatlar aniq va darhol ko'rinadigan tarzda ажратилган bo'lsin.
Sayt oxirida doimiy ko'rinadigan disclaimer banner: "Bu sayt tibbiy tashxis qo'ymaydi. Alomat sezsangiz, albatta pediatr yoki kardiologga murojaat qiling."

5. TEXNIK QISM
Bitta HTML fayl (yoki React komponent) ko'rinishida, ichki CSS/JS bilan.
Silliq scroll-animatsiyalar, accordion/tab interaktivligi.
Agar AI chat funksiyasi kerak bo'lsa — Anthropic API orqali, faqat umumiy ma'lumot beruvchi, tibbiy tashxis bermaydigan tizim promptı bilan integratsiya qilinsin.

6. MUHIM CHEKLOV (albatta amal qilinsin)
Sayt hech qachon aniq tashxis, dozalash, yoki "sizda X nuqson bor" kabi qat'iy xulosalar bermasin. Faqat ta'lim beruvchi va yo'naltiruvchi vosita bo'lsin, professional tibbiy maslahat o'rnini bosmasin.
Ushbu promptni AI'ga yuborganingizda, u yuqoridagi tuzilma asosida to'liq ishlaydigan, chiroyli dizaynli sayt yaratib beradi.