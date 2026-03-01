export function remap<
  C extends { key?: (k: string) => string; value?: (v: T) => unknown },
  T = unknown,
>(
  obj: Record<string, T>,
  conf: C,
): Remapped<C, T> {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      conf.key?.(k) ?? k,
      conf.value?.(v) ?? v,
    ]),
  ) as ReturnType<typeof remap<C, T>>;
}

type Remapped<
  C extends { key?: (k: string) => string; value?: (v: T) => unknown },
  T = unknown,
> = Record<
  C["key"] extends Function ? ReturnType<NonNullable<C["key"]>> : string,
  C["value"] extends Function ? ReturnType<NonNullable<C["value"]>> : T
>
