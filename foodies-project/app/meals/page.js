import style from "./page.module.css";

export default function MealPage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={style.highlight}>by you</span>
        </h1>
      </header>
      <main className={style.main}></main>
    </>
  );
}
