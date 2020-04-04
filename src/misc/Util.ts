const pickRandom = (items: any[]) =>
  items[Math.floor(Math.random() * items.length)];

export { pickRandom };
