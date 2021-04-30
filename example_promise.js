//Promise Example

var users=[
    {
        id:1,
        name:'Kien',
    },
    {
        id:2,
        name:'son',
    },
    {
        id:3,
        name:'duy',
    }
];

var comments=[
    {
        id:1,
        user_id:1,
        content:'anh son chua ra video'
    },
    {
        id:2,
        user_id:2,
        content:'vua ra xong em oi'
    }
];

//1. lay comments
//2. tu comments lay ra user_id
//3. tu user_Id lay ra user tuong ung

//fake API

function getComments(){
    return new Promise(
        function(resolve){
            setTimeout(function(){
                resolve(comments);
            },1000)
        }
    )
}

function getUsers(){
    return new Promise(
        function(resolve){
            setTimeout(function(){
                resolve(users);
            },1000)
        }
    )
}

function getUsersByIds(userIds){
    return new Promise(
        function(resolve){
            var users
        }
    )
}

getComments()
    .then(function(comments){
        console.log(comments);
    });

getUsersByIds([1,2])
    .then(function(users){
        console.log(users);
    })