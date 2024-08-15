import checkIcon from "../assets/icons/check.png";
import { putList } from "../pages/list";
import "../pages/mainStyle.css";

export const createElement = (data) => {
  const newList = document.createElement("li");
  newList.innerHTML = `
        <label for="todo-${data.id}">
          <input type="checkbox" id="todo-${data.id}" />
          
          <div class="checkbox button-shadow ${
            data.completed ? "checkbox-checked" : "checkbox-non-checked"
          }" >
            <div class="checked-wrapper inner-shadow">
              <img src=${checkIcon} />
            </div>
          </div>
          <p>${data.title}</p>
        </label>
        
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </button>
    `;

  const checkbox = newList.querySelector(`#todo-${data.id}`);
  putList(checkbox);
  // checkbox.addEventListener("click", () =>
  //   putList(Number(checkbox.id.split("-")[1]))
  // );

  return newList;
};
