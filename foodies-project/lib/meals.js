import sql from "better-sqlite3";

const db = sql("meals.db");

/**
 * We use the async becuase we are usin gthe the await method, we don't use it for the method below
 * because we are not using any dealay
 * @returns the data from the meal on from the databae
 */
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //throw new Error("Loading Meals Failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  /**
   * We could do "" + slug, none the less this open for SQL injections which we don't want that's why we use
   * .get(slug)
   */
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
