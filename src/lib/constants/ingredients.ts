export type TIngredient = {
   src: string;
   icon?: string;
   name: string;
};

export type IngredientNames =
   | "top"
   | "bread"
   | "lettuce"
   | "mushroom"
   | "tomato"
   | "cheese"
   | "chicken"
   | "sausage"
   | "salami"
   | "bacon"
   | "patty";

export type TIngredients = {
   [x: string]: Omit<TIngredient, "name">;
};

export const INGREDIENTS: TIngredients = {
   top_bun: {
      src: "/models/burger_top.glb",
   },
   bottom_bun: {
      src: "/models/burger_bottom.glb",
   },
   bread: {
      src: "/models/Bread_Slice_Bread_0.glb",
      icon: "🍞",
   },
   lettuce: {
      src: "/models/Lettuce_Slice_Lettuce_0.glb",
      icon: "🥬",
   },
   mushroom: {
      src: "/models/Mushroom_Slice_Mushroom_0.glb",
      icon: "🍄",
   },
   tomato: {
      src: "/models/Tomato_Slice_Tomato_0.glb",
      icon: "🍅",
   },
   cheese: {
      src: "/models/Cheese_Slice_Cheese_0.glb",
      icon: "🧀",
   },
   chicken: {
      src: "/models/Chicken_Slice_Chicken_0.glb",
      icon: "🍗",
   },
   sausage: {
      src: "/models/Sausage_Slice_Sausage_0.glb",
      icon: "🌭",
   },
   salami: {
      src: "/models/Salami_Slice_Salami_0.glb",
      icon: "🍖",
   },
   bacon: {
      src: "/models/bacon.glb",
      icon: "🥓",
   },
   patty: {
      src: "/models/Patty_Slice_Patty_0.glb",
      icon: "🍔",
   },
};
