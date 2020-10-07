import React from 'react'
import propTypes from 'prop-types'

const List = ({users}) => {
    return (
        <div>
          {users.map((el, i)=><div key={i}>
                                <h2>{el.name}</h2>
                                <h3>{el.email}</h3>
                            </div>)}  
        </div>
    )
}

List.propTypes={
    users: propTypes.arrayOf(
        propTypes.exact({
            name:propTypes.string,
            email: propTypes.string,
            src : propTypes.string
        })
    )
}


export default List
