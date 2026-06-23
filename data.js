// ============================================
// بيانات المنصة التعليمية
// Platform Data
// ============================================
// لإضافة دورة/مقرر جديد:
// 1. انسخ كائن Course
// 2. عدّل العناوين والمحاضرات والصور
// 3. أضفه إلى المصفوفة courses
// ============================================

const platformData = {
    siteTitle: {
        ar: "منصة التشريح التعليمية",
        en: "Anatomy Learning Platform"
    },
    siteSubtitle: {
        ar: "ملخصات جامعية تفاعلية مع نطق صحيح واختبارات ومراجعات سريعة",
        en: "Interactive university summaries with pronunciation, quizzes & quick reviews"
    },
    footerText: {
        ar: "منصة تعليمية تفاعلية لملخصات الجامعة",
        en: "Interactive platform for university summaries"
    },
    professor: {
        ar: "أ.د. صلاح المرعشي",
        en: "Prof. Salah Al-Marashi"
    },
    courses: [
        {
            id: "anatomy-week1",
            title: {
                ar: "التشريح - مواضيع الأسبوع الأول",
                en: "Anatomy - Week 1 Topics"
            },
            subtitle: {
                ar: "الأسبوع الأول - المرحلة الأولى",
                en: "Week 1 - First Stage"
            },
            description: {
                ar: "دراسة الجهاز العضلي الهيكلي وعظام الجمجمة والهيكل الوجهي والمفصل الفكي الصدغي.",
                en: "Study of the musculoskeletal system, skull bones, facial skeleton, and temporomandibular joint."
            },
            image: "https://images.pexels.com/photos/5427825/pexels-photo-5427825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
            badge: {
                ar: "الأسبوع 1",
                en: "Week 1"
            },
            stats: {
                lectures: 3,
                bones: 14,
                muscles: 4,
                tmj: 1
            },
            lectures: [
                {
                    id: "lecture1",
                    icon: "🦴",
                    title: {
                        ar: "مقدمة في الجهاز العضلي الهيكلي",
                        en: "Introduction to Musculoskeletal System"
                    },
                    topics: [
                        { ar: "أنواع العظام", en: "Types of bones" },
                        { ar: "تصنيف المفاصل", en: "Classification of joints" },
                        { ar: "أنواع العضلات", en: "Types of muscles" },
                        { ar: "المصطلحات الأساسية", en: "Basic terminology" }
                    ],
                    sections: [
                        {
                            type: "intro",
                            title: { ar: "نظرة عامة", en: "Overview" },
                            content: {
                                ar: "Anatomy - دراسة الجهاز العضلي الهيكلي وعظام الجمجمة. اضغط على أيقونة الصوت بجانب أي مصطلح لسماع النطق الصحيح.",
                                en: "Anatomy - study of the musculoskeletal system and skull bones. Click the audio icon next to any term to hear correct pronunciation."
                            }
                        },
                        {
                            type: "images",
                            title: { ar: "📷 صور توضيحية", en: "Illustrative Images" },
                            images: [
                                {
                                    src: "https://images.pexels.com/photos/5428151/pexels-photo-5428151.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
                                    caption: { ar: "نموذج الهيكل العظمي البشري - يحتوي على أكثر من 206 عظمة", en: "Human skeleton model - contains more than 206 bones" }
                                },
                                {
                                    src: "https://images.pexels.com/photos/5427652/pexels-photo-5427652.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
                                    caption: { ar: "عظام اليد - مثال على العظام القصيرة (Carpals) في الرسغ والعظام الطويلة (Metacarpals) في راحة اليد", en: "Hand bones - example of short bones (Carpals) in wrist and long bones (Metacarpals) in palm" }
                                },
                                {
                                    src: "https://images.pexels.com/photos/8472000/pexels-photo-8472000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
                                    caption: { ar: "الهيكل العظمي مع الأعضاء الداخلية - يوضح وظيفة العظام في حماية الأعضاء", en: "Skeleton with internal organs - shows the protective function of bones" }
                                }
                            ]
                        },
                        {
                            type: "terms",
                            title: { ar: "🦴 أنواع العظام", en: "Types of Bones" },
                            terms: [
                                {
                                    ar: "العظام الطويلة",
                                    en: "Long Bones",
                                    enPronunciation: "Long Bones",
                                    description: {
                                        ar: "مثل عظم الفخذ (Femur) والعضد (Humerus) - أطول من عرضها، لها جسم (Diaphysis) ونهايتان (Epiphyses).",
                                        en: "e.g., Femur, Humerus — longer than wide, have diaphysis and epiphyses."
                                    }
                                },
                                {
                                    ar: "العظام القصيرة",
                                    en: "Short Bones",
                                    enPronunciation: "Short Bones",
                                    description: {
                                        ar: "مثل عظام الرسغ (Carpals) والكاحل (Tarsals) - مكعبة الشكل تقريباً.",
                                        en: "e.g., Carpals, Tarsals — roughly cube-shaped."
                                    }
                                },
                                {
                                    ar: "العظام المسطحة",
                                    en: "Flat Bones",
                                    enPronunciation: "Flat Bones",
                                    description: {
                                        ar: "مثل عظام الجمجمة ولوح الكتف (Scapula) والقص (Sternum) - رقيقة ومنحنية.",
                                        en: "e.g., Skull bones, Scapula, Sternum — thin and curved."
                                    }
                                },
                                {
                                    ar: "العظام غير المنتظمة",
                                    en: "Irregular Bones",
                                    enPronunciation: "Irregular Bones",
                                    description: {
                                        ar: "مثل الفقرات (Vertebrae) وعظام الوجه - أشكال معقدة لا تنتمي لأي تصنيف.",
                                        en: "e.g., Vertebrae, Facial bones — complex shapes."
                                    }
                                },
                                {
                                    ar: "العظام السمسمانية",
                                    en: "Sesamoid Bones",
                                    enPronunciation: "Sesamoid Bones",
                                    description: {
                                        ar: "مثل الرضفة (Patella) - تتطور داخل الأوتار لحمايتها من التآكل.",
                                        en: "e.g., Patella — develop within tendons, protect from wear."
                                    }
                                }
                            ]
                        },
                        {
                            type: "text",
                            title: { ar: "⚙️ تصنيف المفاصل", en: "Classification of Joints" },
                            content: {
                                ar: "المفاصل تصنف حسب الحركة إلى: مفاصل ثابتة (Sutures)، مفاصل متحركة جزئياً (Cartilaginous)، ومفاصل متحركة بحرية (Synovial).",
                                en: "Joints are classified by movement into: fixed joints (sutures), slightly movable joints (cartilaginous), and freely movable joints (synovial)."
                            }
                        },
                        {
                            type: "text",
                            title: { ar: "💪 أنواع العضلات", en: "Types of Muscles" },
                            content: {
                                ar: "العضلات الهيكلية (Skeletal) تتحرك إرادياً، العضلات الملساء (Smooth) في الأعضاء الداخلية، وعضلة القلب (Cardiac).",
                                en: "Skeletal muscles move voluntarily, smooth muscles are in internal organs, and cardiac muscle is in the heart."
                            }
                        }
                    ],
                    quiz: [
                        {
                            question: { ar: "ما العظم الذي يُعتبر مثالاً على العظام الطويلة؟", en: "Which bone is an example of a long bone?" },
                            options: [
                                { ar: "الفخذ (Femur)", en: "Femur" },
                                { ar: "الرسغ (Carpals)", en: "Carpals" },
                                { ar: "الجمجمة", en: "Skull" },
                                { ar: "الرضفة (Patella)", en: "Patella" }
                            ],
                            correct: 0
                        },
                        {
                            question: { ar: "العظام السمسمانية تتطور داخل ماذا؟", en: "Sesamoid bones develop within what?" },
                            options: [
                                { ar: "الغضاريف", en: "Cartilage" },
                                { ar: "الأوتار", en: "Tendons" },
                                { ar: "العضلات", en: "Muscles" },
                                { ar: "الأربطة", en: "Ligaments" }
                            ],
                            correct: 1
                        }
                    ]
                },
                {
                    id: "lecture2",
                    icon: "💀",
                    title: {
                        ar: "عظام الجمجمة - القحف العصبي",
                        en: "Skull Osteology I — Neurocranium"
                    },
                    topics: [
                        { ar: "العظام الستة للقحف العصبي", en: "6 Neurocranium bones" },
                        { ar: "الدروز", en: "Sutures" },
                        { ar: "اليوافيخ", en: "Fontanelles" },
                        { ar: "الحفر القحفية", en: "Cranial fossae" }
                    ],
                    sections: [
                        {
                            type: "intro",
                            title: { ar: "مقدمة", en: "Introduction" },
                            content: {
                                ar: "القحف العصبي (Neurocranium) يحمي الدماغ ويتكون من 8 عظام: 4 غير زوجية (جبهي، قذالي، وتدي، غربالي) و2 زوجية (جداري ×2، صدغي ×2).",
                                en: "The neurocranium (brain case) protects the brain and is composed of 8 bones: 4 unpaired (frontal, occipital, sphenoid, ethmoid) and 2 paired (parietal ×2, temporal ×2)."
                            }
                        },
                        {
                            type: "images",
                            title: { ar: "📷 صور الجمجمة", en: "Skull Images" },
                            images: [
                                {
                                    src: "https://images.pexels.com/photos/5427825/pexels-photo-5427825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
                                    caption: { ar: "الجمجمة - ملونة: كل عظم بلون مختلف", en: "Colored skull: each bone in a different color" }
                                },
                                {
                                    src: "https://images.pexels.com/photos/8352129/pexels-photo-8352129.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
                                    caption: { ar: "الجمجمة - مرقمة: تستخدم في تمارين التعرف", en: "Numbered skull: used for identification exercises" }
                                },
                                {
                                    src: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
                                    caption: { ar: "أشعة الفك", en: "Jaw x-ray" }
                                }
                            ]
                        },
                        {
                            type: "table",
                            title: { ar: "📋 جدول العظام القحفية", en: "Cranial Bones Table" },
                            headers: {
                                ar: ["العظم", "العربي", "العدد", "السمة الرئيسية"],
                                en: ["Bone", "Arabic", "Count", "Key Feature"]
                            },
                            rows: [
                                ["Frontal Bone", "العظم الجبهي", "1 (unpaired)", "Forms the forehead and the roof of the orbits"],
                                ["Parietal Bone", "العظم الجداري", "2 (paired)", "Forms the majority of the roof and lateral walls of the skull"],
                                ["Occipital Bone", "العظم القذالي", "1 (unpaired)", "Forms the posterior and inferior part of the cranium"],
                                ["Temporal Bone", "العظم الصدغي", "2 (paired)", "Forms the lateral skull and part of the cranial base"],
                                ["Sphenoid Bone", "العظم الوتدي", "1 (unpaired)", "Butterfly/bat-shaped — the keystone bone of the skull"],
                                ["Ethmoid Bone", "العظم الغربالي", "1 (unpaired)", "Delicate midline bone — contributes to nose, orbit, and cranial floor"]
                            ]
                        },
                        {
                            type: "bones",
                            title: { ar: "🦴 تفاصيل العظام القحفية", en: "Cranial Bone Details" },
                            bones: [
                                {
                                    ar: "العظم الجبهي",
                                    en: "Frontal Bone",
                                    count: "1 (unpaired)",
                                    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUARDWze8WkY-SUMCJ3qje3LBunTSaFbtBAaymSAZggqOyWzE3Zqi4oUjRPCWRR7yfFe3_9bMY-Bch8--40pNR-RJX-iWvyAzGRL06GGoeHJWCRAAGAOZRSa9nxMamIFYPIhi9vMmghrcyFFKrKkKps7Z5BN2liDZXs-3XpPAYelx8TZD-WMJKedmUpdlCbui41cpoG_mTFLOdjv15hieZkVYLAReeZR7YqBlQ2HoZI=w1280",
                                    points: [
                                        { ar: "يشكل الجبهة وسقف الحجاج", en: "Forms the forehead and the roof of the orbits" },
                                        { ar: "يحتوي على الجيب الجبهي (الجيوب الأنفية)", en: "Contains the frontal sinuses (paranasal sinuses)" },
                                        { ar: "الجبل (Glabella) هو المنطقة الملساء بين الحاجبين", en: "The glabella is the smooth area between the eyebrows" },
                                        { ar: "الفتحة الحاجبية العليا تنقل العصب والأوعية الحاجبية العليا", en: "Supraorbital foramen transmits supraorbital nerve & vessels" },
                                        { ar: "يساهم في أرضية الحفرة القحفية الأمامية", en: "Contributes to the floor of the anterior cranial fossa" }
                                    ]
                                },
                                {
                                    ar: "العظم الجداري",
                                    en: "Parietal Bone",
                                    count: "2 (paired)",
                                    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUAQOoOMkyKqbHMDJe7jE7oZnYJAGQ_33N3WEwNFlM8zSvKF3piIq6so7MyLGq6PxNd89ZxVazQmjAk5xDyM_PmKzSkrDf_7Lju6jCizmLl6KU8xr9ySESAnTcHuUFwrPRYNP4x8j8ErLAl5jeTCbWL-qGehnYlUHzpvQgkuKvjUlt34wbNhu_5kbdbPe_t-FBZ2zamLjGlQDDBrX13Ukn4YYC9rsHqgHhRH9hFf5k0=w1280",
                                    points: [
                                        { ar: "يشكل معظم سقف وجوانب الجمجمة", en: "Forms the majority of the roof and lateral walls of the skull" },
                                        { ar: "شكل رباعي الأضلاع مع سطحين وأربعة حدود وأربع زوايا", en: "Quadrilateral shape with 2 surfaces, 4 borders, and 4 angles" },
                                        { ar: "البروز الجداري هو أبعد نقطة محدبة على السطح الخارجي", en: "Parietal eminence — the most convex point on the external surface" },
                                        { ar: "الخطوط الجداريين العلوي والسفلي يعبران السطح الخارجي", en: "Superior & inferior temporal lines cross the external surface" },
                                        { ar: "العظم الجداريان يجتمعان بالدرز السهمي", en: "The two parietal bones are joined by the sagittal suture" }
                                    ]
                                },
                                {
                                    ar: "العظم القذالي",
                                    en: "Occipital Bone",
                                    count: "1 (unpaired)",
                                    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUDWIVRbodGmJYG6DbHdr9yEshq6cehRudmfUh6R4fqXI2P6ftW-5SlnfTxgv06qx5wC0l_W4eYcKPZPPIIzULhaTsOFLsxAOMe8HfKch-FzYcdSzTKCrDFlzCEemfLyVOBSQrn-yQxt7OjaiN9uYOKZ3gZsx6Tv6mO6OLlhyyjsHke_pQFvV8kosPBcSVjOvNYxzOPTXX2CM91_sXAG5Td91oPDgUuhw6puyRKTMcM=w1280",
                                    points: [
                                        { ar: "يشكل الجزء الخلفي والسفلي من الجمجمة", en: "Forms the posterior and inferior part of the cranium" },
                                        { ar: "يحتوي على الفتحة العظمى (Foramen Magnum) - ممر للنخاع الشوكي", en: "Contains the Foramen Magnum — passage for the spinal cord" },
                                        { ar: "اللقم القذاليتان ترتبطان بالفقرة الأولى (Atlas)", en: "Occipital condyles articulate with C1 (Atlas) vertebra" },
                                        { ar: "له ثلاثة أجزاء: صفحي، قاعدي، وجانبيان (لقميان)", en: "Has 3 parts: squamous, basilar, and 2 lateral (condylar)" },
                                        { ar: "البروز القذالي الخارجي - مرتكز للرباط القذالي", en: "External occipital protuberance — attachment for ligamentum nuchae" }
                                    ]
                                },
                                {
                                    ar: "العظم الصدغي",
                                    en: "Temporal Bone",
                                    count: "2 (paired)",
                                    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUCdhDgPNawDBybt8BEh_hH_LTgY9PVTRW3vz8GQYAHXyfqc11hmapO3DuyxOdJFvHNomktpBgfXPPPRI1sRoeABsCXTKWSVGoP6k6aEr-J78CC-18PzOACL38As0fP4hHJTXFLrNyNa7zbHK2AMceviER0kTw3QrHUxm7HOU93JFQ4LxzzyVGIPRB5hO65Z3AHlCebU0YLBOo8sXupHNe2US7jtrndf4MmuhndwG8E=w1280",
                                    points: [
                                        { ar: "يشكل الجمجمة الجانبية وجزءاً من قاعدة الجمجمة", en: "Forms the lateral skull and part of the cranial base" },
                                        { ar: "أربعة أجزاء: صفحي، خشائي، صخري، وطبلي", en: "4 parts: Squamous, Mastoid, Petrous, and Tympanic" },
                                        { ar: "الجزء الصخري يحوي أجزاء الأذن الوسطى والداخلية", en: "Petrous part houses the middle & inner ear structures" },
                                        { ar: "الناتئ الخشائي - مرتكز لعضلة القصبة الترقوية الخشائية", en: "Mastoid process — attachment for SCM muscle" },
                                        { ar: "حفرة الفك السفلي - تشكل المفصل الفكي الصدغي مع الفك السفلي", en: "Mandibular fossa — forms the TMJ with the mandible" }
                                    ]
                                },
                                {
                                    ar: "العظم الوتدي",
                                    en: "Sphenoid Bone",
                                    count: "1 (unpaired)",
                                    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUBSKtqmiDi8a2jA4W-qG4znjCUZaV-PipF3EPLQVSiRJYN4egKnAgXR2N9koJARBCFPAQY7yyMuSHkoBXx1AOQiVEO3OEAl1q-qsEDKFpffG6YR5slX83mAYSdWFD5qjGzgpIAG2aR2IzlcURb4ValhbV0O4r1a7NeeFIxsgdAWd3fUoGZI2i3D9F97zh-ZiPTXm413C2zfb6uZls_GztcYsCZcK3WxVniAuu-pFxs=w1280",
                                    points: [
                                        { ar: "على شكل فراشة/خفاش - حجر الزاوية في الجمجمة", en: "Butterfly/bat-shaped — the keystone bone of the skull" },
                                        { ar: "يرتبط تقريباً بكل العظام القحفية الأخرى", en: "Articulates with nearly ALL other cranial bones" },
                                        { ar: "سرير تركي (Sella Turcica) - يحوي الغدة النخامية", en: "Sella Turcica — houses the pituitary gland (hypophysis)" },
                                        { ar: "الأجنحة الكبيرة تشكل جزءاً من الحفرة القحفية الوسطى والحجاج", en: "Greater wings form part of the middle cranial fossa & orbit" },
                                        { ar: "الصيوانات الجناحية - مرتكز لعضلات المضغ", en: "Pterygoid plates — attachment for muscles of mastication" }
                                    ]
                                },
                                {
                                    ar: "العظم الغربالي",
                                    en: "Ethmoid Bone",
                                    count: "1 (unpaired)",
                                    image: "https://lh3.googleusercontent.com/sitesv/AA5AbUD0TukTB-arT0SUo9NulUB_YyDRx1HeH3yhh8dTIZtp7u3Wg9MycfCBYJixaGNE5BdVEY6vu_pzDB_ClXo8zm3-PEycfYnXvzV40o4xJyaGtun6rAXg4gyYbw91APwifigd7TdDpnoaDXIHlo3wdaR7g_QVMrXbgoFdd-wNR1NnMt2_vD8cyR4VnVXaZQK9sWNr3JfBRRxPNuWypk-ll-vZuDHKI7b2cjDn7ZkTREU=w1280",
                                    points: [
                                        { ar: "عظم مركزي رقيق - يساهم في الأنف والحجاج وقاعدة الجمجمة", en: "Delicate midline bone — contributes to nose, orbit, and cranial floor" },
                                        { ar: "الصفيحة الغربالية - مثقبة لألياف العصب الشمي (CN I)", en: "Cribriform plate — perforated for olfactory nerve fibers (CN I)" },
                                        { ar: "الأخدود الغربالي - مرتكز للمنشار الدماغي (الغشاء الصلب)", en: "Crista galli — attachment for falx cerebri (dural membrane)" },
                                        { ar: "الصفيحة العمودية - تشكل الجزء العلوي من الحاجز الأنفي", en: "Perpendicular plate — forms the upper nasal septum" },
                                        { ar: "المحاريان الأنفيان العلوي والأوسط يبرزان من الكتلتين الجانبيتين", en: "Superior & middle nasal conchae project from lateral masses" }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "text",
                            title: { ar: "🔗 الدروز واليوافيخ والحفر القحفية", en: "Sutures, Fontanelles & Cranial Fossae" },
                            content: {
                                ar: "الدروز (Sutures) هي مفاصل ثابتة بين عظام الجمجمة. اليوافيخ (Fontanelles) هي مناطق غضروفية طرية في جماجم الأطفال. الحفر القحفية (Cranial Fossae) ثلاث: أمامية ووسطى وخلفية.",
                                en: "Sutures are fixed joints between skull bones. Fontanelles are soft cartilaginous areas in infant skulls. Cranial fossae are three: anterior, middle, and posterior."
                            }
                        }
                    ],
                    quiz: [
                        {
                            question: { ar: "كم عدد عظام القحف العصبي؟", en: "How many bones form the neurocranium?" },
                            options: [
                                { ar: "6 عظام", en: "6 bones" },
                                { ar: "8 عظام", en: "8 bones" },
                                { ar: "14 عظمة", en: "14 bones" },
                                { ar: "22 عظمة", en: "22 bones" }
                            ],
                            correct: 1
                        },
                        {
                            question: { ar: "أي العظام يسمى 'حجر الزاوية' في الجمجمة؟", en: "Which bone is called the 'keystone' of the skull?" },
                            options: [
                                { ar: "العظم الجبهي", en: "Frontal bone" },
                                { ar: "العظم الوتدي", en: "Sphenoid bone" },
                                { ar: "العظم القذالي", en: "Occipital bone" },
                                { ar: "العظم الغربالي", en: "Ethmoid bone" }
                            ],
                            correct: 1
                        },
                        {
                            question: { ar: "أي عظم يحتوي على الفتحة العظمى؟", en: "Which bone contains the foramen magnum?" },
                            options: [
                                { ar: "العظم الصدغي", en: "Temporal bone" },
                                { ar: "العظم الجداري", en: "Parietal bone" },
                                { ar: "العظم القذالي", en: "Occipital bone" },
                                { ar: "العظم الوتدي", en: "Sphenoid bone" }
                            ],
                            correct: 2
                        }
                    ]
                },
                {
                    id: "lecture3",
                    icon: "🦷",
                    title: {
                        ar: "الهيكل الوجهي والمفصل الفكي",
                        en: "Facial Skeleton & TMJ"
                    },
                    topics: [
                        { ar: "عظام الوجه الثمانية", en: "8 Facial bones" },
                        { ar: "المفصل الصدغي الفكي", en: "TMJ joint" },
                        { ar: "الأربطة والحركات", en: "Ligaments & movements" },
                        { ar: "عضلات المضغ", en: "Muscles of mastication" }
                    ],
                    sections: [
                        {
                            type: "intro",
                            title: { ar: "مقدمة", en: "Introduction" },
                            content: {
                                ar: "الهيكل الوجهي يتكون من 8 عظام: الفك العلوي، الفك السفلي، الوجني، الأنفي، الدمعي، الحنكي، الميكعة، والمحارة الأنفية السفلى. جميع عضلات المضغ تُعصَّب بالعصب الفكي السفلي V₃.",
                                en: "The facial skeleton consists of 8 bones: maxilla, mandible, zygomatic, nasal, lacrimal, palatine, vomer, and inferior nasal concha. All muscles of mastication are innervated by the mandibular nerve V₃."
                            }
                        },
                        {
                            type: "images",
                            title: { ar: "📷 صور عظام الوجه", en: "Facial Bone Images" },
                            images: [
                                {
                                    src: "https://images.pexels.com/photos/5427684/pexels-photo-5427684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
                                    caption: { ar: "نموذج ملون للجمجمة - يوضح عظام الوجه بألوان مختلفة", en: "Colored skull model showing facial bones in different colors" }
                                },
                                {
                                    src: "https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
                                    caption: { ar: "أشعة بانورامية - تُظهر الفك العلوي والفك السفلي والأسنان والمفصل الصدغي الفكي", en: "Panoramic x-ray showing maxilla, mandible, teeth, and TMJ" }
                                }
                            ]
                        },
                        {
                            type: "bones",
                            title: { ar: "💀 عظام الوجه", en: "Facial Bones" },
                            bones: [
                                {
                                    ar: "الفك العلوي (زوجي)",
                                    en: "Maxilla (paired)",
                                    count: "2",
                                    icon: "🦷",
                                    points: [
                                        { ar: "يشكل الفك العلوي، أرضية محجر العين، سقف الفم (الحنك الصلب)، جدار تجويف الأنف", en: "Forms upper jaw, orbital floor, hard palate, nasal wall" },
                                        { ar: "يحتوي على الجيب الفكي (Maxillary Sinus) - أكبر الجيوب الأنفية", en: "Contains maxillary sinus (largest paranasal sinus)" }
                                    ]
                                },
                                {
                                    ar: "الفك السفلي",
                                    en: "Mandible",
                                    count: "1",
                                    icon: "🦴",
                                    points: [
                                        { ar: "أكبر وأقوى عظم في الوجه والعظم الوحيد المتحرك في الجمجمة", en: "Largest, strongest, only movable facial bone" },
                                        { ar: "يتكون من الجسم (Body) والفرع (Ramus)", en: "Has Body and Ramus" },
                                        { ar: "يحتوي على اللقمة (Condyle) والناتئ المنقاري (Coronoid Process)", en: "Has Condyle and Coronoid Process" }
                                    ]
                                },
                                {
                                    ar: "العظم الوجني (زوجي)",
                                    en: "Zygomatic Bone (paired)",
                                    count: "2",
                                    icon: "👁️",
                                    points: [
                                        { ar: "يشكل بروز الخد والجزء الوحشي من محجر العين", en: "Forms cheek prominence and lateral orbital wall" },
                                        { ar: "يتصل بالعظم الصدغي ليشكل القوس الوجني (Zygomatic Arch)", en: "Joins temporal to form Zygomatic Arch" }
                                    ]
                                },
                                {
                                    ar: "العظم الأنفي (زوجي)",
                                    en: "Nasal Bone (paired)",
                                    count: "2",
                                    icon: "👃",
                                    points: [
                                        { ar: "يشكل جسر الأنف (الجزء العلوي الصلب)", en: "Forms bridge of the nose" },
                                        { ar: "العظمان معاً يشكلان سقف التجويف الأنفي", en: "Together form roof of nasal cavity" }
                                    ]
                                },
                                {
                                    ar: "العظم الدمعي (زوجي)",
                                    en: "Lacrimal Bone (paired)",
                                    count: "2",
                                    icon: "💧",
                                    points: [
                                        { ar: "أصغر عظام الوجه", en: "Smallest facial bone" },
                                        { ar: "يشكل الجدار الأنسي لمحجر العين", en: "Medial orbital wall" },
                                        { ar: "يحتوي على الميزاب الدمعي (Lacrimal Groove) للقناة الأنفية الدمعية", en: "Contains Lacrimal Groove for nasolacrimal duct" }
                                    ]
                                },
                                {
                                    ar: "العظم الحنكي (زوجي)",
                                    en: "Palatine Bone (paired)",
                                    count: "2",
                                    icon: "👄",
                                    points: [
                                        { ar: "يشكل الجزء الخلفي من سقف الحلق الصلب وأرضية التجويف الأنفي", en: "Forms posterior hard palate and nasal cavity floor" },
                                        { ar: "على شكل حرف L", en: "L-shaped" }
                                    ]
                                },
                                {
                                    ar: "الميكعة",
                                    en: "Vomer",
                                    count: "1",
                                    icon: "▲",
                                    points: [
                                        { ar: "عظم رقيق مسطح يشكل الجزء السفلي الخلفي من الحاجز الأنفي", en: "Thin flat bone, inferior-posterior nasal septum" },
                                        { ar: "يشبه شكل المحراث", en: "Plow-shaped" }
                                    ]
                                },
                                {
                                    ar: "المحارة الأنفية السفلى (زوجية)",
                                    en: "Inferior Nasal Concha (paired)",
                                    count: "2",
                                    icon: "🌊",
                                    points: [
                                        { ar: "تبرز في التجويف الأنفي", en: "Projects into nasal cavity" },
                                        { ar: "تساعد في تدفئة وترطيب وتنقية الهواء المستنشق", en: "Warms, humidifies, filters air" }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "text",
                            title: { ar: "⚙️ المفصل الصدغي الفكي", en: "Temporomandibular Joint (TMJ)" },
                            content: {
                                ar: "المفصل الصدغي الفكي يربط الفك السفلي بالجمجمة. يتكون من لقمة الفك السفلي (Condyle) وحفرة الفك السفلي (Mandibular Fossa) في العظم الصدغي. يسمح بالحركات: الارتفاع والانخفاض، الانزلاق للأمام، والانحراف جانبياً.",
                                en: "The TMJ connects the mandible to the skull. It consists of the mandibular condyle and the mandibular fossa of the temporal bone. It allows elevation, depression, protraction, and lateral deviation."
                            }
                        },
                        {
                            type: "text",
                            title: { ar: "💪 عضلات المضغ", en: "Muscles of Mastication" },
                            content: {
                                ar: "أربع عضلات رئيسية: الماضعة (Masseter)، الصدغية (Temporalis)، الجانبية والوسطى للفك (Medial & Lateral Pterygoid). جميعها تُعصَّب بالعصب الفكي السفلي (V₃).",
                                en: "Four main muscles: Masseter, Temporalis, Medial Pterygoid, and Lateral Pterygoid. All are innervated by the mandibular nerve (V₃)."
                            }
                        }
                    ],
                    quiz: [
                        {
                            question: { ar: "كم عدد عظام الوجه؟", en: "How many facial bones are there?" },
                            options: [
                                { ar: "6 عظام", en: "6 bones" },
                                { ar: "8 عظام", en: "8 bones" },
                                { ar: "10 عظام", en: "10 bones" },
                                { ar: "14 عظمة", en: "14 bones" }
                            ],
                            correct: 1
                        },
                        {
                            question: { ar: "أي العظام هو العظم الوحيد المتحرك في الجمجمة؟", en: "Which is the only movable bone of the skull?" },
                            options: [
                                { ar: "الفك العلوي", en: "Maxilla" },
                                { ar: "الفك السفلي", en: "Mandible" },
                                { ar: "العظم الوجني", en: "Zygomatic" },
                                { ar: "العظم الأنفي", en: "Nasal" }
                            ],
                            correct: 1
                        },
                        {
                            question: { ar: "جميع عضلات المضغ تُعصَّب بأي عصب؟", en: "All muscles of mastication are innervated by which nerve?" },
                            options: [
                                { ar: "العصب الوجهي VII", en: "Facial nerve VII" },
                                { ar: "العصب الفكي السفلي V₃", en: "Mandibular nerve V₃" },
                                { ar: "العصب اللسانية الحلقية IX", en: "Glossopharyngeal nerve IX" },
                                { ar: "العصب المبهم X", en: "Vagus nerve X" }
                            ],
                            correct: 1
                        }
                    ]
                }
            ],
            summary: {
                title: { ar: "📋 ملخص الأسبوع الأول", en: "Week 1 Summary" },
                description: {
                    ar: "تمت تغطية أساسيات الجهاز العضلي الهيكلي شاملة أنواع العظام والمفاصل والعضلات، ثم دراسة تفصيلية لعظام القحف العصبي الستة مع الدروز واليوافيخ والحفر القحفية، وأخيراً عظام الهيكل الوجهي الثمانية والمفصل الصدغي الفكي وعضلات المضغ.",
                    en: "Covered musculoskeletal system basics including bone types, joints, and muscles; detailed study of the six neurocranial bones with sutures, fontanelles, and cranial fossae; and finally the eight facial bones, TMJ, and muscles of mastication."
                },
                items: [
                    { icon: "🦴", title: { ar: "5 أنواع عظام", en: "5 Bone Types" }, value: { ar: "طويلة، قصيرة، مسطحة، غير منتظمة، سمسمانية", en: "Long, short, flat, irregular, sesamoid" } },
                    { icon: "💀", title: { ar: "14 عظمة جمجمة", en: "14 Skull Bones" }, value: { ar: "6 قحف عصبي + 8 هيكل وجهي", en: "6 neurocranial + 8 facial" } },
                    { icon: "💪", title: { ar: "4 عضلات مضغ", en: "4 Mastication Muscles" }, value: { ar: "جميعها تُعصَّب بالعصب الفكي السفلي V₃", en: "All innervated by mandibular nerve V₃" } }
                ]
            }
        },
        // ============================================
        // قالب دورة جديدة - انسخه وعدّله لإضافة مقرر آخر
        // Template for a new course - copy and modify
        // ============================================
        {
            id: "template-course",
            title: {
                ar: "قالب دورة جديدة",
                en: "New Course Template"
            },
            subtitle: {
                ar: "اضغط هنا لتعديل هذا القالب",
                en: "Click here to edit this template"
            },
            description: {
                ar: "هذا قالب جاهز لإضافة دورة جديدة. يمكنك تعديل العنوان والصور والمحاضرات والاختبارات.",
                en: "This is a ready template for adding a new course. You can edit the title, images, lectures, and quizzes."
            },
            image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
            badge: {
                ar: "قالب",
                en: "Template"
            },
            stats: {
                lectures: 2,
                bones: 0,
                muscles: 0,
                tmj: 0
            },
            lectures: [
                {
                    id: "template-lecture1",
                    icon: "📚",
                    title: {
                        ar: "محاضرة نموذجية 1",
                        en: "Sample Lecture 1"
                    },
                    topics: [
                        { ar: "موضوع 1", en: "Topic 1" },
                        { ar: "موضوع 2", en: "Topic 2" }
                    ],
                    sections: [
                        {
                            type: "intro",
                            title: { ar: "مقدمة", en: "Introduction" },
                            content: {
                                ar: "اكتب هنا مقدمة المحاضرة الأولى.",
                                en: "Write the introduction for the first lecture here."
                            }
                        },
                        {
                            type: "text",
                            title: { ar: "شرح مفصل", en: "Detailed Explanation" },
                            content: {
                                ar: "اكتب هنا المحتوى التفصيلي. يمكنك إضافة قوائم، تعريفات، وأمثلة.",
                                en: "Write detailed content here. You can add lists, definitions, and examples."
                            }
                        }
                    ],
                    quiz: [
                        {
                            question: { ar: "سؤال نموذجي 1؟", en: "Sample question 1?" },
                            options: [
                                { ar: "الخيار أ", en: "Option A" },
                                { ar: "الخيار ب", en: "Option B" },
                                { ar: "الخيار ج", en: "Option C" },
                                { ar: "الخيار د", en: "Option D" }
                            ],
                            correct: 0
                        }
                    ]
                }
            ],
            summary: {
                title: { ar: "ملخص الدورة", en: "Course Summary" },
                description: {
                    ar: "اكتب هنا ملخصاً عاماً للدورة.",
                    en: "Write a general summary of the course here."
                },
                items: [
                    { icon: "📝", title: { ar: "نقطة رئيسية 1", en: "Key Point 1" }, value: { ar: "قيمة 1", en: "Value 1" } },
                    { icon: "📝", title: { ar: "نقطة رئيسية 2", en: "Key Point 2" }, value: { ar: "قيمة 2", en: "Value 2" } }
                ]
            }
        }
    ]
};
