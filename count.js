let pluse_count=document.querySelector('pluse__btn')
let minuse_count=document.querySelector('.minuse__btn')
let count_board=document.querySelector('.item__count')
let add_btn=document.querySelector('.cart__btn')
let counts=0;
function Count(counter)
{   

    counter===0?alert('Item Added To Cart'):''
    if (counts===0 && counter===-1 || counter===0)
    {
        counts=0
    }
    else
    {
        counts=counts+counter
    }
    console.log('counter function working',counter)
    
    count_board.innerHTML=`${counts}`
}