import { getRandomInt } from "./helpers/getRandomInt"


export const Bar = ({ selected, onAddCard, onUpdateColors, onDeleteCard }) => {

    const onChangeColor = () => {
        if( !selected ) return
        const hex = '123456789ABCDEF'
        let color = '#'
        for (const _ of new Array(6).fill()) {
            color += hex[getRandomInt(hex.length)]
        }

        onUpdateColors(color)

    }

    return (
    <div className='bar'>
        <div className='list'>
            <div className="list-item">
                <div className="space">
                <button className='item' onClick={ onAddCard } >
                <i className="invert fa-solid fa-plus"></i>
                </button>
                </div>
                <div className="label">Add</div>
            </div>
            <div className="list-item">
                <div className="space">
                <button className='item' onClick={ onChangeColor } disabled={ !selected }>
                <i className="invert fa-solid fa-arrows-rotate"></i>
                </button>
                </div>
                <div className="label">Change Color</div>
            </div>
            <div className="list-item">
                <div className="space">
                <button className='item' onClick={ onDeleteCard } disabled={ !selected }>
                <i className="invert fa-solid fa-trash"></i>
                </button>
                </div>
                <div className="label">Remove Task</div>
            </div>
            {/* <button className='item' disabled={ !selected }>
                <div className="invert">Button</div>
            </button> */}
        </div>
    </div>
    )
}
