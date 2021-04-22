const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(res => console.log("Connected to MongoDB:"))
    .catch(err => console.log("Cannot connected to the database:", err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPulished: Boolean,
    price: Number
})
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: "Electronjs",
        author: "Abhishek",
        tags: ['desktop'],
        isPublished: true,
        price: 20,
        date: new Date('2020/02/10')
    })
    const result = await course.save();
    console.log("result:", result)
}

//createCourse();
/** Comparision Operator
 eq   Equal
 ne   Not Equal
 gt   Greater Than
 gte  Greater Than or equal to
 lt   Less Than
 lte  Less than equal to
 in   
 nin  Not in
 */
/* Logical Operator 
or
and
*/
async function getCourse() {
    const courses = await Course
        //  .find({})
        //  .find({ price: { $in: [20, 15] } })
        // .find({ price: { $gt: 10, $lt: 20 } })
        .find()
        .or([{ name: 'Nodejs' }, { price: 10 }])
        .sort({ price: 1 })
        .limit(10)
        .select({ name: 1, author: 1, price: 1, _id: 0 })
    console.log("Courses:", courses)
}

getCourse();