import React from 'react'

export default function Alert(props) {

    const cap=(word)=>{
        let str1 = word.slice(1);
        let str = word.charAt(0);
        str = str.toUpperCase() + str1;
        return str;
    }

  return (
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{cap(props.alert.type)}</strong>: {props.alert.msg}
</div>
  )
}
