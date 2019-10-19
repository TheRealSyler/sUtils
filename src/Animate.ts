export function Animate(from: number, to: number, time: number, callback: (currentValue: number) => void) {
  const start = Date.now();
  const change = from < to ? from - (from + to) : from - to;
  const anim = () => {
    if (Date.now() - start < time) {
      callback(from - change * ((Date.now() - start) / time));

      requestAnimationFrame(anim);
    } else {
      callback(to);
    }
  };
  anim();
}
