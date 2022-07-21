import React, { useMemo, useState } from 'react';

function UseMemoExample(props) {
    const [number, SetNumber] = useState(0)
    const [count, SetCount] = useState(0)

    const finalchange = (n) => {
        console.log("finalchange");
        if (n > 1) {
            return n * finalchange(n - 1)
        } else {
            return 1;
        }
    }
  

    const result = useMemo(() => finalchange(number), [number])
    
    return (
        <div>
            <input type="text" placeholder='Plesae enter number' onChange={(e) => SetNumber(e.target.value)} />
            <button onClick={() => SetCount(count + 1)}>Count</button>

            <p>Counter value : {count}</p>
            <p>Foctorl value : {result}</p>
        </div>
    );
}

export default UseMemoExample;