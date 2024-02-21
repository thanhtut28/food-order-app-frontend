import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import {
   GetAllCategoriesDocument,
   GetMenuItemsByCategoryDocument,
} from "../../../../lib/generated/graphql";
import MenuItems from "./index";
import { CartProvider } from "../../../../lib/context/cart-context";
import { AccountProvider } from "../../../../lib/context/account-context";

const menuItemsData = {
   getMenuItemsByCategory: [
      {
         id: 1,
         name: "Beef Burger",
         photo: "http://link",
         price: 59,
      },
   ],
};

const mocks: MockedResponse[] = [
   {
      request: {
         query: GetMenuItemsByCategoryDocument,
         variables: { input: { categoryId: 1 } },
      },
      result: {
         data: menuItemsData,
      },
   },
];

const emptyMocks: MockedResponse[] = [
   {
      request: {
         query: GetMenuItemsByCategoryDocument,
         variables: { input: { categoryId: 1 } },
      },
      result: {
         data: {
            getMenuItemsByCategory: [],
         },
      },
   },
];

it("render ", async () => {
   render(
      <MockedProvider mocks={mocks} addTypename={false}>
         <AccountProvider>
            <CartProvider>
               <MenuItems categoryId={1} />
            </CartProvider>
         </AccountProvider>
      </MockedProvider>
   );

   expect(await screen.findByText(/Beef Burger/i)).toBeInTheDocument();
});

it("render no item found", async () => {
   render(
      <MockedProvider mocks={emptyMocks} addTypename={false}>
         <MenuItems categoryId={1} />
      </MockedProvider>
   );

   screen.debug();
   expect(await screen.findByText(/No items found/i)).toBeInTheDocument();
});
