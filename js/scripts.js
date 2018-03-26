var sentence;
var words=[];
var longWords=[];

$(document).ready(function() {
  $("button#add").click(function(){
    sentence=$("#item1").val();
    words=sentence.split(" ");
    words.forEach (function(word){
      if(word.length >=3){
        longWords.push(word);
      } else{}
    });
    longWords.reverse();
    alert(longWords.join(' '));
  });
});
