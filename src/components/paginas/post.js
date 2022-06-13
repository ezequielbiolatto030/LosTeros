import React, { Component } from "react";


//noticias desde un servidor
export default class Posts extends Component{
    state={
        posts:[]
    }
    //metodo que se ejecuta antes de que pinte la pantalla
    //async.. await .. se utiliza porque debemos esperar a qe se optenga una respuesta del servidor
    async componentDidMount(){
        //fetch se utiliza para hacer peticiones a servidores
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        
        this.setState({posts:data})

    }
    
    //metodo que muestra en pantalla
    render(){
        return(
            <div>
                <h1 className="navbar" id="noticias">Noticias (usando un servidor)</h1>
                {
                this.state.posts.map(post =>{
                    return <div  key={post.id}>
                        <h1 className="titulo">{post.title}</h1>
                        <p className="parrafo">{post.body}</p>
                    </div>
                })
                }
            </div>
        )
    }
}
// servidor de prueba https://jsonplaceholder.typicode.com/