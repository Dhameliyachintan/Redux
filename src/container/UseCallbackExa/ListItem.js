import React, { useEffect, useState } from 'react';

function LisItem({ getItem }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItem(5))
    }, [getItem])

    console.log(items);
    return (
        <div>
            {
                items.map((i) => {
                    return (
                        <p>{i}</p>
                    )
                })
            }
        </div >
    );
}

export default LisItem;