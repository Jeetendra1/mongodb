const { Student } = require('../schema/student');
const { Playlist } = require('../schema/playlist');
const { Inventory } = require('../schema/inventory');
const { Order } = require('../schema/order');
const { Course } = require('../schema/course');

const insertSingleStudent = async () => {
    try{
        const insertStrudent = new Student({
            name: 'Shree',
            class: 'MSC',
            email: 'mansi@gmail.com',
            city: 'Satna',
            mobile: 8839791192,
            active: true,
            date: '03-04-2023'
        });
        
        await insertStrudent.save();
        console.log('Inserted student records successfully.');
    } catch (err) {
        console.log(err);
    }
}


const insertMultiStudent = async () => {
    try{
        const oneStrudent = new Student({
            name: 'mahima',
            class: 'MSC',
            email: 'mahima@gmail.com',
            city: 'Satna',
            mobile: 8839791292,
            active: true,
            date: '03-04-2023'
        });
        const twoStrudent = new Student({
            name: 'mahima',
            class: 'MSC',
            email: 'mahima@gmail.com',
            city: 'Satna',
            mobile: 8839791292,
            active: true,
            date: '03-04-2023'
        });
        const threeStrudent = new Student({
            name: 'manu',
            class: 'MSC',
            email: 'manu@gmail.com',
            city: 'Satna',
            mobile: 8839791292,
            active: true,
            date: '03-04-2023'
        });
        
        await Student.insertMany([oneStrudent, twoStrudent, threeStrudent]);
        console.log('Inserted student records successfully.');
    } catch (err) {
        console.log(err);
    }
}

const getStudentData = async () => {
    try {
        const result = await Student.find().select({_id: 0, name: 1});
        console.log(result);
    } catch(err) {
        console.log(erro);
    }
}

const getStudentDataWithOperator = async () => {
    try {
        const result = await Student.find().select({_id: 0, name: 1});
        console.log(result);
    } catch(err) {
        console.log(erro);
    }
}

const getPlaylistDataWithOperator = async () => {
    try {
        
        const result = await Playlist.find({video: {$lte: 50}});
        console.log(result);
    } catch(err) {
        console.log(erro);
    }
}

const usingOroperator = async () => {
    try {
        
        const result = await Playlist.find({$or: [{name: 'Angularjs'}, {video: 30}]});
        console.log(result);
    } catch(err) {
        console.log(erro);
    }
}

const usingAndoperator = async () => {
    try {
        
        const result = await Playlist.find({$and: [{name: 'Angularjs'}, {video: 50}]});
        console.log(result);
    } catch(err) {
        console.log(erro);
    }
}

const usingSortingoperator = async () => {
    try {
        
        const count = await Playlist
        .find({$and: [{name: 'Angularjs'}, {video: 50}]})
        .count();

        const sort = await Playlist
        .find()
        .sort({name: 1});

        //1 ASC (1, 2, 3) and -1 DESC(9, 8, 7)
        console.log(count, sort);
    } catch(err) {
        console.log(err);
    }
}

const updateStudentRecords = async (id) => {
    try {
        
        const count = await Student
        .findByIdAndUpdate({_id: id}, 
            {$set: {class: 'BBA'}});

        console.log(result);
    } catch(err) {
        console.log(err);
    }
}
// updateStudentRecords('642a7606dc09fb50a3d33e42')


const deleteStudentRecords = async (id) => {
    try {
        
        const count = await Student
        .findByIdAndDelete({_id: id});

        console.log(count);
    } catch(err) {
        console.log(err);
    }
}


const saveInventoryDocuments = async () => {
    try {
        const inventoryData = Inventory.insertMany([
            { prodId: 100, price: 20, quantity: 125 },
            { prodId: 101, price: 10, quantity: 234 },
            { prodId: 102, price: 15, quantity: 432 },
            { prodId: 103, price: 17, quantity: 320 }
         ]);
         if (inventoryData) {
            console.log(' Inventory Document saves successfully');
         }
    } catch(err) {
        console.log(err)
    }
} 

const saveOrderDocuments = async () => {
    try {
        const orderData = Order.insertMany( [
            { orderId: 201, custid: 301, prodId: 100, numPurchased: 20 },
            { orderId: 202, custid: 302, prodId: 101, numPurchased: 10 },
            { orderId: 203, custid: 303, prodId: 102, numPurchased: 5 },
            { orderId: 204, custid: 303, prodId: 103, numPurchased: 15 },
            { orderId: 205, custid: 303, prodId: 103, numPurchased: 20 },
            { orderId: 206, custid: 302, prodId: 102, numPurchased: 1 },
            { orderId: 207, custid: 302, prodId: 101, numPurchased: 5 },
            { orderId: 208, custid: 301, prodId: 100, numPurchased: 10 },
            { orderId: 209, custid: 303, prodId: 103, numPurchased: 30 }
         ] )
         if (orderData) {
            console.log('Order Document saves successfully');
         }
    } catch(err) {
        console.log(err)
    }
} 

const insertMultiCourse = async () => {
    try{
        const oneCourse = new Course({
            course: 'Nodejs',
            studentid: '642a7942a0af92b2f5ba54a7',
            category: 'Backend'
        });
        const twoCourse = new Course({
            course: 'Angular',
            studentid: '642a797fc20b6f778ca24b9a',
            category: 'Frontend'
        });
        const threeCourse = new Course({
            course: 'React',
            studentid: '642a81d90e239847335e4bbd',
            category: 'Frontend'
        });
        
        await Course.insertMany([oneCourse, twoCourse, threeCourse]);
        console.log('Inserted Course records successfully.');
    } catch (err) {
        console.log(err);
    }
}

// Get data from two collection by using Join
const getStudentByCourse = async () => {
    try {
        const result = await Course.find({_id: '642ac36c7558c082949d679f'})
        .populate('studentid');
    } catch(err) {
        console.log(err);
    }
}
insertSingleStudent();