import React, { Component } from "react";
import datos from "../../datos.json";
import "../../App.css"






//noticias desde un archivo local
export default class Noticias extends Component {
    state = {
        noticias: datos
    }

    render() {
        return <div>
            <h1 className="navbar" id="Noticias">Noticias(usando un json local)</h1>
            {this.state.noticias.map(post =>
                <div key={post.id}>                    
                        <div className="divImagen">
                            <img src={"./img"+post.img+".jpg"} className="img" alt="" />
                        </div>
                        <div className="divDescripcion">
                            <p className="titulo">{post.titulo}</p>
                            <p className="parrafo">{post.descripcion}</p>
                        </div> 
                              
                    
                </div>
            )}

        </div>

    }
}


