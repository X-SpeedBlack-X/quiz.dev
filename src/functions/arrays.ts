export function shuffle(element: any[]): any[] {
  return element
    .map((data) => ({ data, random: Math.random() }))
    .sort((obj1, obj2) => obj1.random - obj2.random)
    .map((obj) => obj.data);
}
