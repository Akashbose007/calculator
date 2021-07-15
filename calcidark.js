function gethis()
{
    return  document.getElementById("history-show" ).innerText;
}

function printhis(number)
{
    if(number=="")
     document.getElementById("history-show").innerText=number;
     else
    document.getElementById("history-show" ).innerText=number;
}
function getoutput()
{
    return  document.getElementById("output-show" ).innerText;
}

function printoutput(number)
{
    if(number=="")
     document.getElementById("output-show").innerText=number;
     else
    document.getElementById("output-show" ).innerText=comma(number);
}
function comma(number){
    if(number=="-")
      return "";
    var num=Number(number);
    var ans=num.toLocaleString("en");
    return ans;
}
function reverse(number)
{
 return Number(number.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){
        if(this.id=='clear')
        {
            printoutput("");
            printhis("");
        }
        else if(this.id=='back')
        {
                    var output=reverse(getoutput()).toString();
                    if(output)
                    {
                        output=output.substr(0,output.length-1);
                        printoutput(output);
                    }
        }
        else
        {
            var output=getoutput();
             var history=gethis();
             if(output != "")
             {
                 output=reverse(output);
                history=history+output;
                if(this.id == "=")
                {
                    var result=eval(history);
                    printoutput(result);
                    printhis("");
                }
                else 
                {
                    history=history+this.id;
                    printhis(history);
                    printoutput("");
                }
         }

        }
    });
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function(){
                 var output=reverse(getoutput())
                 if(output != NaN)
                 {
                     output=output+this.id;
                 printoutput(output);
                }
    });
}

