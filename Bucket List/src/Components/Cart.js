import React from 'react'
import Menu from './Menu'

class Cart extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            select: [],
            Total: 0.00
        }
    }

    deleteUpdate = (e) => {
        console.log('delete function called')

        let t = this.state.Total

        let newArr = this.state.select.filter(function(E){
            return (E.id != e)
        })

        this.state.select.forEach(E => {
            if(E.id == e)
            {
                t = t - (E.Q*E.price)
            }
        })

        this.setState({
            select: newArr,
            Total: t
        })
        console.log(newArr)
    }

    increment = (e) => {
        console.log('increment')
        let t = this.state.Total
        let newArr = this.state.select.map(obj => {
            if(obj.id == e)
            {
                t = t + obj.price
               obj.Q = obj.Q + 1
               return obj
            }
            else
            {
                return obj
            }
        })

        this.setState({
            select: newArr,
            Total: t
        })
    }

    decrement = (e) => {
        console.log('decrement')
        let t = this.state.Total
        let newArr = this.state.select.map(obj => {
            if(obj.id == e)
            {
                if(obj.Q == 1)
                {
                    alert("Cannot decrement more!!!")
                    return obj
                }
                else
                {
                    t = t - obj.price
                    obj.Q = obj.Q - 1
                    return obj
                }
            }
            else
            {
                return obj
            }
        })

        this.setState({
            select: newArr,
            Total: t
        })

    }

    updateCart = (e) => {

        let exists = false;
        this.state.select.forEach(E => {
            if(e.id == E.id)
            {
                exists = true;
            }
        })

        console.log('Cart function called');
        console.log(e);
        if(exists)
        {
            alert("Already Added in the bucket!!");
        }
        else
        {
            e.Q = 1;
            let newArr = [...this.state.select, e]
            let t = this.state.Total;
            t = t + e.price
            this.setState({
                select: newArr,
                Total: t
            })


        }


    }

    render() {

        let lists = this.state.select.length ? 
        (
            this.state.select.map(e => {
              return (
                    <div className='card menu-c menu-c-c' key={e.id}>
                        
                        <div className='header'>
                            <p className='card-title blue-text text-darken-4'>{e.name}</p>
                            <div className='close-btn'>
                                <span><button type="button" class="btn-close red" aria-label="Close" onClick={() => this.deleteUpdate(e.id)}></button></span>
                            </div>         
                            </div>
                        
                        <p className='blue-text text-lighten-2'>{e.description}</p>
                        <div className='card-action'>
                            <p>Rs: {e.price.toLocaleString("en", { minimumFractionDigits: 2 })} PKR</p>
                            <div>
                            <p>Quantity: {e.Q}</p>
                                <button className='green' onClick={() => this.increment(e.id)}>+</button>
                                <button className='red' onClick={() => this.decrement(e.id)}>-</button>
                            </div>
                        </div>
                    </div>
              )  
            })
        )
        :
        (
            <div className='empty'>
                <p>Your bucket is Empty!!!</p>
            </div>
        )

        return (
            <div>
                <div>
                    <Menu updateCart={this.updateCart}/>
                </div>

                <div className='cart'>
                    <div className='cart-list'>
                        {lists}
                    </div>
                    <div className='cart-count'>
                        <div>
                            <p>Total: <span>{this.state.Total.toLocaleString("en", { minimumFractionDigits: 2 })} PKR</span></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Cart