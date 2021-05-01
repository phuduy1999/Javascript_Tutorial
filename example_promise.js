//Promise Example

var users = [
    {
        id: 1,
        name: 'Kien',
    },
    {
        id: 2,
        name: 'son',
    },
    {
        id: 3,
        name: 'duy',
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'anh son chua ra video'
    },
    {
        id: 2,
        user_id: 2,
        content: 'vua ra xong em oi'
    },
    {
        id: 3,
        user_id: 2,
        content: 'cam on anh'
    }
];

//1. lay comments
//2. tu comments lay ra user_id
//3. tu user_Id lay ra user tuong ung

//fake API

function getComments() {
    return new Promise(
        function (resolve) {
            setTimeout(function () {
                resolve(comments);
            }, 1000)
        }
    )
}

function getUsers() {
    return new Promise(
        function (resolve) {
            setTimeout(function () {
                resolve(users);
            }, 1000)
        }
    );
}

function getUsersByIds(userIds) {
    return new Promise(
        function (resolve) {
            var result = users.filter(function (user) {
                return userIds.includes(user.id);
            })
            setTimeout(function () {
                resolve(result);
            }, 1000)
        }
    );
}

getComments()
    .then(function (comments) { //lay ra duoc comments => lay tiep userids
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        })

        return getUsersByIds(userIds)
            .then(function (users) {
                return {
                    users1: users,
                    comments1: comments
                }
            })
    })
    .then(function (data) {
        
        var commentBlock=document.getElementById('comments-block');

        var html='';
        data.comments1.forEach(function(comment){
            var user=data.users1.find(function(user){
                return user.id===comment.user_id;
            })
            html+=`<li>${user.name}: ${comment.content}</li>`
        });

        commentBlock.innerHTML=html;

    })

