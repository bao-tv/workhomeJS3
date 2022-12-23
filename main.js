// Bài 1: sắp xếp theo thứ tự tăng dần
// input : nhập vào 3 số

// process : sắp xếp các số theo thứ tự tăng dần

// output: các số sau khi sắp xếp theo thứ tự tăng dần


function ex1() {
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let num3 = +document.getElementById('num3').value;
    if (Number.isInteger(num1)&&
        Number.isInteger(num2)&&
        Number.isInteger(num3))
    document.getElementById('result1').innerHTML = sort(num1,num2,num3);
    else 
        alert ('Số nhập vào chưa phải số nguyên!!!');
}

function sort(a,b,c) {
    if(a < b) {
        if (c < a) {
            // console.log(c + ' < ' + a + ' < ' +b);
            return c + ' < ' + a + ' < ' +b;
        }
        else if (c  <  b) {
            return (a + ' < ' + c + ' < ' +b);
        }
        else return (a + ' < ' + b + ' < ' +c);
    }
    else if (c  <  b) {
        return (c + ' < ' + b + ' < ' + a);
    } else if (c  <  a) {
        return (b + ' < ' + c + ' < ' + a);
    } else return (b + ' < ' + a + ' < ' + c);
}

// bài 2: xuất câu chào hỏi

// input: thông tin người sử dụng

// process và output: xuất ra cầu chào phù hợp

function ex2 () {
    let people = document.getElementById('people').value;
    switch (people) {
        case 'B':
            alert ('Xin chào Bố!')
            break;
        case 'M':
            alert ('Xin chào Mẹ!')
            break;
        case 'A':
            alert ('Xin chào anh Trai!')
            break;
        case 'E':
            alert ('Xin chào em Gái!')
            break;
    
        default:
            alert ('Người lạ ơi!')
            break;
    }
}

// bài 3: xuất ra số chẵn lẻ


// input: nhập vào 3 số nguyên

// process: lọc ra số chẳn và số lẽ

// output: xuất ra số chẳn và số lẽ

function ex3() {
    let num1B3 = +document.getElementById('num1B3').value;
    let num2B3 = +document.getElementById('num2B3').value;
    let num3B3 = +document.getElementById('num3B3').value;
    let soChan = 0;
    let soLe = 0;
    if (Number.isInteger(num1B3)&&
        Number.isInteger(num2B3)&&
        Number.isInteger(num3B3)) {
            if (num1B3 !== 0) {
                if (num1B3 % 2 == 0) {
                    soChan += 1;
                } else soLe +=1;
            }
            if (num2B3 !== 0) {
                if (num2B3 % 2 == 0) {
                    soChan += 1;
                } else soLe +=1;
            }

            if (num3B3 !== 0) {
                if (num3B3 % 2 == 0) {
                    soChan += 1;
                } else soLe +=1;
            }
            document.getElementById('result3').innerHTML = 'Số số chẳn là: ' + soChan + ', Số số lẽ là: ' + soLe;
        }else {
            alert ('Số nhập vào chưa phải số nguyên!!!');
        }
}

// bài 4
// input: nhập vào 3 cạnh của tam giác

// process & output: xuất ra số tam giác loại nào: cân, đều, vuông

function ex4() {
    let a = +document.getElementById('canh1').value;
    let b = +document.getElementById('canh2').value;
    let c = +document.getElementById('canh3').value;
    if ((a > 0) && 
        (b > 0) && 
        (c > 0) &&
        a + b > c &&
        b + c > a &&
        a + c > b) {
                    if ( a == b && b == c) {
                        document.getElementById('result4').innerHTML = 'Tam giác đều.';
                    } else if (a == b || a == c || c == b) {
                        document.getElementById('result4').innerHTML = 'Tam giác cân.';
                    } else if ((a * a == b * b + c * c) ||
                                (b * b == a * a + c * c) ||
                                (c * c == a * a + b * b))  {
                                        document.getElementById('result4').innerHTML = 'Tam giác vuông.';
                        } else document.getElementById('result4').innerHTML = 'Tam giác thường.';
                } else {
        document.getElementById('result4').innerHTML = 'Không phải tam giác.';
    }
}