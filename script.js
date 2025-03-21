console.log("1");
//  Напиши скрипт, який об'єднує всі елементи массива в один рядок.
//   Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

    const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']

    // 1
    let string = '';
    for (let i = 0;i < friends.length ; i += 1) {
        string += friends[i]
        if (i < friends.length - 1) {
            string += ", ";
        }
    }
    console.log(string);
    
    console.log("///");
    // 2
    console.log(friends.join(", "));

console.log("2");
// Працюємо з колекцією карток в trello.
//  Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
]

console.log(cards);

console.log("3");
const cardToRemove = 'Карточка-3';

const inde = cards.indexOf(cardToRemove);
cards.splice(inde, 1)

console.log(cards);

console.log("4");

const cardToInsert = 'Карточка-6';
cards.splice(4, 0, cardToInsert)
console.log(cards);

console.log("5");

const index = cards.indexOf('Карточка-2')
const cardToUpdate = 'Kарточка-4';
cards.splice(index, 1, cardToUpdate)
console.log(cards);
