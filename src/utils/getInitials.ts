import { UserStructure } from "../types/types";

const getInitials = (user: UserStructure): string => {
  const nameParts = user.name.split(" ");
  const firstNameInitial = nameParts[0][0].toUpperCase();

  if (user.name === "Not Found") {
    return "Not available";
  }

  if (nameParts.length > 1) {
    const lastNameInitial = nameParts[nameParts.length - 1][0].toUpperCase();
    return `${firstNameInitial}${lastNameInitial}`;
  }

  return firstNameInitial;
};

export default getInitials;
