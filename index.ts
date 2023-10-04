const add = (a: number, b: number): number => {
    return a + b;
};

const joinStrings = (a: string, b: string): string => {
    return a + b;
};

function joiningStrings(a: string, b: string): string {
    return (a + b).charAt(0);
};

console.log(joinStrings('at', 're'));
console.log(joiningStrings('gdrat', 're'));