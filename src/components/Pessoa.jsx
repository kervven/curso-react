function Pessoa({nome, foto, idade, profissao}){
    return(
        <>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </>
    )
}

export default Pessoa