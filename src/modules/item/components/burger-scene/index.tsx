import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../model-loader";
import Burger from "../burger";
import { TItem } from "../../templates/item-template";

interface Props {
   ingredients: NonNullable<TItem>["ingredientItems"];
}

const BurgerScene: React.FC<Props> = ({ ingredients }) => {
   return (
      <div className="h-[50vh] lg:h-auto lg:flex-1">
         {ingredients.length > 0 ? (
            <Canvas className="relative" camera={{ position: [-2, 2.5, 5], fov: 27 }}>
               {/* <color attach="background" args={["#fde58a"]} /> */}
               <Environment preset="city" />
               <Suspense fallback={<Loader />}>
                  <Burger ingredients={ingredients} />
               </Suspense>
            </Canvas>
         ) : (
            <div>
               {/* <div className="w-full transition-all group-hover:scale-110 pb-2">
                        <Image
                           width={3}
                           height={2}
                           layout="responsive"
                           alt={`Cover Image for ${item.name}`}
                           className="shadow-sm object-cover"
                           src={item.photo}
                           quality={25}
                        />
                     </div> */}
            </div>
         )}
      </div>
   );
};

export default BurgerScene;
