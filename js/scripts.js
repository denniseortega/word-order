var sentence;
var words=[];
var longWords=[];
var counter=0;
var found;
var uniqueWords=[];
var wordScores=[];
var wordScore=0;



$(document).ready(function() {
  $("button#add").click(function(){
    sentence=$("#item1").val();
    words=sentence.split(" ");
    words.forEach (function(word1){
      if(uniqueWords.indexOf(word1)==-1)
      {
        uniqueWords.push(word1);
        //wordScore=1;
      }
      else{
        //wordScore++;
      }
    });
    alert(uniqueWords);
    //alert(wordScores);
  });
});
