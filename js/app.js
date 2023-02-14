const circle_get = document.getElementsByClassName('circle');
const div_tag = document.body.getElementsByTagName('div');
const btn = document.querySelector('.btn');

for (let i = 0; i < circle_get.length; i++) {
    circle_get[i].addEventListener('click', function () {
        // console.log(circle.classList.replace('bg-[#262f38]', 'bg-[#7e8798]'));        
        circle_get[i].classList.replace('bg-[#262f38]', 'bg-[#7e8798]');
        circle_get[i].classList.add('text-white');

        if (circle_get[i].innerHTML != 1 && circle_get[i].classList.contains('bg-[#7e8798]')) {
            circle_get[0].classList.replace('bg-[#7e8798]', 'bg-[#262f38]');
            circle_get[0].classList.remove('text-white');            
        }

        if (circle_get[i].innerHTML != 2 && circle_get[i].classList.contains('bg-[#7e8798]')) {
            circle_get[1].classList.replace('bg-[#7e8798]', 'bg-[#262f38]');
            circle_get[1].classList.remove('text-white');
        }

        if (circle_get[i].innerHTML != 3 && circle_get[i].classList.contains('bg-[#7e8798]')) {
            circle_get[2].classList.replace('bg-[#7e8798]', 'bg-[#262f38]');
            circle_get[2].classList.remove('text-white');
        }

        if (circle_get[i].innerHTML != 4 && circle_get[i].classList.contains('bg-[#7e8798]')) {
            circle_get[3].classList.replace('bg-[#7e8798]', 'bg-[#262f38]');
            circle_get[3].classList.remove('text-white');
        }

        if (circle_get[i].innerHTML != 5 && circle_get[i].classList.contains('bg-[#7e8798]')) {
            circle_get[4].classList.replace('bg-[#7e8798]', 'bg-[#262f38]');
            circle_get[4].classList.remove('text-white');
        }
        
        if(circle_get[i]){
            console.log(div_tag[2].childNodes[3].textContent = `You selected ${i+1} out of ${circle_get.length}`); 
        }
    });
}



btn.addEventListener('click', function () {
    div_tag[2].classList.remove('hidden');
    div_tag[2].classList.add('flex');
    div_tag[1].remove('div');
});