import axios from 'axios';

export const getData = async (url, callback) => {
  try {
    let response = await axios(`${url}`);
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const fetchData = async (url, callback) => {
  try {
    let response = await fetch(`${url}`);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.error(error);
  }
};
