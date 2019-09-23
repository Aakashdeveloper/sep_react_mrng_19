import React from 'react';

const NewsList = (props) => {
    console.log('in the news>>>',props)

    const output = props.newsdata.map((data) => {
        return(
            <div>
                <h2>{data.title}</h2>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
       <div>
           {output}
       </div>
    )
}

export default NewsList