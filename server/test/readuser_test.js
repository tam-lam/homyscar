// const assert = require('assert');
// const User = require('../src/models/userModel');

// let user;
// beforeEach(  (done) => {
//     user = new User({ username: 'testuser' , email: "testing@example.com" , password: "uniquepassword123"});
//     user.save()
//         .then(() => done());
// });

// describe('Reading user details', () => {
//     it('should find user with the username testUser', (done) => {
//         user.findOne({username: 'testuser'  })
//             .then((user) => {
//                 assert(user.username === 'testuser'); 
//                 done();
//             });
//     })
// })