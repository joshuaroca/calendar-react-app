import React from 'react'

export const Practice = () => {

    const prueba = new Promise((resolve, reject) => {
        console.log('promesa pendiente')

        let random;

        setTimeout(() => {
            random = Math.floor(Math.random() * 10)
            if (random > 5) {
                resolve('algo')
            } else {
                reject(new Error('esto no sirve'))
            }
        }, 2000);


    })

    prueba
        .then((respuesta) => {
            console.log(respuesta)
            console.log(`response: `, respuesta)
        })
        .catch((err) => {
            console.log(err)
        })

    return (
        <div>
            <h1>hello tony</h1>
        </div>
    )
}
