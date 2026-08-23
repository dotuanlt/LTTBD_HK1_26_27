class MathUtil {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number { 
        return a * b;
    }

    static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Number is not 0");
        }  
        return a / b;
    }
}

console.log(MathUtil.add(10, 8));
console.log(MathUtil.subtract(10, 8)); 
console.log(MathUtil.multiply(10, 8)); 
console.log(MathUtil.divide(10, 8)); 