const express = require("express");
const router = express.Router();
const fs = require("fs");
// const { Readable } = require("stream");

class Student {
  constructor(firstname, lastname, email, gpa, major, courses = []) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.gpa = gpa;
    this.major = major;
    this.courses = courses;
  }
  static getAllStudents() {
    return students;
  }
  static getStuBtEmail(email) {
    return students.find((stu) => stu.email === email);
  }
  save() {
    let index = students.findIndex((stu) => stu.email === this.email);
    if (index > -1) {
      throw new Error("product already exists");
    } else {
      students.push(this);
      return this;
    }
  }
  update(email) {
    let index = students.findIndex((stu) => stu.email === email);
    if (index > -1) {
      students.splice(index, 1, this);
      return this;
    } else {
      throw new Error("Can't find student");
    }
  }
  static delete(email) {
    let index = students.findIndex((stu) => stu.email === email);
    if (index > -1) {
      students = students.filter((stu) => stu.email !== email);
      return students;
    } else {
      throw new Error("Can't find student");
    }
  }
  static getCourses(email) {
    let stu = students.find((stu) => stu.email === email);
    return stu.courses;
  }
  static addCourse(email, course) {
    let stu = students.find((stu) => stu.email === email);
    let index = students.findIndex((stu) => stu.email === email);
    stu.courses.push(course);
    students.splice(index, 1, stu);
    return stu;
  }
  static topThree() {
    const gpa = students.map((stu) => stu.gpa);
    console.log("gpa" + gpa);

    // return gpa.sort((a, b) => b-a);
    return gpa;
  }
}

let mintes = new Student("Mintes", "Gebre", "mintes@gebre.com", 3.8, "MSD", [
  { code: "477", name: "SSP" },
]);
let jossy = new Student(
  "Jossy",
  "Tekle",
  "jossy@tekle.com",
  4.0,
  "Computer Science",
  [{ code: "301", name: "JS" }]
);
let robbie = new Student(
  "robbie",
  "bent",
  "robbie@bent.com",
  3.9,
  "Computer Science",
  [{ code: "301", name: "JS" }]
);
let aman = new Student(
  "aman",
  "abdi",
  "amany@abdi.com",
  3.0,
  "Computer Science",
  [{ code: "301", name: "JS" }]
);
let students = [mintes, jossy, aman, robbie];

router.get("/", (req, res) => {
  res.json({ data: Student.getAllStudents() });
});
router.get("/:email", (req, res) => {
  res.json({ data: Student.getStuBtEmail(req.params.email) });
});
router.get("/:email/courses", (req, res) => {
  res.json({ data: Student.getCourses(req.params.email) });
});
router.get("/tops", (req, res) => {
  res.json({ data: Student.topThree() });
});

router.post("/", (req, res) => {
  const newStudent = new Student(
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.gpa,
    req.body.major,
    req.body.courses
  );

  res.json({ data: newStudent.save() });
});
router.put("/:email", (req, res) => {
  const newStudent = new Student(
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.gpa,
    req.body.major,
    req.body.courses
  );

  res.json({ data: newStudent.update(req.params.email) });
});
router.put("/:email/addcourse", (req, res) => {
  res.json({
    data: Student.addCourse(req.params.email, req.body.addCourse),
  });
});
router.delete("/:email", (req, res) => {
  res.json({ data: Student.delete(req.params.email) });
});
// router.get("/", (req, res) => {
//   const readStudents = fs.readFileSync("./students.txt", "utf-8");
//   let stu = [];

//   readStudents.split("\n").forEach((user) => {
//     stu.push(user);
//     res.write(user + "\n");
//   });
//   //   stu.map((each) => JSON.parse(each));
//   res.json({ status: "success" });
// });

// router.post("/", (req, res) => {
//   const readStu = fs.readFileSync("./students.txt", "utf-8");

//   const writeStudent = fs.createWriteStream("./students.txt", { flags: "a" });

//   const newStudent = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     gpa: req.body.gpa,
//     major: req.body.major,
//     courses: req.body.courses,
//   };
//   let status = "success";
//   readStu.split("\n").forEach((stu) => {
//     // let myStu = JSON.parse(stu);
//     // console.log(newStudent.email == myStu.email);
//     //     if (newStudent.email == myStu.email) {
//     //       status = "fail";
//     //   }
//   });
//   writeStudent.write(JSON.stringify(newStudent) + "\n");

//   res.status(201).json({ newStudent });
// });

module.exports = router;
