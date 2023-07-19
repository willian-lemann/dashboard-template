export function getInitials(name: string) {
  return (
    name
      ?.match(/(\b\S)?/g)!
      .join("")
      .match(/(^\S|\S$)?/g)!
      .join("")
      .toUpperCase() || ""
  );
}
