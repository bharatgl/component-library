export function GetInitials(name: string) {
  if (!name) return undefined;

  const words = name.split(' ');
  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join('');
  }
  return name.slice(0, 2);
}
