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