import React, { useEffect } from 'react';

function PromiseExample(props) {


    const One = () => {
        return "One"
    }

    // const Two = () => {
    //         setTimeout(() => {
    //             return "Two"
    //         }, 2000)
    // }

    const Two = () => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve("Two")
            }, 2000)
        })
    }

    const Three = () => {
        return "Three"
    }

    const All = async () => {
        let o = One()
        console.log(o);

        let t = await Two()
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


