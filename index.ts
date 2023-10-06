class ValueHolder<T>{
    value: T;

    wrapper = (par: T): T[] => {
        return [par];
    }
};

const valueHolder = new ValueHolder<number>();

const valueWrapper = <T>(par: T): T[] => {
    return [par];
}

let s = valueWrapper<number>(10);
console.log(s[0]);