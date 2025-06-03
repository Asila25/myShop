import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        method: "GET",
        url: `/product/${id}`,
      }),
    }),

    updateProducts: build.mutation({
      query: ({ id, body }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body,
      }),
    }),

    createProduct: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/product",
        body,
      }),
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useUpdateProductsMutation
} = extendedApi;
