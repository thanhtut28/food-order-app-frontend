import { TIngredient } from "@/lib/constants/ingredients";
import { capitializeText } from "@/lib/utils/capitalize-text";
import { Float, Gltf, Text3D } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../model-loader";

const INGREDIENT_SCALE = 3;
const INGREDIENT_SCALE_Y = 6;
const BREAD_SCALE_Y = 2.5;

interface Props extends Partial<GroupProps & { "position-y": number }> {
   ingredient?: TIngredient;
}

const BurgerIngredient: React.FC<Props> = ({ ingredient, ...props }) => {
   return (
      <group {...props}>
         {ingredient && (
            <Suspense fallback={<Loader />}>
               <group>
                  <mesh position-x={0.95} position-y={0.042}>
                     <planeGeometry args={[1.1, 0.195]} />
                     <meshStandardMaterial color="#d87607" opacity={0.75} transparent />
                  </mesh>
                  <Text3D
                     font={"/fonts/Poppins_Bold.json"}
                     scale={0.085}
                     // bevelSegments={3}
                     // bevelSize={0.005}
                     // bevelEnabled
                     // bevelThickness={0.05}
                     position-x={0.52}
                  >
                     {capitializeText(ingredient.name)}
                     <meshBasicMaterial color="#fbd24e" />
                  </Text3D>
               </group>
               <Float floatingRange={[-0.02, 0.02]} rotationIntensity={1}>
                  <Gltf
                     src={ingredient.src}
                     scale={INGREDIENT_SCALE}
                     scale-y={ingredient.icon ? INGREDIENT_SCALE_Y : BREAD_SCALE_Y}
                  />
               </Float>
            </Suspense>
         )}
      </group>
   );
};

export default BurgerIngredient;
