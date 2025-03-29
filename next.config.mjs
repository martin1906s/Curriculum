/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/',
                    outputPath: 'static/',
                },
            },
        });
        return config;
    },
};

export default nextConfig; // <-- Cambiado a ES Modules