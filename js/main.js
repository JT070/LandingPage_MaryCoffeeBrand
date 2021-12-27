((d) => {
    const $btnMenu = d.querySelector(".hamburguesa");
    const $btnCerrar = d.querySelector(".equis");
    const $menu = d.querySelector(".menu-list"); 

    $btnMenu.addEventListener("click", (e) => {
        $menu.classList.toggle("nones");
        $btnMenu.classList.toggle("nones");
        $btnCerrar.classList.remove("nones");
    }); 
    $btnCerrar.addEventListener("click", (e) => {
        $menu.classList.toggle("nones"); 
        $btnMenu.classList.remove("nones");
        $btnCerrar.classList.toggle("nones");
    });
    
    // Delegación de Eventos
    d.addEventListener("click", (e) => {
        if (!e.target.matches("#menu-list a")) return false       
        $menu.classList.add("nones"); 
        $btnMenu.classList.remove("nones");
        $btnCerrar.classList.toggle("nones"); 
    });

})(document);