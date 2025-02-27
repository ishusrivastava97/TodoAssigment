const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { tickets: [], users: [] };
  }
};
