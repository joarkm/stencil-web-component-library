export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
  );
}

export function debounce(func: Function, timeout?: number) {
  let timer: number | undefined;
  return (...args: any[]) => {
      const next = () => func(...args);
      if (timer) {
          window.clearTimeout(timer);
      }
      timer = window.setTimeout(next, timeout > 0 ? timeout : 300);
  };
}