document.addEventListener("astro:page-load",()=>{const n=document.getElementById("id").value;document.getElementById("eliminarEvento").addEventListener("submit",async o=>{o.preventDefault(),fetch("https://api-dev.umanizales.edu.co/api/v1/module/totem-um/event/"+n,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(t=>{if(t.ok){const e=document.getElementById("confirmationMessage2");e?(e.classList.remove("hidden","opacity-0"),e.classList.add("opacity-100"),setTimeout(()=>{e.classList.add("opacity-0"),setTimeout(()=>{e.classList.add("hidden"),window.location.reload()},500)},3e3)):console.error("El elemento de confirmación no existe en el DOM.")}else return t.json().then(e=>{alert(`Error: ${e.message}`)})}).catch(t=>{console.error("Error al eliminar el evento:",t),alert("Hubo un error al intentar eliminar el evento")})})});