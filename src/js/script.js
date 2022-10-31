const token="​nkXqdVdcTQAcWulaSu8G1CLE​"
const btnBemVindo=document.querySelector('#sobre-mim');
const apresentation=document.querySelector('#apresentation')
const option={
    headers:{
        Authorization: `Bearer <${token}>`
    },
    method:"get"
}

const swiper = new Swiper(".slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".s-certificados .texo-certificados  .swiper-pagination",
      clickable: true,
      
    },
});


async function BuscarDate(){
    await fetch("https://api.vercel.com/v9/projects",option)
    .then(response=>  response.json())
    .then(data=>{
        console.log(data)
    })
}

btnBemVindo.addEventListener('click',(event)=>{
    event.preventDefault()
    apresentation.style.display="block"
})