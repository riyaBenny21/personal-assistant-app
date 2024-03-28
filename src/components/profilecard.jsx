import React from "react";

function Profilecard({title, handle, description, imgSrc}){
    return(
        <>
        <div style={{ display: 'flex', flexDirection: 'column', height: '400px', width:'200px' }}>
            <div style={{ flex: 0.5, backgroundColor: 'lightblue' }}>
                {/* Content of the upper part */}
                <img src={imgSrc} height={100} width={100}/>
            </div>
            <div style={{ flex: 1, backgroundColor: 'lightgreen', textAlign:'center' }}>
                {/* Content of the lower part */}
                {title}<br/><br/>
                {handle}<br/><br/>
                {description}
            </div>
        </div>
        </>
    );
}

export default Profilecard;