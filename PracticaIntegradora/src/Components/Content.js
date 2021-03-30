import Tarjeta from './Tarjeta'
import datos from '../rickandmorty.json'
function Content () {
    return (
        <div className="uk-grid-column-small uk-grid-row-small uk-child-width-1-4@s uk-text-center" uk-grid="true">
            {datos.map(function (datos, idx) {
                return (
                    <Tarjeta src={datos.image} nombre={datos.name} estatus={datos.status} especie={datos.species} origen={datos.origin.name} key={idx}/>
                )
                
            })}
           
            
        </div>
    )
}
export default Content