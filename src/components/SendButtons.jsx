import style from "./SendButtons.module.css";
export function SendButtons({ buttons }) {
  console.log("props", buttons);
  return (
    <div>
      <button className={`${style.colorbutton} ${style.btn}`}>
        {buttons[0]}
      </button>
      <button className={`${style.borderButton} ${style.btn}`}>
        {buttons[1]}
      </button>
    </div>
  );
}
