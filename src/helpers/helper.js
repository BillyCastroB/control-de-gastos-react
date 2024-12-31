export const revisarPresupuesto = (budget, surplus)=>{
    let clase;

    if( (budget/4) > surplus ){
        clase = 'alert alert-danger';
    }else if( (budget/2) > surplus ){
        clase = 'alert alert-warning';
    }else{
        clase = 'alert alert-success';
    }
    return clase;
}