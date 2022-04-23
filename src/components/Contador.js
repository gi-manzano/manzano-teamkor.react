//ejemplo de clase 23/04/2022 no aplica para la entrega de tp// este componente no esta utilizado ni aplicado a la app//
import {useState} from 'react'

const Contador = () => {
    const [suma, setSuma] = useState(0)

    const onClickHandler = () => {
        
        console.log('click')
        setSuma (suma + 1)
        }

    console.log ('Aqui hay un render');



  return (
    <div>
        <button onClick={onClickHandler} className="btn">Click aqui</button>
    </div>
  )
}

export default Contador