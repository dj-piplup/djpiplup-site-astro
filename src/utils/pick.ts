export function pick<T extends Record<string, unknown>, P extends readonly string[]>(obj: T, props: P): Pick<T, P[number]> {
    const result: Record<string, unknown> = {};
    for(const prop of props) {
        result[prop] = obj[prop];
    }
    return result as ReturnType<typeof pick<T, P>>
}