// 
// Chapters 58-67 (DOM)
// 


        // Question 1
    // part 1
    // var q1_1 = document.getElementById("main-content").children;

    // part 2
    // for(i = 0; i < q1_1.length; i++){
    //     document.write(`<p class='${q1_1[i].className}'>${q1_1[i].innerHTML}</p>`);
    //     console.log(`<p class='${q1_1[i].className}'>${q1_1[i].innerHTML}</p>`);
    // }

    // part 3
    // var q1_3 = document.getElementsByClassName('render');
    // for(i = 0; i < q1_3.length; i++){
    //     document.write(`<p>${q1_3[i].innerHTML}</p>`);
    //     console.log(`<p class='${q1_3[i].className}'>${q1_3[i].innerHTML}</p>`);
    // }

    // part 4
    // document.getElementById('first-name').value = "Abdul Raffay";

    // part 5
    // document.getElementById('last-name').value = "Rizwan";
    // document.getElementById('email').value = "zaimeali1997@gmail.com";



        // Question 2
    // part 1
    // var q2_1 = document.getElementById('form-content').nodeType;
    // document.getElementById('q2-1').innerHTML = `Node Type of id 'form-content' is ${q2_1}`;

    // part 2
    // var q2_2 = document.getElementById('lastName').nodeType;
    // document.getElementById('q2-2').innerHTML = `Node Type of id 'lastName' is ${q2_2}`;
    // var q2_2Child = document.getElementById('lastName').childNodes[0];
    // document.getElementById('q2-2-child').innerHTML = `Child Node of id 'lastName' is ${q2_2Child}`;
    
    // part 3
    // document.getElementById('lastName').innerHTML = "Rizwan";

    // part 4
    // var firstChild = document.getElementById('main-content').children[0];
    // var lastChild = document.getElementById('main-content').children[1];
    // document.write("First Child is ");
    // document.write("'", firstChild.innerHTML, "'");
    // console.log(firstChild);
    // document.write("<br>Last Child is ");
    // document.write("'", lastChild.innerHTML, "'");
    // console.log(lastChild);

    // part 5
    // var parent = document.getElementById('lastName').parentElement;
    // var parentContent = Array.prototype.slice.call(parent.children);
    // var indexNum = 0;
    // for(var i = 0; i < parentContent.length; i++){
    //     if(parentContent[i].id === 'lastName'){
    //         indexNum = i;
    //         break;
    //     }
    // }
    // document.write("Previous: ");
    // document.write(parentContent[indexNum - 1].innerHTML);
    // console.log(parentContent[indexNum - 1]);
    // document.write("<br>Next: ");
    // document.write(parentContent[indexNum + 1].innerHTML);
    // console.log(parentContent[indexNum + 1]);

    // Part 6
    // var parentNode = document.getElementById('email').parentElement;
    // var nodType = document.getElementById('email').nodeType;
    // document.write('Parent Node: ', parentNode);
    // document.write('<br>Node Type: ', nodType);