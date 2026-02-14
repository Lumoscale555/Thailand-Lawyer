import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "th" | "zh" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = "en";

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
});

// ===============================
// ENGLISH TRANSLATIONS
// ===============================
export const translations = {
  en: {
    // ===============================
    // NAVIGATION
    // ===============================

    "contact.success.desc":
      "Your message has been sent successfully. We'll get back to you soon!",
    "contact.success.title": "Success!",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Our Services",
    "nav.contact": "Contact",
    "nav.mission": "Our Mission",
    "nav.getInTouch": "Get in Touch",
    "nav.title": "Bamroong Law Office",
    "whatsapp.Chat": "Chat With Us!",
    // ===============================
    // HERO SECTION
    // ===============================

    "header.address":
      "3/1 Soi Ban Riang 7, Ban Riang Road, Village No. 3, Thep Krasattri Subdistrict, Thalang District, Phuket Province",
    "header.phone": "094-806-9123",
    "header.consultation": "Free consultation",
    "header.available": "Open 24/7",
    "header.email": "bamroonglaw@gmail.com",
    "header.line": "@bamroonglaw",

    "hero.title": "Attorney Bamrung Rungruang",
    "hero.cta": "Our Services",
    "hero.button": "Start",
    "hero.description1": "On days when you don't know who to turn to...",
    "hero.description2":
      "He's someone who listens without judgment and stands here to support you with justice.",
    // ===============================
    // FEATURES SECTION
    // ===============================
    "features.service": "Highly personalized service",
    "features.record": "Proven track record",
    "features.rated": "Top-rated lawyers",
    // ===============================
    // ABOUT US PAGE
    // ===============================
    "about.description":
      "Once in my life, I stood in a position where I had to fight, with no one understanding, no one helping, and feeling like no one was listening. That was the day I decided... if one day I had enough knowledge, I would stand with those who needed justice. I graduated with a law degree and have handled both small and large cases, cases that shook my heart, and cases that made me believe again that justice still exists. Every case for me is not just work, but someone's life, and I will never forget it. That's how this law firm was born... not for power, not for fame, but to truly help those in need. If you need someone who not only knows the law but also understands your heart, I'm ready to stand here and listen to your problems with all my heart and empathy. Like family",
    "about.button": "Learn More",
    "about.value1.title": "Integrity",
    "about.value1.description":
      "We adhere to the highest ethical standards in all our legal practices.",
    "about.value2.title": "Excellence",
    "about.value2.description":
      "Providing superior legal services with precision and expertise.",
    "about.value3.title": "Reliability",
    "about.value3.description":
      "We are available when you need us most, with prompt responses.",
    "about.button.explore": "Explore More",
    "about.title": "About Our Office",
    "about.breadcrumb.home": "Home",
    "about.breadcrumb.current": "About Us",
    "about.introduction":
      "On days when you don't know who to turn to... We are people who listen without judgment and are here to help you with justice.",
    "about.coreValues.heading": "Core Values",
    "about.coreValues.intro":
      "The principles that guide every decision, every case, and every client experience.",
    "about.coreValues.value1.title": "Integrity",
    "about.coreValues.value1.description":
      "We adhere to the highest ethical standards in all our legal practices.",
    "about.coreValues.value2.title": "Excellence",
    "about.coreValues.value2.description":
      "Provide exceptional legal service with precision and expertise.",
    "about.coreValues.value3.title": "Compassion",
    "about.coreValues.value3.description":
      "Treat every case with genuine compassion and care.",
    "about.coreValues.value4.title": "Results",
    "about.coreValues.value4.description":
      "Achieve results that protect customer interests.",

    // aboutAchievements
    "aboutus.subtitle":
      "Two decades of relentless commitment to justice, excellence, and client success",
    "aboutus.storyTitle": "Our Justice Story",
    "aboutus.story1":
      "Once in my life, I stood in a position where no one understood, no one helped, and no one felt like they were being listened to. That was the day I decided... if one day I had enough knowledge, I would stand with those who needed justice. I graduated with a law degree and have been through both small and large cases, cases that shook my heart, and cases that made me believe again that justice still exists. For me, every case is not just work, but someone's life, and I will never forget it.",
    "aboutus.story2":
      "This law firm was born... not for power, not for fame, but to truly help those in need. If you need someone who not only knows the law but also understands your heart, I'm ready to stand here and listen to your problems with all my heart and empathy. Like family and friends",
    "aboutus.story3": "Thank you for trusting me",
    "aboutus.story4": "Suffering, Problems, Consultation",
    "aboutus.story5": "Attorney Bamrung Rungruang",

    "aboutus.ctaButton": "Schedule a Consultation",

    "aboutus.achievement1": "Year of Excellence",
    "aboutus.achievement2": "Successful Cases",
    "aboutus.achievement3": "Success Rate",
    "aboutus.achievement4": "Supported Languages",

    "aboutus.values.title": "Our Core Values",
    "aboutus.values.subtitle":
      "Two Decades of Unwavering Commitment to Fairness, Excellence, and Client Success",
    "aboutus.value1.title": "Integrity",
    "aboutus.value1.description":
      "Adherence to the Highest Ethical Standards in All Our Legal Practices",

    "aboutus.value2.title": "Excellence",
    "aboutus.value2.description":
      "Delivering exceptional legal services with precision and expertise",

    "aboutus.value3.title": "Compassion",
    "aboutus.value3.description":
      "Handling every case with genuine compassion and care",

    "aboutus.value4.title": "Results",
    "aboutus.value4.description":
      "Achieving results that protect our clients' interests",

    // CTA
    "aboutus.ctaTitle": "Ready to work with us?",

    "aboutus.ctaDesc":
      "Let our experienced team guide you through your legal challenges with expertise and dedication",

    "aboutus.ctaBtn1": "Get a free consultation",

    "aboutus.ctaBtn2": "See our services",
    // aboutValues

    // Call to action
    "cta.title": "Need Legal Assistance?",
    "cta.description":
      "Contact us today for a free consultation with one of our experienced attorneys.",
    "cta.button": "Contact Us Now",
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    // Office strengths
    "strengths.title": "Office Strengths",
    "strengths.description":
      "Our law office was established to assist those who face legal challenges by providing comprehensive legal services. We are committed to ensuring equal access to justice for all clients needing legal assistance.",
    // --------------------------------------------------------------------------------------------------------------------

    // --------------------------------------------------------------------------------------------------------------------

    // YouTube section
    "youtube.title": "Recent Videos",
    "youtube.subscribers": "Subscribers",
    "youtube.videos": "Videos",
    "youtube.views": "Views",
    // --------------------------------------------------------------------------------------------------------------------

    //ABOUT US PAGE

    "aboutus.title.one": "ABOUT ",
    "aboutus.title.two": "Our Firm",

    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //SERVICES PAGE

    "services.1.title": "Civil Cases",
    "services.1.subtitle": "Complete Legal Representation",
    "services.1.description":
      "Expert legal representation for all types of civil cases. Our experienced attorneys handle court proceedings with dedication and expertise, ensuring your rights are protected throughout the legal process.",
    "services.1.fullDescription":
      "We provide comprehensive legal representation in both civil matters, handling everything from initial consultation to final verdict. Our team has extensive experience in criminal defense, personal injury, contract disputes, and family law. We ensure that every client receives personalized attention and aggressive representation in court.",
    "services.1.features": [
      "Damage compensation lawsuits",
      "Breach of contract",
      "Inheritance and estate division",
      "Land disputes, servitudes, rights of possession",
      "Eviction and demolition cases",
      "Tort cases (e.g., car accidents, property damage)",
    ],

    "services.2.title": "Criminal Cases",
    "services.2.subtitle": "Offenses under Criminal Law",
    "services.2.description":
      "Comprehensive legal representation for clients involved in criminal offenses, ranging from theft and assault to serious crimes like homicide and sexual offenses.",
    "services.2.fullDescription":
      "Our criminal law team provides expert legal defense and prosecution services for a wide range of criminal cases. We handle everything from minor offenses to serious criminal matters including fraud, drug-related crimes, violent offenses, and more. We ensure that your rights are protected throughout the legal process and offer strategic guidance every step of the way.",
    "services.2.features": [
      "Theft, embezzlement, fraud",
      "Drug offenses",
      "Assault, homicide",
      "Defamation",
      "Child abduction, sexual assault",
      "Document forgery",
    ],

    "services.3.title": "Labor Disputes",
    "services.3.subtitle": "Employer-Employee Legal Issues",
    "services.3.description":
      "Legal support for resolving workplace conflicts, including unfair dismissals, compensation disputes, and violations of labor rights.",
    "services.3.fullDescription":
      "We specialize in handling labor disputes between employers and employees, offering expert legal assistance in cases such as unfair dismissal, wage or benefit claims, breach of employment contracts, and disputes over labor rights. Our goal is to protect your rights and resolve conflicts efficiently through negotiation or litigation.",
    "services.3.features": [
      "Unfair dismissal",
      "Compensation claims",
      "Breach of employment contract",
      "Welfare and labor rights disputes",
    ],

    "services.4.title": "Family & Juvenile  Law ",
    "services.4.subtitle": "Domestic and Family-Related Issues",
    "services.4.description":
      "Legal guidance and representation in family-related matters including divorce, child custody, support claims, and marital property disputes.",
    "services.4.fullDescription":
      "We provide compassionate and strategic legal services for individuals dealing with family law matters. Our team handles a wide range of domestic issues such as divorce proceedings, child custody and support claims, marital property division, and child legitimation. We aim to resolve disputes with sensitivity while protecting your legal rights and interests.",
    "services.4.features": [
      "Divorce",
      "Child support claims",
      "Custody disputes",
      "Marital property division",
      "Child legitimation",
    ],

    "services.5.title": "Inheritance Cases",
    "services.5.subtitle": "Property & Estate Matters",
    "services.5.description":
      "Legal services involving the estate of deceased persons, including administration, division, objections, and will-related disputes.",
    "services.5.fullDescription":
      "We offer expert legal representation in inheritance matters involving estate administration, property division, and disputes over wills. Whether it's appointing estate administrators, contesting estate management, or handling allegations of will forgery, our legal team ensures your rights are upheld throughout the process.",
    "services.5.features": [
      "Appointing estate administrators",
      "Estate division",
      "Objections to estate management",
      "Will forgery cases",
    ],

    "services.6.title": "Consumer, Business & Commercial Disputes",
    "services.6.subtitle": "Trade, Payment & Service Conflicts",
    "services.6.description":
      "Legal services for resolving disputes involving faulty goods, trade conflicts, defaulted payments, and bounced cheques in both consumer and business contexts.",
    "services.6.fullDescription":
      "Our team provides legal support in consumer protection and business-related disputes. We handle lawsuits against companies for defective goods or poor services, trade disputes, unpaid debts, and financial instrument issues such as bounced cheques. Our goal is to resolve these matters efficiently while protecting our clients' commercial and personal interests.",
    "services.6.features": [
      "Lawsuits against companies for faulty goods/services",
      "Trade disputes",
      "Defaulted payments",
      "Bounced cheque cases",
    ],
    "services.7.title": "Administrative Law",
    "services.7.subtitle": "Disputes with Government Agencies",
    "services.7.description":
      "Legal services for filing lawsuits against government bodies and challenging administrative decisions such as land expropriation.",
    "services.7.fullDescription":
      "We represent individuals and businesses in administrative law cases involving disputes with government agencies. This includes filing lawsuits against public bodies, challenging administrative orders, and protecting rights in cases such as land expropriation or regulatory overreach. Our firm ensures that all proceedings are handled with precision and in accordance with the law.",
    "services.7.features": [
      "Lawsuits against government agencies",
      "Challenging administrative orders (e.g., land expropriation)",
    ],
    "services.8.title": "Bankruptcy & Business Rehabilitation",
    "services.8.subtitle": "Insolvency, Debt Relief & Corporate Recovery",
    "services.8.description":
      "Legal services for individuals and businesses facing bankruptcy, including debt restructuring and rehabilitation planning.",
    "services.8.fullDescription":
      "We assist clients through bankruptcy proceedings and business rehabilitation processes. Our services include filing for bankruptcy, negotiating debt restructuring plans, and representing clients in rehabilitation cases. We aim to provide sustainable financial recovery strategies while ensuring compliance with legal obligations.",
    "services.8.features": [
      "Filing for bankruptcy",
      "Debt restructuring and rehabilitation negotiation",
    ],
    // Services details

    "services.title.one": "Our services",
    "services.title.two": "",
    "services.subtitle":
      "Our office provides comprehensive legal consulting services covering all areas of law, including civil, criminal, labor, family, inheritance, criminal cases involving corruption and misconduct by government officials, bankruptcy, tax, intellectual property, and juvenile and family court cases. We accept cases nationwide. We are ready to assist you from the initial stage of a case to its final conclusion. In addition, We also provide in-house legal counsel to companies, businesses, and legal entities to support their operations in a stable and legally compliant manner. No matter what legal issue you face, we are ready to provide advice with the understanding and expertise gained from over 30 years of legal experience. We stand by you firmly with our knowledge, integrity, and the heart of a defender of justice, ensuring that you never face legal challenges alone",
    "services.civil": "Accepting civil and criminal cases",
    "services.civil.description":
      "We are lawyers who accept all types of cases and represent litigants in court proceedings, both civil and criminal.",
    "services.enforcement": "Accepting enforcement work",
    "services.enforcement.description":
      "Asset seizure services, seizure, attachment or suspension, additional market, and other bankruptcy cases.",
    "services.contracts": "Accepting legal contract reviews",
    "services.contracts.description":
      "Contract review and drafting services, providing advice on various contracts and wills.",
    "services.consultation":
      "Accepting legal consultation and advisory services.",
    "services.consultation.description":
      "Providing consultation, advice, opinions, and problem-solving services. Providing legal counsel for private companies",
    "services.appeals": "Appeals/Appeals",
    "services.appeals.description":
      "Fraud, defamation, private criminal cases, including land criminal cases",
    "services.negotiation": "Debt negotiation/debt collection",
    "services.negotiation.description":
      "Debt negotiation, debt resolution, tracking, and expediting of overdue debts",

    "services.areas": "Specialized Legal Areas",
    "services.cta.title": "Need expert legal assistance?",
    "services.cta.desc":
      "Our experienced legal team is happy to provide professional advice and expert guidance tailored to your specific needs. Contact us today for a comprehensive legal strategy.",
    "services.cta.btn": "Schedule a Free Consultation",
    "services.feature": "Key Features",
    "services.btn1": "Get a Free Consultation",
    "services.btn2": "Back to Services",

    "profile.section": "About Me",
    "profile.name": "Bamrung Rungruang",
    "profile.title": "Lawyer, Lawyer Council of Thailand",
    "profile.position": "Position",
    "profile.experience":
      "Over 30 years of legal and litigation experience. Position: Lawyer, Lawyer Council of Thailand. Consulting - Volunteer Lawyer",
    "profile.consulting": "Consulting - Volunteer Lawyer",
    "profile.education": "Education",
    "profile.education.bachelor": "Bachelor's Degree",
    "profile.education.bachelor.detail":
      "Bachelor of Laws, Sukhothai Thammathirat Open University",
    "profile.education.master": "Master's Degree",
    "profile.education.master.detail":
      "Political Science, Major: Political Communication Krirk University",

    "profile.education.phd": "Doctorate Degree",

    "profile.education.phd.detail":
      "Honorary Doctorate in Political Science, LADC",

    "services.heading": "Our Services",

    "services.button.explore": "Explore More",

    // Mission & Vision
    "mission.title": "Our Mission and Vision",
    "mission.missionHeading": "Vision",
    "mission.missionText":
      "Because justice…shouldn't be reserved for a select few. We make the law truly trustworthy. We're in this profession because we want to stand with the voiceless.",
    "mission.missionSubText":
      "Our strengths are understanding, honesty, and affordable.",

    "mission.visionHeading": "Our Vision",
    "mission.visionText":
      "The Khun Bamrung Rungruang Law Firm was founded with the sincere desire to see the law as accessible, not a barrier separating ordinary people from justice. We believe everyone should have the right to be protected, regardless of their voice. We listen with all our hearts, not just to find legal advice, but to understand. Our prices are friendly because we understand that suffering doesn't discriminate. We offer free initial consultations to help you find a solution before making a decision. We treat every case as our own, believing that true justice begins with a heart that understands the suffering of others.",
    "mission.button": "Explore More",

    // Get an Expert
    "getExpert.title": "Seek legal advice from a legal expert.",
    "getExpert.description":
      "Are you planning to start a business abroad and are facing difficulties with local laws? Do you want to avoid risks and obstacles? We understand this situation very well.",
    "getExpert.button.contact": "Contact us now.",
    "getExpert.stats.years": "Years of business",
    "getExpert.stats.works": "Achievements",
    "getExpert.stats.customers": "Valuable customers",
    "getExpert.stats.team": "Team members",

    // Mission & Vision (EN)
    "missionVision.title": "Our Mission and Vision",
    "missionVision.missionHeading": "Our Mission",
    "missionVision.missionText":
      "Because justice shouldn't be reserved for the few.",
    "missionVision.missionSubText": "We make the law truly trustworthy.",
    "missionVision.visionHeading": "Our Vision",
    "missionVision.visionText":
      "We do this work because we want to stand with the voiceless in society.",
    "missionVision.button": "Explore more",
    "missionVision.strengthsHeading": "Our Strengths",
    "missionVision.strength1.title": "True Understanding",
    "missionVision.strength1.description":
      "We listen with our hearts, not just to find legal solutions. But to truly understand",
    "missionVision.strength2.title": "Honesty and sincerity",
    "missionVision.strength2.description":
      "We believe that everyone deserves protection, whether they have a voice in society or not.",
    "missionVision.strength3.title": "Affordable",
    "missionVision.strength3.description":
      "We charge a fair fee because hardship doesn't discriminate.",
    "missionVision.foundation":
      "Bamrung Rung Ruang Law Firm was founded with a sincere mission:",
    "missionVision.foundationGoal":
      "To make the law accessible, not an obstacle, especially for ordinary people.",
    "missionVision.value1.title": "Equal protection",
    "missionVision.value1.description":
      "We believe that everyone deserves protection, whether they have a voice in society or not.",
    "missionVision.value2.title": "Service with compassion",
    "missionVision.value2.description":
      "We listen with our hearts. Not just to find legal solutions, but to truly understand.",
    "missionVision.value3.title": "Affordable Prices",
    "missionVision.value3.description":
      "We charge a fair fee because hardship doesn't discriminate.",
    "missionVision.value4.title": "Free Initial Consultation",
    "missionVision.value4.description":
      "We offer a free initial consultation to help you explore your options before making a decision.",
    "missionVision.finalStatement":
      "We treat every case we accept as our own, because true justice begins with understanding the pain of others.",

    // Contact Page (EN)
    "contact.title": "Contact our legal team",
    "contact.description":
      "Get expert legal advice. Submit your questions now. Our lawyers will respond promptly.",
    "contact.form.nameLabel": "Your Name",
    "contact.form.namePlaceholder": "Enter your full name",
    "contact.form.emailLabel": "Email",
    "contact.form.emailPlaceholder": "Your.email@example.com",
    "contact.form.phoneLabel": "Phone Number",
    "contact.form.phonePlaceholder": " xxxxxxxxx",
    "contact.form.lineLabel": "LINE ID",
    "contact.form.linePlaceholder": "Your LINE ID",
    "contact.form.subjectLabel": "Subject",
    "contact.form.subjectPlaceholder": "Briefly describe the legal issue",
    "contact.form.messageLabel": "Message *",
    "contact.form.messagePlaceholder":
      "Please describe your legal issue or question in detail...",
    "contact.button.send": "Send a message",
    "contact.button.sending": "Sending a message...",
    "contact.info.heading": "Contact Us",
    "contact.info.addressLabel": "Office Address",
    "contact.info.phoneLabel": "Phone",
    "contact.info.emailLabel": "Email",
    "contact.info.hoursLabel": "Business Hours",
    "contact.info.consultationHeading": "Free Consultation",
    "contact.info.consultationText":
      "We offer a free initial consultation. To help you understand your legal options before making any decisions.",
    "contact.info.consultationNote":
      "No obligation • Confidential • Professional advice.",
    // Contact Page (TH)
    "contact.info.addressValue":
      "Bamroong Rungruang Law Office, 113/1 Soi Ban Riang 7, Ban Riang Road, Village No. 3, Thep Krasattri Subdistrict, Thalang District, Phuket Province 83110",
    "contact.info.phoneValue": " 076-600861",
    "contact.info.emailValue": "info@bamroonglaw.com",
    "contact.info.hoursValue":
      "Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 1:00 PM, Sunday: Closed",
    // Contact Page (TH)
    "contact.info.lineLabel": "LINE ID",
    "contact.info.lineValue": "@bamroonglaw",

    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.address": "123 Silom Road, Bangkok 10500",
    "footer.phone": "082-2184079",
    "footer.email": "sugar.kantera@gmail.com",
    "footer.line": "kantera22phuket",
    "footer.copyright": "Copyright 2025 © www.bamroonglaw.com",
    // Footer (custom keys for Thai section in Footer component)
    "footer.contactCase": "Contact Legal Matters",
    "footer.freeConsultation": "Free Initial Consultation",
    "footer.assistantName": "Kanthera Tenglee (Namtan)",
    "footer.assistantTitle": "Legal Assistant",
    "footer.lawyerName": "Attorney Bamrung Rungruang",
  },

  // ===============================
  // THAI TRANSLATIONS
  // ===============================
  th: {
    // ===============================
    // NAVIGATION
    // ===============================
    "contact.success.desc":
      "ข้อความของคุณถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด!",
    "contact.success.title": "ความสำเร็จ!",
    "nav.home": "หน้าแรก",
    "nav.about": "เกี่ยวกับเรา",
    "nav.services": "บริการของเรา",
    "nav.team": "ทีมงานทนายความ",
    "nav.contact": "ติดต่อเรา",
    "nav.news": "ช่องข่าวสาร",
    "nav.vis": "วิสัยทัศน์",
    "nav.mission": "เรื่องราวของเรา",
    "nav.getInTouch": "รับอินทัช",
    "nav.title": "บำรุง รุ่งเรือง",

    "whatsapp.Chat": "พูดคุยกับเรา!",
    // ===============================
    // HEADER
    // ===============================
    "header.address":
      "3/1 ซอยบ้านเหรียง 7 ถนนบ้านเหรียง หมู่ 3 ตำบลเทพกระษัตรี อำเภอถลาง จังหวัดภูเก็ต",
    "header.phone": "094-806-9123",
    "header.consultation": "ปรึกษาฟรี",
    "header.available": "เปิดให้บริการ 24/7",
    "header.email": "bamroonglaw@gmail.com",
    "header.line": "@bamroonglaw",

    // ===============================
    // HERO SECTION
    // ===============================
    "hero.title": "ทนาย บำรุง รุ่งเรือง",
    "hero.cta": "บริการของเรา",
    "hero.button": "เริ่มต้น",
    "hero.description1": "ในวันที่คุณไม่รู้จะหันหน้าไปหาใคร…..",
    "hero.description2":
      "คือคนที่ฟังด้วยใจไม่ตัดสินและยืนอยู่ตรงนี้เพื่อช่วยเหลือคุณด้วยความยุติธรรม",

    // ===============================
    // FEATURES SECTION
    // ===============================
    "features.service": "บริการที่เป็นส่วนตัวสูง",
    "features.record": "ประวัติความสำเร็จที่พิสูจน์แล้ว",
    "features.rated": "ทนายความที่ได้รับการจัดอันดับสูงสุด",

    // ===============================
    // ABOUT US PAGE
    // ===============================
    "about.description":
      "ครั้งหนึ่งในชีวิต ผมเคยยืนอยู่ตรงจุดที่ต้องต่อสู้โดยไม่มีใครเข้าใจ ไม่มีใครช่วย และรู้สึกเหมือนไม่มีใครฟัง นั่นคือวันที่ผมตัดสินใจว่า…ถ้ามีวันหนึ่งที่ผมมีความรู้พอ ผมจะยืนเคียงข้างคนที่ต้องการความเป็นธรรม   ผมจบการศึกษาด้านนิติศาสตร์จาก ผ่านคดีเล็ก คดีใหญ่ คดีที่สั่นสะเทือนหัวใจ และคดีที่ทำให้ผมเชื่ออีกครั้งว่า ความยุติธรรมยังมีอยู่ ทุกคดีสำหรับผมไม่ใช่แค่ งาน  แต่มันคือ ชีวิตของใครบางคน และผมไม่มีวันลืม สำนักงานกฎหมายนี้จึงถือกำเนิดขึ้น…ไม่ใช่เพื่ออำนาจ ไม่ใช่เพื่อชื่อเสียง แต่เพื่อช่วย คนที่เดือดร้อน..อย่างแท้จริง หากคุณต้องการใครสักคนที่ไม่เพียงแค่รู้กฎหมายแต่ เข้าใจหัวใจคุณ ผมพร้อมยืนอยู่ตรงนีรับฟังปัญหาของคุณด้วยใจและเอาใจใส่ ดุจญาติมิตร",
    "about.button": "Learn More",
    "about.value1.title": "ความซื่อสัตย์",
    "about.value1.description":
      "ยึดมั่นในมาตรฐานจริยธรรมสูงสุดในแนวทางปฏิบัติทางกฎหมายทั้งหมดของเรา",
    "about.value2.title": "ความเป็นเลิศ",
    "about.value2.description":
      "การให้บริการทางกฎหมายที่เหนือระดับด้วยความแม่นยำและความเชี่ยวชาญ",
    "about.value3.title": "ความน่าเชื่อถือ",
    "about.value3.description":
      "พร้อมให้บริการเสมอเมื่อคุณต้องการเรามากที่สุด พร้อมตอบกลับอย่างทันท่วงที",
    "about.button.explore": "สำรวจเพิ่มเติม",
    "about.title": "เกี่ยวกับสำนักงานของเรา",
    "about.breadcrumb.home": "หน้าแรก",
    "about.breadcrumb.current": "เกี่ยวกับเรา",
    "about.introduction":
      "ในวันที่คุณไม่รู้จะหันหน้าไปหาใคร... เราคือคนที่ฟังด้วยใจไม่ตัดสินและยืนอยู่ตรงนี้เพื่อช่วยเหลือคุณด้วยความยุติธรรม",
    "about.coreValues.heading": "ค่านิยมหลัก",
    "about.coreValues.intro":
      "หลักการที่เป็นแนวทางในการตัดสินใจทุกครั้ง ทุกคดี และทุกการดูแลลูกค้า",
    "about.coreValues.value1.title": "ความซื่อสัตย์",
    "about.coreValues.value1.description":
      "ยึดมั่นในมาตรฐานจริยธรรมสูงสุดในทุกการปฏิบัติงานทางกฎหมายของเรา",
    "about.coreValues.value2.title": "ความเป็นเลิศ",
    "about.coreValues.value2.description":
      "ให้บริการทางกฎหมายที่ยอดเยี่ยมด้วยความแม่นยำและความเชี่ยวชาญ",
    "about.coreValues.value3.title": "ความเห็นอกเห็นใจ",
    "about.coreValues.value3.description":
      "ดูแลทุกคดีด้วยความเห็นอกเห็นใจและเอาใจใส่อย่างแท้จริง",
    "about.coreValues.value4.title": "ผลลัพธ์",
    "about.coreValues.value4.description":
      "บรรลุผลลัพธ์ที่ปกป้องผลประโยชน์ของลูกค้า",

    "aboutus.subtitle":
      "สองทศวรรษแห่งความมุ่งมั่นอย่างไม่ลดละเพื่อความยุติธรรม ความเป็นเลิศ และความสำเร็จของลูกค้า",
    "aboutus.storyTitle": "เรื่องราวความยุติธรรมของเรา",
    "aboutus.story1":
      "ครั้งหนึ่งในชีวิต ผมเคยยืนอยู่ตรงจุดที่ต้องต่อสู้โดยไม่มีใครเข้าใจ ไม่มีใครช่วย และรู้สึกเหมือนไม่มีใครฟัง นั่นคือวันที่ผมตัดสินใจว่า…ถ้ามีวันหนึ่งที่ผมมีความรู้พอ ผมจะยืนเคียงข้างคนที่ต้องการความเป็นธรรม   ผมจบการศึกษาด้านนิติศาสตร์ ผ่านคดีเล็ก คดีใหญ่ คดีที่สั่นสะเทือนหัวใจ และคดีที่ทำให้ผมเชื่ออีกครั้งว่า  ความยุติธรรมยังมีอยู่ ทุกคดีสำหรับผมไม่ใช่แค่ งาน แต่มันคือ  ชีวิตของใครบางคน  และผมไม่มีวันลืม",
    "aboutus.story2":
      "สำนักงานกฎหมายนี้จึงถือกำเนิดขึ้น…ไม่ใช่เพื่ออำนาจ ไม่ใช่เพื่อชื่อเสียง แต่เพื่อช่วย คนที่เดือดร้อน..อย่างแท้จริง หากคุณต้องการใครสักคนที่ไม่เพียงแค่รู้กฎหมายแต่ เข้าใจหัวใจคุณ ผมพร้อมยืนอยู่ตรงนี้รับฟังปัญหาของคุณด้วยใจและเอาใจใส่ ดุจญาติมิตร",
    "aboutus.story3": "ขอบคุณที่ไว้วางใจผม ",
    "aboutus.story4": "ทุกข์ ปัญหา ปรึกษา ",
    "aboutus.story5": "ทนาย บำรุง รุ่งเรือง",

    "aboutus.ctaButton": "กำหนดเวลาการให้คำปรึกษา",

    "aboutus.achievement1": "ปีแห่งความเป็นเลิศ",
    "aboutus.achievement2": "กรณีที่ประสบความสำเร็จ",
    "aboutus.achievement3": "อัตราความสำเร็จ",
    "aboutus.achievement4": "ภาษาที่รองรับ",

    "aboutus.values.title": "ค่านิยมหลักของเรา",
    "aboutus.values.subtitle":
      "สองทศวรรษแห่งความมุ่งมั่นอย่างไม่ลดละเพื่อความยุติธรรม ความเป็นเลิศ และความสำเร็จของลูกค้า",
    "aboutus.value1.title": "ความซื่อสัตย์",
    "aboutus.value1.description":
      "การยึดมั่นในมาตรฐานจริยธรรมสูงสุดในแนวทางปฏิบัติทางกฎหมายทั้งหมดของเรา",

    "aboutus.value2.title": "ความเป็นเลิศ",
    "aboutus.value2.description":
      "การมอบบริการทางกฎหมายที่ยอดเยี่ยมด้วยความแม่นยำและความเชี่ยวชาญ",

    "aboutus.value3.title": "ความเห็นอกเห็นใจ",
    "aboutus.value3.description":
      "ดูแลทุกคดีด้วยความเห็นอกเห็นใจและเอาใจใส่อย่างแท้จริง",

    "aboutus.value4.title": "ผลลัพธ์",
    "aboutus.value4.description": "บรรลุผลลัพธ์ที่ปกป้องผลประโยชน์ของลูกค้า",

    // CTA
    "aboutus.ctaTitle": "พร้อมที่จะ ร่วมงานกับเราไหม?",

    "aboutus.ctaDesc":
      "ให้ทีมงานที่มีประสบการณ์ของเราช่วยแนะนำคุณผ่านความท้าทายทางกฎหมายด้วยความเชี่ยวชาญและความทุ่มเท",

    "aboutus.ctaBtn1": "รับคำปรึกษาฟรี",

    "aboutus.ctaBtn2": "ดูบริการของเรา",
    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    //SERVICES PAGE

    "services.1.title": "คดีแพ่ง",
    "services.1.subtitle": "การเป็นตัวแทนทางกฎหมายอย่างครอบคลุม",
    "services.1.description":
      "ตัวแทนทางกฎหมายที่เชี่ยวชาญสำหรับคดีแพ่งทุกประเภท ทนายความที่มีประสบการณ์ของเราดำเนินการพิจารณาคดีในศาลด้วยความทุ่มเทและความเชี่ยวชาญ เพื่อให้แน่ใจว่าสิทธิของคุณได้รับการคุ้มครองตลอดกระบวนการทางกฎหมาย",
    "services.1.fullDescription":
      "เราให้บริการตัวแทนทางกฎหมายที่ครอบคลุมทั้งในคดีแพ่ง จัดการทุกอย่างตั้งแต่การปรึกษาหารือเบื้องต้นจนถึงคำตัดสินขั้นสุดท้าย ทีมงานของเรามีประสบการณ์มากมายในการป้องกันทางอาญา การบาดเจ็บส่วนบุคคล ข้อพิพาทด้านสัญญา และกฎหมายครอบครัว เราให้แน่ใจว่าลูกค้าทุกคนจะได้รับความเอาใจใส่เป็นรายบุคคลและการเป็นตัวแทนที่เข้มแข็งในศาล",
    "services.1.features": [
      "คดีเรียกร้องค่าเสียหาย",
      "ผิดสัญญา",
      "การแบ่งมรดกและทรัพย์มรดก",
      "ข้อพิพาทเรื่องที่ดิน ภาระจำยอม สิทธิในการครอบครอง",
      "คดีขับไล่และรื้อถอน",
      "คดีละเมิด (เช่น คดีรถยนต์ อุบัติเหตุ, ความเสียหายต่อทรัพย์สิน)",
    ],
    "services.2.title": "คดีอาญา",
    "services.2.subtitle": "ความผิดตามกฎหมายอาญา",
    "services.2.description":
      "ตัวแทนทางกฎหมายที่ครอบคลุมสำหรับลูกค้าที่เกี่ยวข้องกับความผิดทางอาญา ตั้งแต่การลักทรัพย์และการทำร้ายร่างกายไปจนถึงอาชญากรรมร้ายแรง เช่น การฆ่าคนตายและการล่วงละเมิดทางเพศ",
    "services.2.fullDescription":
      "ทีมกฎหมายอาญาของเราให้บริการด้านการป้องกันทางกฎหมายและการฟ้องร้องโดยผู้เชี่ยวชาญสำหรับคดีอาญาที่หลากหลาย เราจัดการทุกอย่างตั้งแต่ความผิดเล็กน้อยไปจนถึงคดีอาญาร้ายแรง รวมถึงการฉ้อโกง อาชญากรรมที่เกี่ยวข้องกับยาเสพติด ความผิดรุนแรง และอื่นๆ เราให้แน่ใจว่าสิทธิของคุณได้รับการคุ้มครองตลอดกระบวนการทางกฎหมายและให้คำแนะนำเชิงกลยุทธ์ทุกขั้นตอน",
    "services.2.features": [
      "การลักทรัพย์ การยักยอก การฉ้อโกง",
      "ความผิดเกี่ยวกับยาเสพติด",
      "การทำร้ายร่างกาย การฆ่าคนตาย",
      "การหมิ่นประมาท",
      "การลักพาตัวเด็ก การล่วงละเมิดทางเพศ",
      "เอกสาร การปลอมแปลง",
    ],
    "services.3.title": "ข้อพิพาทด้านแรงงาน",
    "services.3.subtitle": "ประเด็นทางกฎหมายระหว่างนายจ้างและลูกจ้าง",
    "services.3.description":
      "การสนับสนุนทางกฎหมายเพื่อแก้ไขข้อขัดแย้งในที่ทำงาน รวมถึงการเลิกจ้างโดยไม่เป็นธรรม ข้อโต้แย้งเรื่องค่าชดเชย และการละเมิดสิทธิแรงงาน",
    "services.3.fullDescription":
      "เราเชี่ยวชาญในการจัดการข้อขัดแย้งด้านแรงงานระหว่างนายจ้างและลูกจ้าง โดยให้ความช่วยเหลือทางกฎหมายจากผู้เชี่ยวชาญในกรณีต่างๆ เช่น การเลิกจ้างโดยไม่เป็นธรรม การเรียกร้องค่าจ้างหรือสวัสดิการ การละเมิดสัญญาจ้างงาน และข้อพิพาทเกี่ยวกับสิทธิแรงงาน เป้าหมายของเราคือการปกป้องสิทธิของคุณและแก้ไขข้อขัดแย้งอย่างมีประสิทธิภาพผ่านการเจรจาหรือการฟ้องร้อง",
    "services.3.features": [
      "การเลิกจ้างโดยไม่เป็นธรรม",
      "การเรียกร้องค่าชดเชย",
      "การละเมิดสัญญาจ้างงาน",
      "ข้อพิพาทด้านสวัสดิการและสิทธิแรงงาน",
    ],
    "services.4.title": "กฎหมายครอบครัวและเยาวชน",
    "services.4.subtitle": "ปัญหาในครอบครัวและครอบครัว",
    "services.4.description":
      "คำแนะนำทางกฎหมายและการเป็นตัวแทนในประเด็นที่เกี่ยวข้องกับครอบครัว รวมถึงการหย่าร้าง สิทธิในการดูแลบุตร การเรียกร้องค่าอุปการะเลี้ยงดูบุตร และข้อพิพาทเกี่ยวกับทรัพย์สินระหว่างสามีภรรยา",
    "services.4.fullDescription":
      "เราให้บริการทางกฎหมายที่เห็นอกเห็นใจและมีกลยุทธ์สำหรับบุคคลที่ต้องรับมือกับประเด็นทางกฎหมายครอบครัว ทีมงานของเราดูแลประเด็นภายในประเทศที่หลากหลาย เช่น กระบวนการหย่าร้าง สิทธิในการดูแลบุตรและค่าอุปการะเลี้ยงดูบุตร การแบ่งทรัพย์สินระหว่างสามีภรรยา และการรับรองบุตร เรามุ่งมั่นที่จะแก้ไขข้อพิพาทด้วยความละเอียดอ่อนในขณะที่ปกป้องสิทธิและผลประโยชน์ทางกฎหมายของคุณ",
    "services.4.features": [
      "การหย่าร้าง",
      "การเรียกร้องค่าอุปการะเลี้ยงดูบุตร",
      "ข้อพิพาทเกี่ยวกับการดูแลบุตร",
      "การแบ่งทรัพย์สินระหว่างสามีภรรยา",
      "การรับรองบุตร",
    ],

    "services.5.title": "คดีมรดก",
    "services.5.subtitle": "เรื่องทรัพย์สินและมรดก",
    "services.5.description":
      "บริการทางกฎหมายที่เกี่ยวข้องกับมรดกของผู้เสียชีวิต รวมถึงการบริหาร การแบ่งมรดก การคัดค้าน และข้อพิพาทเกี่ยวกับพินัยกรรม",
    "services.5.fullDescription":
      "เราให้บริการตัวแทนทางกฎหมายที่มีความเชี่ยวชาญในเรื่องมรดกที่เกี่ยวข้องกับการบริหารมรดก การแบ่งทรัพย์สิน และข้อพิพาทเกี่ยวกับพินัยกรรม ไม่ว่าจะเป็นการแต่งตั้งผู้ดูแลมรดก การโต้แย้งการจัดการมรดก หรือการจัดการกับข้อกล่าวหาการปลอมแปลงพินัยกรรม ทีมกฎหมายของเรารับรองว่าสิทธิของคุณจะได้รับการรักษาไว้ตลอดกระบวนการ",
    "services.5.features": [
      "การแต่งตั้งผู้ดูแลมรดก",
      "การแบ่งมรดก",
      "การคัดค้านการจัดการมรดก",
      "คดีปลอมแปลงพินัยกรรม",
    ],
    "services.6.title": "ข้อพิพาทระหว่างผู้บริโภค ธุรกิจ และการค้า",
    "services.6.subtitle": "ข้อขัดแย้งทางการค้า การชำระเงิน และบริการ",
    "services.6.description":
      "บริการทางกฎหมายเพื่อแก้ไขข้อพิพาทที่เกี่ยวข้องกับสินค้าชำรุด ข้อขัดแย้งทางการค้า การชำระเงินผิดนัด และเช็คเด้งทั้งในบริบทของผู้บริโภคและธุรกิจ",
    "services.6.fullDescription":
      "ทีมงานของเราให้การสนับสนุนทางกฎหมายในการคุ้มครองผู้บริโภคและข้อพิพาทที่เกี่ยวข้องกับธุรกิจ เราดำเนินการฟ้องร้องบริษัทต่างๆ สำหรับสินค้าชำรุดหรือบริการไม่ดี ข้อขัดแย้งทางการค้า หนี้ที่ยังไม่ได้ชำระ และปัญหาตราสารทางการเงิน เช่น เช็คเด้ง เป้าหมายของเราคือการแก้ไขปัญหาเหล่านี้อย่างมีประสิทธิภาพในขณะที่ปกป้องผลประโยชน์ทางการค้าและส่วนบุคคลของลูกค้าของเรา",
    "services.6.features": [
      "คดีฟ้องร้องบริษัทต่างๆ สำหรับสินค้า/บริการชำรุด",
      "ข้อขัดแย้งทางการค้า",
      "การชำระเงินผิดนัด",
      "กรณีเช็คเด้ง",
    ],
    "services.7.title": "กฎหมายปกครอง",
    "services.7.subtitle": "ข้อพิพาทกับหน่วยงานของรัฐ",
    "services.7.description":
      "บริการทางกฎหมายสำหรับการฟ้องร้องหน่วยงานของรัฐและท้าทายการตัดสินใจทางปกครอง เช่น การเวนคืนที่ดิน",
    "services.7.fullDescription":
      "เราเป็นตัวแทนบุคคลและธุรกิจในคดีปกครองที่เกี่ยวข้องกับข้อพิพาทกับหน่วยงานของรัฐ ซึ่งรวมถึงการฟ้องร้องหน่วยงานของรัฐ การท้าทายคำสั่งทางปกครอง และการปกป้องสิทธิในกรณีต่างๆ เช่น การเวนคืนที่ดินหรือการใช้อำนาจเกินขอบเขตของกฎระเบียบ บริษัทของเรารับประกันว่าการดำเนินการทั้งหมดได้รับการดำเนินการอย่างแม่นยำและสอดคล้องกับกฎหมาย",
    "services.7.features": [
      "คดีฟ้องร้องหน่วยงานของรัฐ",
      "การท้าทายคำสั่งทางปกครอง (เช่น การเวนคืนที่ดิน)",
    ],
    "services.8.title": "การล้มละลายและการฟื้นฟูธุรกิจ",
    "services.8.subtitle": "การล้มละลาย การบรรเทาหนี้ และการฟื้นฟูองค์กร",
    "services.8.description":
      "บริการทางกฎหมายสำหรับบุคคลและธุรกิจที่เผชิญกับการล้มละลาย รวมถึงการปรับโครงสร้างหนี้และการวางแผนการฟื้นฟู",
    "services.8.fullDescription":
      "เราให้ความช่วยเหลือลูกค้าผ่านกระบวนการล้มละลายและกระบวนการฟื้นฟูธุรกิจ บริการของเราได้แก่ การยื่นฟ้องล้มละลาย การเจรจาแผนการปรับโครงสร้างหนี้ และการเป็นตัวแทนลูกค้าในคดีฟื้นฟู เรามุ่งมั่นที่จะนำเสนอแนวทางการฟื้นฟูทางการเงินที่ยั่งยืนในขณะที่รับรองการปฏิบัติตามภาระผูกพันทางกฎหมาย",
    "services.8.features": [
      "การยื่นฟ้องล้มละลาย",
      "การปรับโครงสร้างหนี้และการเจรจาการฟื้นฟู",
    ],
    // Services details
    "services.civil": "รับว่าคดีแพ่ง คดีอาญา",
    "services.civil.description":
      "เป็นทนายความรับว่าคดีทุกประเภท ดำเนินกระบวนพิจารณาคดีใดๆในศาลแทนคู่ความทั้งคดีแพ่ง คดีอาญา",
    "services.enforcement": "รับงานบังคับคดี",
    "services.enforcement.description":
      "บริการยึดทรัพย์ นำยึด อายัดหรือระงับ นำเพิ่ม ตลาด งานคดีล้มละลายอื่นๆ",
    "services.contracts": "รับตรวจสอบสัญญาทางกฎหมาย",
    "services.contracts.description":
      "บริการตรวจสอบและร่างสัญญา ให้คำปรึกษาเกี่ยวกับสัญญาต่างๆ หนังสือพินัยกรรม",
    "services.consultation": "รับปรึกษาและที่ปรึกษากฎหมาย",
    "services.consultation.description":
      "บริการให้คำปรึกษา คำแนะนำ ความเห็น แนวทางแก้ไขปัญหา รับเป็นที่ปรึกษาให้กับบริษัทเอกชน",
    "services.appeals": "รับอุทธรณ์/ฎีกา",
    "services.appeals.description":
      "คดีฉ้อโกง หมิ่นประมาท คดีอาญาส่วนตัว รวมถึงคดีอาญาที่ดิน",
    "services.negotiation": "รับเจรจา ไกล่เกลี่ย หนี้/ทวงหนี้",
    "services.negotiation.description":
      "รับเจรจาหนี้ แก้ปัญหาของลูกหนี้ ติดตาม ตาม เร่งรัด หนี้ค้างชำระ",

    "services.title.one": "บริการของเรา",
    "services.title.two": "",
    "services.subtitle":
      "สำนักงานของเราให้บริการให้คำปรึกษาด้านกฎหมายอย่างครบวงจร ครอบคลุมทุกสาขากฎหมาย อาทิ คดีแพ่ง คดีอาญา คดีแรงงาน คดีครอบครัว มรดก คดีอาญาทุจริตและประพฤติมิชอบของเจ้าหน้าที่รัฐ คดีล้มละลาย คดีภาษีอากร คดีทรัพย์สินทางปัญญา รวมถึงคดีในศาลเยาวชนและครอบครัว\nเรารับว่าความทั่วราชอาณาจักร เราพร้อมให้ความช่วยเหลือตั้งแต่ขั้นตอนเริ่มต้นของคดี ไปจนถึงกระบวนการสิ้นสุดอย่างรอบด้าน\nนอกจากนี้ เรายังให้บริการเป็นที่ปรึกษากฎหมายประจำแก่บริษัท ห้างร้าน และนิติบุคคลต่าง ๆ เพื่อสนับสนุนการดำเนินธุรกิจให้เป็นไปตามกฎหมายอย่างมั่นคง\nไม่ว่าคุณจะเผชิญกับปัญหาทางกฎหมายในด้านใด เราพร้อมให้คำปรึกษาด้วยความเข้าใจและความเชี่ยวชาญจากประสบการณ์ในสายงานกฎหมายมากกว่า 30 ปี เราพร้อมเดินเคียงข้างคุณอย่างมั่นคงด้วยความรู้ความซื่อสัตย์และหัวใจของผู้พิทักษ์ความยุติธรรม เพื่อให้ทุกก้าวของคุณมั่นใจได้ว่าจะไม่ต้องเผชิญปัญหาทางกฎหมายเพียงลำพัง",
    "services.areas": " พื้นที่กฎหมายเฉพาะ",
    "services.cta.title":
      "ต้องการความช่วยเหลือทางกฎหมายจากผู้เชี่ยวชาญหรือไม่?",
    "services.cta.desc":
      "ทีมกฎหมายที่มีประสบการณ์ของเรายินดีให้คำปรึกษาอย่างมืออาชีพและคำแนะนำจากผู้เชี่ยวชาญที่เหมาะกับความต้องการเฉพาะของคุณ ติดต่อเราได้วันนี้เพื่อกลยุทธ์ทางกฎหมายที่ครอบคลุม",
    "services.cta.btn": "กำหนดเวลาปรึกษาฟรี",
    "services.feature": "คุณสมบัติหลัก",
    "services.btn1": "รับคำปรึกษาฟรี",
    "services.btn2": " กลับไปที่บริการ",

    // Lawyer Profile
    "profile.section": "เกี่ยวกับฉัน",
    "profile.name": "บำรุง รุ่งเรือง",
    "profile.title": "ทนายความ, สภาทนายความแห่งประเทศไทย",
    "profile.position": "ตำแหน่ง",
    "profile.experience":
      "ประสบการณ์ด้านกฎหมายและคดีความมากกว่า 30 ปี ตำแหน่ง ทนายความ สภาทนายความแห่งประเทศไทยการให้คำปรึกษา-ทนายความขอแรง",
    "profile.consulting": "ที่ปรึกษา - ทนายอาสา",
    "profile.education": "การศึกษา",
    "profile.education.bachelor": "ปริญญาตรี",
    "profile.education.bachelor.detail":
      "นิติศาสตรบัณฑิต มหาวิทยาลัยสุโขทัยธรรมาธิราช",
    "profile.education.master": "ระดับปริญญาโท",
    "profile.education.master.detail":
      "รัฐศาสตร์เอกสื่อสารการเมือง มหาวิทยาลัยเกริก",
    "profile.education.phd": "ระดับปริญญาเอก",
    "profile.education.phd.detail":
      "ดุษฎีบัณฑิตกิตติมศักดิ์รัฐศาสตร์การเมืองการปกครอง สถาบันLADC",
    "services.heading": "บริการของเรา",
    "services.button.explore": "สำรวจเพิ่มเติม",

    // Mission & Vision
    "mission.title": "พันธกิจและวิสัยทัศน์ของเรา",
    "mission.missionHeading": "วิสัยทัศน์",
    "mission.missionText":
      "เพราะความยุติธรรม…ไม่ควรเป็นของคนบางกลุ่มเท่านั้น เราทำให้กฎหมายเป็นที่พึ่งได้จริง เราทำอาชีพนี้ เพราะเราอยากยืนข้างคนที่ไม่มีเสียง ",
    "mission.missionSubText":
      "จุดเด่นของเรา\nคือความเข้าใจ ความซื่อสัตย์ และราคาที่เข้าถึงได้",

    "mission.visionHeading": "วิสัยทัศน์ของเรา",
    "mission.visionText":
      "สำนักงานกฏหมาย  คุณ บำรุง รุ่งเรือง ก่อตั้งขึ้นจากความตั้งใจจริงที่เห็นกฎหมายเป็นสิ่งที่เข้าถึงได้ไม่ใช่กำแพงที่กั้นคนธรรมดาออกจากความยุติธรรมเราเชื่อว่าทุกคนควรมีสิทธิ์ได้รับการปกป้อง ไม่ว่าจะมีเสียงในสังคมหรือไม่เราจึงตั้งใจรับฟังคุณด้วยหัวใจไม่เพียงแค่ฟังเพื่อหาข้อกฎหมายแต่ฟังเพื่อเข้าใจ ราคาของเราเป็นมิตร เพราะเราเข้าใจว่าความเดือดร้อนไม่ได้เลือกชนชั้น เรายินดีให้คำปรึกษาเบื้องต้นฟรี เพื่อให้คุณได้รู้ทางออกก่อนตัดสินใจ  ทุกคดีความที่เข้ามา เราทุ่มเทเหมือนเป็นเรื่องของเราเพราะเรามีความเชื่อว่าความยุติธรรมที่แท้จริงต้องเริ่มต้นจากหัวใจที่เข้าใจความทุกข์ของผู้อื่น",
    "mission.button": "สำรวจเพิ่มเติม",

    // Get an Expert
    "getExpert.title": "ขอคำปรึกษาจากผู้เชี่ยวชาญด้านกฎหมาย",
    "getExpert.description":
      "คุณกำลังวางแผนจะเริ่มต้นธุรกิจในต่างประเทศและประสบปัญหากับกฎหมายท้องถิ่น ต้องการหลีกเลี่ยงความเสี่ยงและอุปสรรคใช่หรือไม่? เราเข้าใจสถานการณ์นี้เป็นอย่างดี",
    "getExpert.button.contact": "ติดต่อทันที",
    "getExpert.stats.years": "ปีแห่งการดำเนินธุรกิจ",
    "getExpert.stats.works": "ผลงานที่สำเร็จ",
    "getExpert.stats.customers": "ลูกค้าที่มีคุณค่า",
    "getExpert.stats.team": "สมาชิกในทีม",

    // Mission & Vision (TH)
    "missionVision.title": "พันธกิจและวิสัยทัศน์ของเรา",
    "missionVision.missionHeading": "พันธกิจของเรา",
    "missionVision.missionText":
      "เพราะความยุติธรรมไม่ควรเป็นของคนเพียงไม่กี่คน",
    "missionVision.missionSubText": "เราทำให้กฎหมายเป็นที่พึ่งได้อย่างแท้จริง",
    "missionVision.visionHeading": "วิสัยทัศน์ของเรา",
    "missionVision.visionText":
      "เราทำงานนี้เพราะต้องการยืนหยัดเคียงข้างผู้ที่ไม่มีเสียงในสังคม",
    "missionVision.button": "สำรวจเพิ่มเติม",
    "missionVision.strengthsHeading": "จุดแข็งของเรา",
    "missionVision.strength1.title": "ความเข้าใจอย่างแท้จริง",
    "missionVision.strength1.description":
      "เรารับฟังด้วยหัวใจ ไม่ใช่แค่เพื่อหาทางออกทางกฎหมาย แต่เพื่อเข้าใจอย่างแท้จริง",
    "missionVision.strength2.title": "ความซื่อสัตย์และความจริงใจ",
    "missionVision.strength2.description":
      "เรามีความเชื่อว่าทุกคนสมควรได้รับการคุ้มครอง ไม่ว่าจะมีเสียงในสังคมหรือไม่ก็ตาม",
    "missionVision.strength3.title": "ราคาที่เข้าถึงได้",
    "missionVision.strength3.description":
      "เราคิดค่าบริการอย่างเป็นธรรม เพราะความลำบากไม่เลือกคน",
    "missionVision.foundation":
      "สำนักงานกฎหมายบำรุง รุ่งเรือง ก่อตั้งขึ้นด้วยพันธกิจที่จริงใจ:",
    "missionVision.foundationGoal":
      "เพื่อให้กฎหมายเป็นที่พึ่งที่เข้าถึงได้ ไม่ใช่อุปสรรค โดยเฉพาะสำหรับคนธรรมดา",
    "missionVision.value1.title": "การคุ้มครองอย่างเท่าเทียม",
    "missionVision.value1.description":
      "เรามีความเชื่อว่าทุกคนสมควรได้รับการคุ้มครอง ไม่ว่าจะมีเสียงในสังคมหรือไม่ก็ตาม",
    "missionVision.value2.title": "บริการด้วยความเห็นอกเห็นใจ",
    "missionVision.value2.description":
      "เรารับฟังด้วยหัวใจ ไม่ใช่แค่เพื่อหาทางออกทางกฎหมาย แต่เพื่อเข้าใจอย่างแท้จริง",
    "missionVision.value3.title": "ราคาที่เข้าถึงได้",
    "missionVision.value3.description":
      "เราคิดค่าบริการอย่างเป็นธรรม เพราะความลำบากไม่เลือกคน",
    "missionVision.value4.title": "ปรึกษาฟรีครั้งแรก",
    "missionVision.value4.description":
      "เรายินดีให้คำปรึกษาเบื้องต้นฟรี เพื่อให้คุณเห็นทางเลือกก่อนตัดสินใจ",
    "missionVision.finalStatement":
      "ทุกคดีที่เรารับ เราดูแลเหมือนเป็นเรื่องของเราเอง เพราะความยุติธรรมที่แท้จริงเริ่มต้นจากการเข้าใจความเจ็บปวดของผู้อื่น",
    // Contact Page (TH)
    "contact.title": "ติดต่อทีมกฎหมายของเรา",
    "contact.description":
      "รับคำปรึกษาทางกฎหมายจากผู้เชี่ยวชาญ ส่งคำถามของคุณมาได้เลย ทนายความของเราจะตอบกลับอย่างรวดเร็ว",
    "contact.form.nameLabel": "ชื่อของคุณ",
    "contact.form.namePlaceholder": "กรอกชื่อ-นามสกุลของคุณ",
    "contact.form.emailLabel": "อีเมล",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.phoneLabel": "เบอร์โทรศัพท์",
    "contact.form.phonePlaceholder": "xxxxxxxx",
    "contact.form.lineLabel": "LINE ID",
    "contact.form.linePlaceholder": "LINE ID ของคุณ",
    "contact.form.subjectLabel": "หัวข้อเรื่อง",
    "contact.form.subjectPlaceholder": "อธิบายปัญหาทางกฎหมายโดยย่อ",
    "contact.form.messageLabel": "ข้อความ *",
    "contact.form.messagePlaceholder":
      "โปรดอธิบายปัญหาหรือคำถามทางกฎหมายของคุณอย่างละเอียด...",
    "contact.button.send": "ส่งข้อความ",
    "contact.button.sending": "กำลังส่งข้อความ...",
    "contact.info.heading": "ติดต่อเรา",
    "contact.info.addressLabel": "ที่อยู่สำนักงาน",
    "contact.info.phoneLabel": "โทรศัพท์",
    "contact.info.emailLabel": "อีเมล",
    "contact.info.hoursLabel": "เวลาทำการ",
    "contact.info.consultationHeading": "ปรึกษาฟรี",
    "contact.info.consultationText":
      "เรายินดีให้คำปรึกษาเบื้องต้นฟรี เพื่อให้คุณเข้าใจทางเลือกทางกฎหมายก่อนตัดสินใจใด ๆ",
    "contact.info.consultationNote":
      "ไม่มีข้อผูกมัด • เป็นความลับ • ให้คำแนะนำอย่างมืออาชีพ",
    // Contact Page (TH)
    "contact.info.addressValue":
      "สำนักงานกฎหมายบำรุง รุ่งเรือง 113/1 ซอยบ้านเหรียง 7 ถนนบ้านเหรียง หมู่ที่ 3 ตำบลเทพกระษัตรี อำเภอถลาง จังหวัดภูเก็ต 83110",
    "contact.info.phoneValue": " 076-600861",
    "contact.info.emailValue": "info@bamroonglaw.com",
    "contact.info.hoursValue":
      "จันทร์ - ศุกร์: 9:00 - 18:00 น.\nเสาร์: 9:00 - 13:00 น.\nอาทิตย์: ปิดทำการ",
    // Contact Page (TH)
    "contact.info.lineLabel": "LINE ID",
    "contact.info.lineValue": "@bamroonglaw",

    "footer.rights": "สงวนลิขสิทธิ์",
    "footer.privacy": "นโยบายความเป็นส่วนตัว",
    "footer.terms": "ข้อกำหนดการให้บริการ",
    "footer.address": "123 ถนนสีลม กรุงเทพมหานคร 10500",
    "footer.phone": "082-2184079 ",
    "footer.email": "sugar.kantera@gmail.com",
    "footer.line": "kantera22phuket",
    "footer.copyright": "ลิขสิทธิ์ 2025 © www.bamroonglaw.com",
    // Footer (custom keys for Thai section in Footer component)
    "footer.contactCase": "ติดต่อคดีความ",
    "footer.freeConsultation": "ปรึกษาเบื้องต้นฟรี",
    "footer.assistantName": "คุณ กานต์ธีรา เต็งหลี (น้ำตาล) ",
    "footer.assistantTitle": "ผู้ช่วยด้านกฎหมาย",
    "footer.lawyerName": "ทนาย บำรุง รุ่งเรือง",

    // WhatsApp

  },

  // ===============================
  // CHINESE TRANSLATIONS
  // ===============================
  zh: {
    // ===============================
    // NAVIGATION
    // ===============================

    "contact.success.desc": "您的消息已成功发送。我们会尽快回复您！",
    "contact.success.title": "成功！",

    "nav.home": "主页",
    "nav.about": "关于我们",
    "nav.services": "我们的服务",
    "nav.team": "律师团队",
    "nav.contact": "联系我们",
    "nav.news": "新闻频道",
    "nav.vis": "视觉",
    "nav.mission": "我们的故事",
    "nav.getInTouch": "联系我们",
    "nav.title": "班伦·伦格鲁昂",

    "header.adress":
      "3/1 Soi Ban Rian 7,Ban Rian 路,3 号村,Thep Krasattri 街道,他朗区,普吉府",
    "header.phone": "094-806-9123",
    "header.consultation": "免费咨询",
    "header.available": "全天候开放",
    "header.email": "bamroonglaw@gmail.com",
    "header.line": "@bamroonglaw",

    // --------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------------------------

    // ===============================
    // Hero section
    // ===============================
    "hero.title": "律师 班隆·伦鲁昂",
    "hero.cta": "我们的服务",
    "hero.button": "开始",
    "hero.description1": "在你不知道该向谁求助的那一天...",
    "hero.description2": "他是一个不带偏见地倾听并站在这里帮助你伸张正义的人",

    "features.service": "高度个性化的服务",
    "features.record": "已证实的成功记录",
    "features.rated": "顶级律师",

    //about//

    "about.description":
      "我一生中曾一度处于必须与人抗争的境地无人理解,无人帮助,感觉无人倾听。就在那天,我决定……如果有一天我拥有了足够的知识,我将与那些追求正义的人站在一起。我毕业于法学院,经历了一个小案子、一个大案子、一个令人心碎的案子。而这个案子让我再次相信正义依然存在。对我来说,每个案子不仅仅是一份 工作 ,而是 一个人的一生, 我永远不会忘记。这家律师事务所的诞生……不是为了权力,不是为了名利,而是为了帮助 真正有困难的人 如果你需要一个不仅懂法律,更懂你内心的人,我随时准备站在这里,用我的全部心血和关怀倾听你的烦恼。就像亲人一样。",
    "about.button": "了解更多",
    "about.value1.title": "诚实",
    "about.value1.description": "在我们所有的法律实践中坚持最高的道德标准。",
    "about.value2.title": "卓越",
    "about.value2.description": "以精准和专业提供优质法律服务",
    "about.value3.title": "可信度",
    "about.value3.description":
      "在您最需要的时候,我们随时准备为您服务。随时准备迅速响应",
    "about.button.explore": "探索更多",
    "about.title": "关于我们的办公室",
    "about.breadcrumb.home": "主页",
    "about.breadcrumb.current": "关于我们",
    "about.introduction":
      "当你不知道向谁求助的那一天……我们会不带任何评判地倾听,并站在这里为你伸张正义。",
    "about.coreValues.heading": "核心价值观",
    "about.coreValues.intro": "指导每个决策、每个案例和每次客户服务的原则",
    "about.coreValues.value1.title": "诚实",
    "about.coreValues.value1.description":
      "在我们所有的法律实践中坚持最高的道德标准。",
    "about.coreValues.value2.title": "卓越",
    "about.coreValues.value2.description": "以精准和专业提供卓越的法律服务",
    "about.coreValues.value3.title": "同理心",
    "about.coreValues.value3.description": "以真诚的同情心和关怀对待每一个案例",
    "about.coreValues.value4.title": "结果",
    "about.coreValues.value4.description": "取得保护客户利益的成果",

    "aboutus.subtitle": "二十年来始终坚持公平、卓越和客户成功",
    "aboutus.storyTitle": "我们的正义故事",
    "aboutus.story1":
      "我一生中曾一度处于必须抗争的境地,无人理解,无人帮助,感觉无人倾听。就在那天,我决定……如果有一天我拥有了足够的知识,我将与那些追求正义的人站在一起。我拥有法律学位,处理过大大小小的案件,也处理过令人心碎的案件。而那个案件让我再次相信 正义依然存在。对我来说,每个案件不仅仅是 工作 ,而是 一个人的生命 ,我永远不会忘记",
    "aboutus.story2":
      "这家律师事务所的诞生……不是为了权力,不是为了名利,而是为了帮助 真正陷入困境的人 。如果您需要一个不仅懂法律,更懂您内心的人,我随时准备站在这里,用我的真心和关怀倾听您的烦恼。就像亲人一样",
    "aboutus.story3": "感谢您的信任。",
    "aboutus.story4": "痛苦、问题、咨询",
    "aboutus.story5": "律师 Bamrung Rungruang",

    "aboutus.ctaButton": "安排咨询",

    "aboutus.achievement1": "卓越之年",
    "aboutus.achievement2": "成功案例",
    "aboutus.achievement3": "完成率",
    "aboutus.achievement4": "支持的语言",

    "aboutus.values.title": "我们的核心价值观",
    "aboutus.values.subtitle": "二十年来始终坚持公平、卓越和客户成功",
    "aboutus.value1.title": "诚实",
    "aboutus.value1.description": "在我们所有的法律实践中坚持最高的道德标准",

    "aboutus.value2.title": "卓越",
    "aboutus.value2.description": "以精准和专业提供卓越的法律服务",

    "aboutus.value3.title": "同情",
    "aboutus.value3.description": "以真诚的同情心和关怀对待每一个案例",

    "aboutus.value4.title": "结果",
    "aboutus.value4.description": "实现保护客户利益的成果。",

    // 行动号召
    "aboutus.ctaTitle": "您准备好与我们合作了吗？",

    "aboutus.ctaDesc":
      "让我们经验丰富的团队以专业知识和奉献精神指导您应对法律挑战。",

    "aboutus.ctaBtn1": "获取免费咨询",

    "aboutus.ctaBtn2": "查看我们的服务",

    //SERVICES PAGE
    "services.1.title": "民事案件",
    "services.1.subtitle": "全面的法律代理",
    "services.1.description":
      "我们为各类民事案件提供专业的法律代理服务。我们经验丰富的律师以敬业精神和专业技能处理诉讼程序,确保您的权利在整个法律程序中得到保护。",
    "services.1.fullDescription":
      "我们提供全面的民事法律代理服务,从初步咨询到最终判决,全程为您服务。我们的团队在刑事辩护、人身伤害、合同纠纷和家庭法方面拥有丰富的经验。我们确保每位客户都能在法庭上获得个性化的关注和积极的法律代理。",
    "services.1.features": [
      "损害赔偿诉讼",
      "违约",
      "继承和遗产分割",
      "土地纠纷、地役权、占有权",
      "驱逐和拆迁案件",
      "侵权案件（例如车祸、财产损失）",
    ],
    "services.2.title": "刑事案件",
    "services.2.subtitle": "刑法规定的犯罪",
    "services.2.description":
      "为涉及刑事犯罪的客户提供全面的法律代理服务,涵盖从盗窃、袭击到杀人、性侵犯等严重犯罪。",
    "services.2.fullDescription":
      "我们的刑法团队为各种刑事案件提供专业的法律辩护和起诉服务。我们处理从轻微犯罪到严重刑事案件的各种案件,包括欺诈、毒品犯罪、暴力犯罪等等。我们确保您的权利在整个法律程序中得到保护,并在每一步都提供战略指导。",
    "services.2.features": [
      "盗窃、挪用公款、欺诈",
      "毒品犯罪",
      "袭击、杀人",
      "诽谤",
      "绑架儿童、性侵犯",
      "文件伪造",
    ],
    "services.3.title": "劳动争议",
    "services.3.subtitle": "劳资法律问题",
    "services.3.description":
      "提供解决职场纠纷的法律支持,包括不公平解雇、赔偿纠纷和侵犯劳工权利的行为。",
    "services.3.fullDescription":
      "我们专注于处理劳资纠纷,在不公平解雇、工资或福利索赔、违反劳动合同以及劳工权利纠纷等案件中提供专业的法律援助。我们的目标是通过谈判或诉讼,有效维护您的权益并解决纠纷。",
    "services.3.features": [
      "不公平解雇",
      "赔偿索赔",
      "违反劳动合同",
      "福利和劳工权利纠纷",
    ],
    "services.4.title": "家庭与青少年法",
    "services.4.subtitle": "家庭及家庭相关事务",
    "services.4.description":
      "提供家庭相关事务的法律指导和代理服务,包括离婚、子女监护权、抚养费索赔和婚姻财产纠纷。",
    "services.4.fullDescription":
      "我们为处理家庭法律事务的个人提供富有同情心和策略性的法律服务。我们的团队处理各种家庭事务,例如离婚诉讼、子女监护权和抚养费索赔、婚姻财产分割以及子女合法化。我们致力于在保护您的合法权益的同时,以审慎的态度解决纠纷。",
    "services.4.features": [
      "离婚",
      "子女抚养费索赔",
      "监护权纠纷",
      "婚姻财产分割",
      "子女合法化",
    ],
    "services.5.title": "继承案件",
    "services.5.subtitle": "财产及遗产事宜",
    "services.5.description":
      "涉及死者遗产的法律服务,包括遗产管理、分割、异议及遗嘱相关纠纷。",
    "services.5.fullDescription":
      "我们提供专业的遗产管理、财产分割和遗嘱纠纷等继承事务的法律代理服务。无论是指定遗产管理人、对遗产管理提出异议,还是处理遗嘱伪造指控,我们的法律团队都会确保您的权利在整个过程中得到维护。",
    "services.5.features": [
      "指定遗产管理人",
      "遗产分割",
      "对遗产管理提出异议",
      "遗嘱伪造案件",
    ],
    "services.6.title": "消费者、企业及商业纠纷",
    "services.6.subtitle": "贸易、支付及服务冲突",
    "services.6.description":
      "提供法律服务,解决消费者和企业环境下涉及缺陷商品、贸易冲突、拖欠付款和空头支票的纠纷。",
    "services.6.fullDescription":
      "我们的团队为消费者保护和商业相关纠纷提供法律支持。我们处理针对公司因商品缺陷或服务质量低劣、贸易纠纷、未偿债务以及空头支票等金融工具问题而提起的诉讼。我们的目标是高效解决这些问题,同时保护客户的商业和个人利益。",
    "services.6.features": [
      "针对公司因缺陷商品/服务而提起的诉讼",
      "贸易纠纷",
      "拖欠付款",
      "空头支票案件",
    ],
    "services.7.title": "行政法",
    "services.7.subtitle": "与政府机构的纠纷",
    "services.7.description":
      "针对政府机构提起诉讼以及质疑土地征用等行政决定的法律服务。",
    "services.7.fullDescription":
      "我们代理个人和企业处理与政府机构相关的行政法律纠纷案件。这包括针对公共机构提起诉讼、质疑行政命令以及在土地征用或监管过度等情况下维护权利。我们律所确保所有程序都依法精准处理。",
    "services.7.features": [
      "针对政府机构的诉讼",
      "质疑行政命令（例如土地征用）",
    ],
    "services.8.title": "破产与企业重整",
    "services.8.subtitle": "破产、债务减免与企业复苏",
    "services.8.description":
      "为面临破产的个人和企业提供法律服务,包括债务重组和重整规划。",
    "services.8.fullDescription":
      "我们协助客户完成破产程序和企业重整流程。我们的服务包括申请破产、协商债务重组方案以及代表客户处理重整案件。我们的目标是提供可持续的财务恢复策略,同时确保客户履行法律义务。",
    "services.8.features": ["申请破产", "债务重组和重整谈判"],

    "services.civil": "受理民事和刑事案件",
    "services.civil.description":
      "我是一名律师,承接各类案件。我代表当事人进行民事和刑事诉讼。",
    "services.enforcement": "接受执法工作",
    "services.enforcement.description":
      "资产扣押服务、扣押、查封或中止、附加市场、其他破产案件",
    "services.contracts": "接受法律合同审查",
    "services.contracts.description":
      "合同审查及起草服务 提供各类合同咨询 遗嘱",
    "services.consultation": "咨询和法律顾问服务",
    "services.consultation.description":
      "咨询服务、建议、意见和解决方案接受私营公司的咨询工作",
    "services.appeals": "申诉/申诉已接受",
    "services.appeals.description": "欺诈、诽谤和私人刑事案件,包括刑事土地案件",
    "services.negotiation": "谈判、调解、债务/追债",
    "services.negotiation.description":
      "接受债务谈判解决债务人问题,跟进并加速逾期债务",

    "services.title.one": "我们的服务",
    "services.title.two": "",
    "services.subtitle":
      "本事务所提供全面的法律咨询服务,涵盖民事、刑事、劳动、家事、继承、腐败及政府官员不当行为刑事、破产、税务、知识产权等所有法律领域,并受理青少年法庭和家事法庭的案件。我们随时准备从案件开始到最终处理,为您提供全方位的协助。此外,我们还为公司、企业和法人实体提供定期法律咨询服务,以支持其以稳定、合法的方式开展业务,无论您面临何种法律问题。我们凭借30多年法律领域经验的理解和专业知识,随时准备为您提供建议。我们随时准备以知识、诚实和正义捍卫者之心,坚定地与您并肩作战。确保您迈出的每一步都安全无虞,让您不再孤军奋战。",
    "services.areas": "具体法律领域",
    "services.cta.title": "您需要专家的法律帮助吗？",
    "services.cta.desc":
      "我们经验丰富的法律团队很乐意根据您的具体需求提供专业的建议和专家指导。立即联系我们,获取全面的法律策略",
    "services.cta.btn": "安排免费咨询",
    "services.feature": "主要功能",
    "services.btn1": "获取免费咨询",
    "services.btn2": "返回服务",

    "profile.section": "关于我",
    "profile.name": "Bamrung Rungruang",
    "profile.title": "泰国律师协会律师",
    "profile.position": "位置",
    "profile.experience":
      "拥有超过30年的法律和诉讼经验。职位:律师。泰国律师协会。咨询律师。",
    "profile.consulting": "顾问 - 志愿律师",
    "profile.education": "教育",
    "profile.education.bachelor": "学士学位",
    "profile.education.bachelor.detail": "素可泰塔马提叻开放大学法学学士",
    "profile.education.master": "硕士学位",
    "profile.education.master.detail": "克里克大学政治学专业,政治传播专业",
    "profile.education.phd": "博士学位",
    "profile.education.phd.detail": "LADC 研究所政治学荣誉博士学位",
    "services.heading": "我们的服务",
    "services.button.explore": "探索更多",

    "mission.title": "我们的使命和愿景",
    "mission.missionHeading": "愿景",
    "mission.missionText":
      "因为正义……不应该只属于少数人。我们让法律真正值得信赖。我们做这项工作。因为我们想与那些没有发言权的人站在一起。 ",
    "mission.missionSubText": "我们的优势在于理解、诚实和实惠的价格",

    "mission.visionHeading": "我们的愿景",
    "mission.visionText":
      "坤班隆隆朗律师事务所的成立初衷是让法律触手可及,而非成为阻隔普通民众获得正义的屏障。我们相信每个人都应该享有受保护的权利。无论您在社会中是否有发言权,我们都会全心全意地倾听您的诉求,不仅是为了了解法律,更是为了理解您的诉求。我们的收费合理,因为我们深知,苦难不分阶级。我们乐意提供免费的初步咨询,帮助您在做出决定之前找到解决方案。每一起诉讼,我们都致力于此,因为我们相信,真正的正义必须始于一颗理解他人苦难的心。",
    "mission.button": "探索更多",

    // 获得专家
    "getExpert.title": "从法律专家处获取建议",
    "getExpert.description":
      "您正计划在海外开展业务,并面临当地法律方面的难题。您想规避风险和障碍吗？我们非常理解您的处境。",
    "getExpert.button.contact": "立即联系",
    "getExpert.stats.years": "业务运营年限",
    "getExpert.stats.works": "已完成的作品",
    "getExpert.stats.customers": "有价值的客户",
    "getExpert.stats.team": "团队成员",

    "missionVision.title": "我们的使命和愿景",
    "missionVision.missionHeading": "我们的使命",
    "missionVision.missionText": "因为正义不应该只属于少数人",
    "missionVision.missionSubText": "我们让法律真正值得信赖。",
    "missionVision.visionHeading": "我们的愿景",
    "missionVision.visionText":
      "我们做这项工作是因为我们想为社会上那些没有发言权的人站在一起。",
    "missionVision.button": "探索更多",
    "missionVision.strengthsHeading": "我们的优势",
    "missionVision.strength1.title": "真正的理解",
    "missionVision.strength1.description":
      "我们用心倾听,不仅是为了找到法律解决方案,更是为了真正理解。",
    "missionVision.strength2.title": "诚实真诚",
    "missionVision.strength2.description":
      "我们相信每个人都应该受到保护。无论社会上是否有声音",
    "missionVision.strength3.title": "价格实惠",
    "missionVision.strength3.description": "我们收费合理。因为困难不会选择人",
    "missionVision.foundation":
      "Bamrung Rungruang 律师事务所的成立秉承着一个真诚的使命",
    "missionVision.foundationGoal":
      "使法律成为可及的庇护所,而不是障碍,特别是对于普通民众而言",
    "missionVision.value1.title": "平等保护",
    "missionVision.value1.description":
      "我们相信每个人都应该受到保护。无论社会上是否有声音",
    "missionVision.value2.title": "用同情心服务",
    "missionVision.value2.description":
      "我们用心倾听,不仅是为了找到法律解决方案,更是为了真正理解。",
    "missionVision.value3.title": "价格实惠",
    "missionVision.value3.description": "我们收费合理。因为困难不会选择人",
    "missionVision.value4.title": "首次免费咨询",
    "missionVision.value4.description":
      "我们很乐意提供免费的初步咨询,在您做出决定之前向您展示各种选择",
    "missionVision.finalStatement":
      "我们接手的每一个案件,我们都当做自己的事来处理。因为真正的正义始于理解他人的痛苦。",

    "contact.title": "联系我们的法律团队",
    "contact.description":
      "获得专家的法律建议,请随时发送您的问题。我们的律师将及时回复,",
    "contact.form.nameLabel": "您的姓名",
    "contact.form.namePlaceholder": "输入您的名字和姓氏",
    "contact.form.emailLabel": "电子邮件",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.phoneLabel": "电话号码",
    "contact.form.phonePlaceholder": "xxxxxxxxx",
    "contact.form.lineLabel": "LINE ID",
    "contact.form.linePlaceholder": "您的 LINE ID",
    "contact.form.subjectLabel": "主题",
    "contact.form.subjectPlaceholder": "简要描述法律问题",
    "contact.form.messageLabel": "消息*",
    "contact.form.messagePlaceholder": "请详细描述您的法律问题或疑问……",
    "contact.button.send": "发送消息",
    "contact.button.sending": "正在发送消息...",
    "contact.info.heading": "联系我们",
    "contact.info.addressLabel": "办公地址",
    "contact.info.phoneLabel": "电话",
    "contact.info.emailLabel": "电子邮件",
    "contact.info.hoursLabel": "营业时间",
    "contact.info.consultationHeading": "免费咨询",
    "contact.info.consultationText":
      "我们很乐意提供免费的初步咨询。帮助您在做出任何决定之前了解您的法律选择。",
    "contact.info.consultationNote": "无义务 • 保密 • 专业建议,",
    // 联系页面（泰国）
    "contact.info.addressValue":
      "Bamrung Rungruang 律师事务所 113/1 Soi Ban Hiang 7, Ban Hiang Road, Village No. 3, Thep Krasattri Subdistrict, Thalang District, Phuket Province 83110,",
    "contact.info.phoneValue": " 076-600861",
    "contact.info.emailValue": "info@bamroonglaw.com",
    "contact.info.hoursValue":
      "周一至周五:上午 9:00 - 下午 6:00 周六:上午 9:00 - 下午 1:00 周日:休息",
    // 联系页面（泰国）
    "contact.info.lineLabel": "LINE ID",
    "contact.info.lineValue": "@bamroonglaw",

    "footer.rights": "保留所有权利",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.address": "123 Silom Road, 曼谷 10500",
    "footer.phone": "082-2184079 ",
    "footer.email": "sugar.kantera@gmail.com",
    "footer.line": "kantera22phuket",
    "footer.copyright": "版权所有 2025 © www.bamroonglaw.com",
    // 页脚（页脚组件中泰语部分的自定义键）
    "footer.contactCase": "联系方式",
    "footer.freeConsultation": "免费初步咨询",
    "footer.assistantName": "Kanthera Tenglee 女士 (Namtan) ",
    "footer.assistantTitle": "法律助理",
    "footer.lawyerName": "律师 Bamrung Rungruang",

    // WhatsApp
    "whatsapp.Chat": "与我们聊天！",
  },

  ru: {
    // ===============================
    // NAVIGATION
    // ===============================
    "services.5.description":
"Юридические услуги, связанные с наследством умерших, включая управление имуществом, раздел, возражения и споры, связанные с завещанием",
    "profile.experience":
"Более 30 лет опыта юридической и судебной работы. Должность: юрист, Совет юристов Таиланда. Консультирование — юрист-волонтер",
    "missionVision.finalStatement": "Мы относимся к каждому случаю, который принимаем, как к своему собственному, потому что истинное правосудие начинается с понимания боли других.",
    "contact.success.desc":
      "Ваше сообщение успешно отправлено. Мы скоро свяжемся с вами!",
      "contact.description": 
"Получите профессиональную юридическую консультацию. Задавайте вопросы прямо сейчас. Наши юристы оперативно ответят.",
    "contact.success.title": "Успех!",
    "nav.home": "Домой",
    "nav.about": "О нас",
    "nav.services": "Наши услуги",
    "nav.contact": "Контакт",
    "nav.mission": "Наша миссия",
    "nav.getInTouch": "Свяжитесь с нами",
    "nav.title": "Адвокатское бюро Бамрунг",
    "whatsapp.Chat": "Общайтесь с нами!",

    // ===============================
    // HERO SECTION
    // ===============================
    "header.address":
      "3/1 Soi Ban Riang 7, Ban Riang Road, деревня № 3, район Тхеп Красаттри, район Таланг, провинция Пхукет",
    "header.phone": "094-806-9123",
    "header.consultation": "Бесплатная консультация",
    "header.available": "Открыто 24/7",
    "header.email": "bamroonglaw@gmail.com",
    "header.line": "@bamroonglaw",

    "hero.title": "Адвокат Бамрунг Рунгруанг",
    "hero.cta": "Наши услуги",
    "hero.button": "Начать",
    "hero.description1": "В дни, когда не знаешь, к кому обратиться...",
    "hero.description2":
      "Он тот, кто слушает без осуждения и стоит здесь, чтобы поддержать вас в справедливости»",

    // ===============================
    // FEATURES SECTION
    // ===============================
    "features.service": "Персонализированное обслуживание",
    "features.record": "Подтвержденный послужной список",
    "features.rated": "Юристы с самым высоким рейтингом",
    // ===============================
    // ABOUT US PAGE
    // ===============================

    "about.description":
      "Однажды в жизни я оказался в положении, когда мне приходилось сражаться, когда никто не понимал, никто не помогал, и чувствовал, что никто не слушает. Это был день, когда я решил... если однажды у меня будет достаточно знаний, я буду рядом с теми, кто нуждается в справедливости. Я получил юридическое образование и занимался как маленькими, так и большими делами, делами, которые потрясли мое сердце, и делами, которые заставили меня снова поверить, что справедливость все еще существует. Каждое дело для меня - это не просто работа, а чья-то жизнь, и я никогда этого не забуду. Вот так и родилась эта юридическая фирма... не для власти, не для славы, а для того, чтобы по-настоящему помочь нуждающимся. Если вам нужен кто-то, кто не только знает закон, но и понимает ваше сердце, я готов стоять здесь и выслушивать ваши проблемы всем сердцем и сочувствием, как семья.",
    "about.button": "Подробнее",
    "about.value1.title": "Честность",
    "about.value1.description":
      "Мы придерживаемся самых высоких этических стандартов во всей нашей юридической практике",
    "about.value2.title": "Превосходство",
    "about.value2.description":
      "Предоставление превосходных юридических услуг с точностью и опытом.",
    "about.value3.title": "Надежность",
    "about.value3.description":
      "Мы доступны, когда вы нуждаетесь в нас больше всего, и оперативно реагируем",
    "about.button.explore": "Исследовать больше",
    "about.title": "О нашем офисе",
    "about.breadcrumb.home": "Дом",
    "about.breadcrumb.current": "О нас",
    "about.introduction":
      "В дни, когда вы не знаете, к кому обратиться… Мы — люди, которые слушают без осуждения и готовы помочь вам восстановить справедливость",
    "about.coreValues.heading": "Основные ценности",
    "about.coreValues.intro":
      "Принципы, которыми руководствуется каждое решение, каждый случай и опыт каждого клиента»",
    "about.coreValues.value1.title": "Целостность",
    "about.coreValues.value1.description":
      "Мы придерживаемся самых высоких этических стандартов во всей нашей юридической практике",
    "about.coreValues.value2.title": "Превосходство",
    "about.coreValues.value2.description":
      "Оказание исключительных юридических услуг с точностью и опытом.»",
    "about.coreValues.value3.title": "Сострадание",
    "about.coreValues.value3.description":
      "Относитесь к каждому случаю с искренним состраданием и заботой",
    "about.coreValues.value4.title": "Результаты",
    "about.coreValues.value4.description":
      "Достигайте результатов, которые защищают интересы клиентов.»",

    // aboutAchievements
    "aboutus.subtitle":
      "Два десятилетия неустанной приверженности справедливости, совершенству и успеху клиентов",
    "aboutus.storyTitle": "Наша история справедливости",
    "aboutus.story1":
      "Однажды в жизни я оказался в положении, когда никто не понимал, никто не помогал и никто не чувствовал, что его слушают. В тот день я решил... если однажды у меня будет достаточно знаний, я буду рядом с теми, кто нуждается в справедливости. Я закончил юридическое образование и прошел через как маленькие, так и большие дела, дела, которые потрясли мое сердце, и дела, которые заставили меня снова поверить, что справедливость все еще существует. Для меня каждое дело - это не просто работа, а чья-то жизнь, и я никогда этого не забуду",
    "aboutus.story2":
      "Эта юридическая фирма родилась... не для власти, не для славы, а для того, чтобы по-настоящему помогать нуждающимся. Если вам нужен кто-то, кто не только знает закон, но и понимает ваше сердце, я готов стоять здесь и выслушивать ваши проблемы всем сердцем и сочувствием. Как семья и друзья",
    "aboutus.story3": "Спасибо, что доверяете мне",
    "aboutus.story4": "Страдание, Проблемы, Консультация",
    "aboutus.story5": "Адвокат Бамрунг Рунгруанг",

    "aboutus.ctaButton": "Запланировать консультацию",

    "aboutus.achievement1": "Год совершенства",
    "aboutus.achievement2": "Успешные случаи",
    "aboutus.achievement3": "Уровень успеха",
    "aboutus.achievement4": "Поддерживаемые языки",

    "aboutus.values.title": "Наши основные ценности",
    "aboutus.values.subtitle":
      "Два десятилетия непоколебимой приверженности справедливости, совершенству и успеху клиентов",
    "aboutus.value1.title": "Честность",
    "aboutus.value1.description":
      "Приверженность высочайшим этическим стандартам во всей нашей юридической практике",

    "aboutus.value2.title": "Превосходство",
    "aboutus.value2.description":
      "Оказание исключительных юридических услуг с точностью и опытом",

    "aboutus.value3.title": "Сострадание",
    "aboutus.value3.description":
      "Относимся к каждому случаю с искренним состраданием и заботой",

    "aboutus.value4.title": "Результаты",
    "aboutus.value4.description":
      "Достижение результатов, защищающих интересы наших клиентов",

    // CTA
    "aboutus.ctaTitle": "Готовы работать с нами?",

    "aboutus.ctaDesc":
      "Позвольте нашей опытной команде помочь вам решить ваши юридические проблемы с опытом и преданностью делу",

    "aboutus.ctaBtn1": "Получить бесплатную консультацию",

    "aboutus.ctaBtn2": "Посмотрите наши услуги",

    // aboutValues

    // Call to action
    "cta.title": "Нужна юридическая помощь?",
    "cta.description":
      "Свяжитесь с нами сегодня для бесплатной консультации с одним из наших опытных адвокатов.",
    "cta.button": "Связаться с нами сейчас",

    // Office strengths
    "strengths.title": "Сильные стороны офиса",
    "strongs.description":
      "Наше адвокатское бюро было создано для оказания помощи тем, кто сталкивается с юридическими проблемами, путем предоставления комплексных юридических услуг. Мы стремимся обеспечить равный доступ к правосудию для всех клиентов, нуждающихся в юридической помощи",

    // YouTube section
    "youtube.title": "Последние видео",
    "youtube.subscribers": "Подписчики",
    "youtube.videos": "Видео",
    "youtube.views": "Просмотры",
    //ABOUT US PAGE
    "aboutus.title.one": "ООО",
    "aboutus.title.two": "Наша фирма",
    //SERVICES PAGE

    "services.1.title": "Гражданские дела",
    "services.1.subtitle": "Полное юридическое представительство",
    "services.1.description":
      "Экспертное юридическое представительство по всем типам гражданских дел. Наши опытные адвокаты ведут судебные разбирательства с самоотдачей и опытом, обеспечивая защиту ваших прав на протяжении всего судебного процесса",
    "services.1.fullDescription":
      "Мы обеспечиваем комплексное юридическое представительство как по гражданским делам, занимаясь всем, от первоначальной консультации до окончательного приговора. Наша команда имеет большой опыт защиты по уголовным делам, телесным повреждениям, контрактным спорам и семейному праву. Мы гарантируем, что каждый клиент получает индивидуальное внимание и агрессивное представительство в суде",
    "services.1.features": [
      "Иски о возмещении ущерба",
      "Нарушение договора",
      "Раздел наследства и имущества",
      "Земельные споры, сервитуты, права владения",
      "Дела о выселении и сносе",
      "Диктные дела (например, автомобильные аварии, материальный ущерб)",
    ],
    "services.2.title": "Уголовные дела",
    "services.2.subtitle": "Преступления по уголовному праву",
    "services.2.description":
      "Комплексное юридическое представительство для клиентов, задействованных в преступлениях, включая кражу и нападение до тяжелых преступлений, таких как убийство и сексуальные преступления",
    "services.2.fullDescription":
      "Наша команда по уголовному праву предоставляет экспертное юридическое защиту и прокурорское обслуживание для широкого диапазона уголовных дел. Мы занимаемся всем, от небольших преступлений до серьезных уголовных дел, включая мошенничество, преступления, связанные с наркотиками, жестокое обращение и более. Мы гарантируем, что ваши права защищены на протяжении всего правового процесса и предлагаем стратегическое руководство на каждом этапе",
    "services.2.features": [
      "Кража, растрата, мошенничество",
      "Наркопреступления",
      "Нападение, убийство",
      "Клевета",
      "Похищение детей, сексуальное насилие",
      "Подделка документов",
    ],
    "services.3.title": "Трудовые споры",
    "services.3.subtitle": "Вопросы трудового права",
    "services.3.description":
      "Юридическая поддержка для решения трудовых споров, включая несправедливое увольнение, споры о компенсации и нарушения прав работников",
    "services.3.fullDescription":
      "Мы специализируемся на разрешении трудовых споров между работодателями и работниками, предоставляя экспертное юридическое содействие в случаях несправедливого увольнения, спорах о заработной плате или福利, нарушения трудовых договоров и спорах о правах работников. Наша цель - защитить ваши права и эффективно разрешать конфликты путем переговоров или судебных разбирательств",
    "services.3.features": [
      "Несправедливое увольнение",
      "Споры о компенсации",
      "Нарушение трудового договора",
      "Споры о福利 и правах работников",
    ],
    "services.4.title": "Семейные и детские дела",
    "services.4.subtitle": "Семейные и детские вопросы",
    "services.4.description":
      "Юридическая поддержка и представительство в семейных и детских вопросах, включая развод, опекунство над детьми, споры о алиментах и разделе имущества",
    "services.4.fullDescription":
      "Мы предоставляем юридическую поддержку и представительство в семейных и детских вопросах, включая развод, опекунство над детьми, споры о алиментах и разделе имущества. Наша цель - защитить ваши права и эффективно разрешать конфликты путем переговоров или судебных разбирательств",
    "services.4.features": [
      "Развод",
      "Опекунство над детьми",
      "Споры о алиментах",
      "Споры о разделе имущества",
    ],
    "services.5.title": "Случаи наследования",
    "services.5.subtitle": "Вопросы, связанные с недвижимостью",
    "услуги.5.описание":
      "Юридические услуги, связанные с имуществом умерших лиц, включая управление, раздел, возражения и завещательные споры",
    "services.5.fullDescription":
      "Мы предлагаем экспертное юридическое представительство в вопросах наследования, включая управление наследством, раздел имущества и споры по поводу завещаний. Будь то назначение управляющих имуществом, оспаривание управления имуществом или рассмотрение обвинений в подделке завещания, наша юридическая команда гарантирует соблюдение ваших прав на протяжении всего процесса",
    "services.5.features": [
      "Назначение управляющих имуществом",
      "Отдел недвижимости",
      "Возражения против управления имуществом",
      "Будут подделывать дела",
    ],
    "services.6.title": "Потребительские, корпоративные и коммерческие споры",
    "services.6.subtitle": "Споры по торговле, платежам и услугам",
    "services.6.description":
      "Юридические услуги для разрешения споров, связанных с дефектными товарами, торговыми конфликтами, невыплаченными платежами и чеками в потребительском и бизнес-контекстах",
    "services.6.fullDescription":
      "Наша команда по потребительским, корпоративным и коммерческим спорам предоставляет юридическую поддержку и представительство в случаях, связанных с дефектными товарами, торговыми конфликтами, невыплаченными платежами и чеками. Мы гарантируем, что ваши права защищены на протяжении всего правового процесса и предлагаем стратегическое руководство на каждом этапе",
    "services.6.features": [
      "Файл для банкротства",
      "Переговоры по реструктуризации долга и реабилитации",
    ],
    "services.7.title": "Административное право",
    "services.7.subtitle": "Споры с государственными органами",
    "services.7.description":
      "Юридические услуги по подаче исков против государственных органов и оспариванию административных решений, таких как экспроприация земли",
    "services.7.fullDescription":
      "Мы представляем интересы частных лиц и предприятий в делах административного права, связанных со спорами с государственными органами. Это включает в себя подачу исков против государственных органов, оспаривание административных постановлений и защиту прав в таких случаях, как экспроприация земли или злоупотребление нормативными актами. Наша фирма гарантирует, что все разбирательства проводятся с точностью и в соответствии с законом",
    "services.7.features": [
      "Иски против государственных органов",
      "Оспаривание административных распоряжений (например, экспроприация земли)",
    ],
    "services.8.title": "Банкротство и реабилитация бизнеса",
    "services.8.subtitle":
      "Неплатежеспособность, списание долгов и корпоративное восстановление",
    "services.8.description":
      "Юридические услуги физическим и юридическим лицам, столкнувшимся с банкротством, включая реструктуризацию долга и планирование реабилитации",
    "services.8.fullDescription":
      "Мы помогаем клиентам в процедурах банкротства и реабилитации бизнеса. Наши услуги включают в себя подачу заявления о банкротстве, согласование планов реструктуризации долга и представление интересов клиентов в делах о реабилитации. Мы стремимся обеспечить устойчивые стратегии финансового восстановления, обеспечивая при этом соблюдение юридических обязательств",
    "services.8.features": [
      "Подача заявления о банкротстве",
      "Переговоры по реструктуризации и реабилитации долга",
    ],

    "services.title.one": "Наши услуги",
    "services.title.two": "",
    "services.subtitle":
      "Наш офис предоставляет комплексные юридические консультационные услуги, охватывающие все области права, включая гражданское, уголовное, трудовое, семейное, наследственное, уголовные дела, связанные с коррупцией и неправомерными действиями со стороны государственных чиновников, банкротство, налогообложение, интеллектуальную собственность, а также дела по делам несовершеннолетних и семейным судам. Мы принимаем дела по всей стране. Мы готовы помочь вам от начальной стадии дела до его окончательного завершения. Кроме того, мы также предоставляем штатных юридических консультаций компаниям, предприятиям и юридическим лицам для поддержки их деятельности стабильным и юридически законным образом. Независимо от того, какой правовой вопрос с которыми вы сталкиваетесь, мы готовы предоставить совет, опираясь на понимание и опыт, приобретенные на основе более чем 30-летнего юридического опыта. Мы твердо поддерживаем вас своими знаниями, честностью и сердцем защитника справедливости, гарантируя, что вы никогда не столкнетесь с юридическими проблемами в одиночку",
    "services.civil": "Прием гражданских и уголовных дел",
    "services.civil.description":
      "Мы юристы, которые принимают все виды дел и представляют интересы сторон в судебных разбирательствах, как гражданских, так и уголовных.",
    "services.enforcement": "Принятие исполнительных работ",
    "services.enforcement.description":
      "Услуги по конфискации активов, аресту, аресту или приостановлению действия, дополнительному рынку и другим делам о банкротстве",
    "services.contracts": "Принятие юридических проверок контрактов",
    "services.contracts.description":
      "Услуги по рассмотрению и составлению контрактов, консультирование по различным контрактам и завещаниям",
    "услуги.консультации":
      "Прием юридических консультаций и консультационных услуг",
    "services.consultation.description":
      "Предоставление консультаций, советов, мнений и услуг по решению проблем. Предоставление юридических консультаций частным компаниям",
    "services.appeals": "Апелляции/Апелляции",
    "services.appeals.description":
      "Мошенничество, клевета, частные уголовные дела, в том числе земельные уголовные дела",
    "services.negotiation": "Переговоры по долгу/взыскание долга",
    "services.negotiation.description":
      "Переговоры по долгам, разрешение долгов, отслеживание и ускорение просроченной задолженности",

    "services.areas": "Специализированные юридические области",
    "services.cta.title": "Нужна профессиональная юридическая помощь?",
    "services.cta.desc":
      "Наша опытная команда юристов рада предоставить профессиональные консультации и экспертные рекомендации с учетом ваших конкретных потребностей. Свяжитесь с нами сегодня, чтобы получить комплексную юридическую стратегию",
    "services.cta.btn": "Запланировать бесплатную консультацию",
    "services.feature": "Основные функции",
    "services.btn1": "Получить бесплатную консультацию",
    "services.btn2": "Вернуться к службам",
    "profile.section": "Обо мне",
    "profile.name": "Бамрунг Рунгруанг",
    "profile.title": "Юрист, Совет юристов Таиланда",
    "profile.position": "Позиция",
    "профиль.опыт":
      "Более 30 лет опыта юридической и судебной практики. Должность: Юрист, Совет юристов Таиланда. Консультации – Юрист-волонтер",
    "profile.consulting": "Консалтинг - Юрист-волонтер",
    "profile.education": "Образование",
    "profile.education.bachelor": "Степень бакалавра",
    "profile.education.bachelor.detail":
      "Бакалавр права, Открытый университет Сукотаи Тамматират",
    "profile.education.master": "Степень магистра",
    "profile.education.master.detail":
      "Политология, специальность: Политическая коммуникация Криркского университета",

    "profile.education.phd": "Докторская степень",

    "profile.education.phd.detail": "Почетный доктор политических наук LADC",

    "services.heading": "Наши услуги",

    "services.button.explore": "Исследовать больше",

    // Mission & Vision
    "mission.title": "Наша миссия и видение",
    "mission.missionHeading": "Видение",
    "mission.missionText":
      "Потому что справедливость…не должна быть предназначена для избранных. Мы делаем закон действительно достоверным. Мы в этой профессии, потому что хотим стоять с безмолвными. Наши сильные стороны – это понимание, честность и доступная цена.",
    "mission.missionSubText":
      "Наши сильные стороны – это понимание, честность и доступная цена.",
    "mission.visionHeading": "Наше видение",
    "mission.visionText":
      "Khun Bamrung Rungruang Law Firm была основана с искренним желанием видеть закон доступным, а не барьером, отделяющим обычных людей от справедливости. Мы верим, что каждый должен иметь право на защиту, независимо от того, есть ли у него голос. Мы слушаем с всем сердцем, не только для получения юридических советов, но и для понимания. Наши цены доступны, потому что мы понимаем, что страдание не дифференцируется. Мы предлагаем бесплатные первичные консультации, чтобы помочь вам найти решение до принятия решения. Мы относимся к каждому делу как к своему, считая, что истинная справедливость начинается с сердца, понимающего страдания других.",

    "mission.button": "Исследовать больше",

    // Get an Expert
    "getExpert.title": "Получите юридические советы от юриста",
    "getExpert.description":
      "Вы планируете начать бизнес за рубежом и столкнулись с трудностями с местным законодательством? Вы хотите избежать рисков и препятствий? Мы очень хорошо понимаем эту ситуацию.",
    "getExpert.button.contact": "Свяжитесь с нами сейчас",
    "getExpert.stats.years": "Лет в бизнесе",
    "getExpert.stats.works": "Достижения",

    "getExpert.stats.customers": "Ценные клиенты",
    "getExpert.stats.team": "Члены команды",

    // Mission & Vision (TH)
    "missionVision.title": "Наша миссия и видение",
    "missionVision.missionHeading": "Наша миссия",
    "missionVision.missionText":
      "Потому что справедливость…не должна быть предназначена для избранных. Мы делаем закон действительно достоверным. Мы в этой профессии, потому что хотим стоять с безмолвными. Наши сильные стороны – это понимание, честность и доступная цена.",

    "missionVision.missionSubText":
      "Наши сильные стороны – это понимание, честность и доступная цена.",
    "missionVision.visionHeading": "Наше видение",
    "missionVision.visionText":
      "Khun Bamrung Rungruang Law Firm была основана с искренним желанием видеть закон доступным, а не барьером, отделяющим обычных людей от справедливости. Мы верим, что каждый должен иметь право на защиту, независимо от того, есть ли у него голос. Мы слушаем с всем сердцем, не только для получения юридических советов, но и для понимания. Наши цены доступны, потому что мы понимаем, что страдание не дифференцируется. Мы предлагаем бесплатные первичные консультации, чтобы помочь вам найти решение до принятия решения. Мы относимся к каждому делу как к своему, считая, что истинная справедливость начинается с сердца, понимающего страдания других.",
    "missionVision.button": "Исследовать больше",
    "missionVision.strengthsHeading": "Наши сильные стороны",
    "missionVision.strength1.title": "Истинное понимание",
    "missionVision.strength1.description":
      "Мы слушаем с сердцем, не только для получения юридических решений, но и для действительного понимания.",
    "missionVision.strength2.title": "Честность и искренность",
    "missionVision.strength2.description":
      "Мы верим, что каждый заслуживает защиту, независимо от того, есть ли у него голос в обществе или нет.",
    "missionVision.strength3.title": "Доступная и справедливая цена",
    "missionVision.strength3.description":
      "Мы поддерживаем наши услуги доступными, потому что страдание не дифференцируется.",
    "missionVision.foundation":
      "Khun Bamrung Rungruang Law Firm была основана с искренним желанием видеть закон доступным, а не барьером, отделяющим обычных людей от справедливости. Мы верим, что каждый должен иметь право на защиту, независимо от того, есть ли у него голос. Мы слушаем с всем сердцем, не только для получения юридических советов, но и для понимания. Наши цены доступны, потому что мы понимаем, что страдание не дифференцируется. Мы предлагаем бесплатные первичные консультации, чтобы помочь вам найти решение до принятия решения. Мы относимся к каждому делу как к своему, считая, что истинная справедливость начинается с сердца, понимающего страдания других.",
    "missionVision.foundationGoal":
      "Сделать закон доступным, а не препятствием, особенно для обычных людей.",
    "missionVision.value1.title": "Равная защита",
    "missionVision.value1.description":
      "Мы верим, что каждый заслуживает защиту, независимо от того, есть ли у него голос в обществе или нет.",
    "missionVision.value2.title": "Сердечное обслуживание",
    "missionVision.value2.description":
      "Мы слушаем с сердцем, не только для получения юридических решений, но и для действительного понимания.",
    "missionVision.value3.title": "Доступная цена",
    "missionVision.value3.description":
      "Мы поддерживаем наши услуги доступными, потому что страдание не дифференцируется.",
    "missionVision.value4.title": "Бесплатные консультации",
    "missionVision.value4.description":
      "Мы предлагаем бесплатные первичные консультации, чтобы помочь вам найти решение до принятия решения.",
    "mission Vision.final Statement":
      "Мы относимся к каждому случаю, который принимаем, как к своему собственному, потому что истинное правосудие начинается с понимания боли других.",

    // Contact Page (TH)

    "contact.title": "Свяжитесь с нашим юридическим отделом",
    "контакт.описание":
      "Получите профессиональную юридическую консультацию. Задавайте вопросы прямо сейчас. Наши юристы оперативно ответят.",
    "contact.form.nameLabel": "Ваше имя",
    "contact.form.namePlaceholder": "Введите свое полное имя",
    "contact.form.emailLabel": "Электронная почта",
    "contact.form.emailPlaceholder": "Ваш.email@example.com",
    "contact.form.phoneLabel": "Номер телефона",
    "contact.form.phonePlaceholder": " xxxxxxxxx",
    "contact.form.lineLabel": "ИД ЛИНИИ",
    "contact.form.linePlaceholder": "Ваш ID ЛИНИИ",
    "contact.form.subjectLabel": "Тема",
    "contact.form.subjectPlaceholder": "Кратко опишите юридический вопрос",
    "contact.form.messageLabel": "Сообщение *",
    "contact.form.messagePlaceholder":
      "Пожалуйста, подробно опишите Вашу юридическую проблему или вопрос...",
    "contact.button.send": "Отправить сообщение",
    "contact.button.sending": "Отправка сообщения...",
    "contact.info.heading": "Свяжитесь с нами",
    "contact.info.addressLabel": "Адрес офиса",
    "contact.info.phoneLabel": "Телефон",
    "contact.info.emailLabel": "Электронная почта",
    "contact.info.hoursLabel": "Рабочие часы",
    "contact.info.consultationHeading": "Бесплатная консультация",
    "contact.info.consultationText":
      "Мы предлагаем бесплатную первоначальную консультацию. Чтобы помочь вам понять ваши юридические возможности, прежде чем принимать какие-либо решения",
    "contact.info.consultationNote":
      "Никаких обязательств • Конфиденциально • Профессиональная консультация.",
    // Страница контактов (TH)
    "contact.info.addressValue":
      "Адвокатский офис Бамрунг Рунгруанг, 113/1 Сой Бан Рианг 7, Бан Рианг Роуд, деревня № 3, район Тхеп Красаттри, район Таланг, провинция Пхукет 83110",
    "contact.info.phoneValue": "076-600861",
    "contact.info.emailValue": "info@bamroonglaw.com",
    "contact.info.hoursValue":
      "Понедельник — пятница: 9:00 — 18:00, суббота: 9:00 — 13:00, воскресенье: выходной",
    "contact.info.lineLabel": "ИД ЛИНИИ",
    "contact.info.lineValue": "@bamroonglaw",

    "footer.rights": "Все права защищены",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия обслуживания",
    "footer.address": "123 Silom Road, Bangkok 10500",
    "footer.phone": "082-2184079",
    "footer.email": "sugar.kantera@gmail.com",
    "footer.line": "kantera22phuket",
    "footer.copyright": "Авторское право 2025 © www.bamroonglaw.com",
    // Нижний колонтитул (пользовательские ключи для тайского раздела в компоненте нижнего колонтитула)
    "footer.contactCase": "Обращение по юридическим вопросам",
    "footer.freeConsultation": "Бесплатная первичная консультация",
    "footer.assistantName": "Кантера Тенгли (Намтан)",
    "footer.assistantTitle": "Помощник по правовым вопросам",
    "footer.lawyerName": "Адвокат Бамрунг Рунгруанг",

    // WhatsApp
   
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getBrowserLanguage = (): Language => {
    const userLang = navigator.language.split("-")[0];
    if (userLang === "th") return "th";
    if (userLang === "zh") return "zh";
    if (userLang === "ru") return "ru";
    return "en";
  };

  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem("language") as Language;
    return storedLanguage || getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;

    if (language === "en") {
      document.title = "Thailand Law Firm - Professional Legal Services";
    } else if (language === "th") {
      document.title =
        "สำนักงานกฎหมาย บำรุงโภชนา - บริการทางกฎหมายโดยทนายความมืออาชีพ";
    } else if (language === "zh") {
      document.title = "泰国律师事务所 - 专业法律服务";
    } else if (language === "ru") {
      document.title =
        "Таиланд юридическая фирма - профессиональные юридические услуги";
    }
  }, [language]);

  const t = (key: string): string | string[] => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
