class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "Ahmeed Uddin Shah Shishu Niketon School & College"
    }
}

const student1 = new Student(22, 'Mahiya');
const student2 = new Student(14, 'Shuvo');
const student3 = new Student(23, "Nisho");
console.log(student1, student2, student3);