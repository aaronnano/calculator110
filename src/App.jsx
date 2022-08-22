import { useEffect, useState } from 'react'
import { InputCard } from './InputCard'
import { Bar } from './Bar'
import './main.scss'

export const App = () => {

    const [cards, setCards] = useState([{
        id: 1,
        color: '#CCF955',
        selected: false,
        value: 'Task'
    }])
    const [activeCard, setActiveCard] = useState({})
    
    const onSelectedCard = ( id ) => {
        const newCards = cards.map(card => {
            return {
                ...card,
                selected: card.id === id ? !card.selected : false
            }
        })
        setCards(newCards)
        // I can use find instead
        setActiveCard(newCards.find( card => card.id === id ))

    }
    
    const onAddCard = () => {
        setCards([...cards, { id: cards.length + 1, color: '#fff', selected: false, value: 'New Task'}])
    }

    const onUpdateColors = ( color ) => {
        setCards(cards.map(card => {
            return {
                ...card,
                color: card.id === activeCard.id ? color : card.color 
            }
        }))

    }

    const onDeleteCard = () => {
        if( !activeCard.selected ) return
        setCards(cards.filter( card => card.id !== activeCard.id ))
        setActiveCard(null)
    }

    const onSetValue = ( value ) => {
        setCards(cards.map(card => {
            return {
                ...card,
                selected: card.id === activeCard.id ? !card.selected : false,
                value: card.id === activeCard.id ? value : card.value 
            }
        }))
        console.log(value)
        setActiveCard(null)
    }

    return (
        <>
            <div className='__init'>
                <h2>Greetings: <span>{cards.length}</span></h2>
                <hr />
            </div>
            {   cards.map( card => (
                    <InputCard key={ card.id }
                        { ...card }
                        onSelectedCard={ onSelectedCard }
                        onSetValue={ onSetValue }
                        initValue={ card.value }
                        
                    />
                ))
            }
            <Bar { ...activeCard }
                onAddCard={ onAddCard }
                onUpdateColors={ onUpdateColors } 
                onDeleteCard={ onDeleteCard }/>
        </>
    )
}
