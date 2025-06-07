// Данные словаря
const dictionary = {
    unit6: [
        { english: "cabin", transcription: "/ˈkæbɪn/", russian: "хижина, каюта" },
        { english: "canopy", transcription: "/ˈkænəpi/", russian: "навес" },
        { english: "parallel", transcription: "/ˈpærəlel/", russian: "параллельный" },
        { english: "perpendicular", transcription: "/ˌpɜːrpənˈdɪkjələr/", russian: "перпендикулярный" },
        { english: "pill", transcription: "/pɪl/", russian: "таблетка" },
        { english: "presence", transcription: "/ˈprezəns/", russian: "присутствие" },
        { english: "primate", transcription: "/ˈpraɪmeɪt/", russian: "примат" },
        { english: "probe", transcription: "/proʊb/", russian: "зонд, исследовать" },
        { english: "quote", transcription: "/kwoʊt/", russian: "цитата" },
        { english: "rainbow", transcription: "/ˈreɪnboʊ/", russian: "радуга" },
        { english: "rapidly", transcription: "/ˈræpɪdli/", russian: "быстро" },
        { english: "realise", transcription: "/ˈriːəlaɪz/", russian: "осознавать" },
        { english: "reassure", transcription: "/ˌriːəˈʃʊr/", russian: "успокаивать" },
        { english: "reduce", transcription: "/rɪˈduːs/", russian: "уменьшать" },
        { english: "regenerate", transcription: "/rɪˈdʒenəreɪt/", russian: "восстанавливать" },
        { english: "reprove", transcription: "/rɪˈpruːv/", russian: "упрекать" },
        { english: "replace", transcription: "/rɪˈpleɪs/", russian: "заменять" },
        { english: "research", transcription: "/rɪˈsɜːrtʃ/", russian: "исследование" },
        { english: "resource", transcription: "/ˈriːsɔːrs/", russian: "ресурс" },
        { english: "revolution", transcription: "/ˌrevəˈluːʃn/", russian: "революция" },
        { english: "science fiction", transcription: "/ˈsaɪəns ˈfɪkʃn/", russian: "научная фантастика" },
        { english: "sensational", transcription: "/senˈseɪʃənl/", russian: "сенсационный" },
        { english: "sensor", transcription: "/ˈsensər/", russian: "датчик" },
        { english: "sink into", transcription: "/sɪŋk ˈɪntuː/", russian: "погружаться" },
        { english: "skydiving", transcription: "/ˈskaɪdaɪvɪŋ/", russian: "парашютный спорт" },
        { english: "snowstorm", transcription: "/ˈsnoʊstɔːrm/", russian: "снежная буря" },
        { english: "spine", transcription: "/spaɪn/", russian: "позвоночник" },
        { english: "startle", transcription: "/ˈstɑːrtl/", russian: "вздрагивать" },
        { english: "study", transcription: "/ˈstʌdi/", russian: "изучать" },
        { english: "suitable", transcription: "/ˈsuːtəbl/", russian: "подходящий" },
        { english: "supply", transcription: "/səˈplaɪ/", russian: "снабжать" },
        { english: "take for granted", transcription: "/teɪk fɔːr ˈɡræntɪd/", russian: "принимать как должное" },
        { english: "task", transcription: "/tæsk/", russian: "задача" },
        { english: "technical", transcription: "/ˈteknɪkl/", russian: "технический" },
        { english: "the norm", transcription: "/ðə nɔːrm/", russian: "норма" },
        { english: "thorough", transcription: "/ˈθʌrə/", russian: "тщательный" },
        { english: "thunderstorm", transcription: "/ˈθʌndərstɔːrm/", russian: "гроза" },
        { english: "transplantation", transcription: "/ˌtrænzplænˈteɪʃn/", russian: "пересадка" },
        { english: "tropical", transcription: "/ˈtrɒpɪkl/", russian: "тропический" },
        { english: "universe", transcription: "/ˈjuːnɪvɜːrs/", russian: "вселенная" },
        { english: "vertebrate", transcription: "/ˈvɜːrtɪbrət/", russian: "позвоночное" },
        { english: "vigorous", transcription: "/ˈvɪɡərəs/", russian: "энергичный" },
        { english: "virtual", transcription: "/ˈvɜːrtʃuəl/", russian: "виртуальный" },
        { english: "weightlessness", transcription: "/ˈweɪtləsnəs/", russian: "невесомость" },
        { english: "appliance", transcription: "/əˈplaɪəns/", russian: "прибор" },
        { english: "associate", transcription: "/əˈsoʊʃieɪt/", russian: "ассоциировать" },
        { english: "astronomy", transcription: "/əˈstrɒnəmi/", russian: "астрономия" },
        { english: "attractive", transcription: "/əˈtræktɪv/", russian: "привлекательный" },
        { english: "badly behaved", transcription: "/ˈbædli bɪˈheɪvd/", russian: "плохо воспитанный" },
        { english: "believer", transcription: "/bɪˈliːvər/", russian: "верующий" },
        { english: "basement", transcription: "/ˈbeɪsmənt/", russian: "подвал" },
        { english: "battery", transcription: "/ˈbætəri/", russian: "батарея" },
        { english: "bomb", transcription: "/bɒm/", russian: "бомба" },
        { english: "bother", transcription: "/ˈbɒðər/", russian: "беспокоить" },
        { english: "brightly", transcription: "/ˈbraɪtli/", russian: "ярко" },
        { english: "button", transcription: "/ˈbʌtn/", russian: "кнопка" },
        { english: "cashmere", transcription: "/ˈkæʃmɪər/", russian: "кашемир" },
        { english: "casual", transcription: "/ˈkæʒuəl/", russian: "небрежный" },
        { english: "cattle", transcription: "/ˈkætl/", russian: "скот" },
        { english: "celebration", transcription: "/ˌselɪˈbreɪʃn/", russian: "празднование" },
        { english: "china", transcription: "/ˈtʃaɪnə/", russian: "фарфор" },
        { english: "clearance", transcription: "/ˈklɪərəns/", russian: "расчистка" },
        { english: "coach", transcription: "/koʊtʃ/", russian: "тренер" },
        { english: "consume", transcription: "/kənˈsjuːm/", russian: "потреблять" },
        { english: "cosmetics", transcription: "/kɒzˈmetɪks/", russian: "косметика" },
        { english: "cosy", transcription: "/ˈkəʊzi/", russian: "уютный" },
        { english: "cottage", transcription: "/ˈkɒtɪdʒ/", russian: "коттедж" },
        { english: "crumble", transcription: "/ˈkrʌmbl/", russian: "крошиться" },
        { english: "curiosity", transcription: "/ˌkjʊəriˈɒsɪti/", russian: "любопытство" },
        { english: "curly", transcription: "/ˈkɜːrli/", russian: "кудрявый" },
        { english: "dome", transcription: "/doʊm/", russian: "купол" },
        { english: "dominant", transcription: "/ˈdɒmɪnənt/", russian: "доминирующий" },
        { english: "drive sb crazy", transcription: "/draɪv ˈsʌmbədi ˈkreɪzi/", russian: "сводить с ума" },
        { english: "emigrate", transcription: "/ˈemɪɡreɪt/", russian: "эмигрировать" },
        { english: "equipped", transcription: "/ɪˈkwɪpt/", russian: "оборудованный" },
        { english: "file", transcription: "/faɪl/", russian: "файл" },
        { english: "fluently", transcription: "/ˈfluːəntli/", russian: "свободно" },
        { english: "full-time", transcription: "/ˌfʊl ˈtaɪm/", russian: "полный рабочий день" },
        { english: "fully", transcription: "/ˈfʊli/", russian: "полностью" },
        { english: "garlic", transcription: "/ˈɡɑːrlɪk/", russian: "чеснок" },
        { english: "get together", transcription: "/ɡet təˈɡeðər/", russian: "собираться" },
        { english: "gigabyte", transcription: "/ˈɡɪɡəbaɪt/", russian: "гигабайт" },
        { english: "glassware", transcription: "/ˈɡlɑːsweər/", russian: "стеклянная посуда" },
        { english: "good-looking", transcription: "/ˌɡʊd ˈlʊkɪŋ/", russian: "красивый" },
        { english: "gravitate", transcription: "/ˈɡrævɪteɪt/", russian: "тяготеть" },
        { english: "guarantee", transcription: "/ˌɡærənˈtiː/", russian: "гарантировать" },
        { english: "hand-made", transcription: "/ˌhænd ˈmeɪd/", russian: "ручной работы" },
        { english: "handy", transcription: "/ˈhændi/", russian: "удобный" },
        { english: "hard disk", transcription: "/hɑːrd dɪsk/", russian: "жесткий диск" },
        { english: "hard-working", transcription: "/ˌhɑːrd ˈwɜːrkɪŋ/", russian: "трудолюбивый" },
        { english: "homecomings", transcription: "/ˈhoʊmkʌmɪŋz/", russian: "возвращения домой" },
        { english: "housewife", transcription: "/ˈhaʊswaɪf/", russian: "домохозяйка" },
        { english: "hut", transcription: "/hʌt/", russian: "хижина" },
        { english: "hyperactive", transcription: "/ˌhaɪpərˈæktɪv/", russian: "гиперактивный" },
        { english: "immense", transcription: "/ɪˈmens/", russian: "огромный" },
        { english: "in tune with", transcription: "/ɪn tjuːn wɪð/", russian: "в гармонии с" },
        { english: "independent", transcription: "/ˌɪndɪˈpendənt/", russian: "независимый" },
        { english: "ingredient", transcription: "/ɪnˈɡriːdiənt/", russian: "ингредиент" },
        { english: "insecure", transcription: "/ˌɪnsɪˈkjʊər/", russian: "неуверенный" },
        { english: "irreplaceable", transcription: "/ˌɪrɪˈpleɪsəbl/", russian: "незаменимый" },
        { english: "kitchenware", transcription: "/ˈkɪtʃənweər/", russian: "кухонная посуда" },
        { english: "lentils", transcription: "/ˈlentɪlz/", russian: "чечевица" },
        { english: "like chalk and cheese", transcription: "/laɪk tʃɔːk ənd tʃiːz/", russian: "как день и ночь" },
        { english: "linen", transcription: "/ˈlɪnɪn/", russian: "лен" },
        { english: "long-lasting", transcription: "/ˌlɒŋ ˈlɑːstɪŋ/", russian: "долговечный" },
        { english: "low-fat", transcription: "/ˌləʊ ˈfæt/", russian: "нежирный" },
        { english: "loyalty", transcription: "/ˈlɔɪəlti/", russian: "лояльность" },
        { english: "massage", transcription: "/ˈmæsɑːʒ/", russian: "массаж" },
        { english: "medium height", transcription: "/ˈmiːdiəm haɪt/", russian: "средний рост" },
        { english: "mud", transcription: "/mʌd/", russian: "грязь" },
        { english: "night-life", transcription: "/ˈnaɪt laɪf/", russian: "ночная жизнь" },
        { english: "orchard", transcription: "/ˈɔːrtʃərd/", russian: "сад" },
        { english: "painkiller", transcription: "/ˈpeɪnkɪlər/", russian: "обезболивающее" },
        { english: "panoramic", transcription: "/ˌpænəˈræmɪk/", russian: "панорамный" },
        { english: "paradise", transcription: "/ˈpærədaɪs/", russian: "рай" },
        { english: "practical", transcription: "/ˈpræktɪkl/", russian: "практичный" },
        { english: "premises", transcription: "/ˈpremɪsɪz/", russian: "помещения" },
        { english: "pre-packed", transcription: "/ˌpriː ˈpækt/", russian: "расфасованный" },
        { english: "prosecute", transcription: "/ˈprɒsɪkjuːt/", russian: "преследовать в суде" },
        { english: "purchase", transcription: "/ˈpɜːrtʃəs/", russian: "покупать" },
        { english: "rabbit", transcription: "/ˈræbɪt/", russian: "кролик" },
        { english: "relieve", transcription: "/rɪˈliːv/", russian: "облегчать" },
        { english: "remind", transcription: "/rɪˈmaɪnd/", russian: "напоминать" },
        { english: "responsible", transcription: "/rɪˈspɒnsəbl/", russian: "ответственный" },
        { english: "restore", transcription: "/rɪˈstɔːr/", russian: "восстанавливать" },
        { english: "safety", transcription: "/ˈseɪfti/", russian: "безопасность" },
        { english: "seek", transcription: "/siːk/", russian: "искать" },
        { english: "sell out", transcription: "/sel aʊt/", russian: "распродавать" },
        { english: "sentimental", transcription: "/ˌsentɪˈmentl/", russian: "сентиментальный" },
        { english: "shelter", transcription: "/ˈʃeltər/", russian: "укрытие" },
        { english: "simply", transcription: "/ˈsɪmpli/", russian: "просто" },
        { english: "smart", transcription: "/smɑːrt/", russian: "умный" },
        { english: "smartly", transcription: "/ˈsmɑːrtli/", russian: "элегантно" },
        { english: "sociable", transcription: "/ˈsoʊʃəbl/", russian: "общительный" },
        { english: "solid", transcription: "/ˈsɒlɪd/", russian: "твердый" },
        { english: "staff", transcription: "/stæf/", russian: "персонал" },
        { english: "stationery", transcription: "/ˈsteɪʃənəri/", russian: "канцелярские товары" },
        { english: "stone", transcription: "/stoʊn/", russian: "камень" },
        { english: "subscribe", transcription: "/səbˈskraɪb/", russian: "подписываться" },
        { english: "take-away", transcription: "/ˈteɪk əweɪ/", russian: "еда на вынос" },
        { english: "tempting", transcription: "/ˈtemptɪŋ/", russian: "соблазнительный" },
        { english: "terrace", transcription: "/ˈterəs/", russian: "терраса" },
        { english: "the Ladies", transcription: "/ðə ˈleɪdiz/", russian: "женский туалет" },
        { english: "think straight", transcription: "/θɪŋk streɪt/", russian: "мыслить здраво" },
        { english: "tiny", transcription: "/ˈtaɪni/", russian: "крошечный" },
        { english: "toiletries", transcription: "/ˈtɔɪlətriz/", russian: "туалетные принадлежности" },
        { english: "top floor", transcription: "/tɒp flɔːr/", russian: "верхний этаж" },
        { english: "treasure", transcription: "/ˈtreʒər/", russian: "сокровище" },
        { english: "turmeric", transcription: "/ˈtɜːrmərɪk/", russian: "куркума" },
        { english: "wavy", transcription: "/ˈweɪvi/", russian: "волнистый" },
        { english: "wear", transcription: "/weər/", russian: "носить" },
        { english: "wedding", transcription: "/ˈwedɪŋ/", russian: "свадьба" },
        { english: "well behaved", transcription: "/wel bɪˈheɪvd/", russian: "хорошо воспитанный" },
        { english: "well dressed", transcription: "/wel drest/", russian: "хорошо одетый" },
        { english: "whisper", transcription: "/ˈwɪspər/", russian: "шептать" },
        { english: "woollens", transcription: "/ˈwʊlənz/", russian: "шерстяные изделия" },
        { english: "young at heart", transcription: "/jʌŋ ət hɑːrt/", russian: "молодой душой" }
    ],
    unit7: [
        { english: "accusation", transcription: "/ˌækjʊˈzeɪʃn/", russian: "обвинение" },
        { english: "agreement", transcription: "/əˈɡriːmənt/", russian: "соглашение" },
        { english: "apply", transcription: "/əˈplaɪ/", russian: "применять" },
        { english: "be fond of", transcription: "/bi fɒnd ɒv/", russian: "любить" },
        { english: "best-selling", transcription: "/ˌbest ˈselɪŋ/", russian: "бестселлер" },
        { english: "chamber", transcription: "/ˈtʃeɪmbər/", russian: "камера" },
        { english: "chaos", transcription: "/ˈkeɪɒs/", russian: "хаос" },
        { english: "common", transcription: "/ˈkɒmən/", russian: "обычный" },
        { english: "contact", transcription: "/ˈkɒntækt/", russian: "контакт" },
        { english: "copy", transcription: "/ˈkɒpi/", russian: "копировать" },
        { english: "countless", transcription: "/ˈkaʊntləs/", russian: "бесчисленный" },
        { english: "create", transcription: "/kriˈeɪt/", russian: "создавать" },
        { english: "deadly", transcription: "/ˈdedli/", russian: "смертельный" },
        { english: "decade", transcription: "/ˈdekeɪd/", russian: "десятилетие" },
        { english: "demanding", transcription: "/dɪˈmɑːndɪŋ/", russian: "требовательный" },
        { english: "dominate", transcription: "/ˈdɒmɪneɪt/", russian: "доминировать" },
        { english: "don't mind", transcription: "/dəʊnt maɪnd/", russian: "не возражать" },
        { english: "doubles", transcription: "/ˈdʌblz/", russian: "парная игра" },
        { english: "downpour", transcription: "/ˈdaʊnpɔːr/", russian: "ливень" },
        { english: "due", transcription: "/djuː/", russian: "должный" },
        { english: "elect", transcription: "/ɪˈlekt/", russian: "избирать" },
        { english: "enthusiastic", transcription: "/ɪnˌθjuːziˈæstɪk/", russian: "восторженный" },
        { english: "eternity", transcription: "/ɪˈtɜːrnəti/", russian: "вечность" },
        { english: "euphoria", transcription: "/juːˈfɔːriə/", russian: "эйфория" },
        { english: "fail", transcription: "/feɪl/", russian: "терпеть неудачу" },
        { english: "fan", transcription: "/fæn/", russian: "фанат" },
        { english: "fancy dress", transcription: "/ˌfænsi ˈdres/", russian: "костюмированный" },
        { english: "female", transcription: "/ˈfiːmeɪl/", russian: "женский" },
        { english: "fine", transcription: "/faɪn/", russian: "штраф" },
        { english: "fox-hunting", transcription: "/ˈfɒks ˌhʌntɪŋ/", russian: "охота на лис" },
        { english: "gifted", transcription: "/ˈɡɪftɪd/", russian: "одаренный" },
        { english: "goblet", transcription: "/ˈɡɒblət/", russian: "кубок" },
        { english: "ground", transcription: "/ɡraʊnd/", russian: "земля" },
        { english: "hallow", transcription: "/ˈhæləʊ/", russian: "освящать" },
        { english: "harmony", transcription: "/ˈhɑːrməni/", russian: "гармония" },
        { english: "have a word", transcription: "/hæv ə wɜːrd/", russian: "поговорить" },
        { english: "heated", transcription: "/ˈhiːtɪd/", russian: "накаленный" },
        { english: "hero", transcription: "/ˈhɪərəʊ/", russian: "герой" },
        { english: "horseriding", transcription: "/ˈhɔːrsraɪdɪŋ/", russian: "верховая езда" },
        { english: "image", transcription: "/ˈɪmɪdʒ/", russian: "образ" },
        { english: "infectious", transcription: "/ɪnˈfekʃəs/", russian: "заразительный" },
        { english: "institute", transcription: "/ˈɪnstɪtjuːt/", russian: "институт" },
        { english: "introduce", transcription: "/ˌɪntrəˈdjuːs/", russian: "представлять" },
        { english: "invest", transcription: "/ɪnˈvest/", russian: "инвестировать" },
        { english: "launch", transcription: "/lɔːntʃ/", russian: "запускать" },
        { english: "lifestyle", transcription: "/ˈlaɪfstaɪl/", russian: "образ жизни" },
        { english: "loathe", transcription: "/ləʊð/", russian: "ненавидеть" },
        { english: "longhand", transcription: "/ˈlɒŋhænd/", russian: "рукописный текст" },
        { english: "make your mark", transcription: "/meɪk jɔːr mɑːrk/", russian: "заявить о себе" },
        { english: "male", transcription: "/meɪl/", russian: "мужской" },
        { english: "measles", transcription: "/ˈmiːzlz/", russian: "корь" },
        { english: "medieval", transcription: "/ˌmediˈiːvl/", russian: "средневековый" },
        { english: "mob", transcription: "/mɒb/", russian: "толпа" },
        { english: "musical", transcription: "/ˈmjuːzɪkəl/", russian: "музыкальный" },
        { english: "myth", transcription: "/mɪθ/", russian: "миф" },
        { english: "name", transcription: "/neɪm/", russian: "называть" },
        { english: "numerous", transcription: "/ˈnjuːmərəs/", russian: "многочисленный" },
        { english: "obsession", transcription: "/əbˈseʃn/", russian: "одержимость" },
        { english: "once and for all", transcription: "/wʌns ənd fɔːr ɔːl/", russian: "раз и навсегда" },
        { english: "orphan", transcription: "/ˈɔːrfən/", russian: "сирота" },
        { english: "passionate", transcription: "/ˈpæʃənət/", russian: "страстный" },
        { english: "philosopher", transcription: "/fɪˈlɒsəfər/", russian: "философ" },
        { english: "phoenix", transcription: "/ˈfiːnɪks/", russian: "феникс" },
        { english: "poverty", transcription: "/ˈpɒvərti/", russian: "бедность" },
        { english: "producer", transcription: "/prəˈdjuːsər/", russian: "продюсер" },
        { english: "psychological", transcription: "/ˌsaɪkəˈlɒdʒɪkəl/", russian: "психологический" },
        { english: "public school", transcription: "/ˌpʌblɪk ˈskuːl/", russian: "частная школа" },
        { english: "regular", transcription: "/ˈreɡjələr/", russian: "регулярный" },
        { english: "resign", transcription: "/rɪˈzaɪn/", russian: "уходить в отставку" },
        { english: "respond", transcription: "/rɪˈspɒnd/", russian: "отвечать" },
        { english: "rivalry", transcription: "/ˈraɪvəlri/", russian: "соперничество" },
        { english: "slow down", transcription: "/sləʊ daʊn/", russian: "замедляться" },
        { english: "snap up", transcription: "/snæp ʌp/", russian: "быстро покупать" },
        { english: "soccer", transcription: "/ˈsɒkər/", russian: "футбол" },
        { english: "socialite", transcription: "/ˈsəʊʃəlaɪt/", russian: "светский человек" },
        { english: "sort out", transcription: "/sɔːrt aʊt/", russian: "разбираться" },
        { english: "stage", transcription: "/steɪdʒ/", russian: "сцена" },
        { english: "statistics", transcription: "/stəˈtɪstɪks/", russian: "статистика" },
        { english: "sticking point", transcription: "/ˈstɪkɪŋ pɔɪnt/", russian: "камень преткновения" },
        { english: "strike", transcription: "/straɪk/", russian: "забастовка" },
        { english: "sympathy", transcription: "/ˈsɪmpəθi/", russian: "сочувствие" },
        { english: "talent", transcription: "/ˈtælənt/", russian: "талант" },
        { english: "tattoo", transcription: "/tæˈtuː/", russian: "татуировка" },
        { english: "the big time", transcription: "/ðə bɪɡ taɪm/", russian: "большой успех" },
        { english: "to the full", transcription: "/tuː ðə fʊl/", russian: "полностью" },
        { english: "totally", transcription: "/ˈtəʊtəli/", russian: "полностью" },
        { english: "track", transcription: "/træk/", russian: "дорожка" },
        { english: "trademark", transcription: "/ˈtreɪdmɑːrk/", russian: "торговая марка" },
        { english: "try one's luck", transcription: "/traɪ wʌnz lʌk/", russian: "попытать счастья" },
        { english: "twinkly", transcription: "/ˈtwɪŋkli/", russian: "мерцающий" },
        { english: "underwear", transcription: "/ˈʌndərweər/", russian: "нижнее белье" },
        { english: "video game", transcription: "/ˈvɪdiəʊ ɡeɪm/", russian: "видеоигра" },
        { english: "violent", transcription: "/ˈvaɪələnt/", russian: "жестокий" },
        { english: "waste ground", transcription: "/weɪst ɡraʊnd/", russian: "пустырь" },
        { english: "wizard", transcription: "/ˈwɪzərd/", russian: "волшебник" }
    ],
    unit8: [
        { english: "abandon", transcription: "/əˈbændən/", russian: "покидать" },
        { english: "ability", transcription: "/əˈbɪləti/", russian: "способность" },
        { english: "abroad", transcription: "/əˈbrɔːd/", russian: "за границей" },
        { english: "accept", transcription: "/əkˈsept/", russian: "принимать" },
        { english: "access", transcription: "/ˈækses/", russian: "доступ" },
        { english: "accident", transcription: "/ˈæksɪdənt/", russian: "авария" },
        { english: "accompany", transcription: "/əˈkʌmpəni/", russian: "сопровождать" },
        { english: "achieve", transcription: "/əˈtʃiːv/", russian: "достигать" },
        { english: "acknowledge", transcription: "/əkˈnɒlɪdʒ/", russian: "признавать" },
        { english: "acquire", transcription: "/əˈkwaɪər/", russian: "приобретать" }
    ]
};

// Переносим данные словаря в глобальные переменные для доступа из функции самопроверки
const unit6 = dictionary.unit6;
const unit7 = dictionary.unit7;
const unit8 = dictionary.unit8 || []; // Добавляем пустой массив, если юнит не определен

// Создание карточки слова
function createWordCard(word, searchQuery = '', searchType = 'english', index) {
    const isMobile = window.innerWidth <= 768;
    const delayFactor = isMobile ? 15 : 30; // На мобильных меньшая задержка
    const maxDelay = isMobile ? 300 : 1000; // Максимальная задержка
    
    const card = document.createElement('div');
    card.className = 'word-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    // Добавляем английское слово
    const english = document.createElement('div');
    english.className = 'english-word';
    
    if (searchQuery && searchType === 'english') {
        english.innerHTML = highlightText(word.english, searchQuery);
    } else {
        english.textContent = word.english;
    }
    
    // Добавляем транскрипцию
    const transcription = document.createElement('div');
    transcription.className = 'transcription';
    transcription.textContent = word.transcription;
    
    // Добавляем русский перевод
    const russian = document.createElement('div');
    russian.className = 'russian-translation';
    
    if (searchQuery && searchType === 'russian') {
        russian.innerHTML = highlightText(word.russian, searchQuery);
    } else {
        russian.textContent = word.russian;
    }
    
    // Добавляем кнопку копирования
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i>📋</i>';
    copyBtn.setAttribute('title', 'Копировать слово');
    copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(word.english);
        showCopyNotification(copyBtn);
    });
    
    // Собираем карточку
    card.appendChild(english);
    card.appendChild(transcription);
    card.appendChild(russian);
    card.appendChild(copyBtn);
    
    // При клике на карточку тоже копируем слово
    card.addEventListener('click', () => {
        copyToClipboard(word.english);
        showCopyNotification(copyBtn);
    });
    
    // Анимация появления с задержкой
    setTimeout(() => {
        card.style.transition = isMobile ? 'opacity 0.3s ease, transform 0.3s ease' : 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, Math.min(index * delayFactor, maxDelay));
    
    return card;
}

// Функция для подсветки текста поиска
function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(query, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

// Функция для копирования текста в буфер обмена
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .catch(err => {
            console.error('Не удалось скопировать текст: ', err);
        });
}

// Функция для отображения уведомления о копировании
function showCopyNotification(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '✓';
    button.classList.add('copied');
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('copied');
    }, 1500);
}

// Загрузка слов для выбранного юнита
function loadUnitWords(unitId, searchQuery = '', searchType = 'english', sortType = 'default') {
    const wordList = document.querySelector(`#${unitId} .word-list`);
    wordList.innerHTML = '';
    
    let words = [...dictionary[unitId]];
    
    // Фильтрация по поисковому запросу
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        words = words.filter(word => {
            if (searchType === 'english') {
                return word.english.toLowerCase().includes(query);
            } else {
                return word.russian.toLowerCase().includes(query);
            }
        });
    }
    
    // Сортировка слов
    words = sortWords(words, sortType);
    
    // Добавляем карточки слов
    words.forEach((word, index) => {
        const card = createWordCard(word, searchQuery, searchType, index);
        wordList.appendChild(card);
    });
    
    // Обновляем счетчик слов после фильтрации
    document.getElementById('word-count').textContent = words.length;
    
    // Прокручиваем к началу списка, если есть результаты поиска
    if (searchQuery && words.length > 0) {
        const wordSection = document.getElementById(unitId);
        wordSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Функция для сортировки слов
function sortWords(words, sortType) {
    const sortedWords = [...words];
    
    switch (sortType) {
        case 'en-asc':
            sortedWords.sort((a, b) => a.english.localeCompare(b.english));
            break;
        case 'en-desc':
            sortedWords.sort((a, b) => b.english.localeCompare(a.english));
            break;
        case 'ru-asc':
            sortedWords.sort((a, b) => a.russian.localeCompare(b.russian, 'ru'));
            break;
        case 'ru-desc':
            sortedWords.sort((a, b) => b.russian.localeCompare(a.russian, 'ru'));
            break;
        default:
            break;
    }
    
    return sortedWords;
}

// Переключение юнита
function switchUnit(unitId) {
    // Убираем класс active у всех кнопок и секций
    document.querySelectorAll('.unit-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.word-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Добавляем класс active для выбранного юнита
    document.querySelector(`.unit-btn[data-unit="${unitId}"]`).classList.add('active');
    document.getElementById(unitId).classList.add('active');
    
    // Загружаем слова для выбранного юнита
    loadUnitWords(unitId);
    
    // Обновляем счетчик слов
    updateWordCount();
    
    // Сбрасываем поле поиска
    document.getElementById('search-input').value = '';
    
    // Прокручиваем страницу вверх
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Обработчик поиска
function handleSearch() {
    const searchQuery = document.getElementById('search-input').value.trim();
    const searchType = document.querySelector('input[name="search-type"]:checked').value;
    const sortType = document.getElementById('sort-select').value;
    
    // Создаем специальный юнит для поиска по всем юнитам
    if (searchQuery) {
        searchAllUnits(searchQuery, searchType, sortType);
    } else {
        // Если поисковый запрос пустой, просто загружаем текущий юнит
        const activeUnitId = document.querySelector('.unit-btn.active').dataset.unit;
        loadUnitWords(activeUnitId, '', searchType, sortType);
    }
}

// Функция для поиска по всем юнитам
function searchAllUnits(searchQuery, searchType = 'english', sortType = 'default') {
    const resultsContainer = document.getElementById('search-results');
    
    // Проверяем существование контейнера для результатов поиска
    if (!resultsContainer) {
        // Если контейнера нет, создаем его
        createSearchResultsSection();
    }
    
    const wordList = document.querySelector('#search-results .word-list');
    wordList.innerHTML = '';
    
    // Скрываем все юниты и показываем результаты поиска
    document.querySelectorAll('.word-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('search-results').classList.add('active');
    
    // Ищем слова во всех юнитах
    let allMatchingWords = [];
    
    for (const unitId in dictionary) {
        const words = dictionary[unitId];
        const matchingWords = words.filter(word => {
            if (searchType === 'english') {
                return word.english.toLowerCase().includes(searchQuery.toLowerCase());
            } else {
                return word.russian.toLowerCase().includes(searchQuery.toLowerCase());
            }
        }).map(word => ({...word, unitId})); // Сохраняем ID юнита
        
        allMatchingWords = [...allMatchingWords, ...matchingWords];
    }
    
    // Сортировка результатов
    allMatchingWords = sortWords(allMatchingWords, sortType);
    
    // Добавляем карточки слов
    allMatchingWords.forEach((word, index) => {
        const card = createWordCard(word, searchQuery, searchType, index);
        
        // Добавляем метку юнита
        const unitLabel = document.createElement('div');
        unitLabel.className = 'unit-label';
        unitLabel.textContent = word.unitId.replace('unit', 'Unit ');
        card.appendChild(unitLabel);
        
        wordList.appendChild(card);
    });
    
    // Обновляем счетчик слов
    document.getElementById('word-count').textContent = allMatchingWords.length;
    
    // Прокручиваем к результатам поиска
    if (allMatchingWords.length > 0) {
        document.getElementById('search-results').scrollIntoView({ behavior: 'smooth' });
    }
}

// Функция для создания секции результатов поиска
function createSearchResultsSection() {
    const container = document.querySelector('main .container');
    
    // Создаем секцию для результатов поиска
    const searchResultsSection = document.createElement('section');
    searchResultsSection.id = 'search-results';
    searchResultsSection.className = 'word-section';
    
    // Добавляем заголовок
    const heading = document.createElement('h2');
    heading.textContent = 'Результаты поиска';
    
    // Создаем контейнер для карточек
    const wordList = document.createElement('div');
    wordList.className = 'word-list';
    
    // Собираем секцию
    searchResultsSection.appendChild(heading);
    searchResultsSection.appendChild(wordList);
    
    // Добавляем секцию в DOM после всех юнитов
    container.appendChild(searchResultsSection);
}

// Функция для обработки сортировки
function handleSort() {
    const sortType = document.getElementById('sort-select').value;
    const searchQuery = document.getElementById('search-input').value.trim();
    const searchType = document.querySelector('input[name="search-type"]:checked').value;
    const activeUnit = document.querySelector('.unit-btn.active').getAttribute('data-unit');
    
    loadUnitWords(activeUnit, searchQuery, searchType, sortType);
}

// Функция для отображения/скрытия кнопки "Наверх"
function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Функция для прокрутки страницы наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Функция для обновления московского времени
function updateMoscowTime() {
    const moscowTimeElement = document.getElementById('moscow-time');
    const options = { 
        timeZone: 'Europe/Moscow',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const moscowTime = new Date().toLocaleTimeString('ru-RU', options);
    moscowTimeElement.textContent = `Москва: ${moscowTime}`;
}

// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle span');
    
    body.classList.toggle('light-theme');
    
    // Сохраняем предпочтение пользователя в localStorage
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌙';
    }
}

// Функция для установки темы при загрузке страницы
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle span');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}

// Функция для отслеживания времени на сайте
let sessionSeconds = 0;
let sessionTimer;

function startSessionTimer() {
    // Проверяем, есть ли сохраненное время в localStorage
    const savedTime = localStorage.getItem('sessionTime');
    if (savedTime) {
        sessionSeconds = parseInt(savedTime, 10);
    }
    
    // Обновляем таймер каждую секунду
    sessionTimer = setInterval(() => {
        sessionSeconds++;
        updateSessionTime();
        
        // Сохраняем время в localStorage каждые 5 секунд
        if (sessionSeconds % 5 === 0) {
            localStorage.setItem('sessionTime', sessionSeconds.toString());
        }
    }, 1000);
    
    // Начальное обновление
    updateSessionTime();
}

// Функция для обновления отображения времени на сайте
function updateSessionTime() {
    const sessionTimeElement = document.getElementById('session-time');
    
    // Преобразуем секунды в часы, минуты, секунды
    const hours = Math.floor(sessionSeconds / 3600);
    const minutes = Math.floor((sessionSeconds % 3600) / 60);
    const seconds = sessionSeconds % 60;
    
    // Форматируем время с ведущими нулями
    const formattedTime = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');
    
    sessionTimeElement.textContent = `На сайте: ${formattedTime}`;
}

// Управление фоновым звуком
let soundEnabled = false;
let playerVolume = 50;
let player = null;

function initSoundPlayer() {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    window.onYouTubeIframeAPIReady = function() {
        console.log('YouTube API готова');
        window.player = new YT.Player('sound-player', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };
    
    function onPlayerReady(event) {
        console.log('Плеер готов');
        // Устанавливаем начальную громкость
        updateVolume(document.getElementById('volume-slider').value);
        
        // Устанавливаем начальное состояние звука (выключен)
        setTimeout(() => {
            if (localStorage.getItem('soundEnabled') === 'true') {
                toggleSound(true);
            } else {
                player.pauseVideo();
                document.getElementById('toggle-sound').querySelector('span').textContent = '🔇';
                document.getElementById('toggle-sound').classList.remove('active');
            }
        }, 1000);
    }
    
    function onPlayerStateChange(event) {
        console.log('Состояние плеера изменилось:', event.data);
    }
}

// Переключение звука
function toggleSound(forceState = null) {
    const soundButton = document.getElementById('toggle-sound');
    const soundIcon = soundButton.querySelector('span');
    
    // Если player еще не инициализирован, выходим
    if (!window.player || typeof window.player.getPlayerState !== 'function') {
        console.log('Плеер не готов');
        return;
    }
    
    let soundEnabled;
    
    if (forceState !== null) {
        soundEnabled = forceState;
    } else {
        const playerState = window.player.getPlayerState();
        soundEnabled = playerState !== YT.PlayerState.PLAYING;
    }
    
    try {
        if (soundEnabled) {
            console.log('Включаем звук');
            window.player.playVideo();
            soundIcon.textContent = '🔊';
            soundButton.classList.add('active');
            localStorage.setItem('soundEnabled', 'true');
        } else {
            console.log('Выключаем звук');
            window.player.pauseVideo();
            soundIcon.textContent = '🔇';
            soundButton.classList.remove('active');
            localStorage.setItem('soundEnabled', 'false');
        }
    } catch (error) {
        console.error('Ошибка при переключении звука:', error);
    }
}

// Обновление громкости
function updateVolume(value) {
    if (window.player && typeof window.player.setVolume === 'function') {
        window.player.setVolume(value);
        localStorage.setItem('soundVolume', value);
    }
}

// Обработчики событий при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем плавную прокрутку для всех внутренних ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Плавное появление элементов при прокрутке
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Добавляем анимацию для карточек слов
    function setupAnimations() {
        document.querySelectorAll('.word-card').forEach(card => {
            if (!card.classList.contains('animation-setup')) {
                card.classList.add('animation-setup');
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                observer.observe(card);
            }
        });
    }
    
    // Наблюдаем за добавлением новых карточек слов
    const wordListObserver = new MutationObserver(setupAnimations);
    document.querySelectorAll('.word-list').forEach(list => {
        wordListObserver.observe(list, { childList: true });
    });
    
    // Инициализация состояния звука
    let soundVolume = localStorage.getItem('soundVolume');
    if (soundVolume) {
        document.getElementById('volume-slider').value = soundVolume;
    }
    
    // Оптимизация переходов между юнитами
    const unitButtons = document.querySelectorAll('.unit-btn');
    unitButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const unitId = this.getAttribute('data-unit');
            switchUnit(unitId);
        });
    });
    
    // Оптимизация для мобильных устройств
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.word-card').forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
        });
    }
    
    // Добавляем CSS переменную для контроля всех анимаций
    document.documentElement.style.setProperty('--animation-speed', localStorage.getItem('reducedMotion') === 'true' ? '0s' : '0.3s');
    
    // Устанавливаем плавность прокрутки
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Добавляем стили для плавного появления элементов
    const style = document.createElement('style');
    style.textContent = `
        .word-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01s !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01s !important;
                scroll-behavior: auto !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Инициализируем анимации для текущих карточек
    setupAnimations();
    
    // Загружаем слова для активного юнита
    const activeUnit = document.querySelector('.unit-btn.active');
    if (activeUnit) {
        loadUnitWords(activeUnit.dataset.unit);
    }
    
    // Обновляем счетчик слов
    updateWordCount();
    
    // Обработчики событий
    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    document.getElementById('sort-select').addEventListener('change', handleSort);
    
    document.querySelectorAll('.unit-btn').forEach(button => {
        button.addEventListener('click', function() {
            switchUnit(this.dataset.unit);
        });
    });
    
    document.getElementById('back-to-top').addEventListener('click', scrollToTop);
    
    window.addEventListener('scroll', toggleBackToTopButton);
    
    document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
    
    // Инициализация звукового плеера
    initSoundPlayer();
    
    // Обработчики для звука
    document.getElementById('toggle-sound').addEventListener('click', () => toggleSound());
    
    const volumeSlider = document.getElementById('volume-slider');
    volumeSlider.addEventListener('input', (e) => updateVolume(e.target.value));
    
    // Загружаем сохраненную громкость, если есть
    const savedVolume = localStorage.getItem('soundVolume');
    if (savedVolume) {
        volumeSlider.value = savedVolume;
        playerVolume = parseInt(savedVolume, 10);
    }
    
    // Запускаем часы
    updateMoscowTime();
    setInterval(updateMoscowTime, 1000);
    
    // Запускаем таймер сессии
    startSessionTimer();
    
    // Устанавливаем начальную тему
    setInitialTheme();
    
    // Находим все кнопки сокращенного варианта
    const shortBtns = document.querySelectorAll('.shortened-btn');
    
    // Добавляем обработчики для открытия модальных окон
    shortBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            // Открываем модальное окно
            modal.classList.add('show');
            
            // Блокируем прокрутку страницы
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Находим все кнопки закрытия
    const closeBtns = document.querySelectorAll('.close');
    
    // Добавляем обработчики для закрытия модальных окон
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    // Закрытие по клику на внешнюю область
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(e);
            }
        });
    });
    
    // Закрытие по нажатию Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                openModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Функция закрытия модального окна
    function closeModal(e) {
        const modal = e.target.closest('.modal');
        modal.classList.remove('show');
        
        // Разблокируем прокрутку страницы
        document.body.style.overflow = '';
    }
    
    // Активируем защиту
    preventCopy();
});

// Сохраняем время при закрытии страницы
window.addEventListener('beforeunload', () => {
    localStorage.setItem('sessionTime', sessionSeconds.toString());
});

// Обновление счетчика слов
function updateWordCount() {
    const activeUnitId = document.querySelector('.unit-btn.active').dataset.unit;
    const wordCount = dictionary[activeUnitId].length;
    document.getElementById('word-count').textContent = wordCount;
}

// Переключение между разделами (словарь/тексты)
function switchMainSection(sectionId) {
    // Убираем класс active у всех кнопок и секций
    document.querySelectorAll('.main-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.main-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Добавляем класс active для выбранной секции и кнопки
    document.querySelector(`.main-nav-btn[data-target="${sectionId}"]`).classList.add('active');
    document.getElementById(sectionId).classList.add('active');
    
    // Прокручиваем к началу секции
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Переключение между текстами
function switchText(textId) {
    // Убираем класс active у всех кнопок и секций текстов
    document.querySelectorAll('.text-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.text-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Добавляем класс active для выбранного текста
    document.querySelector(`.text-btn[data-text-id="${textId}"]`).classList.add('active');
    document.getElementById(textId).classList.add('active');
    
    // Прокручиваем к началу секции
    document.getElementById('texts-section').scrollIntoView({ behavior: 'smooth' });
}

// Добавляем обработчики для переключения между основными разделами и текстами
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для переключения между словарём и текстами
    document.querySelectorAll('.main-nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-target');
            switchMainSection(targetSection);
        });
    });
    
    // Обработчики для переключения между текстами
    document.querySelectorAll('.text-btn').forEach(button => {
        button.addEventListener('click', function() {
            const textId = this.getAttribute('data-text-id');
            switchText(textId);
        });
    });
    
    // Дополняем существующие обработчики событий при загрузке страницы
    const existingLoad = window.onload;
    window.onload = function() {
        if (existingLoad) existingLoad();
        
        // Инициализируем активные секции
        const activeMainSection = document.querySelector('.main-nav-btn.active').getAttribute('data-target');
        switchMainSection(activeMainSection);
        
        // Инициализируем активный текст, если находимся в разделе текстов
        if (activeMainSection === 'texts-section') {
            const activeText = document.querySelector('.text-btn.active').getAttribute('data-text-id');
            switchText(activeText);
        }
    };
});

// Проверка существующего кода
console.log('Script loaded');

// Функции для защиты контента
function preventCopy() {
    // Обработчик для предотвращения сочетаний клавиш копирования
    document.addEventListener('keydown', function(e) {
        // Разрешаем, если это внутри карточки слова
        if (e.target.closest('.word-card')) {
            return true;
        }
        
        // Запрещаем Ctrl+C, Ctrl+U, Ctrl+S, PrintScreen, F12
        if ((e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83)) || 
            e.keyCode === 44 || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
    });
    
    // Предотвращаем контекстное меню
    document.addEventListener('contextmenu', function(e) {
        // Разрешаем в карточках слов
        if (e.target.closest('.word-card')) {
            return true;
        }
        
        e.preventDefault();
        return false;
    });
    
    // Предотвращаем перетаскивание
    document.addEventListener('dragstart', function(e) {
        // Разрешаем в карточках слов
        if (e.target.closest('.word-card')) {
            return true;
        }
        
        e.preventDefault();
        return false;
    });
    
    // Обработчик для предотвращения копирования текста
    document.addEventListener('copy', function(e) {
        // Разрешаем в карточках слов
        if (e.target.closest('.word-card')) {
            return true;
        }
        
        e.preventDefault();
        return false;
    });
    
    // Обработчик для выделения текста
    document.addEventListener('selectstart', function(e) {
        // Разрешаем в карточках слов
        if (e.target.closest('.word-card')) {
            return true;
        }
        
        // Разрешаем в полях ввода
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return true;
        }
        
        e.preventDefault();
        return false;
    });
    
    // Блокировка DevTools через периодическую проверку
    setInterval(function() {
        const devtools = /./;
        devtools.toString = function() {
            return false;
        }
        console.log(devtools);
    }, 1000);
    
    // Блокировка скриншотов через обнаружение события видимости
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            // Можно добавить дополнительные действия при попытке сделать скриншот
        }
    });
}

// Функциональность самопроверки
document.addEventListener('DOMContentLoaded', function() {
    // Переменные для самопроверки
    let quizWords = [];
    let currentWordIndex = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let skippedAnswers = 0;
    let wrongAnsweredWords = [];
    let quizInProgress = false;
    let timer = null;

    // Переключение на секцию самопроверки при клике на соответствующую кнопку в главной навигации
    const mainNavBtns = document.querySelectorAll('.main-nav-btn');
    
    // Управление чекбоксами выбора юнитов
    const selectAllCheckbox = document.getElementById('select-all-units');
    const unitCheckboxes = document.querySelectorAll('.quiz-unit-checkbox');
    
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            unitCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        });
    }
    
    // Обработка кнопки старта самопроверки
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizSettings = document.querySelector('.quiz-settings');
    const quizContainer = document.querySelector('.quiz-container');
    const quizResults = document.querySelector('.quiz-results');
    
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', startQuiz);
    }
    
    // Кнопка начать заново
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', function() {
            quizResults.style.display = 'none';
            quizSettings.style.display = 'block';
        });
    }
    
    // Обработчики для кнопок в процессе самопроверки
    const quizSubmitBtn = document.getElementById('quiz-submit');
    const quizSkipBtn = document.getElementById('quiz-skip');
    const quizNextBtn = document.getElementById('quiz-next');
    const quizFinishBtn = document.getElementById('quiz-finish');
    
    if (quizSubmitBtn) {
        quizSubmitBtn.addEventListener('click', checkAnswer);
    }
    
    if (quizSkipBtn) {
        quizSkipBtn.addEventListener('click', skipWord);
    }
    
    if (quizNextBtn) {
        quizNextBtn.addEventListener('click', nextWord);
    }
    
    if (quizFinishBtn) {
        quizFinishBtn.addEventListener('click', finishQuiz);
    }
    
    // Обработка нажатия Enter в поле ввода
    const quizAnswerInput = document.getElementById('quiz-answer');
    if (quizAnswerInput) {
        quizAnswerInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                if (quizSubmitBtn.style.display !== 'none') {
                    checkAnswer();
                } else if (quizNextBtn.style.display !== 'none') {
                    nextWord();
                }
            }
        });
    }
    
    // Функция для старта самопроверки
    function startQuiz() {
        // Проверяем, что хотя бы один юнит выбран
        const selectedUnits = Array.from(unitCheckboxes).filter(checkbox => checkbox.checked);
        if (selectedUnits.length === 0) {
            alert('Выберите хотя бы один юнит для самопроверки');
            return;
        }
        
        // Собираем слова из выбранных юнитов
        quizWords = [];
        selectedUnits.forEach(unit => {
            const unitName = unit.value;
            const unitWords = window[unitName] || [];
            quizWords = [...quizWords, ...unitWords];
        });
        
        // Перемешиваем слова
        quizWords = shuffleArray(quizWords);
        
        // Если нет слов, показываем сообщение
        if (quizWords.length === 0) {
            alert('Не найдено слов в выбранных юнитах');
            return;
        }
        
        // Сбрасываем переменные
        currentWordIndex = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        skippedAnswers = 0;
        wrongAnsweredWords = [];
        quizInProgress = true;
        
        // Скрываем настройки и показываем контейнер самопроверки
        quizSettings.style.display = 'none';
        quizContainer.style.display = 'block';
        quizResults.style.display = 'none';
        
        // Показываем первое слово
        showCurrentWord();
        
        // Фокус на поле ввода
        quizAnswerInput.focus();
    }
    
    // Функция для показа текущего слова
    function showCurrentWord() {
        const quizWord = document.querySelector('.quiz-word');
        const quizTranscription = document.querySelector('.quiz-transcription');
        const progressBar = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        const scoreText = document.querySelector('.score-text');
        const quizResult = document.querySelector('.quiz-result');
        
        // Очищаем результат и поле ввода
        quizResult.textContent = '';
        quizResult.classList.remove('correct', 'incorrect');
        quizAnswerInput.value = '';
        quizAnswerInput.disabled = false;
        
        // Показываем кнопки проверки и пропуска, скрываем кнопки следующего слова и завершения
        quizSubmitBtn.style.display = 'inline-block';
        quizSkipBtn.style.display = 'inline-block';
        quizNextBtn.style.display = 'none';
        
        // Определяем, нужно ли показать кнопку завершения
        if (currentWordIndex === quizWords.length - 1) {
            quizFinishBtn.style.display = 'inline-block';
        } else {
            quizFinishBtn.style.display = 'none';
        }
        
        // Заполняем информацию о текущем слове
        const currentWord = quizWords[currentWordIndex];
        quizWord.textContent = currentWord.english;
        quizTranscription.textContent = currentWord.transcription || '';
        
        // Обновляем прогресс
        const progressPercentage = (currentWordIndex / quizWords.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `Слово ${currentWordIndex + 1} из ${quizWords.length}`;
        scoreText.textContent = `Правильно: ${correctAnswers}`;
    }
    
    // Функция для проверки ответа
    function checkAnswer() {
        if (!quizInProgress) return;
        
        const currentWord = quizWords[currentWordIndex];
        const userAnswer = quizAnswerInput.value.trim().toLowerCase();
        const correctRussian = currentWord.russian.toLowerCase();
        const quizResult = document.querySelector('.quiz-result');
        
        // Предотвращаем повторную проверку
        quizSubmitBtn.style.display = 'none';
        quizSkipBtn.style.display = 'none';
        quizAnswerInput.disabled = true;
        
        // Проверяем ответ
        if (userAnswer === correctRussian) {
            // Правильный ответ
            quizResult.textContent = 'Правильно!';
            quizResult.classList.add('correct');
            correctAnswers++;
        } else {
            // Неправильный ответ
            quizResult.textContent = `Неправильно. Правильный ответ: ${currentWord.russian}`;
            quizResult.classList.add('incorrect');
            wrongAnswers++;
            wrongAnsweredWords.push(currentWord);
            
            // Показываем правильный ответ на 3 секунды и переходим к следующему слову
            timer = setTimeout(() => {
                if (currentWordIndex < quizWords.length - 1) {
                    currentWordIndex++;
                    showCurrentWord();
                } else {
                    finishQuiz();
                }
            }, 3000);
            return;
        }
        
        // Показываем кнопку "Следующее слово" или "Завершить"
        if (currentWordIndex < quizWords.length - 1) {
            quizNextBtn.style.display = 'inline-block';
        } else {
            quizFinishBtn.style.display = 'inline-block';
        }
    }
    
    // Функция для пропуска слова
    function skipWord() {
        if (!quizInProgress) return;
        
        skippedAnswers++;
        wrongAnsweredWords.push(quizWords[currentWordIndex]);
        
        if (currentWordIndex < quizWords.length - 1) {
            currentWordIndex++;
            showCurrentWord();
        } else {
            finishQuiz();
        }
    }
    
    // Функция для перехода к следующему слову
    function nextWord() {
        if (!quizInProgress) return;
        
        // Очищаем таймер, если он был установлен
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        
        if (currentWordIndex < quizWords.length - 1) {
            currentWordIndex++;
            showCurrentWord();
        } else {
            finishQuiz();
        }
    }
    
    // Функция для завершения самопроверки
    function finishQuiz() {
        // Очищаем таймер, если он был установлен
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        
        quizInProgress = false;
        
        // Скрываем контейнер самопроверки и показываем результаты
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        
        // Заполняем статистику
        const totalWords = quizWords.length;
        document.getElementById('quiz-total-words').textContent = totalWords;
        document.getElementById('quiz-correct').textContent = correctAnswers;
        document.getElementById('quiz-wrong').textContent = wrongAnswers;
        document.getElementById('quiz-skipped').textContent = skippedAnswers;
        
        // Вычисляем точность
        const accuracy = totalWords > 0 ? Math.round((correctAnswers / totalWords) * 100) : 0;
        document.getElementById('quiz-accuracy').textContent = `${accuracy}%`;
        
        // Заполняем слова, на которые были даны неправильные ответы
        const wrongWordsContainer = document.querySelector('.quiz-wrong-words-container');
        const wrongWordsList = document.querySelector('.quiz-wrong-words');
        
        if (wrongAnsweredWords.length > 0) {
            wrongWordsContainer.style.display = 'block';
            wrongWordsList.innerHTML = '';
            
            wrongAnsweredWords.forEach(word => {
                const wordItem = document.createElement('div');
                wordItem.className = 'wrong-word-item';
                
                const wordEnglish = document.createElement('div');
                wordEnglish.className = 'wrong-word-en';
                wordEnglish.textContent = word.english;
                
                const wordRussian = document.createElement('div');
                wordRussian.className = 'wrong-word-ru';
                wordRussian.textContent = word.russian;
                
                wordItem.appendChild(wordEnglish);
                wordItem.appendChild(wordRussian);
                wrongWordsList.appendChild(wordItem);
            });
        } else {
            wrongWordsContainer.style.display = 'none';
        }
    }
    
    // Вспомогательная функция для перемешивания массива
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
});