

export const timeoutTest = async () => {

    return new Promise(resolve => setTimeout(() => {
       
        resolve('SAY WHAT!')
        
    }, 3000))

    return result;
}

export const fetchTest = async () => {

    return fetch('https://baconipsum.com/api/?type=meat-and-filler').then(data => data.json())

}