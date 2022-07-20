import React, { useEffect } from 'react';

function PromiseExample(props) {


    const One = () => {
        return "One"
    }

    const Two = () => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve("two")
            }, 2000)
        })
    }

    const Three = () => {
        return "Two"
    }

    const All = () => {
        let o = One()
        console.log(o);

        let t = Two()
        console.log(t);

        let th = Three()
        console.log(th);
    }




    useEffect(() => {
        All()
    }, [])


    const Display = (c) => {
        console.log(c);
    }

    const sum = (Display) => {
        let a = 10;
        let b = 50;

        let c = a + b;
        console.log(c);
        Display(c)
    }


    sum(Display)
    
    return (
        <div>

        </div>
    );
}

export default PromiseExample;