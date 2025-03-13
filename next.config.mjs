// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'down-vn.img.susercontent.com',
//         port: '',
//         pathname: '/file/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'api.vietqr.io',
//         port: '',
//         pathname: '/image/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'cdn.monminpet.com',
//         port: '',
//         pathname: '/storage/app/public/images/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'www.petmart.vn',
//         port: '',
//         pathname: '/wp-content/uploads/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'medlatec.vn',
//         port: '',
//         pathname: '/ImagePath/images/**',
//       },
//     ],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.monminpet.com", // ✅ Fix lỗi
      "down-vn.img.susercontent.com",
      "api.vietqr.io",
      "www.petmart.vn",
      "medlatec.vn"
    ],
  },
};

export default nextConfig;
