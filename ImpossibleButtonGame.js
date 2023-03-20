const btn = document.querySelector('button');

btn.addEventListener('mouseover',function(){
    console.log('Moused over me!');
    const h = Math.floor(Math.random()*window.innerHeight);
    const w = Math.floor(Math.random()*window.innerWidth);
    btn.style.left=`${w}px`;
    btn.style.top=`${h}px`;
});
btn.addEventListener('click',function(){
    btn.innerText = 'You Got me!';
    document.body.style.backgroundColor='green';
});