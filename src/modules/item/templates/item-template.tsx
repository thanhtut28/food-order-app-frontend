import { GetMenuItemBySlugQuery } from "@/lib/generated/graphql";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Burger from "../components/burger";
import { Environment } from "@react-three/drei";
import Loader from "../components/model-loader";
import Image from "next/image";

interface Props {
   item: GetMenuItemBySlugQuery["getMenuItemBySlug"];
}

const ItemTemplate: React.FC<Props> = ({ item }) => {
   if (!item) {
      return <h4 className="text-sm text-gray-600">No Item found.</h4>;
   }

   return (
      <div className="h-[calc(100vh-10rem)] flex flex-col mx-auto px-6">
         <div className="flex-1 flex flex-col sm:flex-row">
            <div className="flex-1">
               {item?.ingredientItems.length > 0 ? (
                  <Canvas className="relative" camera={{ position: [-2, 2.5, 5], fov: 27 }}>
                     <color attach="background" args={["#fde58a"]} />
                     <Environment preset="city" />
                     <Suspense fallback={<Loader />}>
                        <Burger ingredients={item?.ingredientItems} />
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

            <div className="flex-1"></div>
         </div>
      </div>
   );
};

export default ItemTemplate;
