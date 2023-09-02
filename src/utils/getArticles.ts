export async function fetchArticles() {
  const headers = {
    "Content-Type": "application/json",
    "X-API-KEY": "b21611a3-d995-499c-80d5-4e0f72db5ae1",
  };

  const response = await fetch(
    "https://fullstack.exercise.applifting.cz/articles",
    { headers: headers },
  );

  const result = await response.json();
  return result;
}
