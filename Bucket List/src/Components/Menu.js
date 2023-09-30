import React from 'react'
import { connect } from 'react-redux'


class Menu extends React.Component {
    
    constructor(props) {
        super(props)
    }

    handleClick = (e) => {
        this.props.updateCart(e)
    }

    render() {
        console.log(this.props.menu)
        let { updateCart } = this.props.updateCart
        let m = this.props.menu
        
        var lists = m.map(e => {
            return (
                <div className='card menu-c' key={e.id} onClick={() => this.handleClick(e)}>
                    <span className='card-title blue-text text-darken-4'>{e.name}</span>
                    <p className='blue-text text-lighten-2'>{e.description}</p>
                    <div className='card-action'>
                        <p>Rs: {e.price.toLocaleString("en", { minimumFractionDigits: 2 })} PKR</p>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className='menu'>
                    {lists}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.root.menu
    }
}

export default connect(mapStateToProps)(Menu)