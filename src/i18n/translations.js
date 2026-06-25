// All UI text in English and Amharic
const translations = {
  en: {
    // Nav
    ourStory: "Our Story",
    details:  "Details",
    gallery:  "Gallery",
    rsvp:     "RSVP",

    // Hero
    cordiallyInvited: "You are cordially invited to celebrate",
    theMarriageOf:    "the marriage of",

    // Couple
    storyEyebrow: "Our Story",
    storyTitle:   "Two souls,",
    storyItalic:  "one beautiful journey",
    storyQuote:   '"From this day forward, you shall not walk alone. My heart will be your shelter and my arms will be your home."',

    // Details
    detailsEyebrow: "Ceremony & Reception",
    detailsTitle:   "The",
    detailsItalic:  "Details",
    dateLabel:      "Date",
    timeLabel:      "Time",
    venueLabel:     "Venue",
    dressLabel:     "Dress Code",
    valentines:     "Valentine's Day",
    formalAttire:   "Formal Attire",
    receptionFollows: "Reception",

    // Countdown
    countdownEyebrow: "The Big Day",
    countdownTitle:   "Counting down to",
    countdownItalic:  "forever",
    days:    "Days",
    hours:   "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    todayMsg: "Today is the day! 🎉",

    // Gallery
    galleryEyebrow: "Our Memories",
    galleryTitle:   "A glimpse of our",
    galleryItalic:  "journey",
    gallerySlots: ["Where it all began","The proposal","Engagement","Our adventure","Always together"],
    galleryHint:    "Replace placeholders with your photos",

    // RSVP
    rsvpEyebrow:    "Kindly Reply",
    rsvpTitle:      "Reserve your",
    rsvpItalic:     "seat",
    rsvpDeadlineMsg:"Please respond by",
    namePlaceholder:"Your full name",
    nameLabel:      "Full Name",
    attendLabel:    "Will you attend?",
    accepts:        "Joyfully Accepts",
    declines:       "Regretfully Declines",
    guestsLabel:    "Number of Guests",
    mealLabel:      "Meal Preference",
    messageLabel:   "Message for the Couple (optional)",
    messagePlaceholder: "Share your wishes…",
    sendReply:      "Send Reply",
    sending:        "Sending…",
    mealOptions:    ["Select preference","Standard","Vegetarian","Vegan","Halal","Gluten-free"],
    guestOptions:   ["1 — Just me","2 — Myself & partner","3 — Three guests","4 — Four guests"],
    successTitle:   "Thank you!",
    successYes:     "Your RSVP has been received. We can't wait to celebrate with you!",
    successNo:      "We'll miss you on our special day and hope to celebrate with you soon.",
    nameError:      "Please enter your name.",

    // QR
    qrEyebrow:  "Your Invitation",
    qrTitle:    "Your personal",
    qrItalic:   "QR code",
    qrNote:     "This QR code is unique to you. Scan it at the venue entrance to verify your attendance.",
    qrPersonal: "Personal · Non-transferable",

    // Footer
    footerNote: "This invitation is personal and non-transferable",

    // Access screens
    validating:     "Verifying your invitation…",
    invalidTitle:   "Invalid Invitation",
    invalidMsg:     "This invitation link is not valid. Please check the QR code on your invitation card.",
    usedTitle:      "Invitation Already Used",
    usedMsg:        "This invitation has already been accessed. Each QR code is valid for one person only.",
    usedSubMsg:     "If you believe this is an error, please contact the couple.",
    scanPrompt:     "Please scan your personal QR code to access this invitation.",

    // Admin
    adminTitle:     "Guest Manager",
    adminSubtitle:  "Generate & manage guest invitations",
    addGuest:       "Add Guest",
    guestNameLabel: "Guest Name",
    guestNamePh:    "e.g. Abebe Kebede",
    generate:       "Generate QR",
    downloadQR:     "Download QR",
    copyLink:       "Copy Link",
    copied:         "Copied!",
    guestList:      "Guest List",
    noGuests:       "No guests added yet.",
    status:         "Status",
    notScanned:     "Not Yet Scanned",
    scanned:        "Scanned",
    rsvpStatus:     "RSVP",
    pending:        "Pending",
    attending:      "Attending",
    notAttending:   "Declined",
    deleteGuest:    "Remove",
    totalGuests:    "Total Guests",
    scannedCount:   "Scanned",
    rsvpCount:      "RSVPs Received",
    baseUrlLabel:   "Base Invitation URL",
    baseUrlPh:      "https://biruhmind.et/wedding-invitation/",
    saveSettings:   "Save",
  },

  am: {
    // Nav
    ourStory: "ታሪካችን",
    details:  "ዝርዝሮች",
    gallery:  "ፎቶዎች",
    rsvp:     "ምላሽ",

    // Hero
    cordiallyInvited: "ለሚከተለው ክብረ በዓል እንዲታደሙ ከልብ ይጋበዛሉ",
    theMarriageOf:    "የጋብቻ ሥነ ሥርዓት",

    // Couple
    storyEyebrow: "ታሪካችን",
    storyTitle:   "ሁለት ነፍሳት፣",
    storyItalic:  "አንድ ቆንጆ ጉዞ",
    storyQuote:   '"ከዛሬ ጀምሮ ብቻህን አትሄድም። ልቤ መጠለያህ ይሆናል፣ ክንዶቼም ቤትህ ይሆናሉ።"',

    // Details
    detailsEyebrow: "ሥነ ሥርዓትና አቀባበል",
    detailsTitle:   "",
    detailsItalic:  "ዝርዝሮች",
    dateLabel:      "ቀን",
    timeLabel:      "ሰዓት",
    venueLabel:     "ቦታ",
    dressLabel:     "አለባበስ",
    valentines:     "የቫለንታይን ቀን",
    formalAttire:   "መደበኛ አለባበስ",
    receptionFollows: "አቀባበል",

    // Countdown
    countdownEyebrow: "ታላቁ ቀን",
    countdownTitle:   "ወደ",
    countdownItalic:  "ዘለዓለም እቆጥራለሁ",
    days:    "ቀናት",
    hours:   "ሰዓታት",
    minutes: "ደቂቃዎች",
    seconds: "ሰከንዶች",
    todayMsg: "ዛሬ ቀኑ ነው! 🎉",

    // Gallery
    galleryEyebrow: "ትዝታዎቻችን",
    galleryTitle:   "የጉዞአችን",
    galleryItalic:  "አጭር እይታ",
    gallerySlots: ["ሁሉም የጀመረበት","ጥያቄው","ጠ/ሰርዓቱ","ጀብዱአችን","ሁልጊዜ አብረን"],
    galleryHint:    "ፎቶዎቹን በራስዎ ፎቶ ይተኩ",

    // RSVP
    rsvpEyebrow:    "ምላሽ ይስጡ",
    rsvpTitle:      "ቦታዎን",
    rsvpItalic:     "ያስጠብቁ",
    rsvpDeadlineMsg:"እባክዎ ምላሽ ይስጡ",
    namePlaceholder:"ሙሉ ስምዎ",
    nameLabel:      "ሙሉ ስም",
    attendLabel:    "ይታደማሉ?",
    accepts:        "በደስታ እቀበላለሁ",
    declines:       "ይቅርታ፣ አልችልም",
    guestsLabel:    "የእንግዶች ቁጥር",
    mealLabel:      "የምግብ ምርጫ",
    messageLabel:   "ለጥንዶቹ መልእክት (አማራጭ)",
    messagePlaceholder: "መልካም ምኞትዎን ያጋሩ…",
    sendReply:      "ምላሽ ይላኩ",
    sending:        "እየተላከ ነው…",
    mealOptions:    ["ምርጫ ይምረጡ","መደበኛ","አትክልታዊ","ቪጋን","ሃላል","ግሉተን-ነፃ"],
    guestOptions:   ["1 — እኔ ብቻ","2 — እኔና አጋሬ","3 — ሦስት እንግዶች","4 — አራት እንግዶች"],
    successTitle:   "እናመሰግናለን!",
    successYes:     "ምላሽዎ ደርሷል። አብረን ለማክበር እጅግ ጓጉተናል!",
    successNo:      "ባለበዓሉ ቀን ይናፍቁናል። ሌላ ጊዜ አብረን ልናከብር ተስፋ እናደርጋለን።",
    nameError:      "እባክዎ ስምዎን ያስገቡ።",

    // QR
    qrEyebrow:  "ግብዣዎ",
    qrTitle:    "የግልዎ",
    qrItalic:   "QR ኮድ",
    qrNote:     "ይህ QR ኮድ ለእርስዎ ብቻ ነው። በዝግጅቱ ቦታ መግቢያ ላይ ስካን ያድርጉ።",
    qrPersonal: "ግላዊ · ሊዛወር አይችልም",

    // Footer
    footerNote: "ይህ ግብዣ ግላዊ ሲሆን ሊዛወር አይችልም",

    // Access screens
    validating:     "ግብዣዎን እያረጋገጥን ነው…",
    invalidTitle:   "ልክ ያልሆነ ግብዣ",
    invalidMsg:     "የዚህ ግብዣ ሊንክ ትክክለኛ አይደለም። እባክዎ በካርድዎ ላይ ያለውን QR ኮድ ይፈትሹ።",
    usedTitle:      "ግብዣ ቀደሞ ጥቅም ላይ ውሏል",
    usedMsg:        "ይህ ግብዣ ቀድሞ ተጠቅሞበታል። እያንዳንዱ QR ኮድ ለአንድ ሰው ብቻ ያገለግላል።",
    usedSubMsg:     "ይህ ስህተት ነው ብለው ካሰቡ፣ እባክዎ ጥንዶቹን ያነጋግሩ።",
    scanPrompt:     "ይህን ግብዣ ለመድረስ የግልዎ QR ኮድ ይቃኙ።",

    // Admin (English only — for organiser use)
    adminTitle:     "Guest Manager",
    adminSubtitle:  "Generate & manage guest invitations",
    addGuest:       "Add Guest",
    guestNameLabel: "Guest Name",
    guestNamePh:    "e.g. Abebe Kebede",
    generate:       "Generate QR",
    downloadQR:     "Download QR",
    copyLink:       "Copy Link",
    copied:         "Copied!",
    guestList:      "Guest List",
    noGuests:       "No guests added yet.",
    status:         "Status",
    notScanned:     "Not Yet Scanned",
    scanned:        "Scanned",
    rsvpStatus:     "RSVP",
    pending:        "Pending",
    attending:      "Attending",
    notAttending:   "Declined",
    deleteGuest:    "Remove",
    totalGuests:    "Total Guests",
    scannedCount:   "Scanned",
    rsvpCount:      "RSVPs Received",
    baseUrlLabel:   "Base Invitation URL",
    baseUrlPh:      "https://biruhmind.et/wedding-invitation/",
    saveSettings:   "Save",
  }
};

export default translations;
