const fetchAdvice = async()=>{
  const res = await fetch("https://api.adviceslip.com/advice",{
    cache:'no-cache'
  })
  const data =await res.json()
  console.log(data)
  document.querySelector('#title').innerHTML=`Advice #${data.slip.id}`
  document.querySelector('#text').innerHTML=`"${data.slip.advice}"`
}
fetchAdvice()

document.querySelector('#bookmark')
.addEventListener('click',()=>{
  fetchAdvice()
})