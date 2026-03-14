(function () {
  const randomBtn = document.getElementById('seasonWeekRandomBtn');
  const todayBtn = document.getElementById('seasonWeekTodayBtn');
  const output = document.getElementById('seasonWeekOutput');

  if (!randomBtn || !todayBtn || !output) {
    return;
  }

  const seasonalNotes = buildSeasonalNotes();

  function buildSeasonalNotes() {
    // Чтобы заменить заглушки на реальные разрешённые цитаты:
    // оставьте формат объектов ниже ({ week, season, title, text }) и подставьте проверенный лицензированный контент.
    const seasonNames = ['Поздняя зима', 'Ранняя весна', 'Полная весна', 'Раннее лето', 'Полное лето', 'Ранняя осень', 'Глубокая осень', 'Начало зимы'];
    const motifs = [
      'воздух становится тише и прозрачнее',
      'утренний свет будто замедляет шаг',
      'вещи вокруг звучат мягче обычного',
      'настроение склоняется к спокойному наблюдению',
      'запах вечера напоминает о смене ритма',
      'привычные маршруты ощущаются немного новыми',
      'день просит больше внимания к мелочам',
      'внутри появляется ощущение бережной паузы'
    ];

    return Array.from({ length: 52 }, function (_, i) {
      const week = i + 1;
      const season = seasonNames[Math.floor(i / 7) % seasonNames.length];
      const motif = motifs[i % motifs.length];
      return {
        week,
        season,
        title: `Неделя ${week}: ${season}`,
        text: `Короткое описание недели сезона: ${motif}. Подходит для тихой заметки о настроении времени.`
      };
    });
  }

  function getWeekByDate(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return null;
    }

    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((date - startOfYear) / 86400000) + 1;
    const weekNumber = Math.min(52, Math.ceil(dayOfYear / 7));
    return seasonalNotes[weekNumber - 1] || null;
  }

  function formatLocalDate(date) {
    try {
      return new Intl.DateTimeFormat('ru-RU').format(date);
    } catch (_) {
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();
      return `${dd}.${mm}.${yyyy}`;
    }
  }

  function renderNote(note, prefix) {
    if (!note) {
      output.textContent = 'Данные недели сезона пока недоступны. Попробуй ещё раз позже.';
      return;
    }

    output.textContent = `${prefix}\n${note.title}\n${note.text}`;
  }

  randomBtn.addEventListener('click', function () {
    if (!seasonalNotes.length) {
      output.textContent = 'Список описаний пуст. Добавьте данные для недель сезона.';
      return;
    }

    const randomIndex = Math.floor(Math.random() * seasonalNotes.length);
    const note = seasonalNotes[randomIndex];
    renderNote(note, 'Случайный выбор:');
  });

  todayBtn.addEventListener('click', function () {
    if (!seasonalNotes.length) {
      output.textContent = 'Список описаний пуст. Добавьте данные для недель сезона.';
      return;
    }

    try {
      const now = new Date();
      const note = getWeekByDate(now);
      const prefix = `Сегодня (${formatLocalDate(now)}):`;
      renderNote(note, prefix);
    } catch (_) {
      output.textContent = 'Не удалось определить дату в браузере. Проверь настройки времени и попробуй снова.';
    }
  });
})();
