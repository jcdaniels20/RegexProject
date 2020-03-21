function highlight() {
   var regX = RegExp(document.getElementById("regularExpression").value, 'g'); //global delaration of regular expression variable
   var inputText = document.getElementById("inputText").value; // declaration of var for input text
   var output = input.matchAll(regX);


   for(var ch = 0; ch < output.length; ch++) {input = input.replace(match[ch], '<span style="background-color: yellow">' + match[ch] + '</span>');}     
   }
}
