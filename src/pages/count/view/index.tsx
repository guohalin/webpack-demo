import React from 'react';
import { connect } from 'react-redux';
import { AppState } from "../../../store";
import { addCount } from "../action";

interface Iprops{
    count:number,
    addCount: typeof addCount,
    // addCount: ()=>AddCountAction
}

// export interface AddCountAction{
//     type: typeof ADD_COUNT;
// }

const CountIndex = (props:Iprops) => {
    const { count, addCount } = props;
    const handleClick = () => {
        console.log('props', props);
        addCount();
    }
    return(
        <div>
            <span>time:{ count }</span>
            <button onClick={ handleClick }>+</button>
        </div>
    )
}

const mapStateToProps= (state:AppState) =>({
    count:state.countReducer.count
})
export default connect(
    mapStateToProps,
    {
        addCount
    }
)(CountIndex);