import axios from "axios";

const basicUrl = "http://localhost:3000/todos";

const getAxiosList = async () => {
  console.log("run axios Mode");
  try {
    const { data } = await axios.get(basicUrl);
    return data;
  } catch (error) {
    throw new Error(`HTTP GET error!: ${error}`);
  }
};

const serchAxiosList = async (id) => {
  console.log("run axios Mode");
  try {
    const { data } = await axios.get(`${basicUrl}?id=${id}`);
    return data;
  } catch (error) {
    throw new Error(`HTTP GET error!: ${error}`);
  }
};

const postAxiosList = async (todoContents) => {
  console.log("run axios Mode");
  if (todoContents.trim() === "") {
    alert("내용을 입력해주세요.");
    return;
  }
  try {
    const { data } = await axios.post(basicUrl, {
      title: todoContents,
      completed: false,
    });
    return data;
  } catch (error) {
    throw new Error(`HTTP POST error!: ${error}`);
  }
};

const putAxiosList = async (id) => {
  console.log("run axios Mode");
  try {
    const originData = await serchAxiosList(id);

    const { data } = await axios.put(`${basicUrl}/${id}`, {
      ...originData,
      completed: !originData.completed,
    });
    return data;
  } catch (error) {
    throw new Error(`HTTP PUT error!: ${error}`);
  }
};

const deleteAxiosList = async (id) => {
  console.log("run axios Mode");
  try {
    await axios.delete(`${basicUrl}/${id}`);

    return await getAxiosList();
  } catch (error) {
    throw new Error(`HTTP DELETE error!: ${error}`);
  }
};

export {
  getAxiosList,
  serchAxiosList,
  postAxiosList,
  putAxiosList,
  deleteAxiosList,
};
