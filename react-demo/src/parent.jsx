import { Child } from "react";

function parent (){
    return(
        <>
        <h1> This is the parent</h1>
        <Child
        name="joker"
        age= {10}
        />
        </>
        )
}

export default parent;