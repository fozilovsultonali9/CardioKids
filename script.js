// Age groups symptoms data
const symptomsData = {
    newborn: [
        { name: 'Sianoz (Ko\'ksillik)', id: 'cyanosis' },
        { name: 'Tez-tez nafas olish', id: 'tachypnea' },
        { name: 'Emishda charchash', id: 'feeding_fatigue' },
        { name: 'Ortiqcha terish', id: 'excessive_sweating' },
        { name: 'Vazn qo\'shmaslik', id: 'failure_to_thrive' }
    ],
    infant: [
        { name: 'O\'sishda orqada qolish', id: 'growth_delay' },
        { name: 'Takikardiya (yurak urishi tez)', id: 'tachycardia' },
        { name: 'Ko\'krak shishishi', id: 'chest_swelling' },
        { name: 'Nafas qisilishi', id: 'dyspnea' }
    ],
    toddler: [
        { name: 'Jismoniy faollikda tez charchash', id: 'easy_fatigue' },
        { name: 'Sinkopa (hushidan ketish)', id: 'syncope' },
        { name: 'Yurak urishi sezilishi', id: 'palpitations' },
        { name: 'Bekar holat', id: 'lethargy' }
    ],
    school: [
        { name: 'Jismoniy mashqlarda nafas qisilishi', id: 'exercise_dyspnea' },
        { name: 'Ko\'krak og\'rig\'i', id: 'chest_pain' },
        { name: 'Palpitatsiya (yurak urishi sezilishi)', id: 'palpitations_school' },
        { name: 'Bahoratsiyaviy xumollar', id: 'vasovagal_syncope' },
        { name: 'Boshning aylanishi', id: 'dizziness' }
    ]
};

// Show age group symptoms
function showAgeGroup(group) {
    // Hide all content
    document.querySelectorAll('.age-content').forEach(el => el.classList.remove('active'));
    
    // Show selected group
    document.getElementById(group).classList.add('active');
    
    // Update active button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Scroll to section
    setTimeout(() => {
        document.getElementById(group).scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Update quiz symptoms based on age
function updateQuizSymptoms() {
    const ageSelect = document.getElementById('ageSelect');
    const selectedAge = ageSelect.value;
    const symptomsContainer = document.getElementById('quizSymptoms');
    
    if (!selectedAge) {
        symptomsContainer.innerHTML = '<p style="color: #999;">Iltimos, bolaning yoshini tanlang</p>';
        return;
    }
    
    const symptoms = symptomsData[selectedAge];
    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">';
    
    symptoms.forEach(symptom => {
        html += `
            <label style="display: flex; align-items: center; padding: 15px; background: #f5f9fc; border-radius: 8px; cursor: pointer;">
                <input type="checkbox" name="symptom" value="${symptom.id}" style="width: 20px; height: 20px; cursor: pointer;">
                <span style="margin-left: 10px; font-size: 14px; color: #333;">${symptom.name}</span>
            </label>
        `;
    });
    
    html += '</div>';
    symptomsContainer.innerHTML = html;
    
    // Clear previous result
    document.getElementById('quizResult').classList.remove('show');
}

// Calculate risk level
function calculateRisk() {
    const checkedBoxes = document.querySelectorAll('input[name="symptom"]:checked');
    const ageSelect = document.getElementById('ageSelect');
    const selectedAge = ageSelect.value;
    
    if (!selectedAge) {
        alert('Iltimos, bolaning yoshini tanlang!');
        return;
    }
    
    if (checkedBoxes.length === 0) {
        alert('Iltimos, kamida bir alomat belgilab bering!');
        return;
    }
    
    const symptoms = symptomsData[selectedAge];
    const checkedCount = checkedBoxes.length;
    const totalSymptoms = symptoms.length;
    const percentage = (checkedCount / totalSymptoms) * 100;
    
    const resultDiv = document.getElementById('quizResult');
    let resultClass = '';
    let riskLevel = '';
    let advice = '';
    
    if (percentage <= 33) {
        resultClass = 'result-low';
        riskLevel = 'PAST XAVF DARAJASI';
        advice = 'Bolangizda ko\'pchilik alomatlar yo\'q. Biroq, doriyor tekshiruvini muntazam o\'tkazing.';
    } else if (percentage <= 66) {
        resultClass = 'result-medium';
        riskLevel = 'O\'RTA XAVF DARAJASI';
        advice = 'Bolangizda ba\'zi alomatlar mavjud. Pediatrga murojaat qilishni tavsiya etamiz.';
    } else {
        resultClass = 'result-high';
        riskLevel = 'YUQORI XAVF DARAJASI';
        advice = 'Bolangizda ko\'p alomatlar mavjud. DARHOL pediatr kardiologga murojaat qiling!';
    }
    
    resultDiv.innerHTML = `
        <h3 style="margin-bottom: 15px;">📊 Tekshiruv Natijalari</h3>
        <p style="font-size: 18px; font-weight: 600; margin-bottom: 10px;">${riskLevel}</p>
        <p style="font-size: 14px; margin-bottom: 15px;">Aniqlangan alomatlar: ${checkedCount}/${totalSymptoms}</p>
        <p style="font-size: 16px; font-weight: 600; margin-bottom: 15px;">${advice}</p>
        <div style="background: rgba(0,0,0,0.05); padding: 15px; border-radius: 8px; font-size: 13px; color: #666;">
            <strong>⚠️ Esda tutingki:</strong> Bu sayt tibbiy tashxis qo\'ymaydi. Har qanday muammoning uchun shifokorga murojaat qiling.
        </div>
    `;
    
    resultDiv.classList.add('show');
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// FAQ Toggle
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't open
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Chatbot functionality
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const chatMessages = document.getElementById('chatMessages');
    
    // Add user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.innerHTML = `<p>${escapeHtml(message)}</p>`;
    chatMessages.appendChild(userMessageDiv);
    
    // Clear input
    input.value = '';
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simulate bot response (in real app, this would call an API)
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot-message';
        botMessageDiv.innerHTML = `<p>${botResponse}</p>`;
        chatMessages.appendChild(botMessageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

// Handle chat input Enter key
function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Generate bot response
function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple rule-based responses in Uzbek
    const responses = {
        'sianoz': 'Sianoz - bu lablar, barmoqlar yoki yuzi ko\'kga o\'tishidir. Bu yurak nuqsonining muhim belgisi bo\'lishi mumkin. Agar bolangizda sianoz bor bo\'lsa, darhol shifokorga murojaat qiling!',
        'nafas': 'Nafas qisilishi bolada yurak muammosining belgisi bo\'lishi mumkin. Xususan, emish, o\'ynash yoki jismoniy harakat paytida nafas qisilishi muhim. Pediatrga murojaat qiling.',
        'charchash': 'Bolaning emish paytida yoki o\'ynashda tez charashishi yurak nuqsonining belgisi bo\'lishi mumkin. Bu aniqlanish uchun kardiolog tekshirishni tavsiya etamiz.',
        'palpitatsiya': 'Palpitatsiya - bu yurak urishing tez yoki noto\'qat hisi. Agar bolangizda bu alomat bor bo\'lsa, kardiologga murojaat qiling.',
        'default': 'Qiziqarli savol! Bolalarda yurak nuqsonlari haqida ko\'proq ma\'lumot olish uchun saytning boshqa bo\'limlarini ko\'rib chiqing. Har doim shifokorning maslahatiga amal qiling. Bu faqat ta\'lim uchun ma\'lumot, tashxis emas!'
    };
    
    for (let key in responses) {
        if (key !== 'default' && lowerMessage.includes(key)) {
            return responses[key];
        }
    }
    
    return responses['default'];
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show first age group by default
    showAgeGroup('newborn');
    document.querySelector('.tab-btn').classList.add('active');
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.symptom-card, .defect-card, .clinic-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        observer.observe(card);
    });
});