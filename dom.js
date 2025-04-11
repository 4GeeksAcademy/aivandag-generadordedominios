function generarDom() {
    let pronombre = ['the', 'our'];
    let adjetivo = ['great', 'big'];
    let nombre = ['jogger', 'raccon'];



    for (let p = 0; p < pronombre.length; i++) {
        for (let a = 0; a < adjetivo.length; a++) {
            for (let n = 0; n < nombre.length; n++) {
                console.log(pronombre[p] + adjetivo[a] + nombre[n]);
            }
        }
    }
}