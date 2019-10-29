import React, {useState} from 'react';


function HooksComp(){
    const [title] = useState('Hooks Component')
    const [subject] = useState('React')
    const [count, setCount] = useState(0)
    return(
        <div>
            <div className="jumbotron">
                <h1>{title}</h1>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                </p>
                <h2>{subject}</h2>
            </div>
            <div onClick={()=>{setCount(count+1)}}>Click</div>
            <h2>{count}</h2>
        </div>
    )
}

export default  HooksComp;