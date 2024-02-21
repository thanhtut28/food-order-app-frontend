import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { CartProvider } from "../cart-context";
import {
   GetCartDocument,
   useCreateNewCartMutation,
   useGetCartQuery,
   useGetCartItemsLazyQuery,
} from "../../generated/graphql";
import { useAccount } from "../account-context";

// Mock functions with correct types
const mockUseCreateNewCartMutation = useCreateNewCartMutation as jest.Mock;
const mockUseGetCartQuery = useGetCartQuery as jest.Mock;
const mockUseGetCartItemsLazyQuery = useGetCartItemsLazyQuery as jest.Mock;
const mockUseAccount = useAccount as jest.Mock;

jest.mock("../../generated/graphql", () => ({
   useCreateNewCartMutation: jest.fn(),
   useGetCartQuery: jest.fn(),
   useGetCartItemsLazyQuery: jest.fn(),
}));

jest.mock("../account-context", () => ({
   useAccount: jest.fn(),
}));

const mockCartData = {
   getCart: { id: "cart-id" },
};

const mockCartItemsData = {
   getCartItems: [{ id: "item-1" }, { id: "item-2" }],
};

describe("CartProvider", () => {
   it("fetches cart data and cart items on mount if cart exists", async () => {
      mockUseCreateNewCartMutation.mockReturnValue([jest.fn()]);
      mockUseGetCartQuery.mockReturnValue({ data: { cartData: mockCartData }, loading: false });
      mockUseGetCartItemsLazyQuery.mockReturnValue([
         jest.fn(),
         { data: { cartItemsData: mockCartItemsData }, loading: false },
      ]);
      mockUseAccount.mockReturnValue({ me: { userId: "user-id" } });

      render(
         <MockedProvider mocks={[]} addTypename={false}>
            <CartProvider>
               <div>Child component</div>
            </CartProvider>
         </MockedProvider>
      );

      await waitFor(() => {
         expect(mockUseCreateNewCartMutation).toHaveBeenCalledTimes(0);
         expect(mockUseGetCartQuery).toHaveBeenCalledTimes(1);
         expect(mockUseGetCartItemsLazyQuery).toHaveBeenCalledTimes(1);
         expect(mockUseGetCartItemsLazyQuery.mock.calls[0][0]).toEqual({
            variables: { input: { cartId: "cart-id" } },
         });
      });

      screen.debug();
   });

   // it("creates a new cart if no cart exists on mount", async () => {
   //    mockUseCreateNewCartMutation.mockReturnValue([jest.fn()]);
   //    mockUseGetCartQuery.mockReturnValue({ data: { cartData: null }, loading: false });
   //    mockUseAccount.mockReturnValue({ me: { userId: "user-id" } });

   //    render(
   //       <MockedProvider mocks={[]} addTypename={false}>
   //          <CartProvider>
   //             <div>Child component</div>
   //          </CartProvider>
   //       </MockedProvider>
   //    );

   //    await waitFor(() => {
   //       expect(mockUseCreateNewCartMutation).toHaveBeenCalledTimes(1);
   //       expect(mockUseGetCartQuery).toHaveBeenCalledTimes(1);
   //       expect(mockUseGetCartItemsLazyQuery).toHaveBeenCalledTimes(0);
   //    });
   // });

   // Add more test cases as needed...
});
