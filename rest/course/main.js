
//them xoa sua khoa hoc

var coursesAPI = 'http://localhost:3000/courses'

function start() {
    //cach 1
    /*getCourses(function(courses){
        renderCourses(courses);
    });*/
    //cach 2 renderCourses la callback
    getCourses(renderCourses);

    handleCreateForm();
}

start();


function getCourses(callback) {
    fetch(coursesAPI)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(callback);
}

function getCourse(id, callback) {
    fetch(coursesAPI + "/" + id)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(coursesAPI, options)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(callback);
}

function updateCourse(id, data, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(coursesAPI + "/" + id, options)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(coursesAPI + "/" + id, options)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(function () {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

//xem fn nay la callback co doi so la courses duoc tra ve trong then(fetch)
function renderCourses(courses) {
    var htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xoa</button>
                <button onclick="handleUpdateForm(${course.id})">Sua</button>
            </li>
        `
    })

    document.querySelector('#courses-block').innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var data = {
            name: name,
            description: description
        }

        createCourse(data, function (course) {
            if (course) {
                var liElement = document.createElement("li");
                liElement.setAttribute('class', `course-item-${course.id}`)
                liElement.innerHTML = `<h4>${course.name}</h4>
                        <p>${course.description}</p>
                        <button onclick="handleDeleteCourse(${course.id})">Xoa</button>
                        <button onclick="handleUpdateForm(${course.id})">Sua</button>`;
                document.querySelector('#courses-block').appendChild(liElement);

                //cach 2
                //getCourses(renderCourses);
            }
            else alert();
        })
    }
}

function handleUpdateForm(id) {
    getCourse(id, function (course) {
        if (course) {
            document.querySelector('input[name="name"]').value = course.name;
            document.querySelector('input[name="description"]').value = course.description;

            document.getElementById('create').disabled = true;

            var saveBtn = document.getElementById('update');
            saveBtn.disabled = false;
            saveBtn.onclick = function () {
                var name = document.querySelector('input[name="name"]').value;
                var description = document.querySelector('input[name="description"]').value;

                var data = {
                    name: name,
                    description: description
                }

                updateCourse(id, data, function (course) {
                    if (course) {
                        getCourses(renderCourses);

                        var saveBtn = document.getElementById('create');
                        saveBtn.disabled = false;

                        document.getElementById('update').disabled = true;


                        document.querySelector('input[name="name"]').value = '';
                        document.querySelector('input[name="description"]').value = '';
                    }
                })
            }
        }
    })
}