import Button from "@/modules/common/components/button";
import { useRouter } from "next/router";

const CTA: React.FC = () => {
   const { push } = useRouter();

   return (
      <div className="py-10 justify-center items-center max-w-screen-lg mx-auto px-6">
         <h4 className="text-center text-3xl font-extrabold capitalize sm:text-4xl lg:text-5xl">
            The fastest food delivery service{" "}
            <span className="block text-primary-600">in downtown.</span>
         </h4>
         <div className="py-6">
            <h6 className="text-center text-sm text-gray-600 sm:text-md lg:text-lg">
               A food delivery service which you can get your orders in less than 30 minutes.
               Peoples who love to eat are always the best people.
            </h6>
         </div>
         <div className="py-6">
            <Button
               className="w-48 py-5 mx-auto rounded-md capitalize text-lg"
               onClick={() => push("/menu")}
            >
               Explore now
            </Button>
         </div>
      </div>
   );
};

export default CTA;
