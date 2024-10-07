const student={
    name:"Marie",
    age:20,
    courses:[]
}
student.age=21
student.grade="A"
const subjects=["Maths","Physics","Chemistry"]
subjects.forEach(element => {
    student.courses.push(element)
});
console.log(student.courses.indexOf("Physics"))
const new_courses=student.courses.slice(0,2)
console.log(new_courses)