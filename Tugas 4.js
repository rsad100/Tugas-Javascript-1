let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

let updateData = {
    name : "Muhamad Arsyad Budiman",
    email : "rsatbudiman@gmail.com",
    hobbies : ["Computer", "Gaming"]
}

const updatedData = {...data,...updateData}

let {address:{street},address:{city}} = data;

console.log(updatedData);
console.log(street);
