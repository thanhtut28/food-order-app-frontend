import { INGREDIENTS } from "@/lib/constants/ingredients";
import { GetAllCategoriesQuery, GetMenuItemBySlugQuery } from "@/lib/generated/graphql";
import { ContactShadows, Gltf, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useState, useEffect, Suspense, useRef } from "react";
import { Mesh } from "three";
import Bacon from "../components/Bacon";

interface Props {
   item: GetMenuItemBySlugQuery["getMenuItemBySlug"];
}

const ItemTemplate: React.FC<Props> = ({ item }) => {
   const { query } = useRouter();

   return (
      <div className="max-w-screen-lg mx-auto px-6 flex">
         <div className="flex-1/2">
            <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
               <color attach="background" args={["#512DA8"]} />
               <group>
                  <group>
                     <Bacon />
                  </group>
                  <ContactShadows position-y={-0.5} opacity={0.6} />
               </group>
            </Canvas>
         </div>
         <div className="flex-1">
            <h1>Hello</h1>
         </div>
      </div>
   );
};

export default ItemTemplate;

const Cube = ({ position, size, color }: any) => {
   const ref = useRef<Mesh>(null!);

   useFrame((state, delta) => {
      ref.current.rotation.x += delta;
   });

   return (
      <mesh position={position} ref={ref}>
         <boxGeometry args={size} />
         <meshStandardMaterial color={color} />
      </mesh>
   );
};
