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

export type AuthenticationResponse = {
  __typename?: 'AuthenticationResponse';
  error?: Maybe<ErrorResponse>;
  user?: Maybe<User>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  ingredients: Array<Ingredient>;
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

export type CreateIngredientInput = {
  categories: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateMenuItemInput = {
  categoryId?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  photo: Scalars['String'];
  price: Scalars['Float'];
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  categories: Array<Category>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  menuItems: Array<MenuItem>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  categortId?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  ingredients: Array<Ingredient>;
  ingredientsCount: Scalars['Int'];
  name: Scalars['String'];
  photo: Scalars['String'];
  price: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addIngredientToItem: MenuItem;
  changePassword: ChangePasswordResponse;
  createCategory: Category;
  createIngredient: Ingredient;
  createMenuItem: MenuItem;
  forgotPassword: ChangePasswordResponse;
  logout: Scalars['Boolean'];
  signIn?: Maybe<AuthenticationResponse>;
  signUp: AuthenticationResponse;
  updateEmail: Scalars['Boolean'];
  updateMenuItem: MenuItem;
  updateUsername: Scalars['Boolean'];
};


export type MutationAddIngredientToItemArgs = {
  ingredients: Array<Scalars['String']>;
  itemId: Scalars['Int'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateIngredientArgs = {
  input: CreateIngredientInput;
};


export type MutationCreateMenuItemArgs = {
  input: CreateMenuItemInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSignInArgs = {
  input: SignInUserInput;
};


export type MutationSignUpArgs = {
  input: SignUpUserInput;
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

export type Query = {
  __typename?: 'Query';
  getAllIngredients: Array<Ingredient>;
  getAllMenuItems: Array<MenuItem>;
  getBannerItems?: Maybe<Array<MenuItem>>;
  getMenuItemsByCategory: Array<MenuItem>;
  getMenuItemsByIngredient: Array<MenuItem>;
  me?: Maybe<User>;
  users: Array<User>;
};


export type QueryGetMenuItemsByCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type QueryGetMenuItemsByIngredientArgs = {
  ingredientId: Scalars['Int'];
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

export type UpdateMenuItemInput = {
  categoryId?: InputMaybe<Scalars['Int']>;
  itemId: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordResponse', success: boolean, error?: { __typename?: 'ErrorResponse', message: string, field: string } | null } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'ChangePasswordResponse', success: boolean, error?: { __typename?: 'ErrorResponse', message: string, field: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type SignUpMutationVariables = Exact<{
  input: SignUpUserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AuthenticationResponse', error?: { __typename?: 'ErrorResponse', message: string, field: string } | null, user?: { __typename?: 'User', id: number, email: string, username: string } | null } };

export type SignInMutationVariables = Exact<{
  input: SignInUserInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'AuthenticationResponse', error?: { __typename?: 'ErrorResponse', message: string, field: string } | null, user?: { __typename?: 'User', id: number, email: string, username: string } | null } | null };

export type UpdateEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail: boolean };

export type UpdateUsernameMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UpdateUsernameMutation = { __typename?: 'Mutation', updateUsername: boolean };

export type GetBannerItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBannerItemsQuery = { __typename?: 'Query', getBannerItems?: Array<{ __typename?: 'MenuItem', id: number, name: string, photo: string, price: number, category?: { __typename?: 'Category', name: string } | null }> | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, email: string } | null };


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
export const GetBannerItemsDocument = gql`
    query GetBannerItems {
  getBannerItems {
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
 * __useGetBannerItemsQuery__
 *
 * To run a query within a React component, call `useGetBannerItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBannerItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBannerItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBannerItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetBannerItemsQuery, GetBannerItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBannerItemsQuery, GetBannerItemsQueryVariables>(GetBannerItemsDocument, options);
      }
export function useGetBannerItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBannerItemsQuery, GetBannerItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBannerItemsQuery, GetBannerItemsQueryVariables>(GetBannerItemsDocument, options);
        }
export type GetBannerItemsQueryHookResult = ReturnType<typeof useGetBannerItemsQuery>;
export type GetBannerItemsLazyQueryHookResult = ReturnType<typeof useGetBannerItemsLazyQuery>;
export type GetBannerItemsQueryResult = Apollo.QueryResult<GetBannerItemsQuery, GetBannerItemsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
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