import { useState, useEffect } from "react"

const Home = () => {
    
    const [listaProduto, setListaProduto] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/produto")
        .then((res) =>{
            return res.json();
        })
        .then((data) => {
            setListaProduto(data)
        })
    }, [])

    return(
        <>
            <div>
                {listaProduto.map((item, index) => (
                    <div key={index}>
                        <h1>{item.nome}</h1>
                        <img src={item.foto}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home