//toan tu 3 ngoi

var course = {
    name: 'dsas',
    coin: 250
}

var result = course.coin > 0 ? `${course.coin} coins` : 'free'

console.log(result)

//vong lap
//vong lap for
var i = 1
for (; i <= 5; i++) {
    console.log(i);
}

var myArr = [
    'sdadsa',
    'sadsad',
    'gggg',
    'jjjjj'
]

var arrayLength = myArr.length; //tranh truy xuat length nhieu lan

for (var i = 0; i < arrayLength; i++) {
    console.log(myArr[i])
}

//vong lap for/in

var myInfo = {
    name: 'duy',
    age: 18,
    address: 'tphcm'
};

for (var key in myInfo) {
    console.log(myInfo[key]) //lay value
}


var lang = [
    'ruby',
    'python',
    'java'
];

var k = 'javascript'

for (var key in lang) {
    console.log(lang[key])
}

//vong lap for/of
var languages = [
    'ruby',
    'python',
    'java'
];

for (var value of languages) {
    console.log(`${value} haha`)
}

//duyet for/of voi object
for (var value of Object.keys(myInfo)) {
    //value la key cua object
    console.log(myInfo[value])
}

for (var value of Object.values(myInfo)) {
    //value la key cua object
    console.log(value)
}

//vong lap while
var i = 0

while (i < myArr.length) {
    console.log(myArr[i])
    i++
}

//vong lap do/while
var isSuccess = false
var i = 0
do {
    i++;
    console.log('nap the lan ' + i)
    if (true) {
        isSuccess = true;
    }

} while (!isSuccess && i < 3)

//vong lap long nhau
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
]

for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}

//vong lap mo rong

for (var i = 0; i <= 100; i += 5) {
    console.log(i);
}

//mang phan 2

var courses = [
    {
        id: 1,
        name: 'ruby',
        coin: 0
    },
    {
        id: 5,
        name: 'ruby',
        coin: 0
    },
    {
        id: 2,
        name: 'js',
        coin: 250
    },
    {
        id: 3,
        name: 'py',
        coin: 250
    },
    {
        id: 4,
        name: 'java',
        coin: 455
    }
]

//forEach
courses.forEach(function (cs, index) {
    console.log(index, cs);
});

//every
//boolean. kiem tra tat ca phan tu coin = 0
var isFree = courses.every(function (cs, index) {
    console.log(index)
    return cs.coin === 0;
})

console.log(isFree)

//some
//boolean. kiem tra co phan tu coin = 0
var isFree = courses.some(function (cs, index) {
    console.log(index)
    return cs.coin === 0;
})

console.log(isFree)

//find return 1 phan tu thoa dieu kien
var cs = courses.find(function (cs, index) {
    return cs.name === 'ccc'
})
console.log(cs)

//filter return 1 mang thoa dieu kien
var css = courses.filter(function (cs, index) {
    return cs.name === 'ruby'
})
console.log(css)

//demo
var arr1 = [2, 3, 4, 2, 5]
var arr2 = [2, 6, 7, 3]

function findEqualValues(array1, array2) {
    var result = array1.filter(function (a, index) {
        return array2.includes(a)
    })
    return result;
}

console.log(findEqualValues(arr1, arr2))

//map
var newCourse = courses.map(function (course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        originArray: courses
    }
})

console.log(newCourse)

//reduce
//accumulator bien luu tru
//currentValue: phan tu hien tai
//currentIndex: index cua pt hien tai
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accumulator + currentValue.coin;

    console.table({
        'Luot chay: ': i,
        'Bien tich tru': accumulator,
        'Gia khoa hoc: ': currentValue.coin,
        'Tich tru duoc': total
    })
    console.log(currentIndex, currentValue)
    console.log(arguments) //tat ca doi so cua funtion
    return total;
}

function coinHandler2(total, course) {
    return total + course.coin;
}

// 0 la gia tri khoi tao cho bien luu tru accumulator
var totalCoin = courses.reduce(coinHandler2, 0);//initial

console.log(totalCoin)

var numbers = [100, 200, 300, 400]
var to = numbers.reduce(function (to, number) {
    return to + number;
}) //ko can tham so khoi tao vi kieu du lieu tra ve giong nhau

console.log(to);

//Flat lam phang mang tu depth array - mang sau
var depthArray = [[0, 1], 2, [3, 4], 5, 6, [7, 8, 9]];

var i = 0;
var flatArray = depthArray.reduce(function (accumulator, currentValue) {
    var total = accumulator.concat(currentValue);
    i++;
    console.table({
        'Luot chay: ': i,
        'Bien tich tru': accumulator,
        'current value': currentValue,
        'Tich tru duoc': total
    })
    return accumulator.concat(currentValue);
}, [])

console.log(flatArray)

//lay ra cac khoa hoc va dua vao mang moi
var topics = [
    {
        topic: 'front end',
        courses: [
            {
                id: 1,
                title: 'php'
            },
            {
                id: 2,
                title: 'py'
            }
        ]
    },
    {
        topic: 'Al',
        courses: [
            {
                id: 3,
                title: 'python'
            },
            {
                id: 4,
                title: 'js'
            }
        ]
    }
]

var newCourses = topics.reduce(function (newCourses, topic) {
    return newCourses.concat(topic.courses)
}, [])

console.log(newCourses)

var htmls = newCourses.map(function (course, index) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
})

console.log(htmls.join(''));

//includes ho tro Array va String
var title = 'web design'

//tham so thu 2 tim kiem tu vi tri nao
console.log(title.includes('web'))

/*Math object
    Math.PI
    Math.round(): lam tron so
    Math.abs()
    Math.cell(): lam tron tren
    Math.floor(): lam tron duoi
    Math.random()
    Math.min()
    Math.max()

*/


//myMap()
Array.prototype.map2 = function (callBack) {
    //this la courses
    var arr = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var newChange = callBack(this[index], index);
            arr.push(newChange);
        }
    }
    return arr;
}

var newCourses2 = courses.map2(function callBack(course, index) {
    return {
        id: course.id,
        name: course.name,
        coin: course.coin + 'vnd'
    }
})

console.log(newCourses2);

//myForEach()
Array.prototype.forEach2 = function (callBack) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callBack(this[index], index, this);
        }
    }
}

courses.length = 100;//test case

courses.forEach2(function callBack(course, index, array) {
    console.log(course);
})

//myFilter()
Array.prototype.filter2 = function (callBack) {
    var outPut = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callBack(this[i], i)) {
                outPut.push(this[i]);
            }
        }
    }
    return outPut;
}

var outPut = courses.filter2(function (course, index) {
    return course.name === 'ruby';
})

console.log(outPut);

//mySome()
Array.prototype.some2 = function (callBack) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            return callBack(this[i], i);
        }
    }
}

var boolean_OutPut = courses.some2(function (course, index) {
    return course.coin === 0;
})

console.log(boolean_OutPut);

//myEvery()
Array.prototype.every2 = function (callBack) {
    var flag = true;
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callBack(this[i], i) === false) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

var boolean_OutPut = courses.every2(function (course, index) {
    return course.coin === 0;
})

console.log(boolean_OutPut);

var d = document.querySelector('input[type="checkbox"][checked][disabled]')
console.log(d)

//DOM elements
var listItems = document.getElementsByTagName('ul');
var listItems1 = listItems[0].querySelectorAll('li');
console.log(listItems1)

//DOM attributes
var headingElement = document.querySelector('h1');

//co them them atrributes ko hop le
headingElement.setAttribute('href', 'heading')
console.log(headingElement.getAttribute('href'))

//chi atrribute hop le
headingElement.title = 'test'
console.log(headingElement.title)

headingElement.className = 'parent'

//innerText, textContent
var h1Element = document.querySelector('h1')

console.log(h1Element.innerHTML)
console.log(h1Element.textContent)

h1Element.innerText = 'New Javascript'

//innerText get ve nhung gi ta thay tren trinh duyet, set dung nhung gi ta set
//textContent get ve tat ca textNode nam trong the script,style,...; set tu dong bo khoang trang

//innerHTML, outerHTML
var boxElement = document.querySelector('.box')

//ghi de ben trong the div.box
boxElement.innerHTML = '<h1 title="Heading">New Heading</h1>';

console.log(boxElement.innerHTML)

//ghi de toan bo ke ca the div
//boxElement.outerHTML='<span>Test</span>'

console.log(boxElement.outerHTML)

console.log([boxElement]) //bo vao array se the hien cac thuoc tinh cua object

//nextElementSibling lay element tiep theo

//nodeType check 1 la element node, 2 la attributes node,3 la text node

//DOM CSS
console.log(boxElement.style)

Object.assign(boxElement.style, {
    with: '200px',
    height: '100px',
    backgroundColor: 'green',
})

boxElement.style.backgroundColor

//classList

boxElement.classList.add('box-1')

setTimeout(() => {
    boxElement.classList.remove('box-1')
}, 3000)

setInterval(() => {
    boxElement.classList.toggle('red')
}, 1000)

console.log(boxElement.classList.contains('box'))

//DOM events
var h3Elements = document.querySelectorAll('h3');

for (var x in h3Elements) {
    h3Elements[x].onclick = function (e) {
        console.log(e.target)
    }
}

var inputElement=document.querySelector('input[type="text"]')

//onchange bam chuot ra ngoai moi bat su kien
//oninput bat su kien luc dang nhap
inputElement.oninput=function(e){
    console.log(e.target.value)
}

var inputElement1=document.querySelector('input[type="checkbox"][name="event"]')

inputElement1.oninput=function(e){
    console.log(e)
}

inputElement.onkeyup=function(e){
    console.log(e.which)

    switch(e.which){
        case 27:{
            console.log('exit')
            break;
        }
    }
}

document.onkeyup=function(e){
    console.log(e)
    switch(e.which){
        case 27:{
            console.log('EXIT')
            break;
        }
    }
}

//preventDefault
//stopPropagation

//document.anchors: lay tat ca the a co name attr
//document.links: lay tat ca the a
var aElements=document.links;

console.log(aElements)

for(var i=0;i<aElements.length;i++){
    aElements[i].onclick=function(e){
        console.log(e.target)
        if(!e.target.href.startsWith('https:f8.edu.vn')){
            e.preventDefault();
        }
    }
}

var ulElement=document.querySelector('#list')

ulElement.onmousedown=function(e){
    e.preventDefault(); //ngăn chặn hành vi mặc định
}

ulElement.onclick=function(e){
    console.log(e.target)
}

var divElement=document.querySelector('#try')

divElement.onclick=function(e){
    console.log('DIV')
}

var btnElement=document.querySelector('button');

btnElement.onclick=function(e){
    e.stopPropagation(); //để ko bắt sự kiện nổi bọt, đặt ở element con
    console.log('click me')
}

//event listener

var btnElement=document.querySelector('#btn')

function viec1(){
    console.log('viec 1')
}

function viec2(){
    console.log('viec 2')
}

btnElement.addEventListener('click',viec1)
btnElement.addEventListener('click',viec2)

setTimeout(function(){
    btnElement.removeEventListener('click',viec1)
},3000)

//JSON
//stringify: Javascript types -> JSON
//parse: JSON -> Javascript types

var obj={
    'name': 'duy',
    'age':18
}

console.log(JSON.stringify(obj))

var json='["PHP","JS","JAVA"]'

console.log(JSON.parse(json))

//Promise
//1. khoi tao new Promise
//2. Excutor

//memory leak neu ko co resolve||reject

//3 trang thai
//1. Pendding : wait-> memory leak
//2. Fulfilled - thanh cong
//3. Rejected - that bai

var promise=new Promise(
    //Excutor
    function(resolve,reject){
        resolve();
    }
);

promise
    .then(function(){
        return new Promise(
            function(resolve){
                setTimeout(function(){
                    resolve([1,2,3])
                },3000);
            }
        )
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
        console.log('Failure!')
    })
    .finally(function(){
        console.log('Done!')
    });

//sau 1s in ra 1,2,3

function sleep(ms){
    return new Promise(
        function(resolve){
            setTimeout(resolve,ms);
        }
    )
}

//khi return 1 promise .then ke tiep phai cho
//sau khi tra ve promise moi thuc thi
//.then dang sau khi return 1 promise moi
//la xu ly cho promise moi dc tra ve

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
        return new Promise(
            function(resolve,reject){
                reject('co loi')
            }
        )
    })
    .then(function(){
        console.log(4);
        return sleep(1000);
    })
    .catch(function(err){
        console.log(err)
    });

var promise1=new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1])
        },2000);
    }
)

var promise2=new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2,3])
        },5000);
    }
)

var promise3=new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([4,5,6])
        },5000);
    }
)

Promise.all([promise1,promise2])
    .then(function([result1,result2]){
        /*var result1=result[0];
        var result2=result[1];*/
        console.log(result1.concat(result2));
    });

//neu co 1 promise loi se .catch (hong het viec)
Promise.all([promise1,promise2,promise3])
    .then(function(result){
        var flatArray=result.reduce(function(accumulator,currentValue){
            return accumulator.concat(currentValue);
        },[]);
        console.log(flatArray);
    });

//Promise Example