(function () {
  const randomBtn = document.getElementById('seasonWeekRandomBtn');
  const todayBtn = document.getElementById('seasonWeekTodayBtn');
  const saveCardBtn = document.getElementById('seasonCardSaveBtn');
  const saveCardStatus = document.getElementById('seasonCardStatus');
  const output = document.getElementById('seasonWeekOutput');
  const ritualOutput = document.getElementById('ritualOutput');
  const ritualRefreshBtn = document.getElementById('ritualRefreshBtn');
  const wrap = document.getElementById('lenochkaWrap');

  if (!randomBtn || !todayBtn || !output || !wrap) return;

  const seasonalNotes = [
    { range: '4–8 февраля', start: [2, 4], end: [2, 8], season: '東風解凍 (Харукадзэ коори о току) — Восточные ветры растапливают лёд', text: 'Первое дыхание весны: лёд слабеет, в воздухе появляется мягкое тепло.' },
    { range: '9–13 февраля', start: [2, 9], end: [2, 13], season: '黄鶯睍睆 (Коо кэнкан су) — Камышовки начинают петь', text: 'Первые птицы подают голос — природа просыпается после зимней тишины.' },
    { range: '14–18 февраля', start: [2, 14], end: [2, 18], season: '魚上氷 (Уо коори о идзуру) — Рыба появляется из-подо льда', text: 'Вода оживает: подтаявшие кромки льда открывают движение жизни.' },
    { range: '19–23 февраля', start: [2, 19], end: [2, 23], season: '土脉潤起 (Цути но сё уруои окору) — Дожди увлажняют землю', text: 'Почва набирает влагу, готовясь к новому росту.' },
    { range: '24–28 февраля', start: [2, 24], end: [2, 28], season: '霞始靆 (Касуми хадзимэтэ танабику) — Туманы начинают наползать', text: 'Утренние туманы мягко размывают горизонт и смягчают свет.' },
    { range: '1–5 марта', start: [3, 1], end: [3, 5], season: '草木萌動 (Сомоку мэбаэ идзуру) — Пробивается трава, появляются листья на деревьях', text: 'Первые побеги напоминают: весна уже вступает в силу.' },
    { range: '6–10 марта', start: [3, 6], end: [3, 10], season: '蟄虫啓戸 (Сугомори мусито о хираку) — Насекомые просыпаются и выходят', text: 'Незаметная зимняя жизнь выходит наружу вместе с теплом.' },
    { range: '11–15 марта', start: [3, 11], end: [3, 15], season: '桃始笑 (Момо хадзимэтэ саку) — Начинает цвести персик', text: 'Нежные цветы персика приносят ранние краски весны.' },
    { range: '16–20 марта', start: [3, 16], end: [3, 20], season: '菜虫化蝶 (Намуси тё то нару) — Куколки превращаются в бабочек', text: 'Время превращений: мир становится легче и подвижнее.' },
    { range: '21–25 марта', start: [3, 21], end: [3, 25], season: '雀始巣 (Судзумэ хадзимэтэ суку) — Воробьи начинают гнездиться', text: 'Птицы обустраивают гнёзда, и в природе чувствуется забота о будущем.' },
    { range: '26–30 марта', start: [3, 26], end: [3, 30], season: '櫻始開 (Сакура хадзимэтэ саку) — Зацветает сакура', text: 'Расцвет сакуры отмечает один из самых узнаваемых моментов весны.' },
    { range: '31 марта – 4 апреля', start: [3, 31], end: [4, 4], season: '雷乃発声 (Каминари сунавати коэ о хассу) — Слышатся звуки грома', text: 'Первый весенний гром напоминает о силе и переменчивости сезона.' },
    { range: '5–9 апреля', start: [4, 5], end: [4, 9], season: '玄鳥至 (Цубамэ китару) — Прилетают ласточки', text: 'Возвращение ласточек приносит ощущение устойчивого тепла.' },
    { range: '10–14 апреля', start: [4, 10], end: [4, 14], season: '鴻雁北 (Коган каэру) — Дикие гуси улетают', text: 'Перелётные птицы меняют направление, следуя новому ритму года.' },
    { range: '15–19 апреля', start: [4, 15], end: [4, 19], season: '虹始見 (Нидзи хадзимэтэ аравару) — Появляется первая радуга', text: 'После дождей в небе всё чаще возникают яркие полосы радуги.' },
    { range: '20–24 апреля', start: [4, 20], end: [4, 24], season: '葭始生 (Аси хадзимэтэ сёдзу) — Прорастает тростник', text: 'У воды поднимается молодой тростник, усиливая зелёный тон пейзажа.' },
    { range: '25–29 апреля', start: [4, 25], end: [4, 29], season: '霜止出苗 (Симо ямитэ наэ идзуру) — Кончаются холода, прорастает рис', text: 'Ночные заморозки уходят, и начинается активная сельская работа.' },
    { range: '30 апреля – 4 мая', start: [4, 30], end: [5, 4], season: '牡丹華 (Ботан хана саку) — Цветут пионы', text: 'Пышные пионы раскрываются, делая весну насыщенной и плотной.' },
    { range: '5–9 мая', start: [5, 5], end: [5, 9], season: '蛙始鳴 (Кавадзу хадзимэтэ наку) — Начинают кричать лягушки', text: 'У воды становится шумнее: лягушки возвращают звуки раннего лета.' },
    { range: '10–14 мая', start: [5, 10], end: [5, 14], season: '蚯蚓出 (Мимидзу идзуру) — Появляются черви', text: 'Почва оживает всё глубже, и подземная жизнь становится активной.' },
    { range: '15–20 мая', start: [5, 15], end: [5, 20], season: '竹笋生 (Такэноко сёдзу) — Прорастает бамбук', text: 'Бамбук тянется вверх стремительно, как символ уверенного роста.' },
    { range: '21–25 мая', start: [5, 21], end: [5, 25], season: '蚕起食桑 (Кайко окитэ кува о хаму) — Шелкопряды едят листья шелковицы', text: 'Начинается цикл шелководства, связанный с ритмом раннего лета.' },
    { range: '26–30 мая', start: [5, 26], end: [5, 30], season: '紅花栄 (Бэнибана сакау) — Цветёт сафлор', text: 'Сафлор добавляет в пейзаж тёплые, насыщенные оттенки.' },
    { range: '31 мая – 5 июня', start: [5, 31], end: [6, 5], season: '麦秋至 (Муги но токи итару) — Созревает пшеница', text: 'Поля становятся зрелыми: приходит время первых летних урожаев.' },
    { range: '6–10 июня', start: [6, 6], end: [6, 10], season: '蟷螂生 (Камакири сёдзу) — Появляются богомолы', text: 'Мир насекомых становится заметнее на фоне густеющей зелени.' },
    { range: '11–15 июня', start: [6, 11], end: [6, 15], season: '腐草為螢 (Кусарэтару куса хотару то нару) — Трава перегнивает и превращается в светлячков', text: 'В тёплые сумерки начинают мелькать огоньки светлячков.' },
    { range: '16–20 июня', start: [6, 16], end: [6, 20], season: '梅子黄 (Умэ но ми кибаму) — Сливы желтеют', text: 'Плоды наливаются цветом, подтверждая полноту начала лета.' },
    { range: '21–26 июня', start: [6, 21], end: [6, 26], season: '乃東枯 (Нацукарэкуса каруру) — Увядает черноголовка', text: 'Одни растения уходят, освобождая место следующим.' },
    { range: '27 июня – 1 июля', start: [6, 27], end: [7, 1], season: '菖蒲華 (Аямэ хана саку) — Цветут ирисы', text: 'Ирисы на воде и в садах подчёркивают влажную красоту сезона.' },
    { range: '2–6 июля', start: [7, 2], end: [7, 6], season: '半夏生 (Хангэ сёдзу) — Прорастает пинеллия', text: 'Середина года отмечена характерными растениями и влажным воздухом.' },
    { range: '7–11 июля', start: [7, 7], end: [7, 11], season: '温風至 (Ацукадзэ итару) — Дуют жаркие ветры', text: 'Лето набирает мощь, и жара становится устойчивой.' },
    { range: '12–16 июля', start: [7, 12], end: [7, 16], season: '蓮始開 (Хасу хадзимэтэ хираку) — Начинает цвести лотос', text: 'Лотос раскрывается и приносит в сезон спокойную торжественность.' },
    { range: '17–22 июля', start: [7, 17], end: [7, 22], season: '鷹乃学習 (Така сунавати вадза о нарау) — Птенцы сокола учатся летать', text: 'Молодые птицы крепнут, и небо оживает движением.' },
    { range: '23–28 июля', start: [7, 23], end: [7, 28], season: '桐始結花 (Кири хадзимэтэ хана о мусубу) — На павловнии завязываются семена', text: 'Даже в жару идёт спокойная, точная работа плодоношения.' },
    { range: '29 июля – 2 августа', start: [7, 29], end: [8, 2], season: '土潤溽暑 (Цути уруотэ мусиацуси) — Земля влажная, душно', text: 'Воздух тяжелеет, а почва удерживает влагу и тепло.' },
    { range: '3–7 августа', start: [8, 3], end: [8, 7], season: '大雨時行 (Тайу токидоки фуру) — Иногда идут ливни', text: 'Короткие сильные дожди приносят передышку от зноя.' },
    { range: '8–12 августа', start: [8, 8], end: [8, 12], season: '涼風至 (Судзукадзэ итару) — Дуют прохладные ветры', text: 'Впервые ощущается приближение осени — в воздухе появляется прохлада.' },
    { range: '13–17 августа', start: [8, 13], end: [8, 17], season: '寒蝉鳴 (Хигураси наку) — Поют цикады хигураси', text: 'Звуки цикад задают узнаваемый позднелетний ритм.' },
    { range: '18–22 августа', start: [8, 18], end: [8, 22], season: '蒙霧升降 (Фукаки кири матоо) — Опускаются густые туманы', text: 'Утренние туманы становятся плотнее и дольше держатся над землёй.' },
    { range: '23–27 августа', start: [8, 23], end: [8, 27], season: '綿柎開 (Вата но хана сибэ хираку) — Зацветает хлопок', text: 'Сезон мягко смещается к осени, сохраняя ещё летнее тепло.' },
    { range: '28 августа – 1 сентября', start: [8, 28], end: [9, 1], season: '天地始粛 (Тэнти хадзимэтэ самуси) — Начинает холодать', text: 'Утренние и вечерние часы становятся заметно прохладнее.' },
    { range: '2–7 сентября', start: [9, 2], end: [9, 7], season: '禾乃登 (Кокумоно сунавати минору) — Созревает рис', text: 'Рисовые поля входят в важную фазу зрелости.' },
    { range: '8–12 сентября', start: [9, 8], end: [9, 12], season: '草露白 (Куса но цую сироси) — Белая роса на траве', text: 'Холодная роса делает ранние утра особенно прозрачными.' },
    { range: '13–17 сентября', start: [9, 13], end: [9, 17], season: '鶺鴒鳴 (Сэкирэй наку) — Поют трясогузки', text: 'Птичьи голоса становятся осенними — более чёткими и редкими.' },
    { range: '18–22 сентября', start: [9, 18], end: [9, 22], season: '玄鳥去 (Цубамэ сару) — Улетают ласточки', text: 'Ласточки покидают небо, и лето окончательно сдаёт позиции.' },
    { range: '23–27 сентября', start: [9, 23], end: [9, 27], season: '雷乃収声 (Каминари сунавати коэ о осаму) — Не гремит гром', text: 'Грозы уходят, и погода становится более ровной.' },
    { range: '28 сентября – 2 октября', start: [9, 28], end: [10, 2], season: '蟄虫坏戸 (Муси какурэтэ то о фусагу) — Насекомые прячутся и зарываются', text: 'Мелкая живность постепенно уходит в укрытия перед холодами.' },
    { range: '3–7 октября', start: [10, 3], end: [10, 7], season: '水始涸 (Мидзу хадзимэтэ каруру) — Высыхает вода на полях', text: 'Вода отступает, и пейзаж становится суше и спокойнее.' },
    { range: '8–12 октября', start: [10, 8], end: [10, 12], season: '鴻雁来 (Коган китару) — Прилетают дикие гуси', text: 'Осенние перелёты возвращают в небо длинные клинья птиц.' },
    { range: '13–17 октября', start: [10, 13], end: [10, 17], season: '菊花開 (Кику но хана хираку) — Цветут хризантемы', text: 'Хризантемы раскрываются в прохладном, ясном воздухе.' },
    { range: '18–22 октября', start: [10, 18], end: [10, 22], season: '蟋蟀在戸 (Киригирису то ни ари) — Сверчки приходят под дверь', text: 'Осенние вечера звучат близким стрекотом сверчков.' },
    { range: '23–27 октября', start: [10, 23], end: [10, 27], season: '霜始降 (Симо хадзимэтэ фуру) — Первый иней', text: 'Появляется первый иней, делая утро хрупким и серебристым.' },
    { range: '28 октября – 1 ноября', start: [10, 28], end: [11, 1], season: '霎時施 (Косамэ токидоки фуру) — Временами идут небольшие дожди', text: 'Короткие дожди усиливают ощущение поздней осени.' },
    { range: '2–6 ноября', start: [11, 2], end: [11, 6], season: '楓蔦黄 (Момидзи цута кибаму) — Клёны и плющ желтеют', text: 'Листва меняет цвет, делая пейзаж особенно выразительным.' },
    { range: '7–11 ноября', start: [11, 7], end: [11, 11], season: '山茶始開 (Цубаки хадзимэтэ хираку) — Зацветает камелия', text: 'На фоне холода появляются первые цветы камелии.' },
    { range: '12–16 ноября', start: [11, 12], end: [11, 16], season: '地始凍 (Ти хадзимэтэ коору) — Земля начинает замерзать', text: 'Почва схватывается холодом, предвещая скорую зиму.' },
    { range: '17–21 ноября', start: [11, 17], end: [11, 21], season: '金盞香 (Кинсэнка саку) — Цветут нарциссы', text: 'Даже в прохладе природа сохраняет островки цветения.' },
    { range: '22–26 ноября', start: [11, 22], end: [11, 26], season: '虹蔵不見 (Нидзи какурэтэ миэдзу) — Исчезают радуги', text: 'Радуги становятся редкими, небо — более сдержанным.' },
    { range: '27 ноября – 1 декабря', start: [11, 27], end: [12, 1], season: '朔風払葉 (Китакадзэ коноха о харау) — Северный ветер срывает листья', text: 'Холодный ветер окончательно очищает ветви деревьев.' },
    { range: '2–6 декабря', start: [12, 2], end: [12, 6], season: '橘始黄 (Татибана хадзимэтэ кибаму) — Цитрус татибана начинает желтеть', text: 'В зимний пейзаж входит яркий цвет зрелых цитрусов.' },
    { range: '7–11 декабря', start: [12, 7], end: [12, 11], season: '閉塞成冬 (Сора самуку фую то нару) — Холодает, начинается зима', text: 'Зимний режим погоды закрепляется, воздух становится сухим и резким.' },
    { range: '12–16 декабря', start: [12, 12], end: [12, 16], season: '熊蟄穴 (Кума ана ни комору) — Медведи залегают в берлоги', text: 'Природа уходит в глубокий покой, сохраняя энергию до весны.' },
    { range: '17–21 декабря', start: [12, 17], end: [12, 21], season: '鱖魚群 (Сакэ но уо мурагару) — Лосось идёт на нерест', text: 'В реках идёт важный сезонный ход рыбы.' },
    { range: '22–26 декабря', start: [12, 22], end: [12, 26], season: '乃東生 (Нацукарэкуса сёдзу) — Прорастает черноголовка', text: 'Даже в зимней тишине появляются признаки новой жизни.' },
    { range: '27–31 декабря', start: [12, 27], end: [12, 31], season: '麋角解 (Савасика но цуно оцуру) — Олени сбрасывают рога', text: 'Конец года отмечен природным обновлением и сменой цикла.' },
    { range: '1–4 января', start: [1, 1], end: [1, 4], season: '雪下出麦 (Юки ватаритэ муги нобиру) — Пшеница прорастает под снегом', text: 'Под снежным покровом продолжается тихая работа роста.' },
    { range: '5–9 января', start: [1, 5], end: [1, 9], season: '芹乃栄 (Сэри сунавати сакау) — Цветёт петрушка', text: 'В самой зиме возникают небольшие островки зелени.' },
    { range: '10–14 января', start: [1, 10], end: [1, 14], season: '水泉動 (Симидзу ататака о фукуму) — Родники оттаивают', text: 'Вода подо льдом начинает шевелиться, обещая поворот к весне.' },
    { range: '15–19 января', start: [1, 15], end: [1, 19], season: '雉始雊 (Кидзи хадзимэтэ наку) — Начинают кричать фазаны', text: 'Голоса птиц вновь звучат в морозном воздухе.' },
    { range: '20–24 января', start: [1, 20], end: [1, 24], season: '款冬華 (Фуки но хана саку) — Зацветает белокопытник', text: 'Первые цветы в холоде напоминают о близкой весне.' },
    { range: '25–29 января', start: [1, 25], end: [1, 29], season: '水沢腹堅 (Кивамидзу коори цумэру) — Лёд сковывает потоки', text: 'Мороз достигает пика: вода и земля становятся особенно твёрдыми.' },
    { range: '30 января – 3 февраля', start: [1, 30], end: [2, 3], season: '鶏始乳 (Ниватори хадзимэтэ тоя ни цуку) — Куры начинают нестись', text: 'Цикл года замыкается знаком нового начала и приближения весны.' }
  ];

  const fallbackRitualsSmall = [
    'Сделай 5 медленных вдохов и один длинный выдох — просто чтобы вернуться в тело.',
    'Потянись вверх и в стороны 40 секунд. Мягко расправь плечи и шею.',
    'Налей воды и выпей несколько осознанных глотков без телефона в руках.',
    'Посмотри в окно 30 секунд и найди один красивый цвет в этом моменте.',
    'Запиши одну короткую мысль-поддержку себе на сегодня.',
    'Сделай мини-уборку: верни 5 вещей на свои места.'
  ];

  const RITUALS_JSON_PATH = 'assets/japanese_72_microseasons_unique_rituals.json';
  let ritualsBySekkiExternal = null;

  const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthNames = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  let currentNote = null;
  let currentRitualPool = [];
  let lastRitualIndex = -1;

  const backdropThemes = [
    {
      colors: ['#20172f', '#25385f', '#8b5cf6'],
      glow1: 'rgba(244, 114, 182, .42)',
      glow2: 'rgba(129, 140, 248, .40)'
    },
    {
      colors: ['#251735', '#4c1d65', '#a855f7'],
      glow1: 'rgba(251, 113, 133, .4)',
      glow2: 'rgba(192, 132, 252, .42)'
    },
    {
      colors: ['#1b2a3f', '#1f4d56', '#22c55e'],
      glow1: 'rgba(134, 239, 172, .38)',
      glow2: 'rgba(56, 189, 248, .36)'
    },
    {
      colors: ['#2f1e34', '#5a2f4e', '#f97316'],
      glow1: 'rgba(252, 165, 165, .4)',
      glow2: 'rgba(251, 191, 36, .34)'
    },
    {
      colors: ['#1a223f', '#2f325f', '#0ea5e9'],
      glow1: 'rgba(125, 211, 252, .42)',
      glow2: 'rgba(165, 180, 252, .38)'
    },
    {
      colors: ['#211a34', '#2f2750', '#6366f1'],
      glow1: 'rgba(196, 181, 253, .40)',
      glow2: 'rgba(244, 114, 182, .30)'
    }
  ];

  function dayOfYear(month, day) {
    let total = day;
    for (let m = 1; m < month; m += 1) total += monthLengths[m - 1];
    return total;
  }

  function getSeasonByMonthDay(month, day) {
    const current = dayOfYear(month, day);

    for (const note of seasonalNotes) {
      const start = dayOfYear(note.start[0], note.start[1]);
      const end = dayOfYear(note.end[0], note.end[1]);
      const wrapsYear = end < start;

      if (!wrapsYear && current >= start && current <= end) return note;
      if (wrapsYear && (current >= start || current <= end)) return note;
    }

    return null;
  }

  function formatDate(date) {
    return `${date.getDate()} ${monthNames[date.getMonth()]}`;
  }

  function getThemeForNote(note) {
    if (!note) return backdropThemes[0];
    const idx = seasonalNotes.indexOf(note);
    return backdropThemes[Math.abs(idx) % backdropThemes.length];
  }

  function applySeasonBackdrop(note) {
    const theme = getThemeForNote(note);
    wrap.style.background = `radial-gradient(circle at 18% 22%, ${theme.glow1.replace('.4', '.24')} 0%, transparent 52%), linear-gradient(135deg, ${theme.colors[0]} 0%, ${theme.colors[1]} 52%, ${theme.colors[2]} 100%)`;
    wrap.style.setProperty('--season-glow-1', theme.glow1);
    wrap.style.setProperty('--season-glow-2', theme.glow2);

    wrap.classList.remove('season-shift');
    window.requestAnimationFrame(function () {
      wrap.classList.add('season-shift');
    });
  }

  function randomDifferentIndex(length, previousIndex) {
    if (length <= 1) return 0;
    let idx = Math.floor(Math.random() * length);
    while (idx === previousIndex) {
      idx = Math.floor(Math.random() * length);
    }
    return idx;
  }

  function getFallbackPool() {
    return fallbackRitualsSmall.filter(Boolean);
  }

  async function loadExternalRituals() {
    try {
      const response = await fetch(RITUALS_JSON_PATH, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      const pools = data && data.ritualsBySekki;
      const isValid = Array.isArray(pools) && pools.length > 0;
      if (!isValid) throw new Error('Invalid rituals JSON structure');

      ritualsBySekkiExternal = pools.map(function (pool) {
        return Array.isArray(pool) ? pool.filter(Boolean) : [];
      });

      if (currentNote) {
        updateRitualForNote(currentNote);
      }
    } catch (error) {
      console.warn('Failed to load external rituals JSON, using fallback list.', error);
      ritualsBySekkiExternal = null;
    }
  }

  function getRitualPoolByNote(note) {
    if (!note) return [];

    const seasonIndex = seasonalNotes.indexOf(note);
    if (seasonIndex < 0) return [];

    const sekkiIndex = Math.floor(seasonIndex / 3);
    const source = ritualsBySekkiExternal;
    const pool = source && source[sekkiIndex];

    if (Array.isArray(pool) && pool.length > 0) {
      return pool;
    }

    return getFallbackPool();
  }

  function renderRitualByPool(pool) {
    if (!ritualOutput) return;

    if (!Array.isArray(pool) || pool.length === 0) {
      ritualOutput.textContent = 'Пока нет ритуала для этой недели. Нажми «Новый ритуал» позже.';
      lastRitualIndex = -1;
      return;
    }

    const ritualIndex = randomDifferentIndex(pool.length, lastRitualIndex);
    lastRitualIndex = ritualIndex;
    ritualOutput.textContent = pool[ritualIndex];
  }

  function updateRitualForNote(note) {
    currentRitualPool = getRitualPoolByNote(note);
    renderRitualByPool(currentRitualPool);
  }

  function renderNote(note, titlePrefix) {
    if (!note) {
      currentNote = null;
      output.textContent = 'Не удалось подобрать неделю сезона для этой даты.';
      updateRitualForNote(null);
      document.dispatchEvent(new CustomEvent('lenochka:season-change', {
        detail: { note: null, titlePrefix: titlePrefix || '' }
      }));
      return;
    }

    currentNote = note;
    applySeasonBackdrop(note);

    output.innerHTML = `<strong>${titlePrefix}</strong>\n` +
      `<strong>${note.range}</strong>\n` +
      `${note.season}\n` +
      `${note.text}`;

    updateRitualForNote(note);
    document.dispatchEvent(new CustomEvent('lenochka:season-change', {
      detail: { note, titlePrefix: titlePrefix || '' }
    }));
  }

  function wrappedText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';

    for (let i = 0; i < words.length; i += 1) {
      const testLine = line ? `${line} ${words[i]}` : words[i];
      if (ctx.measureText(testLine).width > maxWidth && line) {
        ctx.fillText(line, x, y);
        y += lineHeight;
        line = words[i];
      } else {
        line = testLine;
      }
    }

    if (line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
    }

    return y;
  }

  function saveSeasonCard() {
    if (!currentNote) {
      if (saveCardStatus) saveCardStatus.textContent = 'Сначала выбери неделю сезона.';
      return;
    }

    const now = new Date();
    const dateText = `${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
    const canvas = document.createElement('canvas');
    canvas.width = 1400;
    canvas.height = 920;
    const ctx = canvas.getContext('2d');
    const theme = getThemeForNote(currentNote);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, theme.colors[0]);
    gradient.addColorStop(0.55, theme.colors[1]);
    gradient.addColorStop(1, theme.colors[2]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 0.26;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(250, 190, 270, 150, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(1140, 760, 290, 180, 0.26, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    const cardX = 92;
    const cardY = 88;
    const cardW = canvas.width - cardX * 2;
    const cardH = canvas.height - cardY * 2;

    ctx.fillStyle = 'rgba(255, 255, 255, .14)';
    ctx.strokeStyle = 'rgba(255, 255, 255, .34)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, 34);
    ctx.fill();
    ctx.stroke();

    let y = cardY + 92;
    const x = cardX + 66;
    const maxWidth = cardW - 132;

    ctx.fillStyle = 'rgba(255, 241, 248, .95)';
    ctx.font = '600 42px "Segoe UI", "Inter", sans-serif';
    ctx.fillText(`Дата: ${dateText}`, x, y);

    y += 86;
    ctx.font = '700 54px "Segoe UI", "Inter", sans-serif';
    y = wrappedText(ctx, currentNote.season, x, y, maxWidth, 68);

    y += 12;
    ctx.font = '500 38px "Segoe UI", "Inter", sans-serif';
    y = wrappedText(ctx, currentNote.text, x, y, maxWidth, 52);

    ctx.font = '600 40px "Segoe UI", "Inter", sans-serif';
    ctx.fillStyle = 'rgba(255, 228, 239, .98)';
    ctx.fillText('Для Лены 💖', x, cardY + cardH - 72);

    const safeRange = currentNote.range.replace(/\s+/g, '-').replace(/[–—]/g, '-').replace(/[^\w\-а-яё]/gi, '').toLowerCase();
    const fileName = `moment-lena-${safeRange || 'season'}.png`;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = fileName;
    link.click();

    if (saveCardStatus) {
      saveCardStatus.textContent = `Карточка сохранена: ${fileName}`;
    }
  }

  randomBtn.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * seasonalNotes.length);
    renderNote(seasonalNotes[randomIndex], 'Случайный выбор:');
    if (saveCardStatus) saveCardStatus.textContent = 'Можно сохранить этот момент в PNG.';
  });

  todayBtn.addEventListener('click', function () {
    const now = new Date();
    const note = getSeasonByMonthDay(now.getMonth() + 1, now.getDate());
    renderNote(note, `Сегодня (${formatDate(now)}):`);
    if (saveCardStatus) saveCardStatus.textContent = 'Можно сохранить этот момент в PNG.';
  });

  if (saveCardBtn) {
    saveCardBtn.addEventListener('click', saveSeasonCard);
  }

  if (ritualRefreshBtn) {
    ritualRefreshBtn.addEventListener('click', function () {
      renderRitualByPool(currentRitualPool);
    });
  }

  const now = new Date();
  renderNote(getSeasonByMonthDay(now.getMonth() + 1, now.getDate()), `Сегодня (${formatDate(now)}):`);
  if (saveCardStatus) saveCardStatus.textContent = 'Можно сохранить этот момент в PNG.';

  loadExternalRituals();
})();
