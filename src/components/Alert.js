import React from 'react'

const Alert = (props) => {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && 
        <>
         <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert" id="liveAlert">
           {capitalize(props.alert.type)} :<strong>{props.alert.message}</strong>
</div>
</>
    )
}

export default Alert
