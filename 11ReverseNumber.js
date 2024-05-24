function Reverse(input)
{
    let g=0;
    while(input !==0){
        const digit=input%10;
        g=g*10+digit;
        input=Math.floor(input/10);
    }
    
        
    sconsole.log(g)
}
Reverse(1234)