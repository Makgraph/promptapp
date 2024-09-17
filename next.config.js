/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"], // Liste des domaines autorisés pour les images
  },
  webpack(config, { isServer }) {
    // Assurez-vous que topLevelAwait est nécessaire pour votre usage
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    // Ajoutez d'autres configurations webpack si nécessaire

    return config;
  },
};

module.exports = nextConfig;
