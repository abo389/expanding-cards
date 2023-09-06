const panals = document.querySelectorAll( ".panal" );

panals.forEach( ( e ) =>
{
  e.addEventListener( "click", () =>
  {
    panals.forEach((p) => p.classList.remove("active"))
    e.classList.toggle("active")
  })
})

































// const panels = document.querySelectorAll( ".panel" );

// panels.forEach( (panel) =>
// {
//   panel.addEventListener( "click", () =>
//   {
//     panels.forEach((e) => e.classList.remove("active"))
//     panel.classList.toggle("active")
//   })
// })