const menuData = {
    ar: {
        categories: [
            {
                name: "الفطار",
                image: "imges-3.jpg",
                items: [
                    { name: "فطار شرقي", description: "(فول -بيض-جبنه طماطم -سلطه خضراء)يقدم مع شاي او قهوه او نسكافيه", price: "120" },
                    { name: "توست تشيز", description: "", price: "160" },
                    { name: "توست رومي مدخن وشيدر", description: "", price: "175" },
                    { name: "كلوب ساندوتش مع فريز", description: "", price: "175" },
                    { name: "تشيز اومليت", description: "يقدم مع فريز وشرائح زيتون", price: "115" },
                    { name: "سبانش اومليت", description: "مع فريز وشرائح زيتون", price: "1120" },
                    { name: "كرواسون نوتيلا", description: "", price: "90" },
                    { name: "كلاسيك كرواسون", description: "يقدم مع شاي او قهوه", price: "120" },
                    { name: "تشيز كرواسون", description: "", price: "90" },
                    { name: "كرواسون سموك تركي", description: "", price: "250" },
                    { name: "كرواسون سموك بيف", description: "", price: "260" }
                ]
            },
            {
                name: "المقبلات",
                image: "sal-4.jpg",
                items: [
                    { name: "حلقات بصل", description: "", price: "65" },
                    { name: "خبز بالثوم والجبنة", description: "", price: "60" },
                    { name: "فرايز", description: "", price: "60" },
                    { name: "فرايز جبنة", description: "", price: "85" },
                    { name: "جرين سلاد", description: "", price: "70" },
                    { name: "جريك سلاد", description: "", price: "80" },
                    { name: "تشيكن سيزر سلاد", description: "", price: "165" }
                ]
            },
            {
                name: "الشوربة",
                image: "s-2.jpg",
                items: [
                    { name: "شوربة دي فولاي", description: "", price: "190" },
                    { name: "شوربة مشروم", description: "", price: "175" },
                    { name: "شوربة سي فود", description: "", price: "290" }
                ]
            },
            {
                name: "الساندوتشات",
                description: "جميع الساندوتشات تقدم مع البطاطس المحمرة والصوص",
                image: "san-10.jpg",
                items: [
                    { name: "كوردون بلو", description: "", price: "205" },
                    { name: "فاهيتا تشيكن", description: "", price: "195" },
                    { name: "فاهيتا بيف", description: "", price: "215" },
                    { name: "تشيكن كرسبي", description: "", price: "180" },
                    { name: "جريل تشيكن", description: "", price: "160" },
                    { name: "كرانشي شريمب", description: "", price: "275" }
                ]
            },
            {
                name: "البرجر",
                image: "san-6.jpg",
                items: [
                    { name: "تشيز برجر", description: "", price: "260" },
                    { name: "برجر مشروم", description: "", price: "290" },
                    { name: "كلاسيك برجر", description: "", price: "230" },
                    { name: "كانتري برجر", description: "(قطعة برجر بلدي طازجة مقدمة على خبز كايزر مع أمريكان تشيز وصوص البلو تشيز وحلقات بصل فريش والبيف بيكن)", price: "335" }
                ]
            },
            {
                name: "البيتزا",
                image: "p-4.jpg",
                items: [
                    { name: "مارجريتا", description: "", price: "160" },
                    { name: "فونجي", description: "", price: "175" },
                    { name: "تشيكن باربيكيو", description: "", price: "245" },
                    { name: "تشيز لفرز", description: "", price: "290" },
                    { name: "سي فود", description: "", price: "435" },
                    { name: "بيبروني", description: "", price: "215" },
                    { name: "سوبر سوبريم", description: "", price: "310" },
                    { name: "تشيكن رانش", description: "", price: "245" },
                    { name: "سي فود", description: "", price: "435" },
                    { name: "جمبري", description: "", price: "405" }
                ]
            },
            {
                name: "المكرونه",
                image: "pas-6.jpg",
                items: [
                    { name: "بنا بولونيز", description: "(مكرونه بنا مع ريد صوص وا الحمه المفرومه وا الجبنه التركي المبشوره)", price: "190" },
                    { name: "باسا سي فود", description: "(مكرونه بنا مع وايت صوص وا فواكه البحر المشكل )", price: "375" },
                    { name: "بنا دي ماري", description: "(مكرونه بنا مع وايت صوص وا الجمبري)", price: "350" },
                    { name: "تشيكن الفريدو", description: "(مكرونه بنا مع وايت صوص وا قطع الفراخ واجبنه برمجزان)", price: "275" },
                    { name: "بنا اربيتا", description: "(مكرونه بنا مع ريد صوص وا مشروم وا جبنه تركي مبشوره)", price: "135" },
                    { name: "نجرسكو", description: "(مكرونه فوتتشيني مع الفراخ وا المشروم وا المتزريلا )", price: "295" }
                ]
            },

            {
                name: "وجبات الاطفال",
                image: "san-3.jpg",
                items: [
                    { name: "ناجيتس بطاطس", description: "", price: "120" },
                    { name: "مكرونة بالجبنة", description: "", price: "120" }
                ]
            },
           
       
        
            {
                name: "الاطباق الريسيه",
                description: "جميع الاطباق تقدم مع البطاطس المحمره وا اختياركم من الماشبوتيتو وا الباستا وايت صوص-ريد صوص",
                image: "pas-8.jpg",
                items: [
                    { name: "جريل تشيكن", description: "(شرائح الفراخ المشويه الطازجه)", price: "295" },
                    { name: "كاري تشيكن", description: "(شرائح فراخ مع صوص الكاري )", price: "405" },
                    { name: "كوردن بلو اتشكن", description: "(فلي الدجاج محشو تشيز وا لحم مدخن)", price: "440" },
                    { name: "كريمي مشروم اتشكن", description: "(شرائح دجاج مع وايت صوص وا المشروم )", price: "415" },
                    { name: "فاهيتا تشيكن", description: "(شرائح دجاج مشوي مع شرائح خضار وا صوص الفاهيتا)", price: "360" },
                    { name: "فاهيتا لحمه", description: "(شرائح لحم الفليه مع شرائح الخضار وا صوص الفاهيتا)", price: "440" },
                    { name: "تشيكن لمون", description: "(شرائح لحم مع صوص وايت كرريمي لبمون)", price: "380" }
                ]
            },
            {
                name: "الحلويات",
                image: "d4.jpg",
                items: [
                    { name: "كريب نوتيلا", description: "", price: "100" },
                    { name: "كريب بستاشيو", description: "", price: "140" },
                    { name: "وافل نوتيلا", description: "", price: "110" },
                    { name: "وافل بستاشيو", description: "", price: "155" },
                    { name: "براونيز", description: "", price: "170" },
                    { name: "ايس كريم(3اسكوب)", description: "", price: "150" },
                    { name: "وافل فور سيزون", description: "", price: "170" },
                    { name: "اوريو مادنس", description: "", price: "170" },
                    { name: "ريد فيلفيت", description: "", price: "190" },
                    { name: "كاب جاك", description: "", price: "170" },
                    { name: "شوكلات فادج", description: "", price: "190" },
                    { name: "مولتن كيك", description: "", price: "215" },
                    { name: "تشيزكيك", description: "", price: "190" },
                    { name: "سان اسباستيان", description: "", price: "190" },
                    { name: "سينابون ابل وافل", description: "", price: "165" },
                    { name: "فروات انجل", description: "", price: "225" },
                    { name: "ام علي", description: "", price: "210" }
                ]
            },
            {
                name: "الفربيشينو",
                image: "f-1.jpg",
                items: [
                    { name: "فربيه كلاسيك", description: "", price: "95" },
                    { name: "فربيه بيستاشيو", description: "", price: "150" },
                    { name: "فربيتشينو موكا", description: "", price: "110" },
                    { name: "فربيتشينو كرميل", description: "", price: "120" },
                    { name: "فربيه سولتد كرميل", description: "", price: "125" },
                    { name: "فربيه لوتس", description: "", price: "115" }
                ]
            },
             {
                name: "الشيشه",
            
                items: [
                { "name": "شيشه", "price": "150", "description": "" },
                { "name": "شيشه مكس من اختيارك", "price": "165", "description": "" }
                ]
            },
            {
                name: "الاسموزي",
                image: "smo-1.jpg",
                items: [
                    { name: "سموزي مانجا", description: "", price: "95" },
                    { name: "سموزي فروله", description: "", price: "95" },
                    { name: "سموزي توت", description: "", price: "95" },
                    { name: "سموزي مكس توت", description: "", price: "95" },
                    { name: "سموزي تفاح اخضر", description: "", price: "95" },
                    { name: "سموزي باشون فروت", description: "", price: "95" },
                    { name: "سموزي خوخ", description: "", price: "95" },
                    { name: "سموزي بابل جام", description: "", price: "95" }
                ]
            },
            {
                name: "الكوكتيل",
                image: "coc-9.jpg",
                items: [
                    { name: "ريد ماجيك", description: "فروله بطيخ رومان", price: "150" },
                    { name: "كوين", description: "كيوي موز فروله", price: "170" },
                    { name: "فلوريدا", description: "مانجا جوافه فروله", price: "135" },
                    { name: "سبيشيل ويف", description: "مانجا موز ايس كريم", price: "155" },
                    { name: "بينا كولادا", description: "حليب جوزهند اناناس", price: "155" },
                    { name: "زبادي كلاسيك", description: "", price: "80" },
                    { name: "كوكتيل سفن ويف", description: "", price: "210" },
                    { name: "اليكترك تشوك", description: "", price: "150" },
                    { name: "ريد ليمون", description: "", price: "70" },
                    { name: "سان فرانسيسكو", description: "", price: "145" },
                    { name: "جوافه منت", description: "", price: "85" },
                    { name: "ليدي ماري", description: "", price: "125" },
                    { name: "بيلري بيتش", description: "", price: "125" },
                    { name: "زبادي فوكه", description: "", price: "90" }
                ]
            },
            {
                name: "الموهيتو",
                image: "IMG-20251028-WA0001.jpg",
                items: [
                    { name: "صن شاين", description: "", price: "80" },
                    { name: "صن رايز", description: "", price: "80" },
                    { name: "شيري كولا", description: "", price: "80" },
                    { name: "بلو هواي", description: "سفن شرائح لمون نعناع بلوكروساو", price: "90" },
                    { name: "بلو اوشن", description: "سفن شرائح لمون ونعناع بلوكروساو عصير برتقال", price: "100" },
                    { name: "ريدبول موكتيل", description: "ريدبول + فليفر من اختيارك", price: "210" },
                    { name: "ريدبول هامر هيد", description: "ريدبول اسبرسو", price: "215" }
                ]
            },
            {
                name: "المشروبات الغازيه",
                items: [
                    { name: "ريدبول", description: "", price: "110" },
                    { name: "بيريل", description: "", price: "60" },
                    { name: "مياه معدنيه صغيره", description: "", price: "25" },
                    { name: "مياه غازيه", description: "", price: "45" }
                ]
            },
            {
                name: "الاضافات",
                items: [
                    { name: "حليب", description: "", price: "50" },
                    { name: "مكسرات", description: "", price: "60" },
                    { name: "شوت اسبرسو", description: "", price: "45" },
                    { name: "ايس كريم اسكوب", description: "", price: "45" },
                    { name: "فليفر", description: "", price: "45" },
                    { name: "توبينج", description: "", price: "50" },
                    { name: "فروت", description: "", price: "45" }
                ]
            },
            {
                name: "الميلك تشيك",
                image: "m-17.jpg",
                items: [
                    { name: "ميلك تشيك فانليا", description: "", price: "190" },
                    { name: "ميلك تشيك نوتيلا", description: "", price: "200" },
                    { name: "ميلك تشيك شوكلات مكس", description: "", price: "210" },
                    { name: "ميلك تشيك لوتس", description: "", price: "210" },
                    { name: "ميلك تشيك اوريو", description: "", price: "220" },
                    { name: "ميلك تشيك بيستاشيو", description: "", price: "240" },
                    { name: "ميلك تشيك كرميل", description: "", price: "200" },
                    { name: "ميلك تشيك سفن ويف", description: "", price: "275" },
                    { name: "ميلك تشيك مكسرات", description: "", price: "240" },
                    { name: "ميلك تشيك بنانا بيري", description: "", price: "195" },
                    { name: "ميلك تشيك فلفر", description: "", price: "195" }
                ]
            },
            {
                name: "الايس كوفي",
                image: "IMG-20251028-WA0000.jpg",
                items: [
                    { name: "ايس نسكافيه", description: "", price: "95" },
                    { name: "ايس كابتشينو", description: "", price: "125" },
                    { name: "ايس بستاشيو لاتيه", description: "", price: "160" },
                    { name: "ايس موكا", description: "", price: "125" },
                    { name: "ايس لاتيه", description: "", price: "115" },
                    { name: "ايس كرميل ميكاتو", description: "", price: "140" },
                    { name: "ايس اسبنش لاتيه", description: "", price: "125" },
                    { name: "ايس سولتد كرميل", description: "", price: "125" },
                    { name: "ايس ماتشا لاتيه", description: "", price: "175" },
                    { name: "ستروبري ماتشا", description: "", price: "180" },
                    { name: "بلوبيري ماتشا", description: "", price: "185" },
                    { name: "فراوله تارو", description: "", price: "175" },
                    { name: "بلوبيري تارو", description: "", price: "185" },
                    { name: "ستروبيري بوبا", description: "", price: "115" },
                    { name: "بلوبيري بوبا", description: "", price: "125" },
                    { name: "ايس امريكانو", description: "", price: "85" }
                ]
            },
             {
                name: " العصائر الفريش",
                image: "j-12.jpg",
                items: [
                    { name: " مانجا", description: "", price: "85" },
                    { name: " فروله", description: "", price: "85" },
                    { name: " بطيخ", description: "", price: "85" },
                    { name: "تين شوكي ", description: "", price: "75" },
                    { name: " رمان", description: "", price: "70" },
                    { name: "  كنتالوب", description: "", price: "85" },
                    { name: "خوخ", description: "", price: "80" },
                    { name: "  موز", description: "", price: "75" },
                    { name: "برتقال  ", description: "", price: "75" },
                    { name: " اناناس", description: "", price: "70" },
                    { name: " لمون نعناع", description: "", price: "60" },
                    { name: " جوافه", description: "", price: "75" },
                    { name: " كيوي", description: "", price: "120" },
                    { name: " افوكادو", description: "", price: "170" }
                ]
            },
            {
                name: "المشروبات الساخنة",
                image: "c-7.jpg",
                items: [
                    { name: "اسبرسو", description: "", price: "50" },
                    { name: "اسيرسو دابل", description: "", price: "60" },
                    { name: "ميكاتو", description: "", price: "60" },
                    { name: "ميكاتو دابل", description: "", price: "70" },
                    { name: "بونبون", description: "", price: "80" },
                    { name: "كلاسيك كورتو", description: "", price: "80" },
                    { name: "كورتة موكا", description: "", price: "90" },
                    { name: "كابتشينو", description: "", price: "90" },
                    { name: "ماتشا", description: "", price: "130" },
                    { name: "اسبرسو كونبانا", description: "", price: "75" },
                    { name: "فلات وايت", description: "", price: "100" },
                    { name: "موكا", description: "", price: "95" },
                    { name: "نسكافيه", description: "", price: "65" },
                    { name: "قهوه فرنساوي", description: "", price: "60" },
                    { name: "قهوه تركي", description: "", price: "45" },
                    { name: "قهوه تركي دابل", description: "", price: "55" },
                    { name: "امريكان كوفي", description: "", price: "70" },
                    { name: "قهوه نوتيلا", description: "", price: "70" },
                    { name: "لاتيه", description: "", price: "80" },
                    { name: "لاتيه اوريو", description: "", price: "110" },
                    { name: "سينابون ابل لاتيه", description: "", price: "95" },
                    { name: "اسبرسو افوكادو", description: "", price: "75" },
                    { name: "امريكانو", description: "", price: "60" },
                    { name: "اريكانو", description: "", price: "70" },
                    { name: "قهوه لوتس", description: "", price: "65" },
                    { name: "هوت شوكلات", description: "", price: "70" },
                    { name: "هوت شوكلات سنو مان", description: "", price: "90" },
                    { name: "شاي براد", description: "", price: "55" },
                    { name: "هوت سيدر", description: "", price: "50" },
                    { name: "سحلب", description: "", price: "80" },
                    { name: "هةت باين", description: "", price: "55" },
                    { name: "شاي لاتيه", description: "", price: "50" },
                    { name: "شاي نكهات", description: "", price: "45" },
                    { name: "اعشاب", description: "", price: "40" },
                    { name: "شاي", description: "", price: "40" },
                    { name: "فيتيمن سي", description: "", price: "45" },
                    { name: "كوكتيلا اعشاب", description: "", price: "50" },
                    { name: "اسبنش لاتيه", price: "90", description: "" },
                    { name: "سولتيد كرميل لاتيه", price: "90", description: "" },
                    { name: "بستاشيو لاتيه", price: "135", description: "" },
                    { name: "ماتشا لاتيه", price: "140", description: "" },
                    { name: "ماتشا كابتشينو", price: "150", description: "" }
                ]
            },

        ]
    },
    en: {
        categories: [
            {
                name: "Breakfast",
                image: "imges-3.jpg",
                items: [
                    { name: "Oriental Breakfast", description: "(Beans, eggs, tomato cheese, green salad) served with tea, coffee, or Nescafe", price: "120" },
                    { name: "Cheese Toast", description: "", price: "160" },
                    { name: "Smoked Turkey and Cheddar Toast", description: "", price: "175" },
                    { name: "Club Sandwich with Fries", description: "", price: "175" },
                    { name: "Cheese Omelette", description: "Served with fries and olive slices", price: "115" },
                    { name: "Spanish Omelette", description: "With fries and olive slices", price: "120" },
                    { name: "Nutella Croissant", description: "", price: "90" },
                    { name: "Classic Croissant", description: "Served with tea or coffee", price: "120" },
                    { name: "Cheese Croissant", description: "", price: "90" },
                    { name: "Smoked Turkey Croissant", description: "", price: "250" },
                    { name: "Smoked Beef Croissant", description: "", price: "260" }
                ]
            },
            {
                name: "Pizza",
                image: "p-4.jpg",
                items: [
                    { name: "Margherita", description: "", price: "160" },
                    { name: "Funghi", description: "", price: "175" },
                    { name: "Chicken BBQ", description: "", price: "245" },
                    { name: "Cheese Lovers", description: "", price: "290" },
                    { name: "Sea Food", description: "", price: "435" },
                    { name: "Pepperoni", description: "", price: "215" },
                    { name: "Super Supreme", description: "", price: "310" },
                    { name: "Chicken Ranch", description: "", price: "245" },
                    { name: "Shrimp", description: "", price: "405" }
                ]
            },
            {
                name: "Burger",
                image: "san-6.jpg",
                items: [
                    { name: "Cheese Burger", description: "", price: "260" },
                    { name: "Mushroom Burger", description: "", price: "290" },
                    { name: "Classic Burger", description: "", price: "230" },
                    { name: "Country Burger", description: "(Fresh local beef patty served on a kaiser bun with American cheese, blue cheese sauce, fresh onion rings, and beef bacon)", price: "335" }
                ]
            },
            {
                name: "Sandwiches",
                description: "All sandwiches are served with french fries and sauce",
                image: "san-10.jpg",
                items: [
                    { name: "Cordon Bleu", description: "", price: "205" },
                    { name: "Chicken Fajita", description: "", price: "195" },
                    { name: "Beef Fajita", description: "", price: "215" },
                    { name: "Crispy Chicken", description: "", price: "180" },
                    { name: "Grilled Chicken", description: "", price: "160" },
                    { name: "Crunchy Shrimp", description: "", price: "275" }
                ]
            },
            {
                name: "Appetizers",
                image: "sal-4.jpg",
                items: [
                    { name: "Onion Rings", description: "", price: "65" },
                    { name: "Garlic Bread with Cheese", description: "", price: "60" },
                    { name: "Fries", description: "", price: "60" },
                    { name: "Cheese Fries", description: "", price: "85" },
                    { name: "Green Salad", description: "", price: "70" },
                    { name: "Greek Salad", description: "", price: "80" },
                    { name: "Chicken Caesar Salad", description: "", price: "165" }
                ]
            },
            {
                name: "Soup",
                image: "s-2.jpg",
                items: [
                    { name: "Chicken Soup \"de Volaille\"", description: "", price: "190" },
                    { name: "Mushroom Soup", description: "", price: "175" },
                    { name: "Seafood Soup", description: "", price: "290" }
                ]
            },
            {
                name: "Kids' Meals",
                image: "san-3.jpg",
                items: [
                    { name: "Nuggets & Fries", description: "", price: "120" },
                    { name: "Mac and Cheese", description: "", price: "120" }
                ]
            },
            {
                name: "Pasta",
                image: "pas-6.jpg",
                items: [
                    { name: "Penne Bolognese", description: "(Penne pasta with red sauce, minced meat, and grated Turkish cheese)", price: "190" },
                    { name: "Seafood Pasta", description: "(Penne pasta with white sauce and mixed seafood)", price: "375" },
                    { name: "Penne Di Mare", description: "(Penne pasta with white sauce and shrimp)", price: "350" },
                    { name: "Chicken Alfredo", description: "(Penne pasta with white sauce, chicken pieces, and Parmesan cheese)", price: "275" },
                    { name: "Penne Arrabbiata", description: "(Penne pasta with red sauce, mushrooms, and grated Turkish cheese)", price: "135" },
                    { name: "Negresco", description: "(Fettuccine pasta with chicken, mushrooms, and mozzarella)", price: "295" }
                ]
            },
            {
                name: "Main Dishes",
                description: "All dishes are served with french fries and your choice of mashed potatoes or pasta with white or red sauce.",
                image: "pas-8.jpg",
                items: [
                    { name: "Grilled Chicken", description: "Fresh grilled chicken slices", price: "295" },
                    { name: "Curry Chicken", description: "Chicken slices with curry sauce", price: "405" },
                    { name: "Chicken Cordon Bleu", description: "Chicken fillet stuffed with cheese and smoked meat", price: "440" },
                    { name: "Creamy Mushroom Chicken", description: "Chicken slices with white sauce and mushrooms", price: "415" },
                    { name: "Chicken Fajita", description: "Grilled chicken slices with vegetable slices and fajita sauce", price: "360" },
                    { name: "Beef Fajita", description: "Fillet slices with vegetable slices and fajita sauce", price: "440" },
                    { name: "Lemon Chicken", description: "Meat slices with creamy white lemon sauce", price: "380" }
                ]
            },
            {
                name: "Desserts",
                image: "d4.jpg",
                items: [
                    { name: "Nutella Crepe", description: "", price: "100" },
                    { name: "Pistachio Crepe", description: "", price: "140" },
                    { name: "Nutella Waffle", description: "", price: "110" },
                    { name: "Pistachio Waffle", description: "", price: "155" },
                    { name: "Brownies", description: "", price: "170" },
                    { name: "Ice Cream (3 scoops)", description: "", price: "150" },
                    { name: "Four Seasons Waffle", description: "", price: "170" },
                    { name: "Oreo Madness", description: "", price: "170" },
                    { name: "Red Velvet", description: "", price: "190" },
                    { name: "Cap Jack", description: "", price: "170" },
                    { name: "Chocolate Fudge", description: "", price: "190" },
                    { name: "Molten Cake", description: "", price: "215" },
                    { name: "Cheesecake", description: "", price: "190" },
                    { name: "San Sebastian", description: "", price: "190" },
                    { name: "Cinnabon Apple Waffle", description: "", price: "165" },
                    { name: "Angel furs", description: "", price: "225" },
                    { name: "Umm Ali", description: "", price: "210" }
                ]
            },
            {
                name: "Frappuccino",
                image: "f-1.jpg",
                items: [
                    { name: "Classic Frappe", description: "", price: "95" },
                    { name: "Pistachio Frappe", description: "", price: "150" },
                    { name: "Mocha Frappuccino", description: "", price: "110" },
                    { name: "Caramel Frappuccino", description: "", price: "120" },
                    { name: "Salted Caramel Frappe", description: "", price: "125" },
                    { name: "Lotus Frappe", description: "", price: "115" }
                ]
            },
            {
                name: "Smoothie",
                image: "smo-1.jpg",
                items: [
                    { name: "Mango Smoothie", description: "", price: "95" },
                    { name: "Strawberry Smoothie", description: "", price: "95" },
                    { name: "Berry Smoothie", description: "", price: "95" },
                    { name: "Mixed Berry Smoothie", description: "", price: "95" },
                    { name: "Green Apple Smoothie", description: "", price: "95" },
                    { name: "Passion Fruit Smoothie", description: "", price: "95" },
                    { name: "Peach Smoothie", description: "", price: "95" },
                    { name: "Bubble Gum Smoothie", description: "", price: "95" }
                ]
            },
            {
                name: "Cocktail",
                image: "coc-9.jpg",
                items: [
                    { name: "Red Magic", description: "(Strawberry, Watermelon, Pomegranate)", price: "150" },
                    { name: "Queen ", description: "(Kiwi, Banana, Strawberry)", price: "170" },
                    { name: "Florida ", description: "(Mango, Guava, Strawberry)", price: "135" },
                    { name: "Special Wave ", description: "(Mango, Banana, Ice Cream)", price: "155" },
                    { name: "Pina Colada ", description: "(Coconut Milk, Pineapple)", price: "155" },
                    { name: "Classic Yogurt", description: "", price: "80" },
                    { name: "Seven Wave Cocktail", description: "", price: "210" },
                    { name: "Electric Shock", description: "", price: "150" },
                    { name: "Red lemon", description: "", price: "70" },
                    { name: "San Francisco", description: "", price: "145" },
                    { name: "Guava mint", description: "", price: "85" },
                    { name: "Lady Mary", description: "", price: "125" },
                    { name: "Berry Beach", description: "", price: "125" },
                    { name: "Fruit Yogurt", description: "", price: "90" }
                ]
            },
            {
                name: "Mojito",
                image: "IMG-20251028-WA0001.jpg",
                items: [
                    { name: "Sunshine", description: "", price: "80" },
                    { name: "Sunrise",  description: "", price: "80" },
                    { name: "Cherry Cola", description: "", price: "80" },
                    { name: "Blue Hawaii  ", description: "(7 Up, Lemon Slices, Mint, Blue Curacao)", price: "90" },
                    { name: "Blue Ocean  ", description: "(7 Up, Lemon Slices, Mint, Blue Curacao, Orange Juice)", price: "100" },
                    { name: "Red Bull Mocktail  ", description: "(Red Bull + Flavor of your choice)", price: "210" },
                    { name: "Red Bull Hammer Head ", description: "(Red Bull, Espresso)", price: "215" }
                ]
            },
            {
                name: "Soft Drinks",
                
                items: [
                    { name: "Red Bull",description: "", price: "110" },
                    { name: "Birell",description: "", price: "60" },
                    { name: "Small Mineral Water",description: "", price: "25" },
                    { name: "Sparkling Water",description: "", price: "45" }
                ]
            },
            {
                name: "Extra",
                items: [
                    { name: "Milk",description: "", price: "50" },
                    { name: "Nuts",description: "", price: "60" },
                    { name: "Espresso Shot",description: "", price: "45" },
                    { name: "Ice Cream Scoop",description: "", price: "45" },
                    { name: "Flavor",description: "", price: "45" },
                    { name: "Topping",description: "", price: "50" },
                    { name: "Fruit",description: "", price: "45" }
                ]
            },
            {
                name: "Milkshake",
                image: "m-17.jpg",
                items: [
                    { name: "Vanilla Milkshake",description: "", price: "190" },
                    { name: "Nutella Milkshake",description: "", price: "200" },
                    { name: "Mixed Chocolate Milkshake",description: "", price: "210" },
                    { name: "Lotus Milkshake",description: "", price: "210" },
                    { name: "Oreo Milkshake",description: "", price: "220" },
                    { name: "Pistachio Milkshake",description: "", price: "240" },
                    { name: "Caramel Milkshake",description: "", price: "200" },
                    { name: "Seven Wave Milkshake",description: "", price: "275" },
                    { name: "nuts Milkshake",description: "", price: "260" },
                    { name: "Banana Berry",description: "", price: "195" },
                    { name: "Flavor Milkshake",description: "", price: "195" }  
                ]
            },
            {
                name: "Iced Coffee",
                image: "IMG-20251028-WA0000.jpg",
                items: [
                    { name: "Iced Nescafe",description: "", price: "90" },
                    { name: "Iced Cappuccino",description: "", price: "125" },
                    { name: "Iced Pistachio Latte",description: "", price: "160" },
                    { name: "Iced Mocha",description: "", price: "125" },
                    { name: "Iced Latte",description: "", price: "115" },
                    { name: "Iced Caramel Macchiato",description: "", price: "140" },
                    { name: "Iced Spanish Latte",description: "", price: "125" },
                    { name: "Iced Salted Caramel",description: "", price: "125" },
                    { name: "Iced Matcha Latte",description: "", price: "175" },
                    { name: "Strawberry Matcha",description: "", price: "180" },
                    { name: "Blueberry Matcha",description: "", price: "185" },
                    { name: "Strawberry Tarot",description: "", price: "175" },
                    { name: "Blueberry Tarot",description: "", price: "185" },
                    { name: "Strawberry Poppa",description: "", price: "115" },
                    { name: "Blueberry Poppa",description: "", price: "125" },
                    { name: "Iced Americano",description: "", price: "85" }
                ]
            },
            {
                name: "Hot Drinks",
                image: "c-7.jpg",
                items: [
                    { name: "Espresso", description: "", price: "50" },
                    { name: "Double Espresso", description: "", price: "60" },
                    { name: "Macchiato", description: "", price: "60" },
                    { name: "Double Macchiato", description: "", price: "70" },
                    { name: "Bonbon", description: "", price: "80" },
                    { name: "Classic Cortado", description: "", price: "80" },
                    { name: "Mocha Cortado", description: "", price: "90" },
                    { name: "Cappuccino", description: "", price: "90" },
                    { name: "Matcha", description: "", price: "130" },
                    { name: "Espresso Con Panna", description: "", price: "75" },
                    { name: "Flat White", description: "", price: "100" },
                    { name: "Mocha", description: "", price: "95" },
                    { name: "Nescafe", description: "", price: "65" },
                    { name: "French Coffee", description: "", price: "60" },
                    { name: "Turkish Coffee", description: "", price: "45" },
                    { name: "Double Turkish Coffee", description: "", price: "55" },
                    { name: "American Coffee", description: "", price: "70" },
                    { name: "Nutella Coffee", description: "", price: "70" },
                    { name: "Latte", description: "", price: "80" },
                    { name: "Latte oreo", description: "", price: "110" },
                    { name: "Cinnabon Apple Latte", description: "", price: "95" },
                    { name: "Espresso Avocado", description: "", price: "75" },
                    { name: "Americano", description: "", price: "60" },
                    { name: "Arecano", description: "", price: "70" },
                    { name: "Lotus Coffee", description: "", price: "65" },
                    { name: "Hot Chocolate", description: "", price: "70" },
                    { name: "Hot Chocolate snow man", description: "", price: "90" },
                    { name: "Tea Pot", description: "", price: "55" },
                    { name: "Hot Cider", description: "", price: "50" },
                    { name: "Sahlab", description: "", price: "80" },
                    { name: "Hot Pine", description: "", price: "55" },
                    { name: "Tea Latte", description: "", price: "50" },
                    { name: "Flavored Tea", description: "", price: "45" },
                    { name: "Herbs", description: "", price: "40" },
                    { name: "Tea", description: "", price: "40" },
                    { name: "Vitamin C", description: "", price: "45" },
                    { name: "Herbal Cocktail", description: "", price: "50" },
                    { name: "Spanish Latte", price: "90", description: "" },
                    { name: "Salted Caramel Latte", price: "90", description: "" },
                    { name: "Pistachio Latte", price: "135", description: "" },
                    { name: "Matcha Latte", price: "140", description: "" },
                    { name: "Matcha Cappuccino", price: "150", description: "" }
                ]
            },
             {
                name: "Shisha",
                items: [
                { "name": "Shisha", "price": "150", "description": "" },
                { "name": "Shisha Mix (Your Choice)", "price": "165", "description": "" }
                ]
            },
            {
                name: "Fresh Juices",
                image: "j-12.jpg",
                items: [
                    { name: "Mango", price: "85", description: "" },
                    { name: "Strawberry", price: "85", description: "" },
                    { name: "Watermelon", price: "85", description: "" },
                    { name: "Prickly Pear", price: "75", description: "" },
                    { name: "Pomegranate", price: "70", description: "" },
                    { name: "Cantaloupe", price: "85", description: "" },
                    { name: "Peach", price: "80", description: "" },
                    { name: "Banana", price: "75", description: "" },
                    { name: "Orange", price: "75", description: "" },
                    { name: "Pineapple", price: "70", description: "" },
                    { name: "Lemon Mint", price: "60", description: "" },
                    { name: "Guava", price: "75", description: "" },
                    { name: "Kiwi", price: "120", description: "" },
                    { name: "Avocado", price: "170", description: "" }
                ]
            }
        ]
    },
    zh: {
        categories: [
            {
                name: "早餐",
                image: "imges-3.jpg",
                items: [
                    { name: "东方早餐", description: "（蚕豆、鸡蛋、番茄芝士、蔬菜沙拉）配茶、咖啡或雀巢咖啡", price: "105" },
                    { name: "芝士吐司", description: "", price: "140" },
                    { name: "烟熏火鸡和切达吐司", description: "", price: "155" },
                    { name: "总汇三明治配薯条", description: "", price: "155" },
                    { name: "芝士煎蛋卷", description: "配薯条和橄榄片", price: "100" },
                    { name: "西班牙煎蛋卷", description: "配薯条和橄榄片", price: "105" },
                    { name: "能多益牛角包", description: "", price: "80" },
                    { name: "经典牛角包", description: "配茶或咖啡", price: "105" },
                    { name: "芝士牛角包", description: "", price: "80" },
                    { name: "烟熏火鸡牛角包", description: "", price: "220" },
                    { name: "烟熏牛肉牛角包", description: "", price: "230" }
                ]
            },
            {
                name: "水烟",
                
                items: [
                { "name": "水烟", "price": "150", "description": "" },
                { "name": "混合水烟（自选）", "price": "165", "description": "" }
                ]
            },
            {
                name: "比萨",
                image: "p-4.jpg",
                items: [
                    { name: "玛格丽特", description: "", price: "140" },
                    { name: "菌菇", description: "", price: "155" },
                    { name: "鸡肉烧烤", description: "", price: "215" },
                    { name: "芝士爱好者", description: "", price: "255" },
                    { name: "海鲜", description: "", price: "380" },
                    { name: "意大利辣香肠", description: "", price: "190" },
                    { name: "超级至尊", description: "", price: "270" },
                    { name: "鸡肉牧场", description: "", price: "215" },
                    { name: "虾", description: "", price: "355" }
                ]
            },
            {
                name: "汉堡",
                image: "san-6.jpg",
                items: [
                    { name: "芝士汉堡", description: "", price: "260" },
                    { name: "蘑菇汉堡", description: "", price: "255" },
                    { name: "经典汉堡", description: "", price: "200" },
                    { name: "乡村汉堡", description: "(新鲜本地牛肉饼配凯撒面包、美国芝士、蓝纹芝士酱、新鲜洋葱圈和牛肉培根)", price: "295" }
                ]
            },
            {
                name: "三明治",
                description: "所有三明治均配有炸薯条和酱汁",
                image: "san-10.jpg",
                items: [
                    { name: "蓝带", description: "", price: "180" },
                    { name: "鸡肉法士达", description: "", price: "170" },
                    { name: "牛肉法士达", description: "", price: "190" },
                    { name: "香脆鸡肉", description: "", price: "160" },
                    { name: "烤鸡肉", description: "", price: "160" },
                    { name: "香脆虾", description: "", price: "240" }
                ]
            },
            {
                name: "开胃菜",
                image: "sal-4.jpg",
                items: [
                    { name: "洋葱圈", description: "", price: "55" },
                    { name: "蒜蓉芝士面包", description: "", price: "50" },
                    { name: "炸薯条", description: "", price: "50" },
                    { name: "芝士薯条", description: "", price: "75" },
                    { name: "蔬菜沙拉", description: "", price: "60" },
                    { name: "希腊沙拉", description: "", price: "70" },
                    { name: "鸡肉凯撒沙拉", description: "", price: "145" }
                ]
            },
            {
                name: "汤",
                image: "s-2.jpg",
                items: [
                    { name: "法式鸡汤", description: "", price: "165" },
                    { name: "蘑菇汤", description: "", price: "155" },
                    { name: "海鲜汤", description: "", price: "255" }
                ]
            },
            {
                name: "儿童餐",
                image: "san-3.jpg",
                items: [
                    { name: "鸡块和炸薯条", description: "", price: "105" },
                    { name: "通心粉和奶酪", description: "", price: "106" }
                ]
            },
            {
                name: "意大利面",
                image: "pas-6.jpg",
                items: [
                    { name: "肉酱通心粉", description: "(通心粉配红酱、肉末和磨碎的土耳其奶酪)", price: "155" },
                    { name: "海鲜意面", description: "(通心粉配白酱和混合海鲜)", price: "330" },
                    { name: "海鲜通心粉", description: "(通心粉配白酱和虾)", price: "305" },
                    { name: "阿尔弗雷多鸡肉意面", description: "(通心粉配白酱、鸡肉块和帕玛森芝士)", price: "240" },
                    { name: "阿拉伯通心粉", description: "(通心粉配红酱、蘑菇和磨碎的土耳其奶酪)", price: "120" },
                    { name: "内格雷斯科", description: "(意大利宽面配鸡肉、蘑菇和马苏里拉奶酪)", price: "260" }
                ]
            },
            {
                name: "主菜",
                description: "所有菜肴均配有炸薯条和您选择的土豆泥或配有白酱或红酱的意大利面。",
                image: "pas-8.jpg",
                items: [
                    { name: "烤鸡", description: "新鲜烤鸡片", price: "260" },
                    { name: "咖喱鸡", description: "咖喱酱鸡肉片", price: "355" },
                    { name: "蓝带鸡", description: "酿有奶酪和烟熏肉的鸡柳", price: "385" },
                    { name: "奶油蘑菇鸡", description: "白汁蘑菇鸡片", price: "365" },
                    { name: "鸡肉法士达", description: "烤鸡肉片配蔬菜片和法士达酱", price: "315" },
                    { name: "牛肉法士达", description: "牛柳片配蔬菜片和法士达酱", price: "400" },
                    { name: "柠檬鸡", description: "奶油白柠檬酱肉片", price: "335" }
                ]
            },
            {
                name: "甜点",
                image: "d5.jpg",
                items: [
                    { name: "能多益可丽饼", description: "", price: "90" },
                    { name: "开心果可丽饼", description: "", price: "150" },
                    { name: "能多益华夫饼", description: "", price: "95" },
                    { name: "开心果华夫饼", description: "", price: "135" },
                    { name: "布朗尼", description: "", price: "150" },
                    { name: "冰淇淋（3勺）", description: "", price: "130" },
                    { name: "四季华夫饼", description: "", price: "150" },
                    { name: "奥利奥疯狂", description: "", price: "150" },
                    { name: "水果疯狂", description: "", price: "165" },
                    { name: "帽子杰克", description: "", price: "150" },
                    { name: "巧克力软糖", description: "", price: "130" },
                    { name: "熔岩蛋糕", description: "", price: "195" },
                    { name: "芝士蛋糕", description: "", price: "165" },
                    { name: "圣塞巴斯蒂安", description: "", price: "165" },
                    { name: "Cinnabon苹果华夫饼", description: "", price: "165" },
                    { name: "天使皮草", description: "", price: "225" },
                    { name: "乌姆阿里", description: "", price: "165" }
                ]
            },
            {
                name: "星冰乐",
                image: "f-1.jpg",
                items: [
                    { name: "经典星冰乐", description: "", price: "85" },
                    { name: "开心果星冰乐", description: "", price: "130" },
                    { name: "摩卡星冰乐", description: "", price: "105" },
                    { name: "焦糖星冰乐", description: "", price: "90" },
                    { name: "海盐焦糖星冰乐", description: "", price: "110" },
                    { name: "莲花星冰乐", description: "", price: "100" }
                ]
            },
            {
                name: "冰沙",
                image: "smo-1.jpg",
                items: [
                    { name: "芒果冰沙", description: "", price: "85" },
                    { name: "草莓冰沙", description: "", price: "85" },
                    { name: "浆果冰沙", description: "", price: "85" },
                    { name: "混合浆果冰沙", description: "", price: "85" },
                    { name: "青苹果冰沙", description: "", price: "85" },
                    { name: "热情果冰沙", description: "", price: "85" },
                    { name: "桃子冰沙", description: "", price: "85" },
                    { name: "泡泡糖冰沙", description: "", price: "85" }
                ]
            },
            {
                name: "鸡尾酒",
                image: "coc-9.jpg",
                items: [
                    { name: "红色魔力（草莓、西瓜、石榴）", description: "", price: "130" },
                    { name: "女王（猕猴桃、香蕉、草莓）", description: "", price: "150" },
                    { name: "佛罗里达（芒果、番石榴、草莓）", description: "", price: "120" },
                    { name: "特殊波浪（芒果、香蕉、冰淇淋）", description: "", price: "135" },
                    { name: "椰林飘香（椰奶、菠萝）", description: "", price: "135" },
                    { name: "经典酸奶", description: "", price: "70" },
                    { name: "七浪鸡尾酒", description: "", price: "210" },
                    { name: "电击", description: "", price: "150" },
                    { name: "红柠檬", description: "", price: "70" },
                    { name: "旧金山", description: "", price: "145" },
                    { name: "番石榴薄荷", description: "", price: "75" },
                    { name: "玛丽女士", description: "", price: "125" },
                    { name: "贝里海滩", description: "", price: "125" },
                    { name: "水果酸奶", description: "", price: "80" }
                ]
            },
            {
                name: "莫吉托",
                image: "IMG-20251028-WA0001.jpg",
                items: [
                    { name: "阳光", description: "", price: "70" },  
                    { name: "日出", description: "", price: "70" },
                    { name: "樱桃可乐", description: "", price: "70" },
                    { name: "蓝色夏威夷（7 Up、柠檬片、薄荷、蓝橙）", description: "", price: "70" },
                    { name: "蓝色海洋（7 Up、柠檬片、薄荷、蓝橙、橙汁）", description: "", price: "75" },
                    { name: "红牛无酒精鸡尾酒（红牛+您选择的口味）", description: "", price: "185" },
                    { name: "红牛锤头（红牛、浓缩咖啡）", description: "", price: "190" }
                ]
            },
            {
                name: "软饮料",
                image: "c-16.jpg",
                items: [
                    { name: "红牛", description: "", price: "110" },
                    { name: "Birell", description: "", price: "60" },
                    { name: "小瓶矿泉水", description: "", price: "25" },
                    { name: "气泡水", description: "", price: "45" }
                ]
            },
            {
                name: "添加",
                image: "c-10.jpg",
                items: [
                    { name: "牛奶", description: "", price: "50" },
                    { name: "坚果", description: "", price: "60" },
                    { name: "浓缩咖啡", description: "", price: "45" },
                    { name: "冰淇淋勺", description: "", price: "45" },
                    { name: "风味", description: "", price: "45" },
                    { name: "顶料", description: "", price: "50" },
                    { name: "水果", description: "", price: "45" }
                ]
            },
            {
                name: "奶昔",
                image: "m-17.jpg",
                items: [
                    { name: "香草奶昔", description: "", price: "165" },
                    { name: "花生酱奶昔", description: "", price: "175" },
                    { name: "混合巧克力奶昔", description: "", price: "185" },
                    { name: "莲花奶昔", description: "", price: "170" },
                    { name: "奥利奥奶昔", description: "", price: "195" },
                    { name: "开心果奶昔", description: "", price: "210" },
                    { name: "焦糖奶昔", description: "", price: "175" },
                    { name: "七波奶昔", description: "", price: "240" },
                    { name: "坚果奶昔", description: "", price: "260" },
                    { name: "风味奶昔", description: "", price: "170" }
                ]
            },
            {
                name: "冰咖啡",
                image: "IMG-20251028-WA0000.jpg",
                items: [
                    { name: "冰雀巢咖啡", description: "", price: "85" },
                    { name: "冰卡布奇诺", description: "", price: "110" },
                    { name: "冰开心果拿铁", description: "", price: "145" },
                    { name: "冰摩卡", description: "", price: "110" },
                    { name: "冰拿铁", description: "", price: "70" },
                    { name: "冰焦糖玛奇朵", description: "", price: "125" },
                    { name: "冰西班牙拿铁", description: "", price: "110" },
                    { name: "冰盐味焦糖", description: "", price: "110" },
                    { name: "冰抹茶拿铁", description: "", price: "155" },
                    { name: "草莓抹茶", description: "", price: "165" },
                    { name: "蓝莓抹茶", description: "", price: "175" },
                    { name: "草莓芋头", description: "", price: "175" },
                    { name: "蓝莓塔罗牌", description: "", price: "185" },
                    { name: "草莓波帕", description: "", price: "115" },
                    { name: "蓝莓波霸", description: "", price: "125" },
                    { name: "冰美式咖啡", description: "", price: "75" }
                ]
            },
            {
                name: "热饮",
                image: "c-7.jpg",
                items: [
                    { name: "浓缩咖啡", description: "", price: "50" },
                    { name: "双份浓缩咖啡", description: "", price: "60" },
                    { name: "玛奇朵", description: "", price: "60" },
                    { name: "双份玛奇朵", description: "", price: "70" },
                    { name: "经典可塔朵", description: "", price: "80" },
                    { name: "摩卡可塔朵", description: "", price: "90" },
                    { name: "卡布奇诺", description: "", price: "90" },
                    { name: "抹茶", description: "", price: "130" },
                    { name: "浓缩康宝蓝", description: "", price: "75" },
                    { name: "平白咖啡", description: "", price: "100" },
                    { name: "摩卡", description: "", price: "95" },
                    { name: "邦邦", description: "", price: "80" },
                    { name: "肉桂卷苹果拿铁", description: "", price: "95" },
                    { name: "雀巢咖啡", description: "", price: "65" },
                    { name: "法式咖啡", description: "", price: "60" },
                    { name: "土耳其咖啡", description: "", price: "45" },
                    { name: "双份土耳其咖啡", description: "", price: "55" },
                    { name: "拿铁奥利奥", description: "", price: "110" },
                    { name: "美式咖啡", description: "", price: "70" },
                    { name: "能多益咖啡", description: "", price: "70" },
                    { name: "拿铁", description: "", price: "80" },
                    { name: "牛油果浓缩咖啡", description: "", price: "75" },
                    { name: "热巧克力雪人", description: "", price: "90" },
                    { name: "阿雷卡诺", description: "", price: "70" },
                    { name: "美式咖啡", description: "", price: "60" },
                    { name: "莲花咖啡", description: "", price: "65" },
                    { name: "热巧克力", description: "", price: "70" },
                    { name: "茶壶", description: "", price: "55" },
                    { name: "热苹果酒", description: "", price: "50" },
                    { name: "萨勒", description: "", price: "60" },
                    { name: "热松", description: "", price: "55" },
                    { name: "茶拿铁", description: "", price: "50" },
                    { name: "风味茶", description: "", price: "45" },
                    { name: "草药", description: "", price: "40" },
                    { name: "茶", description: "", price: "40" },
                    { name: "维生素C", description: "", price: "45" },
                    { name: "草药鸡尾酒", description: "", price: "50" },
                    { name: "西班牙拿铁", price: "90", description: "" },
                    { name: "海盐焦糖拿铁", price: "90", description: "" },
                    { name: "开心果拿铁", price: "125", description: "" },
                    { name: "抹茶拿铁", price: "140", description: "" },
                    { name: "抹茶卡布奇诺", price: "150", description: "" }
                ]
            },
            {
                name: "鲜榨果汁",
                image: "j-12.jpg",
                items: [
                    { name: "芒果", price: "75", description: "" },
                    { name: "草莓", price: "75", description: "" },
                    { name: "西瓜", price: "75", description: "" },
                    { name: "仙人掌果", price: "65", description: "" },
                    { name: "石榴", price: "60", description: "" },
                    { name: "哈密瓜", price: "75", description: "" },
                    { name: "桃子", price: "70", description: "" },
                    { name: "香蕉", price: "65", description: "" },
                    { name: "橙子", price: "65", description: "" },
                    { name: "菠萝", price: "60", description: "" },
                    { name: "柠檬薄荷", price: "50", description: "" },
                    { name: "番石榴", price: "65", description: "" },
                    { name: "奇异果", price: "105", description: "" },
                    { name: "牛油果", price: "150", description: "" }
                ]
            }
        ]
    }
};

// Helpers for tabs/search and external data
let currentLang = 'ar';
let lastSectionId = null;

async function loadExternalMenu() {
    try {
        const res = await fetch('js/menu.json');
        if (!res.ok) return;
        const external = await res.json();
        mergeExternalMenu(external);
    } catch (e) {
        console.warn('Failed to load external menu.json, using embedded data.', e);
    }
}

function mergeExternalMenu(external) {
    ['ar','en','zh'].forEach(lang => {
        const ext = external[lang];
        if (!ext || !ext.categories) return;
        const base = menuData[lang];
        if (!base || !base.categories) return;

        ext.categories.forEach(extCat => {
            const idx = base.categories.findIndex(c => c.name === extCat.name);
            if (idx >= 0) {
                base.categories[idx] = extCat;
            } else {
                base.categories.push(extCat);
            }
        });
    });
}

function updateActiveCategory() {
    const menuContainer = document.getElementById('menu-container');
    const categories = menuContainer.querySelectorAll('.menu-category');
    const tabs = document.querySelectorAll('.category-tab');
    const scrollPosition = window.scrollY;

    categories.forEach((category, index) => {
        const categoryTop = category.offsetTop - 150; // Adjusted for header height
        const categoryBottom = categoryTop + category.offsetHeight;

        if (scrollPosition >= categoryTop && scrollPosition < categoryBottom) {
            tabs.forEach(tab => tab.classList.remove('active'));
            const activeTab = document.querySelector(`.category-tab[data-target="category-${index}"]`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        }
    });
}

function buildCategoryTabs(lang) {
    const tabs = document.getElementById('category-tabs');
    const back = document.getElementById('back-tab');
    if (!tabs) return;
    tabs.innerHTML = '';
    const cats = sortCategories(menuData[lang]?.categories || [], lang);
    
    // متغير لتخزين الزر الأول
    let firstButton = null;
    
    cats.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = 'category-tab';
        btn.textContent = cat.name;
        const id = 'category-' + index;
        btn.dataset.target = id;
        
        // تخزين الزر الأول
        if (index === 0) {
            firstButton = btn;
            // تفعيل الفئة الأولى افتراضياً
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            const el = document.getElementById(id);
            if (el) {
                // إزالة الفئة النشطة من جميع الأزرار
                document.querySelectorAll('.category-tab').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // إضافة الفئة النشطة للزر المضغوط
                btn.classList.add('active');
                
                window.scrollTo({
                    top: el.offsetTop - 120, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
        tabs.appendChild(btn);
    });
    
    updateActiveCategory();
    setupNavArrows(); // Re-initialize arrows after building tabs
    
    // التمرير إلى الفئة الأولى تلقائياً عند تحميل الصفحة
    if (firstButton) {
        const firstCategoryId = firstButton.dataset.target;
        const firstCategoryElement = document.getElementById(firstCategoryId);
        if (firstCategoryElement) {
            // تأخير قصير للتأكد من تحميل الصفحة بالكامل
            setTimeout(() => {
                window.scrollTo({
                    top: firstCategoryElement.offsetTop - 120,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
}

function setupSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        
        // Always search in all menu items regardless of active tab
        const itemSelector = '.menu-item';

        document.querySelectorAll(itemSelector).forEach(el => {
            // Search in item name
            const name = el.querySelector('.menu-item-header h3')?.textContent?.toLowerCase() || '';
            
            // Search in item description
            const description = el.querySelector('.menu-item-description')?.textContent?.toLowerCase() || '';
            
            // Search in item ingredients
            const ingredients = el.querySelector('.menu-item-ingredients')?.textContent?.toLowerCase() || '';
            
            // Search in item price
            const price = el.querySelector('.menu-item-price')?.textContent?.toLowerCase() || '';
            
            // Show item if any of its content matches the search query
            const matches = name.includes(q) || description.includes(q) || ingredients.includes(q) || price.includes(q);
            el.style.display = matches ? '' : 'none';
        });

        // Show all categories when searching to display results from any category
        document.querySelectorAll('.menu-category').forEach(cat => {
            const visible = Array.from(cat.querySelectorAll('.menu-item')).some(i => i.style.display !== 'none');
            cat.style.display = q && !visible ? 'none' : '';
        });
        
        // Show all tabs when searching
        if (q) {
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = '';
            });
        } else {
            // Restore normal tab behavior when search is empty
            const activeTab = document.querySelector('#category-tabs .category-tab.active');
            const activeTabId = activeTab?.dataset.target;
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = tab.id === activeTabId ? '' : 'none';
            });
        }
    });
}

// Category ordering per language
const orderPriority = {
    ar: [
        "الفطار","المقبلات","الشوربة","الساندوتشات","البرجر","البيتزا","المكرونه","الاطباق الريسيه","وجبات الاطفال","الحلويات",
        "العصائر الفريش","الاسموزي","ميلك شيك","القهوة الباردة","المشروبات الساخنة","الكوكتيل","موهيتو","المشروبات الغازية","الاضافات","الشيشه"
    ],
    en: [
        "Breakfast","Appetizers","Soup","Sandwiches","Burgers","Pizza","Pasta","Main Dishes","Kids Meals","Desserts",
        "Fresh Juices","Smoothies","Milkshake","Iced Coffee","Hot Drinks","Cocktails","Mojito","Soft Drinks","Exstra","Shisha"
    ],
    zh: [
        "早餐","开胃菜","汤","三明治","汉堡","披萨","意面","主菜","儿童餐","甜点",
        "鲜榨果汁","冰沙","奶昔","冰咖啡","热饮","鸡尾酒","莫吉托","软饮料","添加","水烟"
    ]
};

function sortCategories(categories, lang) {
    const order = orderPriority[lang] || [];
    const weight = new Map(order.map((n, i) => [n, i]));
    return [...(categories || [])].sort((a, b) => {
        const ai = weight.has(a.name) ? weight.get(a.name) : 1000 + (categories || []).indexOf(a);
        const bi = weight.has(b.name) ? weight.get(b.name) : 1000 + (categories || []).indexOf(b);
        return ai - bi;
    });
}

function renderMenu(lang = 'ar') {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Clear existing menu

    const data = menuData[lang];
    if (!data) {
        console.error(`No data for language: ${lang}`);
        return;
    }

    const direction = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', direction);


    const categoriesOrdered = sortCategories(data.categories, lang);
    categoriesOrdered.forEach((category, index) => {
        const categoryElement = document.createElement('section');
        categoryElement.classList.add('menu-category');
        const id = 'category-' + index;
        categoryElement.setAttribute('id', id);

        let categoryHTML = `<h2 class="section-title">${category.name}</h2>`;

        if (category.description) {
            categoryHTML += `<p class="category-description">${category.description}</p>`;
        }

        if (category.image) {
            categoryHTML += `<img src="${category.image}" alt="${category.name}" class="category-image">`;
        }

        categoryHTML += '<div class="menu-items">';

        category.items.forEach(item => {
            // تحقق مما إذا كان الوصف موجود في اسم المنتج (مشكلة قسم الكوكتيل)
            let itemName = item.name;
            let itemDescription = item.description;
            
            // إذا كان الاسم يحتوي على وصف (يحتوي على "-")
            if (itemName.includes('-') && !itemDescription) {
                const parts = itemName.split('-');
                itemName = parts[0].trim();
                itemDescription = parts.slice(1).join('-').trim();
            }
            
            categoryHTML += `
                <div class="menu-item">
                    <div class="menu-item-header">
                        <h3>${itemName}</h3>
                        <span class="price">${item.price}</span>
                    </div>
                    <p class="description">${itemDescription}</p>
                </div>
            `;
        });

        categoryHTML += '</div>';
        categoryElement.innerHTML = categoryHTML;
        menuContainer.appendChild(categoryElement);
    });
}


document.addEventListener('DOMContentLoaded', async () => {
    await loadExternalMenu();
    renderMenu(currentLang); // Initial render
    buildCategoryTabs(currentLang);
    setupSearch();
    setupNavArrows();

    window.addEventListener('scroll', updateActiveCategory);

    const langButtons = document.querySelectorAll('#language-switcher button');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            currentLang = lang;
            renderMenu(lang);
            buildCategoryTabs(lang);

            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

function setupNavArrows() {
    const tabsContainer = document.querySelector('.tabs-container');
    const categoryTabs = document.getElementById('category-tabs');
    const leftArrow = document.querySelector('.nav-arrow.left');
    const rightArrow = document.querySelector('.nav-arrow.right');

    // Enhanced logging for debugging
    console.log('setupNavArrows: Initializing...');
    if (!tabsContainer) console.error('setupNavArrows: tabsContainer not found');
    if (!categoryTabs) console.error('setupNavArrows: categoryTabs not found');
    if (!leftArrow) console.error('setupNavArrows: Left arrow not found');
    if (!rightArrow) console.error('setupNavArrows: Right arrow not found');

    if (!tabsContainer || !categoryTabs || !leftArrow || !rightArrow) {
        console.error('setupNavArrows: Bailing out, essential elements are missing.');
        return;
    }

    const scrollAmount = 200;

    // تعديل منطق التمرير ليتناسب مع RTL مع إضافة سلاسة للحركة
    leftArrow.addEventListener('click', () => {
        console.log('setupNavArrows: Left arrow clicked');
        categoryTabs.scrollBy({ 
            left: -scrollAmount,
            behavior: 'smooth' // إضافة سلاسة للتمرير
        });
    });

    rightArrow.addEventListener('click', () => {
        console.log('setupNavArrows: Right arrow clicked');
        categoryTabs.scrollBy({ 
            left: scrollAmount,
            behavior: 'smooth' // إضافة سلاسة للتمرير
        });
    });
    
    // إضافة دعم للتحريك باللمس (Touch Swipe)
    let touchStartX = 0;
    let touchEndX = 0;
    
    categoryTabs.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    categoryTabs.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // الحد الأدنى للمسافة لاعتبارها سحب
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // سحب لليمين - تمرير لليسار
                categoryTabs.scrollBy({ 
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                // سحب لليسار - تمرير لليمين
                categoryTabs.scrollBy({ 
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    }

    const updateArrowVisibility = () => {
        requestAnimationFrame(() => {
            const { scrollLeft, scrollWidth, clientWidth } = categoryTabs;
            const tolerance = 5; // Increased tolerance slightly
            
            // تحويل scrollLeft إلى قيمة موجبة للتعامل مع RTL
            const absScrollLeft = Math.abs(scrollLeft);

            console.log(`updateArrowVisibility: scrollLeft=${scrollLeft}, scrollWidth=${scrollWidth}, clientWidth=${clientWidth}`);

            const isScrollable = scrollWidth > clientWidth + tolerance;
            console.log(`updateArrowVisibility: isScrollable=${isScrollable}`);

            // جعل الأسهم ظاهرة دائماً بغض النظر عن إمكانية التمرير
            leftArrow.style.display = 'flex';
            rightArrow.style.display = 'flex';
            console.log('updateArrowVisibility: Always showing both arrows as requested.');
        });
    };

    const observer = new MutationObserver((mutations) => {
        console.log('setupNavArrows: MutationObserver detected changes in tabs.');
        updateArrowVisibility();
    });
    observer.observe(categoryTabs, { childList: true, subtree: true });

    categoryTabs.addEventListener('scroll', () => {
        console.log('setupNavArrows: Scroll event FIRED.'); // Added to confirm event firing
        // Using a flag to avoid spamming logs
        if (!categoryTabs.isScrolling) {
            console.log('setupNavArrows: Scroll event started.');
            categoryTabs.isScrolling = true;
        }
        updateArrowVisibility();
        clearTimeout(categoryTabs.scrollTimeout);
        categoryTabs.scrollTimeout = setTimeout(() => {
            console.log('setupNavArrows: Scroll event ended.');
            categoryTabs.isScrolling = false;
        }, 150);
    });

    window.addEventListener('resize', () => {
        console.log('setupNavArrows: Window resize event detected.');
        updateArrowVisibility();
    });

    console.log('setupNavArrows: Initial check scheduled.');
    setTimeout(() => {
        console.log('setupNavArrows: Performing initial visibility check.');
        updateArrowVisibility();
    }, 250); // Increased timeout for initial check
}
