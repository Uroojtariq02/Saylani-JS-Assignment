// Question # 1
        //  <script>
        //   var fname = prompt("Enter your first name: ", "");
        //   var lname = prompt("Enter your last name: ", "");
        //   var fullName = fname + lname;
        //   document.write("<h1>Hello, " + fullName + "!</h1>");
            //</script>

// Question # 2
        //    <script>
        //    var phone = prompt("What is your  favorite mobile phone model? : ", "");
        //    var n = phone.length;
        //   document.write("<h1>My Favorite mobile model is, " + phone + "!</h1>");
        //    document.write("<h2>The Length Of String is, " + n + "!</h2>");
        //    </script>

// Question # 3
        //<script>
        //       var str = "Pakistan";
        //       document.write("<h1>String is = " + str + "</h1>");
        //       var n = str.indexOf("n");
        //       document.write("<h2>The index Of n is, " + n + "</h2>");
        //  </script>

// Question # 4
        //<script>
        //       var str = "Hello World";
        //       document.write("<h1>String = " + str + "</h1>");
        //       var n = str.lastIndexOf("l");
        //       document.write("<h2>Last index of 'l' = " + n + "</h2>");
        //  </script>

// Question # 5
        //<script>
        //var str = "Pakistan";     
        //document.write("<h1>String = " + str + "</h1>");
        //var s = str.charAt(3)
        //document.write("<h2>Character At Index 3 = " + s + "</h2>");
        //</script>

// Question # 6
        //<script>
        //var fname = prompt("Enter your first name: ", "");
        //var lname = prompt("Enter your last name: ", "");
        //var fullName = fname.concat(lname);
        //document.write("<h1>Hello, " + fullName + "!</h1>");
        //</script>

// Question # 7
        //<script>
        //var first = 'Hyder';
        //var second = 'Islam';    
        //document.write("<h1>City = Hyderabad</h1>");
        //var result = 'Hyderabad'.replace(first, second); 
        //document.write("<h1>After Replacement = " + result + "</h1>");
        //</script>

// Question # 8
        //<script>
        //       var first = 'and';
        //        var second = '&';   
        //        var message = 'Ali and Sami are best friends. They play cricket and football together.'; 
        //        document.write("<h2>Message Before Replacement = "+ message+"</h2>");
        //        var result = message.split(first).join(second);
        //        document.write("<h2>Message After Replacement = " + result + "</h2>");
        //  </script>

// Question # 9
        //<script>
                //var a = '472';
                //var t1 = typeof(a);
                //document.write("<h2>Value = '472'</h2>");
                //document.write("<h2>Type = "+ t1 +"</h2>");
                //var t2 = typeof(parseInt(a));
                //document.write("<h2>Value = 472</h2>");
                //document.write("<h2>Type = "+ t2 +"</h2>");
        //</script>

// Question # 10
        //<script>
        //        var text = prompt("Enter Input: ", "");
        //        document.write("<h2>User Input: "+ text +"</h2>");
        //        var text1 = text.toLocaleUpperCase();
        //        document.write("<h2>Upper Case: "+ text1 +"</h2>");
        //</script>


// Question # 11
        //<script>
        //         function input(string) {
        //      var sentence = string.toLowerCase().split(" ");
        //      for(var i = 0; i< sentence.length; i++){
        //         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        //      }
        //   document.write(sentence.join(" "));
        //   return sentence;
        //   }
        //   input("javascript");
        //</script>

// Question # 12
        //<script>
        //    var num = 35.36;
        //    document.write("<h2>Number = "+ num +"</h2>");
        //    var t = toString(num);
        //    document.write("<h2>Result = '3536' </h2>");    
        //</script>

// Question # 13
        //<script>
        //var address = prompt("Please Enter Your Username: ");
        //if (/[^a-zA-Z0-9\-\/]/.test(address)) {
        //alert("Please Enter Correct Username!!");
        //}  else  {
        //alert('You are successfully login!!');
        //}
        //</script>

// Question # 14
        //<script>
        //var A = ["cake","apple pie","cookie","chips","patties"];
        //var input = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am? ");

        //for (i=0; i<A.length; i++){
        //if (A[i] == input) {
        //    alert("<h1> " + A[i] + " is available at index "+ A.indexOf(A[i]) +" in our Bakery! </h1>");
        // } else {
        //    alert("We are Sorry!!");
        // }
        //}
        //</script>

// Question # 15

// Question # 16
        {/* <script>
        function myFunction() {
        var university = "University of Karachi";
        var res = university.split("");
        document.getElementById("demo").innerHTML = res;
        }
        </script>
        */}

// Question # 17
        {/* <script> 
        var input = prompt("User Input: ", "");
        document.write("<h1>User Input: " + input + "!</h1>");
        var res = input.charAt(input.length-1); 
        document.write("<h1>Last Character of Input: " + res + "!</h1>");
                                
        </script>  */}


// Question # 18
        {/* <script> 
        var text = "The quick brown fox jumps over the lazy dog";
        var count = (text.match(/the/g) || []).length;
        document.write("<h1>Count = " + count + "!</h1>");
        </script> */}

