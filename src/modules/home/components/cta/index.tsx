import Button from "@/modules/common/components/button";
import { useRouter } from "next/navigation";

const CTA: React.FC = () => {
   const { push } = useRouter();

   return (
      <div className="mx-auto max-w-screen-lg py-10 px-6">
         <h4 className="text-center text-3xl font-extrabold capitalize sm:text-4xl lg:text-5xl">
            The fastest food delivery service{" "}
            <span className="block text-primary-600">in downtown.</span>
         </h4>
         <div className="py-6">
            <h6 className="sm:text-md text-center text-sm text-gray-600 lg:text-lg">
               A food delivery service which you can get your orders in less than 30 minutes.
               Peoples who love to eat are always the best people.
            </h6>
         </div>
         <div className="py-6">
            <Button
               className="mx-auto w-48 rounded-md py-5 text-lg capitalize"
               onClick={() => push("/menu")}
            >
               Explore now
            </Button>
         </div>
      </div>
   );
};

export default CTA;
