import React from 'react';

const Buttons = ({selectedItems,handleRemove,randomItems }) => {
    return (
        <div className='buttons'>
        <button className='randomItems' onClick={() => randomItems(selectedItems)}>Choose 1</button>
        <button className='handleRemove' onClick={()=>handleRemove(selectedItems)}>Remove</button>
    </div>
    );
};

export default Buttons;