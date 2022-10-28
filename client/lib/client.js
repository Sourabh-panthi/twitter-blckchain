import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "o2slob8a",
  dataset: "production",
  apiVersion: "v1",
  token:
    "skxJB0leapuWpbiLZDd7zTmvpdjTKhh94M0znIEKtekp0WbiTbqquCCqa0ct2UlzHQfVBTtyrq1QQGpvZbsJoD0oEUhwXbFdhQe72I1izMej0NGbHVpj3rcOd5uXJw420fDgCN3dBimNw6we9SZVwYqjSpEocHi2NSzJcjAIn24cxmR3DDHB",
  useCdn: false,
});
