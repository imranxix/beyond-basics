// default range
let numbers = {
    *[Symbol.iterator]({
        start = 0,
        max = 100,
        step = 2
    } = {}){
        for(let num = start; num <= max; num += step){
            yield num
        }
    }
}

for(let num of numbers) console.log(num)

// custom range
let range = numbers[Symbol.iterator]({
    start: 5, max: 25, step: 2
})

for(let num of range) console.log(num)