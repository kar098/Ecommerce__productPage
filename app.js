console.log('working')
let slide_img=document.querySelector('.product__thumbnail')
console.log(slide_img.children)
let img=slide_img.children
let carousel=document.querySelectorAll('.product__fullview img')
let open_nav=document.querySelector('.open__icon')
let nav_list=document.querySelector('.nav__option')
let prev_img=document.querySelector('.pluse')
let next_img=document.querySelector ('.minuse')
let basket=document.querySelector('.basket')
let avatar=document.querySelector('.avatar')
let cart=document.querySelector('.cart__display')

console.log('svg tag',open_nav)
console.log('avatar',avatar)
let count=0;
let width
let prev_state;
let isvisible=true;
count_product=0;

console.log(carousel)
avatar.addEventListener('click',()=>{
  console.log('clicked')
  activeState();
})
cart.addEventListener('click',()=>{
  activeState();
})
function activeState(){
   if (!isvisible)
   {
    basket.style.visibility='hidden'
    isvisible=true
   }
   else
   {
    basket.style.visibility='visible'
    isvisible=false
   }
}

next_img.addEventListener('click',()=>
{
  if (prev_state)
        {
            prev_state.style.border='none'
            prev_state.style.opacity='1'
        }
  count>=3?count=0:count=count+1;
  prev_state=img[count]
  imgSlide(count,360,img[count]);
})
prev_img.addEventListener('click',()=>{
  console.log('prev has been clicked')
  if (prev_state)
        {
            prev_state.style.border='none'
            prev_state.style.opacity='1'
        }
  count==0?count=3:count=count-1;
  imgSlide(count,360,img[count])
  prev_state=img[count]
})
for(let i=0 ;i<=img.length;i++)
{
    img[i].addEventListener('click',(e)=>{
        if (prev_state)
        {
            prev_state.style.border='none'
            prev_state.style.opacity='1'
        }
        console.log('is clicked')
        width=img[0].clientWidth
        count=img[i].getAttribute('data-slide')
       // console.log('e',e.target)
       prev_state=e.target
       imgSlide(count,360,e.target)
        
    })
}
function imgSlide(count,width,clicked_img)
{
    let c=parseInt(count)
    
  console.log(typeof(width))
 carousel.forEach(e => {
    e.style.transform=`translate(${-c*width}px)`
    clicked_img.style.border='3px solid hsl(26, 100%, 55%)'
    clicked_img.style.opacity='0.5'
  });
  
}
//for responsive navbar
function resMenu()
{
  console.log("clicked")
  nav_list.classList.toggle('nav__options')
}


