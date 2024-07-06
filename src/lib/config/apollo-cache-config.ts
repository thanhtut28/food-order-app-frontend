import { InMemoryCacheConfig, gql } from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";

const cacheConfig: InMemoryCacheConfig = {
   typePolicies: {
      CartItem: {
         keyFields: ["menuItemId"],
      },
      Query: {
         fields: {
            getMenuItemsByCategory: {
               keyArgs: ["input", ["categoryId"]],

               // While args.cursor may still be important for requesting
               // a given page, it no longer has any role to play in the
               // merge function.
               merge(
                  existing,
                  incoming,
                  {
                     args: {
                        input: { cursor },
                        // cursor,
                     },
                     readField,
                  }: any,
               ) {
                  const merged: any = existing ? existing.slice(0) : [];
                  let offset = offsetFromCursor(merged, cursor, readField, "id");
                  // If we couldn't find the cursor, default to appending to
                  // the end of the list, so we don't lose any data.
                  if (offset < 0) offset = merged.length;
                  // Now that we have a reliable offset, the rest of this logic
                  // is the same as in offsetLimitPagination.
                  for (let i = 0; i < incoming.length; ++i) {
                     merged[offset + i] = incoming[i];
                  }
                  return merged;
               },

               // If you always want to return the whole list, you can omit
               // this read function.
               read(existing, { args: { cursor, limit = existing?.length }, readField }: any) {
                  if (existing) {
                     let offset = offsetFromCursor(existing, cursor, readField, "id");
                     // If we couldn't find the cursor, default to reading the
                     // entire list.
                     if (offset < 0) offset = 0;
                     return existing.slice(offset, offset + limit);
                  }
               },
            },

            getCartItems: {
               keyArgs: ["input", ["cartId"]],

               // While args.cursor may still be important for requesting
               // a given page, it no longer has any role to play in the
               // merge function.
               merge(
                  existing,
                  incoming,
                  {
                     args: {
                        input: { cursor },
                        // cursor,
                     },
                     readField,
                  }: any,
               ) {
                  const merged: any = existing ? existing.slice(0) : [];
                  let offset = offsetFromCursor(merged, cursor, readField, "menuItemId");
                  // If we couldn't find the cursor, default to appending to
                  // the end of the list, so we don't lose any data.
                  if (offset < 0) offset = merged.length;
                  // Now that we have a reliable offset, the rest of this logic
                  // is the same as in offsetLimitPagination.
                  for (let i = 0; i < incoming.length; ++i) {
                     merged[offset + i] = incoming[i];
                  }

                  return merged;
               },

               // If you always want to return the whole list, you can omit
               // this read function.
               read(existing, { args: { cursor, limit = existing?.length }, readField }: any) {
                  if (existing) {
                     let offset = offsetFromCursor(existing, cursor, readField, "menuItemId");
                     // If we couldn't find the cursor, default to reading the
                     // entire list.
                     if (offset < 0) offset = 0;
                     return existing.slice(offset, offset + limit);
                  }
               },
            },
         },
      },
   },
};

function offsetFromCursor(items: any, cursor: number, readField: any, cursorKey: string) {
   // Search from the back of the list because the cursor we're
   // looking for is typically the ID of the last item.
   // console.log(cursor);
   for (let i = items.length - 1; i >= 0; --i) {
      const item = items[i];
      // Using readField works for both non-normalized objects
      // (returning item.id) and normalized references (returning
      // the id field from the referenced entity object), so it's
      // a good idea to use readField when you're not sure what
      // kind of elements you're dealing with.
      // replaced 'id' with cursorKey params becuase not all cursor will be the ID (eg.menuItemId in getCartItems)
      if (readField(cursorKey, item) === cursor) {
         // Add one because the cursor identifies the item just
         // before the first item in the page we care about.
         return i + 1;
      }
   }
   // Report that the cursor could not be found.
   return -1;
}

export default cacheConfig;
