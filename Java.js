let n = document.querySelector('.nov1')
let n2 = document.querySelector('.nov2')
let n3 = document.querySelector('.nov3')
let n4 = document.querySelector('.nov4')
let box = document.querySelector('.box')
let box1 = document.querySelector('.eng1')
let box2 = document.querySelector('.eng2')
let box3 = document.querySelector('.eng3')
let box4 = document.querySelector('.eng4')
let img = document.querySelector('.img')
let imf = document.querySelector('.imf')
let imp= document.querySelector('.imp')
let kop = document.querySelector('.kop')
let kor = document.querySelector('.kor')
let koi = document.querySelector('.koi')
let kod = document.querySelector('.kod')
let a = document.querySelector('.a')
let aa = document.querySelector('.aa')
let aaa = document.querySelector('.aaa')
let aaaa = document.querySelector('.aaaa')
let sp = document.querySelector('.sp')
let span = document.querySelector('.lsp')
let form = document.querySelector('.form')
let input = document.querySelector('.input')
let form2 = document.querySelector('.form2')
let input2 = document.querySelector('.input2')
let form3 = document.querySelector('.form3')
let input3 = document.querySelector('.input3')
let form4 = document.querySelector('.form4')
let input4 = document.querySelector('.input4')
let boxx1 = document.querySelector('.box1')
let boxx2 = document.querySelector('.box2')
let boxx3 = document.querySelector('.box3')
let boxx4 = document.querySelector('.box4')

n.addEventListener('click', function(){
    if (n.classList.contains('lop')) {
    } else {
        n.classList.add('lop')
        n2.classList.remove('lo')
        n3.classList.remove('l')
        n4.classList.remove('lopp')
    }
    if (box1.classList.contains('show')) {
} else {
    box1.classList.add('show')
    box2.classList.remove('show')
    box3.classList.remove('show')
    box4.classList.remove('show')
}
});
n2.addEventListener('click', function(){
    if (n2.classList.contains('lo')) {
    } else {
        n2.classList.add('lo')
        n.classList.remove('lop')
        n3.classList.remove('l')
        n4.classList.remove('lopp')
    }
    if (box2.classList.contains('show')) {
    } else {
        box2.classList.add('show')
        box1.classList.remove('show')
        box3.classList.remove('show')
        box4.classList.remove('show')
    }
});
n3.addEventListener('click', function(){
    if (n3.classList.contains('l')) {
    } else {
        n3.classList.add('l')
        n.classList.remove('lop')
        n2.classList.remove('lo')
        n4.classList.remove('lopp')
    }
    if (box3.classList.contains('show')) {
    } else {
        box3.classList.add('show')
        box2.classList.remove('show')
        box1.classList.remove('show')
        box4.classList.remove('show')
    }
});
n4.addEventListener('click', function(){
    if (n4.classList.contains('lopp')) {
    } else {
        n4.classList.add('lopp')
        n.classList.remove('lop')
        n2.classList.remove('lo')
        n3.classList.remove('l')
    }
    if (box4.classList.contains('show')) {
    } else {
        box4.classList.add('show')
        box2.classList.remove('show')
        box3.classList.remove('show')
        box1.classList.remove('show')
    }
});
img.addEventListener('click', function(){
    kop.classList.add('kol')
    kop.classList.remove('ko')
})
a.addEventListener('click', function(){
    kop.classList.add('ko')
    kop.classList.remove('kol')
})
imf.addEventListener('click', function(){
    kor.classList.add('kol')
    kor.classList.remove('ko')
})
aa.addEventListener('click', function(){
    kor.classList.add('ko')
    kor.classList.remove('kol')
})
span.addEventListener('click', function(){
    koi.classList.add('kol')
    koi.classList.remove('ko')
})
aaa.addEventListener('click', function(){
    koi.classList.add('ko')
    koi.classList.remove('kol')
})
imp.addEventListener('click', function(){
    kod.classList.add('kol')
    kod.classList.remove('ko')
})
aaaa.addEventListener('click', function(){
    kod.classList.add('ko')
    kod.classList.remove('kol')
})
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let inp = input.value;
    input.value = '';
    if(inp.trim() === ''){
    alert('Mahsulot qo`shing')
    } else {
        let div = document.createElement('div')
        div.classList.add('ppl')
        let p = document.createElement('p')
        p.classList.add('p')
        p.textContent = inp;
        div.appendChild(p)
        boxx1.appendChild(div)
    }
});
form2.addEventListener('submit', function(evt2){
    evt2.preventDefault();
    let inp2 = input2.value;
    input2.value = '';
    if(inp2.trim() === ''){
    alert('Mahsulot qo`shing')
    } else {
        let div = document.createElement('div')
        div.classList.add('ppl')
        let p = document.createElement('p')
        p.classList.add('p')
        p.textContent = inp2;
        div.appendChild(p)
        boxx2.appendChild(div)
    }
});
form3.addEventListener('submit', function(evt3){
    evt3.preventDefault();
    let inp3 = input3.value;
    input3.value = '';
    if(inp3.trim() === ''){
    alert('Mahsulot qo`shing')
    } else {
        let div = document.createElement('div')
        div.classList.add('ppl')
        let p = document.createElement('p')
        p.classList.add('p')
        p.textContent = inp3;
        div.appendChild(p)
        boxx3.appendChild(div)
    }
});
form4.addEventListener('submit', function(evt4){
    evt4.preventDefault();
    let inp4 = input4.value;
    input4.value = '';
    if(inp4.trim() === ''){
    alert('Mahsulot qo`shing')
    } else {
        let div = document.createElement('div')
        div.classList.add('ppl')
        let p = document.createElement('p')
        p.classList.add('p')
        p.textContent = inp4;
        div.appendChild(p)
        boxx4.appendChild(div)
    }
});
function What(){
    let p = document.createElement('p')
    p.classList.add('p')
    p.textContent = 'lorem ispum sit amet dolor sit.';
    boxx1.appendChild(p)
}
setInterval(What, 10000);

function What2(){
    let p = document.createElement('p')
    p.classList.add('p')
    p.textContent = 'lorem sit amet dolor sit amet consectetur, adipisicing elit.';
    boxx2.appendChild(p)
}
setInterval(What2, 8000)

function What3(){
    let p = document.createElement('p')
    p.classList.add('p')
    p.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
    boxx3.appendChild(p)
}
setInterval(What3, 10000);

function What4(){
    let p = document.createElement('p')
    p.classList.add('p')
    p.textContent = 'lorem ispum sit amet Dolar sit.';
    boxx4.appendChild(p)
}
setInterval(What4, 13000);