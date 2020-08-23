function add(a,b)

{
    return a+b;

}

function sub(a,b)
{
  return a-b;
}

function mul(a,b)
{
    return a*b
}

function div(a,b)
{

    let result=a/b

    result=result.toFixed(2)
   
    return result
}

export{add,sub,mul,div}