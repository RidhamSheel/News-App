const API_KEY = process.env.REACT_APP_API_KEY;
const countries = [
  { country: "USA", code: "us" },
  { country: "India", code: "in" },
  { country: "Japan", code: "jp" },
];

const getCountryCode = (country) => {
  let code;
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].country === country) {
      code = countries[i].code;
      return code;
    }
  }
};

const getHeadlines = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&page=1&pageSize=6`;

  return await (await fetch(url)).json();
};

const getCountryHeadlines = async (country, category) => {
  let code = getCountryCode(country);

  const url = `https://newsapi.org/v2/top-headlines?country=${code}&category=${category}&apiKey=${API_KEY}&page=1&pageSize=6`;

  return await (await fetch(url)).json();
};

const getPage = async (country, page, category) => {
  let code = getCountryCode(country);

  const url = `https://newsapi.org/v2/top-headlines?country=${code}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=6`;

  return await (await fetch(url)).json();
};

const searchByKeyword = async (searchTerm) => {
  const url = `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=${API_KEY}&pageSize=6`;
  console.log(searchTerm);
  return await (await fetch(url)).json();
};

module.exports = {
  getPage: getPage,
  getHeadlines: getHeadlines,
  getCountryHeadlines: getCountryHeadlines,
  searchByKeyword: searchByKeyword,
};
