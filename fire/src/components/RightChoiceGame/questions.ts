export interface Question {
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
}

export const questions: Question[] = [
    {
        question: "1. Телефон вызова пожарной охраны:",
        options: [
          { text: "а) 02", isCorrect: false },
          { text: "б) 01", isCorrect: true },
          { text: "в) 03", isCorrect: false }
        ]
      },
      {
        question: "2. Как называется профессия человека, который тушит пожары:",
        options: [
          { text: "а) пожарный", isCorrect: true },
          { text: "б) пожарник", isCorrect: false },
          { text: "в) спасатель", isCorrect: false }
        ]
      },
      {
        question: "3. Если в доме отключили электричество, чем наиболее безопасно можно воспользоваться для освещения",
        options: [
          { text: "а) спички", isCorrect: false },
          { text: "б) свечой", isCorrect: true },
          { text: "в) зажигалкой", isCorrect: false },
          { text: "г) электрический фонарик", isCorrect: false }
        ]
      },
      {
        question: "4. Какие из перечисленных жидкостей огнеопасны?",
	      options: [
          { text: "а) молоко", isCorrect: false },
          { text: "б) бензин", isCorrect: true },
          { text: "в) сок яблочный", isCorrect: false },
          { text: "г) вода", isCorrect: false }
        ]
      },
      {
        question: "5. Где можно сушить бельё?",
        options: [
          { text: "а) над газовой плитой", isCorrect: false },
          { text: "б) на балконе", isCorrect: true },
          { text: "в) рядом с газовой плитой", isCorrect: false }
        ]
      },
      {
        question: "6. Какие предметы при возгорании нельзя заливать водой?",
        options: [
          { text: "а) кресло", isCorrect: false },
          { text: "б) одежу", isCorrect: false },
          { text: "в) включенный в эл.сеть телевизор", isCorrect: true }
        ]
      },
      {
        question: "7. На лестничной клетке пожар, путь выхода из квартиры перекрыт, ты должен",
        options: [
          { text: "а) выйти на балкон и позвать на помощь", isCorrect: false },
          { text: "б) заткнуть щели в дверях, чтобы не проникал дым, вызвать пожарных, позвонив по телефону «01» и выйти на балкон", isCorrect: true },
          { text: "в) спрятаться в ванной комнате", isCorrect: false }
        ]
      },
      {
        question: "8. В какой цвет окрашивают пожарные шкафы?",
        options: [
          { text: "а) Красный", isCorrect: true },
          { text: "б) Желтый", isCorrect: false },
          { text: "в) Черный", isCorrect: false }
        ]
      },
      {
        question: "9. Каковы ваши действия, если из телевизора пошёл дым?",
        options: [
          { text: "а) убегу в другую комнату", isCorrect: false },
          { text: "б) залью телевизор водой", isCorrect: false },
          { text: "в) выдерну вилку из сети и накину на телевизор влажное покрывало", isCorrect: true }
        ]
      },
      {
        question: "10. Комната наполнилась дымом, каковы ваши действия?",
        options: [
          { text: "а) закрою нос и рот мокрым носовым платком и ползком буду пробираться к выходу", isCorrect: true },
          { text: "б) открою дверь и окна, чтобы вышел дым", isCorrect: false },
          { text: "в) буду продвигаться к выходу", isCorrect: false }
        ]
      },
  {
    question: "11. Что такое пожарная каланча??",
    options: [
      { text: "а) пожарный автомобиль", isCorrect: false },
      { text: "б) огнетушитель", isCorrect: false },
      { text: "в) пожарная лестница'", isCorrect: false },
      { text: "г) пожарная вышка", isCorrect: true }
    ]
  }
];