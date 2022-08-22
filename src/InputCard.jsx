import { useEffect, useState } from "react"

export const InputCard = ({ id, selected, initValue, color, onSelectedCard, onSetValue }) => {
    
    const [value, setValue] = useState(initValue)

    const onSubmit = (e) => {
        e.preventDefault()
        onSetValue( value )
    }

    return (
        <div className='__init'>
            { selected ? 
                <form onSubmit={ onSubmit } >
                <input type="text"
                    autoFocus
                    onChange={ (e) => setValue(e.target.value)}
                    value={ value }
                    style={{ backgroundColor: color, boxShadow: selected ? `0px 3px 50px ${ color }` : '' }}
                />
                </form>
                :
                <h3
                    onClick={ () => onSelectedCard( id ) }
                    style={{ backgroundColor: color, boxShadow: selected ? `0px 3px 50px ${ color }` : '' }}
                >
                    { initValue }
                </h3>
            }
        </div>
    )
}
