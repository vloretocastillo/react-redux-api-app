import React from 'react';
import './City.css';
import { connect } from 'react-redux'
import { retrieveCity } from '../actions/cityActions'

class City extends React.Component {
   
    state = {
        
    }
  
    

    componentDidMount() {
        this.props.retrieveCity()
    }

    render() {
    

       


        return (
            <div className="main-container">
                {this.props.city}
                {/* {process.env.APP_KEY} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.city
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveCity: () => dispatch(retrieveCity())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(City);