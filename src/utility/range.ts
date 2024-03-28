function range(start: number, count: number) { 
  return [...Array(count).keys()].map((e: number) => e + start); 
}

export default range;