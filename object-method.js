const student = {
    name: `Nur Hossain Farid`,
    id: `221-35-843`,
    money: 7000,
    major: `software engineering`,
    subject: [`English`, `Art of living`, `Economic`],
    bestFriend: {
        name: `Salman`,
        major: `Computer Science and Engineer`
    },
    takeExam: function () {
        console.log(this.name, `taking exam`);
    },
    treatDay: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    },
}
student.takeExam();
const result = student.treatDay(2000, 100);
console.log(result);