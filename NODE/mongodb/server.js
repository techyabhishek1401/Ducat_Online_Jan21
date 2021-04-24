const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(res => console.log("Connected to MongoDB:"))
    .catch(err => console.log("Cannot connected to the database:", err));

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // name: { type: String },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPulished: Boolean,
    price: Number
})
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'TEST',
        author: "Test",
        tags: ['desktop'],
        isPublished: false,
        price: 20,
        date: new Date('2020/02/10')
    })
    try {
        const result = await course.save();
        console.log("result:", result)
    }
    catch (exception) {
        console.log(exception.message)
    }

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
    // api/getUser?page=2&pageSize=4
    const pageNumber = 2;
    const pageSize = 4;
    const courses = await Course
        .find({})
        //  .find({ price: { $in: [20, 15] } })
        // .find({ price: { $gt: 10, $lt: 20 } })
        // .find({ author: /^abhishek/i })
        //.find({ author: /kumar$/i })
        //    .find({ name: /.*electron.*/i })
        //  .or([{ name: 'Nodejs' }, { price: 10 }])
        //       1 *4
        .skip((pageNumber - 1) * pageSize)
        // .sort({ price: 1 })
        .limit(pageSize)
        // .count()
        .select({ name: 1, author: 1, price: 1, _id: 0 })
    console.log("Courses:", courses)
}

//getCourse();

async function updateCourse(id) {
    /**
    Approach 1 -Query first
    findById()
    modify()
    save()
     */
    /**
    Approach 2 -Update first
    update directly
    **optionally:get the updated document
     */
    const course = await Course.findById(id);
    if (!course) return;
    course.price = 100;
    course.author = "Ambani";
    // course.set({
    //     price : 100,
    //    author :"Ambani"
    // })
    const result = await course.save();
    console.log("result:", result)


}

async function updateUserMethod2(id) {
    const result = await Course.updateMany({ price: 20 }, {
        $set: {
            author: "Abhishek",
            price: 200
        }
    });
    console.log('result:', result)
}
//updateUserMethod2('6080fbd6d4ea311c4822eaee');

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
}
removeCourse('6080fbd6d4ea311c4822eaee');