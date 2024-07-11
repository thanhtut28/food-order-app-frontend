import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddCartItemInput = {
  cartId?: InputMaybe<Scalars['Int']>;
  menuItemId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type AuthenticationResponse = {
  __typename?: 'AuthenticationResponse';
  error?: Maybe<ErrorResponse>;
  user?: Maybe<User>;
};

export type Cart = {
  __typename?: 'Cart';
  cartItems: Array<CartItem>;
  cartItemsCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  total: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type CartActionsInput = {
  cartId: Scalars['Int'];
  menuItemId: Scalars['Int'];
  qty: Scalars['Int'];
};

export type CartItem = {
  __typename?: 'CartItem';
  cart: Cart;
  cartId: Scalars['Int'];
  menuItem: MenuItem;
  menuItemId: Scalars['Int'];
  quantity: Scalars['Int'];
  total: Scalars['Float'];
};

export type CartItemsInput = {
  menuItemId: Scalars['Int'];
  quantity: Scalars['Int'];
  total: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  menuItems: Array<MenuItem>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  error?: Maybe<ErrorResponse>;
  success: Scalars['Boolean'];
};

export type CreateMenuItemInput = {
  categoryId: Scalars['Int'];
  name: Scalars['String'];
  photo: Scalars['String'];
  price: Scalars['Float'];
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FeaturedItemsResponse = {
  __typename?: 'FeaturedItemsResponse';
  label: Scalars['String'];
  menuItem: MenuItem;
};

export type GetCartItemsInput = {
  cartId: Scalars['Int'];
  cursor?: InputMaybe<Scalars['Int']>;
};

export type GetMenuItemsInput = {
  categoryId?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Int']>;
};

export type GetOrderItemsInput = {
  cursor?: InputMaybe<Scalars['Int']>;
  orderId: Scalars['Int'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  ingredientItems: Array<IngredientItem>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IngredientItem = {
  __typename?: 'IngredientItem';
  id: Scalars['Int'];
  ingredient: Ingredient;
  ingredientId: Scalars['Int'];
  menuItem: MenuItem;
  menuItemId: Scalars['Int'];
  order: Scalars['Int'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  categortId: Scalars['Int'];
  category: Category;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  ingredientItems: Array<IngredientItem>;
  name: Scalars['String'];
  photo: Scalars['String'];
  price: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart?: Maybe<CartItem>;
  changePassword: ChangePasswordResponse;
  createCategory: Category;
  createIngredient: Ingredient;
  createMenuItem: MenuItem;
  createNewCart: Scalars['Boolean'];
  forgotPassword: ChangePasswordResponse;
  logout: Scalars['Boolean'];
  placeOrder?: Maybe<Order>;
  removeCartItem: Scalars['Boolean'];
  signIn?: Maybe<AuthenticationResponse>;
  signUp: AuthenticationResponse;
  updateAddress: Scalars['Boolean'];
  updateCartItem?: Maybe<CartItem>;
  updateEmail: Scalars['Boolean'];
  updateMenuItem: MenuItem;
  updateUsername: Scalars['Boolean'];
};


export type MutationAddToCartArgs = {
  input: AddCartItemInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateIngredientArgs = {
  name: Scalars['String'];
};


export type MutationCreateMenuItemArgs = {
  input: CreateMenuItemInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationPlaceOrderArgs = {
  cartId: Scalars['Int'];
  cartItems: Array<CartItemsInput>;
  total: Scalars['Float'];
};


export type MutationRemoveCartItemArgs = {
  input: RemoveCartItemInput;
};


export type MutationSignInArgs = {
  input: SignInUserInput;
};


export type MutationSignUpArgs = {
  input: SignUpUserInput;
};


export type MutationUpdateAddressArgs = {
  address: Scalars['String'];
};


export type MutationUpdateCartItemArgs = {
  input: UpdateCartItemInput;
};


export type MutationUpdateEmailArgs = {
  email: Scalars['String'];
};


export type MutationUpdateMenuItemArgs = {
  input: UpdateMenuItemInput;
};


export type MutationUpdateUsernameArgs = {
  username: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  orderItems: Array<OrderItem>;
  total: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  menuItem: MenuItem;
  menuItemId: Scalars['Int'];
  order: Order;
  orderId: Scalars['Int'];
  quantity: Scalars['Int'];
  total: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getAllCategories: Array<Category>;
  getAllIngredients: Array<Ingredient>;
  getAllMenuItems: Array<MenuItem>;
  getCart?: Maybe<Cart>;
  getCartItems: Array<CartItem>;
  getFeaturedItems: Array<MenuItem>;
  getMenuItemBySlug?: Maybe<MenuItem>;
  getMenuItemsByCategory: Array<MenuItem>;
  getOrders?: Maybe<Array<Order>>;
  me?: Maybe<User>;
  users: Array<User>;
};


export type QueryGetCartItemsArgs = {
  input: GetCartItemsInput;
};


export type QueryGetMenuItemBySlugArgs = {
  slug: Scalars['Int'];
};


export type QueryGetMenuItemsByCategoryArgs = {
  input: GetMenuItemsInput;
};

export type RemoveCartItemInput = {
  cartId: Scalars['Int'];
  menuItemId: Scalars['Int'];
};

export type SignInUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateCartItemInput = {
  cartId: Scalars['Int'];
  menuItemId: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type UpdateMenuItemInput = {
  categoryId?: InputMaybe<Scalars['Int']>;
  itemId: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  cart: Cart;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type CartItemDetailsFragment = { __typename?: 'CartItem', cartId: number, menuItemId: number, quantity: number, total: number, menuItem: { __typename?: 'MenuItem', name: string, photo: string, price: number } };

export type OrderDetailsFragment = { __typename?: 'Order', id: number, total: number, userId: number, createdAt: any };

export type AddToCartMutationVariables = Exact<{
  input: AddCartItemInput;
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addToCart?: { __typename?: 'CartItem', cartId: number, menuItemId: number, quantity: number, total: number, menuItem: { __typename?: 'MenuItem', name: string, photo: string, price: number } } | null };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordResponse', success: boolean, error?: { __typename?: 'ErrorResponse', message: string, field: string } | null } };

export type CreateNewCartMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateNewCartMutation = { __typename?: 'Mutation', createNewCart: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ChangePasswordResponse', success: boolean, error?: { __typename?: 'ErrorResponse', message: string, field: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type PlaceOrderMutationVariables = Exact<{
  cartItems: Array<CartItemsInput> | CartItemsInput;
  total: Scalars['Float'];
  cartId: Scalars['Int'];
}>;


export type PlaceOrderMutation = { __typename?: 'Mutation', placeOrder?: { __typename?: 'Order', id: number, total: number, userId: number, createdAt: any } | null };

export type RemoveCartItemMutationVariables = Exact<{
  input: RemoveCartItemInput;
}>;


export type RemoveCartItemMutation = { __typename?: 'Mutation', removeCartItem: boolean };

export type SignUpMutationVariables = Exact<{
  input: SignUpUserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AuthenticationResponse', error?: { __typename?: 'ErrorResponse', message: string, field: string } | null, user?: { __typename?: 'User', id: number, email: string, username: string } | null } };

export type SignInMutationVariables = Exact<{
  input: SignInUserInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'AuthenticationResponse', error?: { __typename?: 'ErrorResponse', message: string, field: string } | null, user?: { __typename?: 'User', id: number, email: string, username: string } | null } | null };

export type UpdateAddressMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type UpdateAddressMutation = { __typename?: 'Mutation', updateAddress: boolean };

export type UpdateCartItemMutationVariables = Exact<{
  input: UpdateCartItemInput;
}>;


export type UpdateCartItemMutation = { __typename?: 'Mutation', updateCartItem?: { __typename?: 'CartItem', cartId: number, menuItemId: number, quantity: number, total: number, menuItem: { __typename?: 'MenuItem', name: string, photo: string, price: number } } | null };

export type UpdateEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: boolean };

export type UpdateUsernameMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UpdateUsernameMutation = { __typename?: 'Mutation', updateUsername: boolean };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'Category', id: number, name: string, menuItems: Array<{ __typename?: 'MenuItem', photo: string }> }> };

export type GetAllMenuItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMenuItemsQuery = { __typename?: 'Query', getAllMenuItems: Array<{ __typename?: 'MenuItem', id: number }> };

export type GetCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartQuery = { __typename?: 'Query', getCart?: { __typename?: 'Cart', id: number, cartItemsCount: number, total: number } | null };

export type GetCartItemsQueryVariables = Exact<{
  input: GetCartItemsInput;
}>;


export type GetCartItemsQuery = { __typename?: 'Query', getCartItems: Array<{ __typename?: 'CartItem', cartId: number, menuItemId: number, quantity: number, total: number, menuItem: { __typename?: 'MenuItem', name: string, photo: string, price: number } }> };

export type GetMenuItemsByCategoryQueryVariables = Exact<{
  input: GetMenuItemsInput;
}>;


export type GetMenuItemsByCategoryQuery = { __typename?: 'Query', getMenuItemsByCategory: Array<{ __typename?: 'MenuItem', id: number, name: string, photo: string, price: number, category: { __typename?: 'Category', name: string } }> };

export type GetMenuItemBySlugQueryVariables = Exact<{
  slug: Scalars['Int'];
}>;


export type GetMenuItemBySlugQuery = { __typename?: 'Query', getMenuItemBySlug?: { __typename?: 'MenuItem', id: number, name: string, photo: string, price: number, category: { __typename?: 'Category', name: string }, ingredientItems: Array<{ __typename?: 'IngredientItem', id: number, order: number, ingredient: { __typename?: 'Ingredient', name: string } }> } | null };

export type GetUserWithCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserWithCartQuery = { __typename?: 'Query', getCart?: { __typename?: 'Cart', id: number, cartItemsCount: number } | null, me?: { __typename?: 'User', id: number, username: string, email: string, address?: string | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, email: string, address?: string | null } | null };

export const CartItemDetailsFragmentDoc = gql`
    fragment CartItemDetails on CartItem {
  cartId
  menuItemId
  quantity
  total
  menuItem {
    name
    photo
    price
  }
}
    `;
export const OrderDetailsFragmentDoc = gql`
    fragment OrderDetails on Order {
  id
  total
  userId
  createdAt
}
    `;
export const AddToCartDocument = gql`
    mutation AddToCart($input: AddCartItemInput!) {
  addToCart(input: $input) {
    ...CartItemDetails
  }
}
    ${CartItemDetailsFragmentDoc}`;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    error {
      message
      field
    }
    success
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateNewCartDocument = gql`
    mutation CreateNewCart {
  createNewCart
}
    `;
export type CreateNewCartMutationFn = Apollo.MutationFunction<CreateNewCartMutation, CreateNewCartMutationVariables>;

/**
 * __useCreateNewCartMutation__
 *
 * To run a mutation, you first call `useCreateNewCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewCartMutation, { data, loading, error }] = useCreateNewCartMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateNewCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewCartMutation, CreateNewCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewCartMutation, CreateNewCartMutationVariables>(CreateNewCartDocument, options);
      }
export type CreateNewCartMutationHookResult = ReturnType<typeof useCreateNewCartMutation>;
export type CreateNewCartMutationResult = Apollo.MutationResult<CreateNewCartMutation>;
export type CreateNewCartMutationOptions = Apollo.BaseMutationOptions<CreateNewCartMutation, CreateNewCartMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    error {
      message
      field
    }
    success
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const PlaceOrderDocument = gql`
    mutation PlaceOrder($cartItems: [CartItemsInput!]!, $total: Float!, $cartId: Int!) {
  placeOrder(cartItems: $cartItems, total: $total, cartId: $cartId) {
    ...OrderDetails
  }
}
    ${OrderDetailsFragmentDoc}`;
export type PlaceOrderMutationFn = Apollo.MutationFunction<PlaceOrderMutation, PlaceOrderMutationVariables>;

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      cartItems: // value for 'cartItems'
 *      total: // value for 'total'
 *      cartId: // value for 'cartId'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, options);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationResult = Apollo.MutationResult<PlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const RemoveCartItemDocument = gql`
    mutation RemoveCartItem($input: RemoveCartItemInput!) {
  removeCartItem(input: $input)
}
    `;
export type RemoveCartItemMutationFn = Apollo.MutationFunction<RemoveCartItemMutation, RemoveCartItemMutationVariables>;

/**
 * __useRemoveCartItemMutation__
 *
 * To run a mutation, you first call `useRemoveCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCartItemMutation, { data, loading, error }] = useRemoveCartItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveCartItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCartItemMutation, RemoveCartItemMutationVariables>(RemoveCartItemDocument, options);
      }
export type RemoveCartItemMutationHookResult = ReturnType<typeof useRemoveCartItemMutation>;
export type RemoveCartItemMutationResult = Apollo.MutationResult<RemoveCartItemMutation>;
export type RemoveCartItemMutationOptions = Apollo.BaseMutationOptions<RemoveCartItemMutation, RemoveCartItemMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($input: SignUpUserInput!) {
  signUp(input: $input) {
    error {
      message
      field
    }
    user {
      id
      email
      username
    }
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($input: SignInUserInput!) {
  signIn(input: $input) {
    error {
      message
      field
    }
    user {
      id
      email
      username
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const UpdateAddressDocument = gql`
    mutation UpdateAddress($address: String!) {
  updateAddress(address: $address)
}
    `;
export type UpdateAddressMutationFn = Apollo.MutationFunction<UpdateAddressMutation, UpdateAddressMutationVariables>;

/**
 * __useUpdateAddressMutation__
 *
 * To run a mutation, you first call `useUpdateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAddressMutation, { data, loading, error }] = useUpdateAddressMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useUpdateAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAddressMutation, UpdateAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAddressMutation, UpdateAddressMutationVariables>(UpdateAddressDocument, options);
      }
export type UpdateAddressMutationHookResult = ReturnType<typeof useUpdateAddressMutation>;
export type UpdateAddressMutationResult = Apollo.MutationResult<UpdateAddressMutation>;
export type UpdateAddressMutationOptions = Apollo.BaseMutationOptions<UpdateAddressMutation, UpdateAddressMutationVariables>;
export const UpdateCartItemDocument = gql`
    mutation UpdateCartItem($input: UpdateCartItemInput!) {
  updateCartItem(input: $input) {
    ...CartItemDetails
  }
}
    ${CartItemDetailsFragmentDoc}`;
export type UpdateCartItemMutationFn = Apollo.MutationFunction<UpdateCartItemMutation, UpdateCartItemMutationVariables>;

/**
 * __useUpdateCartItemMutation__
 *
 * To run a mutation, you first call `useUpdateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartItemMutation, { data, loading, error }] = useUpdateCartItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCartItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartItemMutation, UpdateCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCartItemMutation, UpdateCartItemMutationVariables>(UpdateCartItemDocument, options);
      }
export type UpdateCartItemMutationHookResult = ReturnType<typeof useUpdateCartItemMutation>;
export type UpdateCartItemMutationResult = Apollo.MutationResult<UpdateCartItemMutation>;
export type UpdateCartItemMutationOptions = Apollo.BaseMutationOptions<UpdateCartItemMutation, UpdateCartItemMutationVariables>;
export const UpdateEmailDocument = gql`
    mutation UpdateEmail($email: String!) {
  updateEmail(email: $email)
}
    `;
export type UpdateEmailMutationFn = Apollo.MutationFunction<UpdateEmailMutation, UpdateEmailMutationVariables>;

/**
 * __useUpdateEmailMutation__
 *
 * To run a mutation, you first call `useUpdateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailMutation, { data, loading, error }] = useUpdateEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateEmailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmailMutation, UpdateEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmailMutation, UpdateEmailMutationVariables>(UpdateEmailDocument, options);
      }
export type UpdateEmailMutationHookResult = ReturnType<typeof useUpdateEmailMutation>;
export type UpdateEmailMutationResult = Apollo.MutationResult<UpdateEmailMutation>;
export type UpdateEmailMutationOptions = Apollo.BaseMutationOptions<UpdateEmailMutation, UpdateEmailMutationVariables>;
export const UpdateUsernameDocument = gql`
    mutation UpdateUsername($username: String!) {
  updateUsername(username: $username)
}
    `;
export type UpdateUsernameMutationFn = Apollo.MutationFunction<UpdateUsernameMutation, UpdateUsernameMutationVariables>;

/**
 * __useUpdateUsernameMutation__
 *
 * To run a mutation, you first call `useUpdateUsernameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsernameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsernameMutation, { data, loading, error }] = useUpdateUsernameMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUpdateUsernameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsernameMutation, UpdateUsernameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsernameMutation, UpdateUsernameMutationVariables>(UpdateUsernameDocument, options);
      }
export type UpdateUsernameMutationHookResult = ReturnType<typeof useUpdateUsernameMutation>;
export type UpdateUsernameMutationResult = Apollo.MutationResult<UpdateUsernameMutation>;
export type UpdateUsernameMutationOptions = Apollo.BaseMutationOptions<UpdateUsernameMutation, UpdateUsernameMutationVariables>;
export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  getAllCategories {
    id
    name
    menuItems {
      photo
    }
  }
}
    `;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetAllMenuItemsDocument = gql`
    query GetAllMenuItems {
  getAllMenuItems {
    id
  }
}
    `;

/**
 * __useGetAllMenuItemsQuery__
 *
 * To run a query within a React component, call `useGetAllMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMenuItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMenuItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMenuItemsQuery, GetAllMenuItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMenuItemsQuery, GetAllMenuItemsQueryVariables>(GetAllMenuItemsDocument, options);
      }
export function useGetAllMenuItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMenuItemsQuery, GetAllMenuItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMenuItemsQuery, GetAllMenuItemsQueryVariables>(GetAllMenuItemsDocument, options);
        }
export type GetAllMenuItemsQueryHookResult = ReturnType<typeof useGetAllMenuItemsQuery>;
export type GetAllMenuItemsLazyQueryHookResult = ReturnType<typeof useGetAllMenuItemsLazyQuery>;
export type GetAllMenuItemsQueryResult = Apollo.QueryResult<GetAllMenuItemsQuery, GetAllMenuItemsQueryVariables>;
export const GetCartDocument = gql`
    query GetCart {
  getCart {
    id
    cartItemsCount
    total
  }
}
    `;

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartQuery(baseOptions?: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
      }
export function useGetCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
        }
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export type GetCartQueryResult = Apollo.QueryResult<GetCartQuery, GetCartQueryVariables>;
export const GetCartItemsDocument = gql`
    query GetCartItems($input: GetCartItemsInput!) {
  getCartItems(input: $input) {
    ...CartItemDetails
  }
}
    ${CartItemDetailsFragmentDoc}`;

/**
 * __useGetCartItemsQuery__
 *
 * To run a query within a React component, call `useGetCartItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartItemsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCartItemsQuery(baseOptions: Apollo.QueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, options);
      }
export function useGetCartItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, options);
        }
export type GetCartItemsQueryHookResult = ReturnType<typeof useGetCartItemsQuery>;
export type GetCartItemsLazyQueryHookResult = ReturnType<typeof useGetCartItemsLazyQuery>;
export type GetCartItemsQueryResult = Apollo.QueryResult<GetCartItemsQuery, GetCartItemsQueryVariables>;
export const GetMenuItemsByCategoryDocument = gql`
    query GetMenuItemsByCategory($input: GetMenuItemsInput!) {
  getMenuItemsByCategory(input: $input) {
    id
    name
    photo
    price
    category {
      name
    }
  }
}
    `;

/**
 * __useGetMenuItemsByCategoryQuery__
 *
 * To run a query within a React component, call `useGetMenuItemsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuItemsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuItemsByCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMenuItemsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetMenuItemsByCategoryQuery, GetMenuItemsByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMenuItemsByCategoryQuery, GetMenuItemsByCategoryQueryVariables>(GetMenuItemsByCategoryDocument, options);
      }
export function useGetMenuItemsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuItemsByCategoryQuery, GetMenuItemsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMenuItemsByCategoryQuery, GetMenuItemsByCategoryQueryVariables>(GetMenuItemsByCategoryDocument, options);
        }
export type GetMenuItemsByCategoryQueryHookResult = ReturnType<typeof useGetMenuItemsByCategoryQuery>;
export type GetMenuItemsByCategoryLazyQueryHookResult = ReturnType<typeof useGetMenuItemsByCategoryLazyQuery>;
export type GetMenuItemsByCategoryQueryResult = Apollo.QueryResult<GetMenuItemsByCategoryQuery, GetMenuItemsByCategoryQueryVariables>;
export const GetMenuItemBySlugDocument = gql`
    query GetMenuItemBySlug($slug: Int!) {
  getMenuItemBySlug(slug: $slug) {
    id
    name
    photo
    price
    category {
      name
    }
    ingredientItems {
      id
      order
      ingredient {
        name
      }
    }
  }
}
    `;

/**
 * __useGetMenuItemBySlugQuery__
 *
 * To run a query within a React component, call `useGetMenuItemBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuItemBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuItemBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetMenuItemBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetMenuItemBySlugQuery, GetMenuItemBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMenuItemBySlugQuery, GetMenuItemBySlugQueryVariables>(GetMenuItemBySlugDocument, options);
      }
export function useGetMenuItemBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuItemBySlugQuery, GetMenuItemBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMenuItemBySlugQuery, GetMenuItemBySlugQueryVariables>(GetMenuItemBySlugDocument, options);
        }
export type GetMenuItemBySlugQueryHookResult = ReturnType<typeof useGetMenuItemBySlugQuery>;
export type GetMenuItemBySlugLazyQueryHookResult = ReturnType<typeof useGetMenuItemBySlugLazyQuery>;
export type GetMenuItemBySlugQueryResult = Apollo.QueryResult<GetMenuItemBySlugQuery, GetMenuItemBySlugQueryVariables>;
export const GetUserWithCartDocument = gql`
    query GetUserWithCart {
  getCart {
    id
    cartItemsCount
  }
  me {
    id
    username
    email
    address
  }
}
    `;

/**
 * __useGetUserWithCartQuery__
 *
 * To run a query within a React component, call `useGetUserWithCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWithCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWithCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserWithCartQuery(baseOptions?: Apollo.QueryHookOptions<GetUserWithCartQuery, GetUserWithCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWithCartQuery, GetUserWithCartQueryVariables>(GetUserWithCartDocument, options);
      }
export function useGetUserWithCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWithCartQuery, GetUserWithCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWithCartQuery, GetUserWithCartQueryVariables>(GetUserWithCartDocument, options);
        }
export type GetUserWithCartQueryHookResult = ReturnType<typeof useGetUserWithCartQuery>;
export type GetUserWithCartLazyQueryHookResult = ReturnType<typeof useGetUserWithCartLazyQuery>;
export type GetUserWithCartQueryResult = Apollo.QueryResult<GetUserWithCartQuery, GetUserWithCartQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    address
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;