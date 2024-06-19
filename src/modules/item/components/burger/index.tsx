import { INGREDIENTS } from "@/lib/constants/ingredients";
import { GetMenuItemBySlugQuery } from "@/lib/generated/graphql";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import BurgerIngredient from "../burger-ingredient";

const INGREDIENT_SPACING = 0.22;
const INGREDIENT_SPACING_FINAL = 0.06;

Object.keys(INGREDIENTS).map(ing => {
   useGLTF.preload(INGREDIENTS[ing as keyof typeof INGREDIENTS].src);
});

interface Props extends Partial<GroupProps> {
   ingredients: NonNullable<GetMenuItemBySlugQuery["getMenuItemBySlug"]>["ingredientItems"];
}

type Layer = {
   id: number;
   src: string;
   name: string;
};

const Burger: React.FC<Props> = ({ ingredients }) => {
   const burgerRef = useRef<Group>(null!);
   const ingredientSpacing = INGREDIENT_SPACING;

   const burger: Layer[] = [
      { id: 999998, name: "bottom_bun", ...INGREDIENTS.bottom },
      ...ingredients.map(ing => ({
         id: ing.id,
         src: INGREDIENTS[ing.ingredient.name].src,
         name: ing.ingredient.name,
      })),
      { id: 999999, name: "top_bun", ...INGREDIENTS.top },
      // { id: 999999, src: "/models/burger_top.glb", name: "top" },
   ];

   //    useFrame(() => {
   //          sandwich.current.rotation.y = 0;
   //    });

   return (
      <group position-y={(-ingredients.length * ingredientSpacing) / 2} position-x={-0.5}>
         <group ref={burgerRef}>
            {burger.map((ingredient, index) => (
               <BurgerIngredient
                  key={ingredient.id}
                  ingredient={{ ...INGREDIENTS[ingredient.name], name: ingredient.name }}
                  position-y={index * ingredientSpacing}
               />
            ))}
         </group>
         <ContactShadows position-y={-0.5} position-x={0.5} opacity={0.6} />
      </group>
   );
};

export default Burger;
