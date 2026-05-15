
const equipos = [
    { id: 1, nombre: "Real Coatzacoalcos", ganados: 8, empatados: 1, perdidos: 1, gf: 25, gc: 10 },
    { id: 2, nombre: "Deportivo Chávez", ganados: 7, empatados: 2, perdidos: 1, gf: 22, gc: 12 },
    { id: 3, nombre: "FC Ale", ganados: 5, empatados: 1, perdidos: 4, gf: 18, gc: 15 }
];

const goleadores = [
    { nombre: "Rabelo Jr.", equipo: "Real Coatzacoalcos", goles: 12 },
    { nombre: "Chávez Pro", equipo: "Deportivo Chávez", goles: 8 }
];


function generarTablaPosiciones() {
    const tabla = document.querySelector(".tabla-posiciones tbody");
    if(!tabla) return;

    
    const listaOrdenada = equipos.sort((a, b) => {
        const puntosA = (a.ganados * 3) + a.empatados;
        const puntosB = (b.ganados * 3) + b.empatados;
        return puntosB - puntosA;
    });

    tabla.innerHTML = ""; 

    listaOrdenada.forEach((eq, index) => {
        const pj = eq.ganados + eq.empatados + eq.perdidos;
        const pts = (eq.ganados * 3) + eq.empatados;
        const dg = eq.gf - eq.gc;

        tabla.innerHTML += `
            <tr class="${index < 2 ? 'top-rank' : ''}">
                <td>${index + 1}</td>
                <td><strong>${eq.nombre}</strong></td>
                <td>${pj}</td>
                <td>${eq.ganados}</td>
                <td>${eq.empatados}</td>
                <td>${eq.perdidos}</td>
                <td>${eq.gf}</td>
                <td>${eq.gc}</td>
                <td>${dg > 0 ? '+' + dg : dg}</td>
                <td class="pts">${pts}</td>
            </tr>
        `;
    });
}