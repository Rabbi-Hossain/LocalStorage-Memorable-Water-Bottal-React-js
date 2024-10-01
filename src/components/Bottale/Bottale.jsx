import './Bottale.css'
import PropTypes from 'prop-types'

const Bottale = ({bottal, cartHandler}) => {
    const {name, price, img} = bottal
    return (
        <div className='bottale'>
            <img src={img} alt="" />
            <h3>name:{name}</h3>
            <h2>price:{price}</h2>
            <button onClick={()=>cartHandler(bottal)}>Purches</button>
        </div>
    );
};
Bottale.PropTypes = {
    bottal:PropTypes.object.isRequired,
    cartHandler:PropTypes.func.isRequired
}

export default Bottale;