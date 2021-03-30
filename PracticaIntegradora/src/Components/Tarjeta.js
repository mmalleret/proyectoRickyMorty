function Tarjeta(props) {
    return (
        <div>
            <div className="uk-card uk-card-default uk-card-body" id='tarjeta'>
                    <div className="uk-card-media-top">
                        <img src={props.src} alt="" width="250" height="250"/>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{props.nombre}</h3>
                        <p>{props.estatus} - {props.especie}</p>
                        <p>Origin: {props.origen}</p>
                    </div>
            </div>
        </div>
          
    )
}
export default Tarjeta