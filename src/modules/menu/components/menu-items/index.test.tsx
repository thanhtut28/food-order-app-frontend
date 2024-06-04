import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import {
   GetAllCategoriesDocument,
   GetMenuItemsByCategoryDocument,
} from "../../../../lib/generated/graphql";
import MenuItems from "./index";
import { CartProvider } from "../../../../lib/context/cart-context";
import { AccountProvider } from "../../../../lib/context/account-context";

const intersectionObserverMock = () => ({
   observe: () => null,
   unobserve: () => null,
   disconnect: () => null,
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

const menuItemsData = {
   getMenuItemsByCategory: [
      {
         id: 1,
         name: "Beef Burger",
         photo: "http://link",
         price: 59,
      },
      {
         id: 2,
         name: "Cheese Burger",
         photo: "http://link",
         price: 49,
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

it("render menu items", async () => {
   render(
      <MockedProvider mocks={mocks} addTypename={false}>
         <AccountProvider>
            <CartProvider>
               <MenuItems categoryId={1} />
            </CartProvider>
         </AccountProvider>
      </MockedProvider>
   );
   const loadingContainer = await screen.findByTestId("loading-container");

   expect(loadingContainer).toBeInTheDocument();

   const menuItems = await screen.findAllByText(/Burger/i);

   expect(menuItems.length).toBe(2);
});

it("render Error if variable categoryId does not match with props", async () => {
   render(
      <MockedProvider mocks={mocks} addTypename={false}>
         <AccountProvider>
            <CartProvider>
               <MenuItems categoryId={2} />
            </CartProvider>
         </AccountProvider>
      </MockedProvider>
   );

   expect(await screen.findByText("Error")).toBeInTheDocument();
});

it("render no item found if result data array is empty", async () => {
   render(
      <MockedProvider mocks={emptyMocks} addTypename={false}>
         <MenuItems categoryId={1} />
      </MockedProvider>
   );
   const loadingContainer = await screen.findByTestId("loading-container");

   expect(loadingContainer).toBeInTheDocument();

   expect(await screen.findByText(/No items found/i)).toBeInTheDocument();
});
