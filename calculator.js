var buttons=document.getElementsByClassName("buttons");
var display=document.getElementById("screen");
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0; i<buttons.length; i++)
{
  
  buttons[i].addEventListener('click', function(){
        var value=this.getAttribute('data-value');
        if(value =='+')
        {

            operator='+';
            operand1=parseFloat(display.textContent);//textconten fetches display content and it is string therefor we have to parsefloat to get the nuumber out of it
            display.innerText=null;
        }

        else if(value =='-')
        {

            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        }
        
        else if(value =='x')
        {

            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        }
        
        else if(value =='/')
        {

            operator='/';
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        }

        
        else if(value =='%')
        {

            operator='%';
            operand1=parseFloat(display.textContent);
            display.innerText=null;
        }

        
        else if(value =='AC')
        {

            operator=null;
            operand1=null;
            operator2=null;
            display.innerText=null;
        }
        else if(value =='CLR')
        {

            operator='';
           var p=parseInt(display.innerText/10);
           display.innerText=p;
           display.innerText

           
        }
        
        else if(value =='=')
        {
            operand2=parseFloat(display.textContent);
            var ev=eval(operand1+" " + operator +" "+ operand2);
            display.innerText=ev;

            
        }
        else{
            display.innerText+=value;
        }
    });
}