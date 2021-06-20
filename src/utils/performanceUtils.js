export const measureExecutionTimeForBenchmark = (benchmark) =>{
    let start = performance.now();
        benchmark();
    let end = performance.now();
    return end - start;
}


export async function measureExecutionTimeForBenchmarkAsync(benchmark){
    let start = performance.now();
    await benchmark();
    let end = performance.now();
    return end - start;
}