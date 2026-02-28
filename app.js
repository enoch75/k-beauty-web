const LANGUAGES = {
    ko: {
        "header-title": "K-Medi 가격 & 신뢰 검증기",
        "header-subtitle": "\"가장 비싼 결정일수록, 가장 투명한 정보가 필요합니다.\"",
        "calc-title": "1. 가격 공정성 계산기",
        "proc-label": "시술 항목 선택",
        "group-petites": "피부과 (Dermatology / Petite)",
        "group-surgery": "성형외과 (Plastic Surgery / Surgery)",
        "ultherapy-300": "울쎄라 (300샷)",
        "thermage-600": "써마지 FLX (600샷)",
        "shurink": "슈링크 유니버스",
        "rejuran-2cc": "리쥬란 힐러 (2cc)",
        "juvelook": "쥬베룩",
        "botox-jaw": "보톡스 (사각턱)",
        "filler": "필러 (부위별 평균)",
        "rhinoplasty": "코 성형 (Rhinoplasty)",
        "blepharoplasty": "눈 성형 (Blepharoplasty)",
        "facial-contouring": "안면윤곽 (Facial Contouring)",
        "liposuction": "지방흡입 (Liposuction)",
        "anti-aging-eyelid": "상/하안검 수술",
        "revision-rhino": "코 재수술",
        "revision-eye": "눈 재수술",
        "forehead-lift": "이마 거상",
        "breast-aug": "가슴 확대술",
        "price-label": "제시받은 가격 (USD)",
        "local-avg-label": "내국인 평균가",
        "over-pay-label": "거품 가격",
        "btn-analyze": "내 견적 분석하기",
        "calc-btn": "예산 시뮬레이터 실행하기",
        "trust-title": "2. 의료 안전 신뢰 체크리스트",
        "trust-subtitle": "한국 의료법 및 보건복지부(MOHW) 기준",
        "kahf-title": "보건복지부 KAHF 인증 여부",
        "kahf-desc": "정부가 선정한 '외국인 환자 유치 우수 의료기관'인지 확인하세요.",
        "cctv-title": "수술실 내 CCTV 설치 및 촬영",
        "cctv-desc": "2023년부터 환자의 요청 시 수술 장면 촬영은 당신의 법적 권리입니다.",
        "board-title": "성형외과 전문의(Board Certified) 확인",
        "board-desc": "집도의가 '성형외과 전문의' 자격증을 보유했는지 반드시 체크하세요.",
        "broker-title": "공식 등록 유치업자 여부",
        "broker-desc": "불법 브로커는 과도한 수수료를 요구합니다. 정부 등록 업체를 이용하세요.",
        "emergency-title": "⚠️ 사고 발생 시 행동 강령",
        "emergency-desc": "문제가 발생했다면 당황하지 말고 아래 공식 기관에 즉시 도움을 요청하세요.",
        "emergency-note": "*외국인도 내국인과 동일하게 법적 보상 및 중재를 받을 권리가 있습니다.",
        "admin-title": "2.5 필수 행정 가이드",
        "tax-title": "Tax Refund",
        "tax-desc": "미용성형 부가가치세 10%를 환급받으세요. 출국 전 공항 키오스크에서 영수증을 제출하세요.",
        "fly-title": "Fit-to-Fly",
        "fly-desc": "수술 직후 출국 시 항공사 안전 규정에 따라 '비행기 탑승 가능 소견서' 지참이 권장됩니다.",
        "trans-title": "Professional Translator",
        "trans-desc": "정확한 의사전달이 안전의 핵심입니다. 병원에 등록된 공식 의료 통역사 동행을 권장합니다.",
        "faq-title-main": "3. K-Medi Safety FAQ",
        "faq-q1": "불법 브로커와 정식 유치업자를 어떻게 구분하나요?",
        "faq-a1": "보건복지부 발행 '외국인 환자 유치 등록증' 유무를 확인하세요. 공식 영수증 발행 여부가 핵심입니다.",
        "faq-q2": "성형외과 전문의(Board Certified)인지 확인하는 방법은?",
        "faq-a2": "진료 과목이 '성형외과'가 아닌 '전문의' 자격증이 있는지 확인하고, 공식 포털에서 의사 이름을 검색하세요.",
        "faq-q3": "수술 전 사진 촬영이 의료 분쟁 시 구체적으로 어떤 도움이 되나요?",
        "faq-a3": "수술 전 사진은 결과 불만족이나 사고 시 '의도하지 않은 결과'를 증명하는 핵심 법적 증거가 됩니다.",
        "faq-q4": "의료사고 발생 시 정부 지원 센터에서 어떤 도움을 주나요?",
        "faq-a4": "24시간 통역, 법적 조정 및 외국인을 위한 분쟁 해결 서비스를 국가 차원에서 제공합니다.",
        "faq-q5": "웰니스 상품과 결합된 사후 관리 서비스의 구체적 사례는?",
        "faq-a5": "레이저 붓기 관리, 림프 마사지 및 명상/스파를 결합한 회복 프로그램이 대표적입니다.",
        "course-title": "5. 실전 K-Beauty Korean & No-Scam 가이드",
        "course-subtitle": "완벽한 상담, 강경한 가격 협상, 안전한 사후관리를 위한 필수 한국어. 병원 DB와 함께 제공됩니다.",
        "course-unit1": "Unit 1. 상담 주도권 쥐기",
        "course-unit1-ex1": "\"자연스럽게 해 주세요.\"",
        "course-unit1-ex1-sub": "[Please make it look natural] - 과도한 성형 방지",
        "course-unit2": "Unit 2. 바가지 차단 협상술",
        "course-unit2-ex1": "\"세부 견적서(Itemized bill)를 주세요.\"",
        "course-unit2-ex1-sub": "[Please give me an itemized bill] - 숨겨진 비용 방어",
        "course-unit3": "Unit 3. 사후관리 & 긴급 대응",
        "course-unit3-ex1": "\"열이 나고 붓기가 심합니다.\"",
        "course-unit3-ex1-sub": "[I have a fever and severe swelling] - 부작용 초기 대응",
        "vip-title": "4. '바가지 없는' 검증 병원 리스트 받기",
        "vip-desc": "내국인과 동일 가격을 보장하고, 100% 수술실 투명성을 유지하는 20곳 이상의 검증된 병원 DB와 '6개 국어 협상 스크립트'를 제공합니다.",
        "paypal-desc": "결제 즉시 이메일로 가이드라인이 자동 전송됩니다.",
        "footer-text": "© 2026 K-Medi Transparency Project. Powered by Antigravity Holdings.",
        "alert-price": "올바른 가격을 입력해주세요.",
        "advice-green": "✅ 매우 공정한 강남 표준 시장가입니다. 안전 지대(Safe zone)에 있습니다.",
        "advice-yellow": "⚠️ 평균가보다 조금 높습니다. 담당 의사가 프리미엄 경력이 있거나 VIP 혜택이 있는지 꼭 확인하세요.",
        "advice-red": "🚨 바가지 주의! 강남 표준 시장가보다 눈에 띄게 비쌉니다. 계약 전 다른 곳의 의견도 꼭 들어보세요.",
        "btn-upsell": "바가지 없는 검증 병원 20선 DB 확인하기 - 단 $49",
        "loading-step1": "AI 강남 평균 시세 분석 중...",
        "loading-step2": "외국인 프리미엄 & 추가 비용 계산 중...",
        "loading-step3": "최종 시뮬레이션 결과 작성 중...",
        "val-system-tag": "SMART CLINIC CHECK SYSTEM",
        "val-headline-1": "예상치 못한 추가비용과 오해를 줄이는",
        "val-headline-2": "견적·서류·소통 템플릿",
        "val-headline-desc": "항목별 서면 견적과 확인 문장으로, 내 결정을 내가 주도하세요.",
        "mockup1-title": "📱 올인원 시스템 대시보드 (Part 1~6)",
        "mockup1-desc": "복잡한 과정 없이 첫 화면에서 모든 DB와 가이드라인에 원클릭으로 접속하세요.",
        "mockup2-title": "🔥 엄선한 20개 클리닉 DB + 그외 엄선한 기타병원 DB"
    },
    en: {
        "header-title": "K-Medi Price & Trust Verifier",
        "header-subtitle": "\"The most expensive decisions deserve the most transparency.\"",
        "calc-title": "1. Price Fairness Calculator",
        "proc-label": "Select Procedure",
        "group-petites": "Dermatology / Petite",
        "group-surgery": "Plastic Surgery / Surgery",
        "ultherapy-300": "Ultherapy (300 lines)",
        "thermage-600": "Thermage FLX (600 lines)",
        "shurink": "Shurink Universe",
        "rejuran-2cc": "Rejuran Healer (2cc)",
        "juvelook": "Juvelook",
        "botox-jaw": "Botox (Jaw)",
        "filler": "Fillers (Average)",
        "rhinoplasty": "Rhinoplasty (Nose)",
        "blepharoplasty": "Blepharoplasty (Eyes)",
        "facial-contouring": "Facial Contouring (3pcs)",
        "liposuction": "Liposuction",
        "anti-aging-eyelid": "Anti-aging Eyelid",
        "revision-rhino": "Revision Rhinoplasty",
        "revision-eye": "Revision Blepharoplasty",
        "forehead-lift": "Forehead Lift",
        "breast-aug": "Breast Augmentation",
        "price-label": "Your Quoted Price (USD)",
        "local-avg-label": "Locals Average",
        "over-pay-label": "Overpayment",
        "btn-analyze": "Analyze My Quote",
        "calc-btn": "Run Budget Simulator",
        "trust-title": "2. Survival Trust Checker",
        "trust-subtitle": "Based on Korean Medical Act & MOHW Standards",
        "kahf-title": "Gov-Certified (KAHF) Accreditation",
        "kahf-desc": "Check if the clinic is officially designated by the Ministry of Health and Welfare.",
        "cctv-title": "CCTV in Operating Room",
        "cctv-desc": "It is your LEGAL RIGHT to request recording in Korea since 2023.",
        "board-title": "Board Certified Specialist",
        "board-desc": "Verify if your surgeon is a specialist or a General Practitioner (GP).",
        "broker-title": "Official Medical Facilitator",
        "broker-desc": "Illegal brokers demand high fees. Only use government-registered agencies.",
        "emergency-title": "⚠️ Emergency Protocol (Accidents)",
        "emergency-desc": "If something goes wrong, don't panic. Call these official agencies immediately.",
        "emergency-note": "*Foreigners have the same legal rights to mediation and compensation as locals.",
        "admin-title": "2.5 Mandatory Administrative Guide",
        "tax-title": "Tax Refund",
        "tax-desc": "Save 10% VAT. Ask for a Tax Refund receipt at the airport kiosk before your departure.",
        "fly-title": "Fit-to-Fly",
        "fly-desc": "For immediate departures after surgery, an airline 'Fit-to-Fly' certificate is highly recommended.",
        "trans-title": "Professional Translator",
        "trans-desc": "Accurate communication is key to safety. We recommend using hospital-linked official translators.",
        "faq-title-main": "3. K-Medi Safety FAQ",
        "faq-q1": "How to identify illegal brokers from registered agencies?",
        "faq-a1": "Look for the 'Certificate of Registration' issued by the Ministry of Health and Welfare (MOHW).",
        "faq-q2": "How to verify if a surgeon is Board Certified?",
        "faq-a2": "Confirm if they hold a 'Specialist' license rather than just a GP. Search doctor names on official portals.",
        "faq-q3": "How do pre-op photos help in case of medical disputes?",
        "faq-a3": "Pre-op photos serve as critical legal evidence to prove 'unintended results' in disputes.",
        "faq-q4": "What support does the Gov Center provide for accidents?",
        "faq-a4": "They offer 24/7 interpretation, legal mediation, and dispute resolution for international patients.",
        "faq-q5": "What are examples of wellness-integrated aftercare?",
        "faq-a5": "Premium aftercare includes laser swelling treatments, lymphatic massage, and luxe spa recovery.",
        "course-title": "5. Practical K-Beauty Korean & No-Scam Guide",
        "course-subtitle": "Essential Korean for perfect consultations, firm price negotiation, and safe aftercare. Provided with the Clinic DB.",
        "course-unit1": "Unit 1. Taking Control of the Consultation",
        "course-unit1-ex1": "\"자연스럽게 해 주세요. (Make it look natural)\"",
        "course-unit1-ex1-sub": "Prevent excessive surgery outcomes",
        "course-unit2": "Unit 2. Negotiation Tactics to Block Rip-offs",
        "course-unit2-ex1": "\"세부 견적서 주세요. (Please give me an itemized bill)\"",
        "course-unit2-ex1-sub": "Defend against hidden costs",
        "course-unit3": "Unit 3. Aftercare & Emergency Response",
        "course-unit3-ex1": "\"열이 나고 붓기가 심합니다. (I have a fever & severe swelling)\"",
        "course-unit3-ex1-sub": "Initial response for side effects",
        "vip-title": "4. Get the \"No-Scam\" Clinic List",
        "vip-desc": "Get a database of 20+ verified clinics with Native Pricing, 100% CCTV transparency, and 'Negotiation Scripts'.",
        "paypal-desc": "Sent automatically via email immediately after payment.",
        "footer-text": "© 2026 K-Medi Transparency Project. Powered by Antigravity Holdings.",
        "alert-price": "Please enter a valid price.",
        "advice-green": "✅ This is a very fair market price. You are in the safe zone.",
        "advice-yellow": "⚠️ A bit higher than average. Check if the clinic offers premium services or a high-profile chief surgeon.",
        "advice-red": "🚨 Price Alert! This is significantly higher than the standard Gangnam rate. We recommend getting a second opinion.",
        "btn-upsell": "Get the \"No-Scam\" Clinic List - Just $49",
        "loading-step1": "Analyzing average local Gangnam prices...",
        "loading-step2": "Calculating foreigner premium and extra costs...",
        "loading-step3": "Generating simulation receipt...",
        "val-system-tag": "SMART CLINIC CHECK SYSTEM",
        "val-headline-1": "Quote, Document & Communication Templates",
        "val-headline-2": "to Reduce Unexpected Costs",
        "val-headline-desc": "Take control of your decisions with itemized written quotes and confirmation scripts.",
        "mockup1-title": "📱 All-in-One System Dashboard (Part 1~6)",
        "mockup1-desc": "One-click access to all DBs and guidelines right from the first screen.",
        "mockup2-title": "🔥 Top 20 Verified Clinics DB + Extra Verified Clinics DB",
        "mockup2-desc": "Check local Korean prices with one click",
        "mockup3-title": "🗣️ 6-Language 'Point-and-Speak' Scripts",
        "mockup3-desc": "Symptom DB + K-Beauty Jargon + Consultation Templates. Show your screen and you're set.",
        "value-title": "System for Confirming Prices, Documents, and Communication 'in Writing'",
        "value-list1": "Itemized written quote request templates",
        "value-list2": "Consultation / Extra option confirmation scripts",
        "value-list3": "Pain expression DB + K-Beauty jargon dictionary",
        "value-old-price": "Original $78.00",
        "value-new-price-desc1": "One-time payment",
        "value-new-price-desc2": "✨ Updates included",
        "toc-title": "📦 Content Included in the System (Table of Contents)",
        "toc-1": "Part 1. The Truth (Industry Reality & Defense)",
        "toc-2": "Part 2. Survival Dictionary (K-Beauty Jargon)",
        "toc-3": "Part 3. The Blueprint (7-Day Timeline)",
        "toc-4": "Part 4. Top 20 Verified Clinics (Verification DB)",
        "toc-5": "Part 5. The Core Pain Dictionary (Symptom DB)",
        "toc-6": "Part 6. Survival Phrases DB (📱 Point & Speak)",
        "cta-main-text": "👇 Access Right Now",
        "cta-sub-text": "(Instant Access · Mobile Optimized · Templates Included)",
        "legal-1": "This service does not provide medical acts and does not guarantee surgical results or 0 side effects.",
        "legal-2": "Final costs and treatment plans are subject to the clinic's diagnosis and policies.",
        "legal-3": "Updates are provided according to the service operation policy.",
        "hotel-tier-label": "Estimated Accommodation Tier",
        "hotel-budget": "3-Star & Under (Budget)",
        "hotel-standard": "4-Star (Standard)",
        "hotel-premium": "5-Star (Premium)",
        "stay-duration-label": "Expected Stay Duration",
        "stay-short": "3~5 Days (Minor Procedures)",
        "stay-medium": "1 Week (Standard Procedures)",
        "stay-long": "2+ Weeks (Major/Complex Surgeries)",
        "translator-label": "Translation/Care Service",
        "trans-none": "Not needed (Can manage alone)",
        "trans-basic": "Clinic Accompanying Translation Only",
        "trans-full": "Airport pickup & Full Itinerary Care",
        "budget-fair-label": "Estimated Gangnam Average (Local Standard)",
        "budget-ripoff-label": "Foreigner Premium (Broker fees, etc.)",
        "advice-alert": "🚨 Price Alert",
        "advice-alert-desc": "Based on this simulation, there is a high risk you are facing a hidden foreigner premium or broker fee of <b>${diff}</b>.",
        "budget-hotel-label": "🏠 Estimated Accommodation",
        "budget-trans-label": "🗣️ Translation/Care Service",
        "budget-total-label": "Total Estimated Budget",
        "btn-upsell-fair": "Get the Verified Clinic DB to ensure this fair price - Just $49"
    },
    zh: {
        "header-title": "韩国医疗价格与信任核查",
        "header-subtitle": "\"昂贵的决定需要透明的信息。\"",
        "calc-title": "1. 价格公平性计算器",
        "proc-label": "选择手术项目",
        "group-petites": "皮肤科 / 微整形 (Petite)",
        "group-surgery": "整形外科 / 手术 (Surgery)",
        "ultherapy-300": "美版超声刀 (300发)",
        "thermage-600": "热玛吉 FLX (600发)",
        "shurink": "舒丽可 (Shurink)",
        "rejuran-2cc": "丽珠兰 (2cc)",
        "juvelook": "乔雅露 (Juvelook)",
        "botox-jaw": "肉毒素 (瘦脸针)",
        "filler": "玻尿酸 (填充)",
        "rhinoplasty": "隆鼻手术",
        "blepharoplasty": "双眼皮手术",
        "facial-contouring": "面部轮廓 (V-Line)",
        "liposuction": "吸脂手术",
        "anti-aging-eyelid": "中老年眼睑手术",
        "revision-rhino": "鼻修复手术",
        "revision-eye": "眼修复手术",
        "forehead-lift": "额头提升",
        "breast-aug": "隆胸手术",
        "price-label": "您的报价 (USD)",
        "local-avg-label": "韩国本地均价",
        "over-pay-label": "溢价金额",
        "btn-analyze": "分析我的报价",
        "calc-btn": "运行预算模拟器",
        "trust-title": "2. 医疗安全信任清单",
        "trust-subtitle": "基于韩国医疗法及保健福祉部(MOHW)标准",
        "kahf-title": "保健福祉部 KAHF 官方认证",
        "kahf-desc": "确认该机构是否为政府指定的“外国患者引流优秀医疗机构”。",
        "cctv-title": "手术室CCTV监控录像",
        "cctv-desc": "自2023年起，根据韩国法律，患者有权要求录制手术过程。",
        "board-title": "整形外科专科医生(Board Certified)确认",
        "board-desc": "务必确认您的主刀医生是否拥有“整形外科专科”执照。",
        "broker-title": "官方注册医疗引流机构",
        "broker-desc": "非法中介会收取高额佣金。请务必选择政府注册的合法机构。",
        "emergency-title": "⚠️ 事故发生时的行动指南",
        "emergency-desc": "如果发生问题，请不要惊慌，立即向下述官方机构寻求帮助。",
        "emergency-note": "*外国患者在法援和调解方面享有与韩国国民同等的法律权利。",
        "admin-title": "2.5 必备行政指南",
        "tax-title": "退税 (Tax Refund)",
        "tax-desc": "可节省10%的增值税。请在出境前在机场自助机提交退税单据。",
        "fly-title": "适航证明 (Fit-to-Fly)",
        "fly-desc": "手术后立即出境时，根据航空公司安全规定，建议携带‘适航证明’。",
        "trans-title": "专业医疗翻译",
        "trans-desc": "准确的沟通是安全的核心。建议由医院关联的正式医疗翻译陪同。",
        "faq-title-main": "3. K-Medi 安全常见问题",
        "faq-q1": "如何区分非法中介和正式机构？",
        "faq-a1": "确认是否有保健福祉部颁发的‘外国患者引流机构注册证’。是否开具正式收据是核心。",
        "faq-q2": "如何确认主刀医生是否为整形外科专科医生？",
        "faq-a2": "确认其是否持有‘专科医生’资格证，并在官方门户网站搜索医生本人姓名。",
        "faq-q3": "术前照片在发生医疗纠纷时具体有什么帮助？",
        "faq-a3": "术前照片是发生事故或对结果不满时，证明‘非预期结果’的关键法律证据。",
        "faq-q4": "发生医疗事故时，政府支援中心提供哪些帮助？",
        "faq-a4": "提供24小时翻译、法律调解和面向外国患者的纠纷解决服务。",
        "faq-q5": "康养结合的术后护理服务有哪些具体案例？",
        "faq-a5": "高端术后护理包括激光消肿治疗、淋巴按摩和豪华水疗恢复。",
        "course-title": "5. 实战 K-Beauty 韩语与防坑指南",
        "course-subtitle": "为了完美咨询、坚定价格谈判和安全术后护理的必备韩语。与诊所数据库一并提供。",
        "course-unit1": "Unit 1. 掌握咨询主动权",
        "course-unit1-ex1": "\"자연스럽게 해 주세요. (请做得自然一点。)\"",
        "course-unit1-ex1-sub": "防止过度整容",
        "course-unit2": "Unit 2. 防止被宰的谈判技巧",
        "course-unit2-ex1": "\"세부 견적서 주세요. (请给我详细的报价单。)\"",
        "course-unit2-ex1-sub": "防范隐藏费用",
        "course-unit3": "Unit 3. 术后护理与紧急应对",
        "course-unit3-ex1": "\"열이 나고 붓기가 심합니다. (我发烧并且肿得很厉害。)\"",
        "course-unit3-ex1-sub": "应对副作用的初步措施",
        "vip-title": "4. 获取“无套路”诊所名单",
        "vip-desc": "获取20多家保证本地价格、100%CCTV透明化的认证医院名单及‘6国语言议价话术’。",
        "paypal-desc": "支付后，下载链接将自动通过电子邮件发送。",
        "footer-text": "© 2026 K-Medi Transparency Project. Powered by Antigravity Holdings.",
        "alert-price": "请输入有效的价格。",
        "advice-green": "✅ 这是一个非常公平的市场价格。您目前处于价格安全区。",
        "advice-yellow": "⚠️ 略高于平均水平。请务必确认是否有高级主治医生或VIP服务。",
        "advice-red": "🚨 价格警告！这明显高于江南标准价格。我们强烈建议您听取其他意见。",
        "btn-upsell": "购买“无套路”VIP诊所名单 - 仅需 $49",
        "hotel-tier-label": "住宿预估等级",
        "hotel-budget": "3星级及以下（高性价比）",
        "hotel-standard": "4星级（标准）",
        "hotel-premium": "5星级（豪华）",
        "stay-duration-label": "预计停留时间",
        "stay-short": "3~5天（轻微手术）",
        "stay-medium": "1周（常规手术）",
        "stay-long": "2周以上（大型手术/复合）",
        "translator-label": "翻译/陪同服务",
        "trans-none": "不需要（可自行解决）",
        "trans-basic": "仅限医院陪同翻译",
        "trans-full": "接机及全程护理",
        "budget-fair-label": "江南预估平均价格（基于本地人标准）",
        "budget-ripoff-label": "外国人溢价（中介费等）",
        "advice-alert": "🚨 价格警告",
        "advice-alert-desc": "根据此模拟，您有面临支付 <b>${diff}</b> 的隐藏外国人溢价或中介费用的高风险。",
        "budget-hotel-label": "🏠 预估住宿费",
        "budget-trans-label": "🗣️ 翻译/陪同服务",
        "budget-total-label": "预估总费用",
        "loading-step1": "正在分析江南本地平均价格...",
        "loading-step2": "正在计算外国人溢价与额外费用...",
        "loading-step3": "正在生成模拟收据...",
        "val-system-tag": "SMART CLINIC CHECK SYSTEM",
        "val-headline-1": "减少预料外费用和误解的",
        "val-headline-2": "报价单·文件·沟通模板",
        "val-headline-desc": "通过逐项的书面报价及确认语句，让您自己主导决定。",
        "mockup1-title": "📱 多合一系统看板 (Part 1~6)",
        "mockup1-desc": "无需复杂流程，首屏一键访问所有数据库与指南。",
        "mockup2-title": "🔥 精选20家诊所数据库 + 额外精选诊所",
        "mockup2-desc": "一键查看韩国人本地价格",
        "mockup3-title": "🗣️ 6种语言“指哪说哪(Point-and-Speak)”脚本",
        "mockup3-desc": "症状库 + K-美容词汇 + 问诊模板，出示手机屏幕即可。",
        "value-title": "通过“书面形式”确认价格、文件及沟通的系统",
        "value-list1": "按项目分类的书面报价单模板",
        "value-list2": "确认问诊/附加选项的会话脚本",
        "value-list3": "疼痛描述数据库 + K-美容专业词典",
        "value-old-price": "原价 $78.00",
        "value-new-price-desc1": "一次性买断",
        "value-new-price-desc2": "✨ 包含免费更新",
        "toc-title": "📦 系统包含内容 (目录)",
        "toc-1": "Part 1. 行业真相 (现实与防范)",
        "toc-2": "Part 2. 生存词典 (K-Beauty 术语)",
        "toc-3": "Part 3. 蓝图 (7天日程规划)",
        "toc-4": "Part 4. Top 20 认证诊所 (验证数据库)",
        "toc-5": "Part 5. 核心痛证词典 (症状库)",
        "toc-6": "Part 6. 生存短语库 (📱 指哪说哪)",
        "cta-main-text": "👇 立即获取访问权限",
        "cta-sub-text": "(即时浏览 · 移动端优化 · 包含模板)",
        "legal-1": "本服务不提供医疗行为，也不保证手术结果或无副作用。",
        "legal-2": "最终费用和治疗计划取决于医疗机构的诊断和政策。",
        "legal-3": "更新将根据服务运营政策提供。"
    },
    ja: {
        "header-title": "K-Medi 価格＆信頼検証器",
        "header-subtitle": "\"高額な決断ほど、透明な情報が必要です。\"",
        "calc-title": "1. 価格妥当性計算機",
        "proc-label": "手術・施術の選択",
        "group-petites": "皮膚科 / プチ整形 (Petite)",
        "group-surgery": "美容外科 / 手術 (Surgery)",
        "ultherapy-300": "ウルセラ (300ショット)",
        "thermage-600": "サーマクール FLX (600ショット)",
        "shurink": "シュリンク (Shurink)",
        "rejuran-2cc": "リジュラン (2cc)",
        "juvelook": "ジュベルック (Juvelook)",
        "botox-jaw": "ボトックス (エラ)",
        "filler": "フィラー (注入)",
        "rhinoplasty": "鼻整形",
        "blepharoplasty": "目元整形",
        "facial-contouring": "輪郭手術 (Vライン)",
        "liposuction": "脂肪吸引",
        "anti-aging-eyelid": "アンチエイジング眼瞼",
        "revision-rhino": "鼻再手術",
        "revision-eye": "目再手術",
        "forehead-lift": "額リフト",
        "breast-aug": "豊胸術",
        "price-label": "提示された価格 (USD)",
        "local-avg-label": "韓国現地の平均価格",
        "over-pay-label": "超過支払額",
        "btn-analyze": "見積もりを分析する",
        "calc-btn": "予算シミュレーターを実行",
        "trust-title": "2. 安全信頼チェックリスト",
        "trust-subtitle": "韓国医療法 및 보건복지부(MOHW) 기준",
        "kahf-title": "보건복지부 KAHF 正式認証",
        "kahf-desc": "政府が選定した「外国人患者誘致優良医療機関」か確認してください.",
        "cctv-title": "手術室内のCCTV設置と撮影",
        "cctv-desc": "2023年から、患者の要請による手術シーンの撮影は法的権利です.",
        "board-title": "美容外科専門医(Board Certified)確認",
        "board-desc": "執刀医が「整形外科専門医」の資格を保有しているか必ずチェックしてください.",
        "broker-title": "公式登録誘致業者(エージェント)",
        "broker-desc": "不法ブローカーは高額な手数料を要求します。政府登録業者を利用しましょう.",
        "emergency-title": "⚠️ 万が一の事故発生時の行動指針",
        "emergency-desc": "問題が発生した場合は慌てず、直ちに下記の公的機関に助けを求めてください.",
        "emergency-note": "*外国人であっても韓国国民と同様に法的補償 및 중재를 받을 권리가 있습니다.",
        "admin-title": "2.5 必須行政ガイド",
        "tax-title": "免税 (Tax Refund)",
        "tax-desc": "10%の付加価値税を還付。出国前に空港のキオスクで領収書を提出してください。",
        "fly-title": "搭乗許可 (Fit-to-Fly)",
        "fly-desc": "術後すぐの帰国には、航空会社の安全規定に基づき「搭乗可能診断書」の持参が推奨されます.",
        "trans-title": "専門医療通訳",
        "trans-desc": "正確な意思疎通が安全の鍵です. 病院所属の公式医療通訳の同行をお勧めします.",
        "faq-title-main": "3. K-Medi 安全に関するFAQ",
        "faq-q1": "不法ブローカーと正規エージェントの見分け方は？",
        "faq-a1": "保健福祉部発行の「外国人患者誘致業者登録証」の有無。公式領収書の発行が条件です.",
        "faq-q2": "美容外科専門医(Board Certified)の確認方法は？",
        "faq-a2": "「専門医」資格を保有しているか確認し、公式ポータルで医師名を検索してください.",
        "faq-q3": "術前写真が医療紛争時に具体的にどう役立ちますか？",
        "faq-a3": "術前写真は事故や結果不満時に「意図しない結果」を証明する重要な法的証拠になります.",
        "faq-q4": "医療事故発生時、政府支援センターはどのような助けをくれますか？",
        "faq-a4": "24時間通訳、法的調整、外国人向け紛争解決サービスを国レベルで提供します.",
        "faq-q5": "웰니스 상품과 결합된 사후 관리 서비스의 구체적 사례는?",
        "faq-a5": "プレミアムアフターケアには、レーザー腫れ治療、リンパマッサージ、豪華なスパ回復などが含まれます。",
        "course-title": "5. 実践 K-Beauty 韓国語＆ぼったくり防止ガイド",
        "course-subtitle": "完璧なカウンセリング、強気な価格交渉、安全なアフターケアのための必須韓国語。クリニックDBと共に提供されます。",
        "course-unit1": "Unit 1. カウンセリングの主導権を握る",
        "course-unit1-ex1": "\"자연스럽게 해 주세요. (自然にしてください。)\"",
        "course-unit1-ex1-sub": "過度な整形を防ぐ",
        "course-unit2": "Unit 2. ぼったくり防止の交渉術",
        "course-unit2-ex1": "\"세부 견적서 주세요. (詳細な見積書をください。)\"",
        "course-unit2-ex1-sub": "隠された費用の防御",
        "course-unit3": "Unit 3. アフターケア＆緊急対応",
        "course-unit3-ex1": "\"열이 나고 붓기가 심합니다. (熱が出て腫れがひどいです。)\"",
        "course-unit3-ex1-sub": "副作用の初期対応",
        "vip-title": "4. 「ぼったくりのない」クリニックリストを入手する",
        "vip-desc": "現地価格保証・100%CCTV透明化された病院20選リストと「6ヶ国語交渉スクリプト」を提供.",
        "paypal-desc": "決済完了後、即座にメールで自動送信されます.",
        "footer-text": "© 2026 K-Medi Transparency Project. Powered by Antigravity Holdings.",
        "alert-price": "正しい価格を入力してください。",
        "advice-green": "✅ 非常に公正な江南の市場価格です。安全圏(Safe zone)にあります。",
        "advice-yellow": "⚠️ 平均より少し高額です。担当医がプレミアムな経歴を持つか、VIP特典があるか確認してください。",
        "advice-red": "🚨 ぼったくり注意！ 江南の標準価格より著しく高額です。契約前にセカンドオピニオンをお勧めします。",
        "btn-upsell": "ぼったくりなし！検証済み病院20選リスト - たったの $49",
        "hotel-tier-label": "宿泊予定グレード",
        "hotel-budget": "3つ星以下（高コスパ）",
        "hotel-standard": "4つ星（スタンダード）",
        "hotel-premium": "5つ星（プレミアム）",
        "stay-duration-label": "滞在予定期間",
        "stay-short": "3〜5日（プチ整形等）",
        "stay-medium": "1週間（一般手術）",
        "stay-long": "2週間以上（大きな手術等）",
        "translator-label": "通訳/ケアサービス",
        "trans-none": "不要（自力で解決可能）",
        "trans-basic": "病院同行通訳のみ",
        "trans-full": "空港送迎および全日程ケア",
        "budget-fair-label": "江南の予想平均相場（現地人基準）",
        "budget-ripoff-label": "外国人ぼったくり料金（ブローカー費用等）",
        "advice-alert": "🚨 ぼったくり注意報",
        "advice-alert-desc": "このままでは、ブローカーの手数料や外国人プレミアムとして約 <b>${diff}</b> の不当な追加費用を支払うことになる可能性があります。",
        "budget-hotel-label": "🏠 予想宿泊費",
        "budget-trans-label": "🗣️ 通訳/同行サービス",
        "budget-total-label": "予想総合費用",
        "loading-step1": "AI江南平均相場を分析中...",
        "loading-step2": "外国人プレミアム＆追加費用を計算中...",
        "loading-step3": "最終シミュレーション結果を作成中...",
        "val-system-tag": "SMART CLINIC CHECK SYSTEM",
        "val-headline-1": "予期せぬ追加費用と誤解を減らす",
        "val-headline-2": "見積書・書類・コミュニケーションテンプレート",
        "val-headline-desc": "項目別の書面見積もりと確認フレーズで、あなたの決定をあなた自身が主導してください。",
        "mockup1-title": "📱 オールインワンシステムダッシュボード (Part 1~6)",
        "mockup1-desc": "複雑な手続きなしで、最初の画面からすべてのDBとガイドラインにワンクリックでアクセスできます。",
        "mockup2-title": "🔥 厳選20のクリニックDB + その他厳選クリニック",
        "mockup2-desc": "現地人のローカル価格をご自身で確認",
        "mockup3-title": "🗣️ 6ヶ国語『見せるだけ(Point-and-Speak)』スクリプト",
        "mockup3-desc": "痛みの表現DB + K-美容用語辞典 + カウンセリングテンプレート、スマホを見せるだけでOK。",
        "value-title": "価格・書類・コミュニケーションを「書面で」確認するシステム",
        "value-list1": "項目別、書面見積もり要求テンプレート",
        "value-list2": "カウンセリング/追加オプション確認スクリプト",
        "value-list3": "痛みの表現DB + K-美容用語辞典",
        "value-old-price": "通常 $78.00",
        "value-new-price-desc1": "一回の買い切り決済",
        "value-new-price-desc2": "✨ アップデート機能付き",
        "toc-title": "📦 システム構成コンテンツ（目次）",
        "toc-1": "Part 1. 真実 (業界の現実と防御)",
        "toc-2": "Part 2. サバイバル辞典 (K-Beauty用語)",
        "toc-3": "Part 3. 見取り図 (7日間のタイムライン)",
        "toc-4": "Part 4. Top 20 検証済みクリニック (認証DB)",
        "toc-5": "Part 5. 痛みのコア辞典 (症状DB)",
        "toc-6": "Part 6. サバイバル・フレーズ集 (📱 指差し会話)",
        "cta-main-text": "👇 今すぐアクセスする",
        "cta-sub-text": "(即時閲覧可能・モバイル最適化・テンプレート同梱)",
        "legal-1": "本サービスは医療行為を提供せず、手術結果や副作用ゼロを保証するものではありません。",
        "legal-2": "最終的な費用や治療計画は、医療機関の診断と方針に従います。",
        "legal-3": "アップデートはサービス運営ポリシーに基づいて提供されます。"
    },
    th: {
        "header-title": "K-Medi เครื่องตรวจสอบราคาและความเชื่อถือ",
        "header-subtitle": "\"การตัดสินใจที่แพงที่สุด ต้องการข้อมูลที่โปร่งใสที่สุด\"",
        "calc-title": "1. เครื่องคำนวณราคาที่เป็นธรรม",
        "proc-label": "เลือกรายการหัตถการ",
        "group-petites": "ผิวหนัง / หัตถการขนาดเล็ก (Petite)",
        "group-surgery": "ศัลยกรรมตกแต่ง (Surgery)",
        "ultherapy-300": "อัลเทอร่า (300 ช็อต)",
        "thermage-600": "เทอร์มาจ FLX (600 ช็อต)",
        "shurink": "ชูริงก์ ยูนิเวิร์ส (Shurink)",
        "rejuran-2cc": "รีจูรัน (2cc)",
        "juvelook": "จูวีลุค (Juvelook)",
        "botox-jaw": "โบท็อกซ์ (กราม)",
        "filler": "ฟิลเลอร์ (เฉลี่ยตามจุด)",
        "rhinoplasty": "ศัลยกรรมจมูก",
        "blepharoplasty": "ศัลยกรรมตาสองชั้น",
        "facial-contouring": "ปรับรูปหน้า (Facial Contouring)",
        "liposuction": "การดูดไขมัน",
        "anti-aging-eyelid": "ผ่าตัดหนังตา (Anti-aging)",
        "revision-rhino": "แก้จมูก",
        "revision-eye": "แก้ตา",
        "forehead-lift": "ยกคิ้ว / ดึงหน้าผาก",
        "breast-aug": "เสริมหน้าอก",
        "price-label": "ราคาที่ได้รับเสนอ (USD)",
        "local-avg-label": "ราคาปกติคนเกาหลี",
        "over-pay-label": "ส่วนต่างราคา (บา가지)",
        "btn-analyze": "วิเคราะห์ราคาของฉัน",
        "calc-btn": "เรียกใช้โปรแกรมจำลองงบประมาณ",
        "trust-title": "2. รายการตรวจสอบความปลอดภัย",
        "trust-subtitle": "ตามมาตรฐานกฎหมายการแพทย์เกาหลี (MOHW)",
        "kahf-title": "การรับรอง KAHF โดยรัฐบาล",
        "kahf-desc": "ตรวจสอบว่าคลินิกได้รับการรับรองมาตรฐานสากลจากกระทรวงสาธารณสุขหรือไม่",
        "cctv-title": "กล้อง CCTV ในห้องผ่าตัด",
        "cctv-desc": "คุณมีสิทธิ์ตามกฎหมายในการขอให้บันทึกภาพการผ่าตัดตั้งแต่ปี 2023",
        "board-title": "ตรวจสอบแพทย์เฉพาะทาง",
        "board-desc": "ตรวจสอบว่าแพทย์ผู้ผ่าตัดมีวุฒิบัตร 'เฉพาะทางศัลยกรรมตกแต่ง' หรือไม่",
        "broker-title": "ตัวแทนที่จดทะเบียนถูกต้อง",
        "broker-desc": "นายหน้าที่ไม่ได้รับอนุญาตจะเรียกค่าคอมมิชชั่นสูง โปรดใช้บริษัทที่จดทะเบียนกับรัฐบาล",
        "emergency-title": "⚠️ ขั้นตอนเมื่อเกิดอุบัติเหตุ",
        "emergency-desc": "หากเกิดปัญหา ไม่ต้องตกใจ โปรดติดต่อหน่วยงานรัฐบาลเหล่านี้ทันที",
        "emergency-note": "*ชาวต่างชาติมีสิทธิ์ได้รับความคุ้มครองและไกล่เกลี่ยตามกฎหมายเท่ากับชาวเกาหลี",
        "admin-title": "2.5 คู่มือการจัดการที่จำเป็น",
        "tax-title": "คืนภาษี (Tax Refund)",
        "tax-desc": "รับคืนภาษีมูลค่าเพิ่ม 10% โปรดยื่นใบเสร็จที่ตู้คีออสก์ในสนามบินก่อนเดินทางกลับ",
        "fly-title": "ใบรับรองการบิน (Fit-to-Fly)",
        "fly-desc": "หากเดินทางทันทีหลังผ่าตัด แนะนำให้พกใบรับรองแพทย์ 'Fit-to-Fly' ตามกฎการบิน",
        "trans-title": "ล่ามการแพทย์มืออาชีพ",
        "trans-desc": "การสื่อสารที่แม่นยำคือหัวใจของความปลอดภัย แนะนำให้ใช้ล่ามทางการสมทบของโรงพยาบาล",
        "faq-title-main": "3. K-Medi คำถามที่พบบ่อยด้านความปลอดภัย",
        "faq-q1": "จะแยกนายหน้าผิดกฎหมายกับตัวแทนจดทะเบียนได้อย่างไร?",
        "faq-a1": "ตรวจสอบ 'ใบจดทะเบียนสถานพยาบาลสำหรับชาวต่างชาติ' จาก MOHW และการออกใบเสร็จที่เป็นทางการ",
        "faq-q2": "การตรวจสอบวุฒิบัตร 'เฉพาะทางศัลยกรรมตกแต่ง' ทำได้อย่างไร?",
        "faq-a2": "ตรวจสอบวุฒิบัตร 'ผู้เชี่ยวชาญ' ไม่ใช่แพทย์ทั่วไป และค้นหาชื่อแพทย์ในพอร์ทัลทางการ",
        "faq-q3": "รูปถ่ายก่อนผ่าตัดช่วยได้อย่างไรเมื่อเกิดข้อพิพาท?",
        "faq-a3": "รูปถ่ายก่อนผ่าตัดเป็นหลักฐานทางกฎหมายชิ้นสำคัญเพื่อพิสูจน์ 'ผลลัพธ์ที่ไม่ได้ตั้งใจ' เมื่อเกิดปัญหา",
        "faq-q4": "Medical Korea Support Center ช่วยอะไรได้บ้างเมื่อเกิดอุบัติเหตุ?",
        "faq-a4": "ให้บริการล่าม 24 ชม. การไกล่เกลี่ยทางกฎหมาย และการระงับข้อพิพาทสำหรับชาวต่างชาติ",
        "faq-q5": "ตัวอย่างบริการดูแลหลังผ่าตัด (Aftercare) แบบ Wellness มีอะไรบ้าง?",
        "faq-a5": "การดูแลระดับพรีเมียมรวมถึงการรักษาอาการบวมด้วยเลเซอร์ การนวดน้ำเหลือง และการฟื้นฟูด้วยสปาสุดหรู",
        "course-title": "5. คู่มือภาษาเกาหลี K-Beauty เชิงปฏิบัติ & ป้องกันการถูกหลอก",
        "course-subtitle": "ภาษาเกาหลีที่จำเป็นสำหรับการปรึกษาได้อย่างสมบูรณ์แบบ, การเจรจาราคาอย่างมั่นใจ, และการดูแลหลังทำอย่างปลอดภัย",
        "course-unit1": "Unit 1. การควบคุมบทสนทนาในการปรึกษา",
        "course-unit1-ex1": "\"자연스럽게 해 주세요. (ช่วยทำให้ดูเป็นธรรมชาติหน่อยค่ะ)\"",
        "course-unit1-ex1-sub": "ป้องกันการทำศัลยกรรมมากเกินไป",
        "course-unit2": "Unit 2. เทคนิคการเจรจาป้องกันการโก่งราคา",
        "course-unit2-ex1": "\"세부 견적서 주세요. (ขอใบเสนอราคาแบบแยกรายการด้วยค่ะ)\"",
        "course-unit2-ex1-sub": "ป้องกันค่าใช้จ่ายแอบแฝง",
        "course-unit3": "Unit 3. การดูแลหลังทำ & การตอบสนองกรณีฉุกเฉิน",
        "course-unit3-ex1": "\"열이 나고 붓기가 심합니다. (มีไข้และบวมมากเลยค่ะ)\"",
        "course-unit3-ex1-sub": "การรับมือเบื้องต้นสำหรับผลข้างเคียง",
        "vip-title": "4. รับรายชื่อคลินิกที่ \"ไม่มีการโกง\"",
        "vip-desc": "รับรายชื่อ 20+ คลินิกที่รับประกันราคาคนเกาหลี พร้อมกล้อง CCTV 100% และ 'บทพูดต่อรอง 6 ภาษา'",
        "paypal-desc": "ระบบจะส่งข้อมูลให้ทางอีเมลโดยอัตโนมัติทันทีหลังชำระเงิน",
        "footer-text": "© 2026 K-Medi Transparency Project. Powered by Antigravity Holdings.",
        "alert-price": "โปรดระบุราคาที่ถูกต้อง",
        "advice-green": "✅ นี่คือราคาที่ยุติธรรมมาก คุณอยู่ในเซฟโซน",
        "advice-yellow": "⚠️ ราคาสูงกว่าค่าเฉลี่ยเล็กน้อย ตรวจสอบว่ามีบริการพิเศษหรือแพทย์ผู้เชี่ยวชาญระดับสูงหรือไม่",
        "advice-red": "🚨 คำเตือนราคา! แพงกว่าราคามาตรฐานกังนัมอย่างมาก แนะนำให้หาความคิดเห็นที่สอง",
        "btn-upsell": "รับรายชื่อคลินิก 'ไร้การปั่นราคา' - เพียง $49",
        "hotel-tier-label": "ระดับโรงแรมที่คาดการณ์",
        "hotel-budget": "3 ดาวหรือต่ำกว่า (ประหยัด)",
        "hotel-standard": "4 ดาว (มาตรฐาน)",
        "hotel-premium": "5 ดาว (พรีเมียม)",
        "stay-duration-label": "ระยะเวลาที่คาดว่าจะพำนัก",
        "stay-short": "3-5 วัน (หัตถการเล็ก)",
        "stay-medium": "1 สัปดาห์ (ศัลยกรรมทั่วไป)",
        "stay-long": "2 สัปดาห์ขึ้นไป (ศัลยกรรมใหญ่/หลายอย่าง)",
        "translator-label": "บริการล่าม/ดูแล",
        "trans-none": "ไม่จำเป็น (จัดการเองได้)",
        "trans-basic": "เฉพาะล่ามที่คลินิก",
        "trans-full": "รับส่งสนามบินและดูแลตลอดการเดินทาง",
        "budget-fair-label": "ราคาเฉลี่ยกังนัม (ราคาคนท้องถิ่น)",
        "budget-ripoff-label": "ราคาพรีเมียมสำหรับชาวต่างชาติ (ค่าธรรมเนียมนายหน้า ฯลฯ)",
        "advice-alert": "🚨 คำเตือนการโก่งราคา",
        "advice-alert-desc": "จากการจำลองนี้ คุณมีความเสี่ยงสูงที่จะต้องจ่ายค่าพรีเมียมสำหรับชาวต่างชาติหรือค่านายหน้าแอบแฝงประมาณ <b>${diff}</b>",
        "budget-hotel-label": "🏠 ค่าที่พัก (โดยประมาณ)",
        "budget-trans-label": "🗣️ ล่าม/ดูแล (โดยประมาณ)",
        "budget-total-label": "งบประมาณรวมที่คาดการณ์",
        "loading-step1": "กำลังวิเคราะห์ราคาเฉลี่ยท้องถิ่นกังนัม...",
        "loading-step2": "กำลังคำนวณค่าพรีเมียมสำหรับชาวต่างชาติและค่าใช้จ่ายเพิ่มเติม...",
        "loading-step3": "กำลังสร้างใบเสร็จจำลอง...",
        "val-system-tag": "SMART CLINIC CHECK SYSTEM",
        "val-headline-1": "เทมเพลตเสนอราคา เอกสาร และการสื่อสาร",
        "val-headline-2": "เพื่อลดค่าใช้จ่ายแอบแฝง",
        "val-headline-desc": "ควบคุมการตัดสินใจของคุณด้วยใบเสนอราคาที่เป็นลายลักษณ์อักษรแบบแบ่งรายการและสคริปต์ยืนยัน",
        "mockup1-title": "📱 แดชบอร์ดระบบ All-in-One (ส่วนที่ 1~6)",
        "mockup1-desc": "เข้าถึงฐานข้อมูลและแนวทางทั้งหมดได้ในคลิกเดียวจากหน้าจอแรก โดยไม่ต้องมีขั้นตอนซับซ้อน",
        "mockup2-title": "🔥 ฐานข้อมูลคลินิกที่ผ่านการตรวจสอบ 20 แห่ง + ฐานข้อมูลคลินิกที่ผ่านการตรวจสอบเพิ่มเติม",
        "mockup2-desc": "ตรวจสอบราคาคนท้องถิ่นด้วยตัวคุณเอง",
        "mockup3-title": "🗣️ สคริปต์ 'ชี้แล้วพูด' 6 ภาษา",
        "mockup3-desc": "ฐานข้อมูลอาการ + ศัพท์เฉพาะ K-Beauty + เทมเพลตการปรึกษา เพียงแค่แสดงหน้าจอโทรศัพท์ของคุณ",
        "value-title": "ระบบตรวจสอบราคา เอกสาร และการสื่อสาร 'เป็นลายลักษณ์อักษร'",
        "value-list1": "เทมเพลตขอใบเสนอราคาแบบแยกรายการเป็นลายลักษณ์อักษร",
        "value-list2": "สคริปต์ยืนยันการปรึกษาและตัวเลือกเพิ่มเติม",
        "value-list3": "ฐานข้อมูลอาการ + พจนานุกรม K-Beauty",
        "value-old-price": "ราคาเดิม $78.00",
        "value-new-price-desc1": "ชำระครั้งเดียว",
        "value-new-price-desc2": "✨ รวมการอัปเดต",
        "toc-title": "📦 เนื้อหาระบบที่รวมอยู่ (สารบัญ)",
        "toc-1": "ส่วนที่ 1. ความจริง (ความเป็นจริงของอุตสาหกรรมและการป้องกัน)",
        "toc-2": "ส่วนที่ 2. พจนานุกรมเอาตัวรอด (ศัพท์เฉพาะ K-Beauty)",
        "toc-3": "ส่วนที่ 3. แผนงาน (ไทม์ไลน์ 7 วัน)",
        "toc-4": "ส่วนที่ 4. 20 คลินิกชั้นนำที่ผ่านการตรวจสอบ (ฐานข้อมูลการตรวจสอบ)",
        "toc-5": "ส่วนที่ 5. พจนานุกรมอาการหลัก (ฐานข้อมูลอาการ)",
        "toc-6": "ส่วนที่ 6. ฐานข้อมูลวลีเอาตัวรอด (📱 ชี้แล้วพูด)",
        "cta-main-text": "👇 เข้าถึงได้ทันที",
        "cta-sub-text": "(ดูได้ทันที · เหมาะสำหรับมือถือ · รวมเทมเพลต)",
        "legal-1": "บริการนี้ไม่ได้ให้บริการทางการแพทย์และไม่รับประกันผลการผ่าตัดหรือผลข้างเคียงเป็นศูนย์",
        "legal-2": "ค่าใช้จ่ายและแผนการรักษาขั้นสุดท้ายขึ้นอยู่กับการวินิจฉัยและนโยบายของคลินิก",
        "legal-3": "การอัปเดตจะจัดให้ตามนโยบายการดำเนินงานของบริการ"
    },
    vi: {
        "header-title": "K-Medi Trình Xác Minh Giá & Niềm Tin",
        "header-subtitle": "\"Những quyết định đắt giá nhất cần thông tin minh bạch nhất\"",
        "calc-title": "1. Máy Tính Công Bằng Về Giá",
        "proc-label": "Chọn Dịch Vụ Thẩm Mỹ",
        "group-petites": "Da liễu / Vi phẫu (Petite)",
        "group-surgery": "Phẫu thuật Thẩm mỹ (Surgery)",
        "ultherapy-300": "Nâng cơ Ultherapy (300 line)",
        "thermage-600": "Thermage FLX (600 line)",
        "shurink": "Shurink Universe",
        "rejuran-2cc": "Tiêm Rejuran (2cc)",
        "juvelook": "Juvelook",
        "botox-jaw": "Tiêm Botox (Thon gọn hàm)",
        "filler": "Tiêm Filler (Trung bình theo vùng)",
        "rhinoplasty": "Phẫu thuật nâng mũi",
        "blepharoplasty": "Cắt mí mắt",
        "facial-contouring": "Tạo hình khuôn mặt (V-Line)",
        "liposuction": "Hút mỡ",
        "anti-aging-eyelid": "Phẫu thuật mắt lão hóa",
        "revision-rhino": "Sửa mũi (Tái phẫu thuật)",
        "revision-eye": "Sửa mí mắt (Tái phẫu thuật)",
        "forehead-lift": "Nâng trán / Căng da trán",
        "breast-aug": "Phẫu thuật nâng ngực",
        "price-label": "Giá bạn được báo (USD)",
        "local-avg-label": "Giá trung bình tại Hàn",
        "over-pay-label": "Số tiền chênh lệch",
        "btn-analyze": "Phân Tích Báo Giá Của Tôi",
        "calc-btn": "Chạy Trình Mô Phỏng Ngân Sách",
        "trust-title": "2. Danh Sách Kiểm Tra An Toàn",
        "trust-subtitle": "Theo tiêu chuẩn Luật Y tế Hàn Quốc (MOHW)",
        "kahf-title": "Chứng nhận KAHF của Chính phủ",
        "kahf-desc": "Kiểm tra xem bệnh viện có được Bộ Y tế công nhận là cơ sở ưu tú không",
        "cctv-title": "Có CCTV trong phòng mổ",
        "cctv-desc": "Từ năm 2023, bạn có quyền yêu cầu ghi hình ca phẫu thuật theo luật định",
        "board-title": "Xác nhận Bác sĩ Chuyên khoa",
        "board-desc": "Đảm bảo bác sĩ phẫu thuật có bằng 'Chuyên khoa Phẫu thuật Thẩm mỹ'",
        "broker-title": "Đại lý được đăng ký chính thức",
        "broker-desc": "Môi giới bất hợp pháp thường đòi phí cao. Hãy chọn đại lý có đăng ký với chính phủ",
        "emergency-title": "⚠️ Quy trình khi xảy ra sự cố",
        "emergency-desc": "Nếu có vấn đề, đừng hoảng loạn. Hãy gọi ngay cho các cơ quan chính thức này",
        "emergency-note": "*Người nước ngoài có quyền lợi pháp lý tương đương người bản địa khi xảy ra tranh chấp",
        "admin-title": "2.5 Hướng dẫn Hành chính Thiết yếu",
        "tax-title": "Hoàn thuế (Tax Refund)",
        "tax-desc": "Hoàn 10% VAT. Hãy trình hóa đơn tại cây ki-ốt ở sân bay trước khi xuất cảnh.",
        "fly-title": "Fit-to-Fly",
        "fly-desc": "Nếu xuất cảnh ngay sau mổ, nên có giấy xác nhận 'Đủ sức khỏe bay' theo quy định hàng không.",
        "trans-title": "Thông dịch viên Y tế Chuyên nghiệp",
        "trans-desc": "Giao tiếp chính xác là chìa khóa an toàn. Khuyên dùng thông dịch viên chính thức của bệnh viện.",
        "faq-title-main": "3. K-Medi FAQ về An toàn",
        "faq-q1": "Làm sao phân biệt môi giới lậu và đại lý chính thống?",
        "faq-a1": "Kiểm tra 'Giấy đăng ký thu hút bệnh nhân nước ngoài' của Bộ Y tế. Điểm mấu chốt là có hóa đơn chính thức.",
        "faq-q2": "Làm sao kiểm tra bác sĩ có phải chuyên khoa (Board Certified) không?",
        "faq-a2": "Xác nhận họ có bằng 'Chuyên khoa' thay vì chỉ bác sĩ đa khoa. Tìm tên bác sĩ trên cổng thông tin.",
        "faq-q3": "Ảnh chụp trước mổ có tác dụng gì cụ thể khi xảy ra tranh chấp?",
        "faq-a3": "Ảnh trước mổ là bằng chứng pháp lý quan trọng để chứng minh 'kết quả ngoài ý muốn' khi có sự cố.",
        "faq-q4": "Trung tâm hỗ trợ Medical Korea giúp gì khi có tai nạn y khoa?",
        "faq-a4": "Hỗ trợ thông dịch 24/7, hòa giải pháp lý và giải quyết tranh chấp cho bệnh nhân quốc tế.",
        "faq-q5": "Các ví dụ cụ thể về dịch vụ hậu phẫu kết hợp Wellness là gì?",
        "faq-a5": "Chăm sóc cao cấp bao gồm điều trị sưng bằng tia laser, mát-xa bạch huyết và phục hồi tại spa sang trọng.",
        "course-title": "5. Hướng dẫn Tiếng Hàn K-Beauty Thực tế & Chống lừa đảo",
        "course-subtitle": "Tiếng Hàn thiết yếu để tư vấn hoàn hảo, đàm phán giá cả cứng rắn và chăm sóc hậu phẫu an toàn.",
        "course-unit1": "Unit 1. Nắm quyền chủ động khi tư vấn",
        "course-unit1-ex1": "\"자연스럽게 해 주세요. (Hãy làm cho tôi trông thật tự nhiên)\"",
        "course-unit1-ex1-sub": "Tránh phẫu thuật thẩm mỹ quá đà",
        "course-unit2": "Unit 2. Thuật đàm phán ngăn chặn chặt chém",
        "course-unit2-ex1": "\"세부 견적서 주세요. (Vui lòng cho tôi xin bảng báo giá chi tiết)\"",
        "course-unit2-ex1-sub": "Phòng thủ trước các chi phí ẩn",
        "course-unit3": "Unit 3. Chăm sóc hậu phẫu & Xử lý khẩn cấp",
        "course-unit3-ex1": "\"열이 나고 붓기가 심합니다. (Tôi bị sốt và sưng tấy nghiêm trọng)\"",
        "course-unit3-ex1-sub": "Xử lý sớm các tác dụng phụ",
        "vip-title": "4. Nhận Danh sách Phòng khám \"Không Lừa đảo\"",
        "vip-desc": "Nhận danh sách 20+ bệnh viện cam kết giá bản địa, minh bạch CCTV và 'Mẫu câu thương lượng 6 ngôn ngữ'.",
        "paypal-desc": "Được gửi tự động qua email ngay sau khi thanh toán.",
        "footer-text": "© 2026 K-Medi Transparency Project. Powered by Antigravity Holdings.",
        "alert-price": "Vui lòng nhập giá hợp lệ",
        "advice-green": "✅ Đây là một mức giá thị trường rất hợp lý. Bạn đang ở trong vùng an toàn.",
        "advice-yellow": "⚠️ Cao hơn mức trung bình một chút. Hãy kiểm tra xem phòng khám có cung cấp dịch vụ cao cấp hay bác sĩ trưởng khoa nổi tiếng không.",
        "advice-red": "🚨 Cảnh báo Giá! Mức giá này cao hơn đáng kể so với mức giá tiêu chuẩn của Gangnam. Chúng tôi khuyên bạn nên tham khảo ý kiến thứ hai.",
        "btn-upsell": "Nhận Danh Sách Bệnh Viện \"Không Chém Giá\" - Chỉ $49",
        "hotel-tier-label": "Hạng chỗ ở dự kiến",
        "hotel-budget": "3 sao trở xuống (Tiết kiệm)",
        "hotel-standard": "4 sao (Tiêu chuẩn)",
        "hotel-premium": "5 sao (Cao cấp)",
        "stay-duration-label": "Thời gian lưu trú dự kiến",
        "stay-short": "3~5 ngày (Phẫu thuật nhỏ)",
        "stay-medium": "1 tuần (Phẫu thuật thông thường)",
        "stay-long": "Hơn 2 tuần (Phẫu thuật lớn/phức hợp)",
        "translator-label": "Dịch vụ Phiên dịch/Chăm sóc",
        "trans-none": "Không cần (Tự túc được)",
        "trans-basic": "Chỉ phiên dịch tại bệnh viện",
        "trans-full": "Đón sân bay và chăm sóc toàn bộ hành trình",
        "budget-fair-label": "Giá trung bình tại Gangnam (Tiêu chuẩn bản địa)",
        "budget-ripoff-label": "Chi phí chênh lệch (Phí môi giới v.v.)",
        "advice-alert": "🚨 Cảnh báo Chênh lệch Giá",
        "advice-alert-desc": "Dựa trên mô phỏng này, bạn có nguy cơ cao phải trả phí môi giới hoặc giá chênh lệch ẩn lên tới <b>${diff}</b>.",
        "budget-hotel-label": "🏠 Chi phí chỗ ở dự kiến",
        "budget-trans-label": "🗣️ Dịch vụ Phiên dịch/Đồng hành",
        "budget-total-label": "Tổng ngân sách dự kiến",
        "loading-step1": "Đang phân tích giá trung bình tại khu vực Gangnam...",
        "loading-step2": "Đang tính toán giá chênh lệch và các chi phí phát sinh...",
        "loading-step3": "Đang tạo hóa đơn mô phỏng...",
        "val-system-tag": "HỆ THỐNG KIỂM TRA PHÒNG KHÁM THÔNG MINH",
        "val-headline-1": "Giảm thiểu chi phí phát sinh và hiểu lầm",
        "val-headline-2": "Biểu mẫu Báo giá · Tài liệu · Giao tiếp",
        "val-headline-desc": "Chủ động kiểm soát quyết định của bạn bằng các báo giá và câu xác nhận bằng văn bản chi tiết.",
        "mockup1-title": "📱 Bảng điều khiển Hệ thống All-in-One (Phần 1~6)",
        "mockup1-desc": "Truy cập tất cả cơ sở dữ liệu và hướng dẫn chỉ với 1 thao tác mà không rườm rà.",
        "mockup2-title": "🔥 Cơ sở dữ liệu 20 phòng khám uy tín nhất + Phòng khám xác thực bổ sung",
        "mockup2-desc": "Tự kiểm tra giá chuẩn bản địa bằng 1 cú nhấp",
        "mockup3-title": "🗣️ 6 Kịch bản Hội thoại 'Chỉ & Nói (Point-and-Speak)'",
        "mockup3-desc": "Từ điển triệu chứng + Từ vựng K-Beauty + Biểu mẫu tư vấn, chỉ cần đưa màn hình điện thoại.",
        "value-title": "Hệ thống Xác nhận Giá cả, Tài liệu, và Thỏa thuận 'Bằng Văn Bản'",
        "value-list1": "Mẫu yêu cầu báo giá chi tiết bằng văn bản",
        "value-list2": "Kịch bản tư vấn / xác nhận các tùy chọn bổ sung",
        "value-list3": "Cơ sở dữ liệu triệu chứng + Từ điển K-Beauty",
        "value-old-price": "Giá gốc $78.00",
        "value-new-price-desc1": "Thanh toán 1 lần duy nhất",
        "value-new-price-desc2": "✨ Đã bao gồm nâng cấp miễn phí",
        "toc-title": "📦 Nội dung bao gồm trong hệ thống (Mục lục)",
        "toc-1": "Phần 1. Sự thật (Thực trạng ngành & Phòng vệ)",
        "toc-2": "Phần 2. Từ điển Sinh tồn (Thuật ngữ K-Beauty)",
        "toc-3": "Phần 3. Bản thiết kế (Lịch trình 7 ngày)",
        "toc-4": "Phần 4. Top 20 Phòng khám Xác thực (Database xác thực)",
        "toc-5": "Phần 5. Từ điển Triệu chứng Cốt lõi (Database triệu chứng)",
        "toc-6": "Phần 6. Database Cụm từ Sinh tồn (📱 Chỉ & Nói)",
        "cta-main-text": "👇 Nhận quyền truy cập ngay bây giờ",
        "cta-sub-text": "(Truy cập tức thời · Tối ưu cho thiết bị di động · Đã bao gồm Biểu mẫu)",
        "legal-1": "Dịch vụ này không cung cấp các thủ thuật y tế và không đảm bảo kết quả phẫu thuật hoặc tỷ lệ rủi ro 0%.",
        "legal-2": "Chi phí cuối cùng và kế hoạch điều trị phụ thuộc vào đánh giá và chính sách của các phòng khám.",
        "legal-3": "Tuy nhiên, bản nâng cấp sẽ được cung cấp theo các chính sách dịch vụ của chúng tôi.",
        "btn-upsell-fair": "Lấy danh sách Bệnh viện Xác thực để bảo lưu mức giá này - Chỉ $49"
    }
};

let currentLang = 'ko';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (LANGUAGES[lang][key]) {
            el.innerText = LANGUAGES[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-label');
        if (LANGUAGES[lang][key]) {
            el.label = LANGUAGES[lang][key];
        }
    });
    // Update calculator if result is visible
    if (document.getElementById('calc-result').style.display !== 'none') {
        simulateBudget();
    }
}

const PRICE_DATA = {
    // Dermatology
    "ultherapy_300": { local: 950 },
    "thermage_600": { local: 1900 },
    "shurink": { local: 200 },
    "rejuran_2cc": { local: 300 },
    "juvelook": { local: 380 },
    "botox_jaw": { local: 80 },
    "filler": { local: 220 },
    // Plastic Surgery
    "rhinoplasty": { local: 4800 },
    "blepharoplasty": { local: 2000 },
    "facial_contouring": { local: 10000 },
    "liposuction": { local: 4000 },
    "anti_aging_eyelid": { local: 3000 },
    "revision_rhino": { local: 7200 },
    "revision_eye": { local: 3800 },
    "forehead_lift": { local: 4700 },
    "breast_aug": { local: 9500 }
};

function scrollToVIPSection() {
    const vipSection = document.querySelector('.vip-card');
    if (vipSection) {
        vipSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function runSimulatorWithLoading() {
    const resultDiv = document.getElementById('calc-result');
    // Hide previous result
    resultDiv.style.opacity = '0';
    setTimeout(() => { resultDiv.style.display = 'none'; }, 300);

    const btn = document.getElementById('main-calc-btn');
    const loading = document.getElementById('calc-loading');
    const loadingText = document.getElementById('loading-text');

    btn.disabled = true;
    btn.style.opacity = '0.5';
    btn.style.cursor = 'not-allowed';
    loading.style.display = 'block';

    const lang = document.documentElement.lang || 'en';
    const text1 = LANGUAGES[lang]["loading-step1"] || "Analyzing Gangnam local average...";
    const text2 = LANGUAGES[lang]["loading-step2"] || "Calculating foreigner premium & extra costs...";
    const text3 = LANGUAGES[lang]["loading-step3"] || "Generating simulation receipt...";

    loadingText.innerText = text1;
    // Scroll a bit so loading is in view
    loading.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
        loadingText.innerText = text2;
    }, 800);

    setTimeout(() => {
        loadingText.innerText = text3;
    }, 1600);

    setTimeout(() => {
        // End Loading
        loading.style.display = 'none';
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';

        simulateBudget();

        // Fade in result
        resultDiv.style.opacity = '0';
        resultDiv.style.display = 'block';
        setTimeout(() => {
            resultDiv.style.transition = 'opacity 0.8s ease-in-out';
            resultDiv.style.opacity = '1';
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);

    }, 2400);
}

function simulateBudget() {
    const type = document.getElementById('procedure-type').value;
    const hotelTier = document.getElementById('hotel-tier') ? document.getElementById('hotel-tier').value : 'standard';
    const stayDuration = document.getElementById('stay-duration') ? document.getElementById('stay-duration').value : 'medium';
    const transNeed = document.getElementById('translator-need') ? document.getElementById('translator-need').value : 'basic';

    const localFairPrice = PRICE_DATA[type].local;
    const lang = document.documentElement.lang || 'en';

    // Calculate Fake Premium (Rip-off factor) for surgery
    const ripoffMultiplier = 1.65;
    const ripoffPrice = Math.floor(localFairPrice * ripoffMultiplier);
    const diff = ripoffPrice - localFairPrice;

    // Calculate Stay Cost
    let stayDays = stayDuration === 'short' ? 4 : stayDuration === 'medium' ? 7 : 14;
    let hotelPerNight = hotelTier === 'budget' ? 60 : hotelTier === 'standard' ? 120 : 250;
    const hotelCost = stayDays * hotelPerNight;

    // Calculate Translator Cost
    let transCost = 0;
    if (transNeed === 'basic') transCost = stayDays * 50;
    else if (transNeed === 'full') transCost = stayDays * 150 + 100; // includes pickup

    let totalRipoff = ripoffPrice + hotelCost + transCost;

    const resultDiv = document.getElementById('calc-result');
    resultDiv.style.display = 'block';

    // Build the "Receipt" HTML
    const l_fair = LANGUAGES[lang]["budget-fair-label"] || LANGUAGES["en"]["budget-fair-label"];
    const l_ripoff = LANGUAGES[lang]["budget-ripoff-label"] || LANGUAGES["en"]["budget-ripoff-label"];
    const l_hotel = LANGUAGES[lang]["budget-hotel-label"] || LANGUAGES["en"]["budget-hotel-label"];
    const l_trans = LANGUAGES[lang]["budget-trans-label"] || LANGUAGES["en"]["budget-trans-label"];
    const l_total = LANGUAGES[lang]["budget-total-label"] || "Total Estimated Budget";

    let l_alert = LANGUAGES[lang]["advice-alert"] || LANGUAGES["en"]["advice-alert"];
    let l_alert_desc = LANGUAGES[lang]["advice-alert-desc"] || LANGUAGES["en"]["advice-alert-desc"];
    l_alert_desc = l_alert_desc.replace('{diff}', diff.toLocaleString());

    let btn_text = LANGUAGES[lang]["btn-upsell"] || LANGUAGES["en"]["btn-upsell"];
    btn_text = btn_text.replace('{diff}', diff.toLocaleString());

    const receiptHtml = `
        <div class="receipt-box" style="margin-top: 1.5rem; background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: left;">
            <div style="font-size: 0.85rem; color: #777; margin-bottom: 12px; border-bottom: 2px solid #eee; padding-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Estimated Breakdown</div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-weight: 500; color: #555;">🩺 ${l_fair}:</span>
                <span style="font-weight: 700; color: #333;">$${localFairPrice.toLocaleString()}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-weight: 500; color: #555;">${l_hotel}:</span>
                <span style="font-weight: 700; color: #333;">$${hotelCost.toLocaleString()}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-weight: 500; color: #555;">${l_trans}:</span>
                <span style="font-weight: 700; color: #333;">$${transCost.toLocaleString()}</span>
            </div>

            <div style="display: flex; justify-content: space-between; margin-bottom: 15px; margin-top: 12px; color: #d93025; border-bottom: 1px dashed #ccc; padding-bottom: 12px;">
                <span style="font-weight: 500;">🚨 + ${l_ripoff}:</span>
                <span style="font-weight: 700;">$${diff.toLocaleString()}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 1.3rem;">
                <span style="font-weight: 800; color: #238636;">${l_total}:</span>
                <span style="font-weight: 800; color: #238636;">$${totalRipoff.toLocaleString()}</span>
            </div>
            
            <div class="advice-box advice-red" style="margin-top: 20px;">
                <div style="margin-bottom: 10px;"><b>${l_alert}</b></div>
                <div style="font-size: 0.95rem;">${l_alert_desc}</div>
            </div>
            <div id="calc-cta-wrapper" style="margin-top: 20px;">
                <button class="cta-button" onclick="scrollToVIPSection()" style="width: 100%; padding: 15px; font-size: 1.1rem; background: #d93025; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; animation: pulse 2s infinite;">
                    ${btn_text}
                </button>
            </div>
        </div>
    `;

    resultDiv.innerHTML = receiptHtml;
}

// 이메일 정규식 검사 및 페이팔 버튼 활성화 로직
function validateEmailForPaypal() {
    const emailInput = document.getElementById('buyer-email').value;
    const paypalWrapper = document.getElementById('paypal-button-wrapper');
    const overlayMsg = document.getElementById('paypal-overlay-msg');

    // 이메일 형태가 제대로 갖춰졌는지 간단히 정규식(Regex) 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        paypalWrapper.style.opacity = '1';
        paypalWrapper.style.pointerEvents = 'auto';
        overlayMsg.style.display = 'none';

        // Save the valid email temporarily in sessionStorage so it survives checkout flow
        sessionStorage.setItem('kmedi_buyer_email', emailInput);
    } else {
        paypalWrapper.style.opacity = '0.4';
        paypalWrapper.style.pointerEvents = 'none';
        overlayMsg.style.display = 'block';
    }
}

window.onload = () => {
    setLanguage('ko');
};

if (window.paypal) {
    paypal.Buttons({
        style: { layout: 'horizontal', color: 'blue', shape: 'rect', label: 'pay' },
        createOrder: function (data, actions) {
            // Hardcode the single-tier price to $49.00
            const price = '49.00';
            return actions.order.create({ purchase_units: [{ amount: { value: price } }] });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                // Collect basic payer info from PayPal
                const payerName = details.payer.name.given_name;
                const paypalEmail = details.payer.email_address;
                const transactionId = details.id;

                // Get the email user manually inputted in our form
                const userProvidedEmail = sessionStorage.getItem('kmedi_buyer_email') || paypalEmail;

                console.log(`Payment confirmed for ${payerName}. Transaction ID: ${transactionId}`);

                // 🚀 MAKE.COM WEBHOOK INTEGRATION
                // Make.com 자동화 웹훅 연결
                const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/h2behycd4w29db7duvui1tycfkit3pi2";

                // 결제 성공 시 비동기로 Make.com에 고객 정보를 전송 (이메일 발송용)
                fetch(MAKE_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: payerName,
                        email: userProvidedEmail, // Send the user's manual input email primary
                        paypalEmailBackup: paypalEmail, // Keep PayPal account email just in case
                        transactionId: transactionId,
                        product: 'K-Beauty Black Book System',
                        amount: '49.00'
                    })
                }).then(response => {
                    console.log("Make.com Webhook 🚀: Successfully dispatched!");
                }).catch(error => {
                    console.error("Make.com Webhook ⚠️: Dispatch failed", error);
                });

                // Update the Modal UI for the Notion System delivery
                const modal = document.getElementById('payment-success-modal');
                const title = document.getElementById('modal-title');
                const desc = document.getElementById('modal-desc');
                const linksContainer = document.getElementById('download-links-container');
                linksContainer.innerHTML = ''; // Clear old buttons

                // Update text to match the new "View-Only Link" strategy
                title.innerText = "🎉 결제 성공! 시스템 접속이 허가되었습니다.";
                desc.innerHTML = `
                    <div style="background: rgba(255,0,0,0.1); border: 1px solid #ff6b6b; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: left;">
                        <h4 style="color: #ff6b6b; margin-top: 0; margin-bottom: 10px;">⚠️ 필독: 브라우저 창을 닫기 전 URL을 저장하세요!</h4>
                        <ul style="color: #ddd; font-size: 0.9rem; margin: 0; padding-left: 20px; line-height: 1.5;">
                            <li>아래 링크는 구매자 본인 전용 <b>'읽기 전용(View Only)' 원본 링크</b>입니다. (불법 유포 적발 시 IP 차단)</li>
                            <li>링크를 클릭하면 Notion 앱(또는 브라우저)이 열립니다. <b>반드시 즐겨찾기(북마크)에 등록</b>하거나 텍스트로 주소를 복사해 두세요!</li>
                            <li style="color:#ffcc00; margin-top: 5px;">현재 접속 권한이 완전히 발급되었으므로, **디지털 상품 약관에 따라 100% 환불 불가** 상태가 되었습니다.</li>
                        </ul>
                    </div>
                `;

                // The prominent CTA button
                // 버튼 생성 (실제 사용자가 제공한 활성화된 링크로 교체 완료)
                const createAccessBtn = (text, href) => {
                    return `<a href="${href}" target="_blank" style="display: inline-block; width: 100%; background: linear-gradient(135deg, var(--accent) 0%, #1a6b28 100%); color: white; padding: 18px 20px; text-decoration: none; border-radius: 8px; font-weight: 900; font-size: 1.2rem; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 5px 15px rgba(35, 134, 54, 0.4);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">🚀 ${text}</a>`;
                };

                // The actual Notion public View-Only link provided by the user
                const notionSystemLink = "https://modern-cosmos-91c.notion.site/The-K-Beauty-Black-Book-313d5bbcf6ab8012a5d4f510ebcac7b3";

                linksContainer.innerHTML = createAccessBtn("K-Beauty 시스템 접속하기 (1년 무제한)", notionSystemLink);

                // Add a small backup copy-to-clipboard button
                const copyBtnHtml = `
                    <button onclick="navigator.clipboard.writeText('${notionSystemLink}'); alert('링크가 복사되었습니다. 주소창에 붙여넣기 하세요!');" style="margin-top: 15px; background: transparent; border: 1px solid #555; color: #aaa; padding: 10px; border-radius: 6px; cursor: pointer; width: 100%; font-size: 0.9rem;">
                        📋 혹시 대비해 접속 링크 클립보드에 복사해두기
                    </button>
                `;
                linksContainer.innerHTML += copyBtnHtml;

                // Configure the close button
                const closeBtn = document.getElementById('close-modal-btn');
                closeBtn.innerText = "창 닫기";
                closeBtn.onclick = () => {
                    modal.style.display = 'none';
                };

                // Show the modal to the user immediately
                modal.style.display = 'flex';
            });
        },
        onError: function (err) {
            console.error("PayPal Checkout Error:", err);
            alert("결제 처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
    }).render('#paypal-button-container');
}
