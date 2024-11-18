let textbox = document.getElementById("textbox");

        textbox.addEventListener('input', function(){
            var text = this.value;
            let char = text.length;
            document.getElementById("char").innerHTML = char;
            // console.log(text);

            text = text.trim();  //for avoiding extra space from starting and ending of the sentence.
            let words = text.split(" "); //for avoiding extra space between two words.
            let cleanList = words.filter(function(elm){
                return elm != "";
            })
            // console.log(cleanList);
            document.getElementById("word").innerHTML = cleanList.length;
        });