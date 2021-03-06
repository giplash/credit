const faker = require('faker')
module.exports =
[
  {
    "month": "Март",
    "categories": [
      {
        "name": "Роллы",
        "dishes": [
          {
            "dish": "Филадельфия",
            "cost": 30,
            "restaurant": "Гараж",
            "date": "13.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/rolls.png",
            "id": 1
          },
          {
            "dish": "Калифорния",
            "cost": 45,
            "restaurant": "Октябрь",
            "date": "10.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/rolls1.png",
            "id": 2
          },
          {
            "dish": "Вашингтон",
            "cost": 25,
            "restaurant": "Ракета",
            "date": "25.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/rolls3.png",
            "id": 3
          }
        ]
      },
      {
        "name": "Пиццы",
        "dishes": [
          {
            "dish": "4 сезона",
            "cost": 50,
            "restaurant": "Огурец",
            "date": "15.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/pizza2.png",
            "id": 4
          },
          {
            "dish": "4 сыра",
            "cost": 42,
            "restaurant": "Гараж",
            "date": "12.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/pizza3.png",
            "id": 5
          },
          {
            "dish": "Маргарита",
            "cost": 25,
            "restaurant": "Пилотка",
            "date": "22.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/pizza1.png",
            "id": 6
          }
        ]
      },
      {
        "name": "Салаты",
        "dishes": [
          {
            "dish": "Цезарь",
            "cost": 15,
            "restaurant": "Огурец",
            "date": "11.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/salad.png",
            "id": 7
          },
          {
            "dish": "Оливье",
            "cost": 34,
            "restaurant": "Школьник",
            "date": "17.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/salad3.png",
            "id": 8
          },
          {
            "dish": "Сельдь под шубой",
            "cost": 10,
            "restaurant": "Студент",
            "date": "29.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/salad2.png",
            "id": 9
          }
        ]
      }
    ]
  },
  {
    "month": "Апрель",
    "categories": [
      {
        "name": "Роллы",
        "dishes": [
          {
            "dish": "Сан-Франциско",
            "cost": 20,
            "restaurant": "Листопад",
            "date": "15.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/rolls3.png",
            "id": 10
          },
        {
            "dish": "Калифорния",
            "cost": 15,
            "restaurant": "Vkafe",
            "date": "25.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/rolls.png",
            "id": 11
          },
          {
            "dish": "Нью-Йорк",
            "cost": 25,
            "restaurant": "Marriot",
            "date": "14.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/rolls1.png",
            "id": 12
          }
        ]
      },
      {
        "name": "Салаты",
        "dishes": [
          {
            "dish": "Цезарь",
            "cost": 20,
            "restaurant": "Коммунист",
            "date": "05.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/salad3.png",
            "id": 13
          },
        {
            "dish": "Оливье",
            "cost": 10,
            "restaurant": "Чайхона",
            "date": "03.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/salad.png",
            "id": 14
          },
        {
            "dish": "Селедка под шубой",
            "cost": 12,
            "restaurant": "Рюмочная №1",
            "date": "25.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/salad2.png",
            "id": 15
          }
        ]
      },
      {
        "name": "Пиццы",
        "dishes": [
          {
            "dish": "Маргарита",
            "cost": 24,
            "restaurant": "На пляже",
            "date": "07.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/pizza3.png",
            "id": 16
          },
        {
            "dish": "4 сыра",
            "cost": 15,
            "restaurant": "Ленин",
            "date": "08.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/pizza2.png",
            "id": 17
          },
          {
            "dish": "Пеперони",
            "cost": 19,
            "restaurant": "Красный Октябрь",
            "date": "25.04.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/pizza.png",
            "id": 18
          }
        ]
      }
    ]
  },
  {
    "month": "Май",
    "categories": [
      {
        "name": "Роллы",
        "dishes": [
          {
            "dish": "Алжир",
            "cost": 30,
            "restaurant": "Красный октябрь",
            "date": "20.03.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/rolls2.png",
            "id": 19
          },
          {
            "dish": "Kappa",
            "cost": 100,
            "restaurant": "Тазик Сталина",
            "date": "01.05.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/rolls3.png",
            "id": 20
          },
          {
            "dish": "Виська",
            "cost": 40,
            "restaurant": "Старая келья",
            "date": "17.05.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/rolls.png",
            "id": 21
          }
        ]
      },
      {
        "name": "Пиццы",
        "dishes": [
          {
            "dish": "Нюша",
            "cost": 15,
            "restaurant": "Пин-код",
            "date": "06.05.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/pizza.png",
            "id": 22
          },
          {
            "dish": "Пикантная",
            "cost": 100,
            "restaurant": "Дом праления",
            "date": "07.05.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/pizza2.png",
            "id": 23
          },
          {
            "dish": "Виталя приёмный",
            "cost": 75,
            "restaurant": "Старая келья",
            "date": "30.02.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/pizza3.png",
            "id": 24
          }
        ]
      },
      {
        "name": "Салаты",
        "dishes": [
          {
            "dish": "Весенний",
            "cost": 57,
            "restaurant": "Альянс",
            "date": "09.05.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": true,
            "img": "/img/salad1.png",
            "id": 25
          },
          {
            "dish": "Тамада",
            "cost": 45,
            "restaurant": "Duster",
            "date": "12.05.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/salad.png",
            "id": 26
          },
          {
            "dish": "Виталя-сабака",
            "cost": 75,
            "restaurant": "Старая келья",
            "date": "24.02.2018",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "isFavorite": false,
            "img": "/img/salad3.png",
            "id": 27
          }
        ]
      }
    ]
  }
]