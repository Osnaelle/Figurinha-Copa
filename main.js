
let IsIgnite =false
function changeCard(event){
  const card = event.currentTarget
  const backgroundImage = IsIgnite 
  ? "url(./assets/bg-explore.svg)"
  : 'url(./assets/bg-ignite.svg)'

  IsIgnite = !IsIgnite
  card.style.backgroundImage =backgroundImage
}