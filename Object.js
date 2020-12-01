
var myInfo = {
    name : 'Duc',
    age : 18,
    address : 'Ha Noi, VN'
};
// Cách thêm một thuộc tính vào trong Object
myInfo.email='levietduc12a4@gmail.com';
//hoặc 
myInfo['truong']='THPT Cat Ba';
//neu "truong" la mot String




// Object prototype
// User.prototype.className = 'F8' : prototype co the them mot thuoc tinh vao ham User







// Object constructor
//ten cua Object constructor nen viet hoa chu cai dau
function User(firstName,lastName,avatar)
{
    // this mô tả những thuộc tính và phương thức khi sẽ có cho đối tượng khi khởi tạo từ Object constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName =  function(){
        // this này được gọi từ đối tượng của chúng ta
        return `${this.firstName} ${this.lastName}`;
    }
}
// String ,Number ,Array , Date chinh la nhung Object constructor
var author = new User('Son','Dang','Avatar');
var user = new User('Vu','Nguyen','Avatar');

//Cach tao them thuoc tinh trong Object constructor
author.title = 'Xin chao F8';
user.comment = 'Day la comment';

console.log(author.getName());
console.log(user);