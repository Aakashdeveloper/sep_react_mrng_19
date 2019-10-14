import React from 'react';

const ListView = (props) => {
    console.log(props)
    const renderView = ({list}) => {
        if(list){
            console.log(list)
            return list.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }

    return(
            <div>

                {renderView(props)}
            </div>
    )
    
}


export default ListView;