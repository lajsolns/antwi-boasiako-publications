/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            // allow Cloudinary (used in repo)
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**'
            },
            // add any other remote hosts you use, for example:
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**'
            },
            // allow Picsum Photos for Instagram section
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**'
            },
            // allow RandomUser.me for testimonial avatars
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '/**'
            },
            // fallback for other https hosts (optional, tighten for security)
            // {
            //   protocol: 'https',
            //   hostname: '**',
            //   port: '',
            //   pathname: '/**'
            // }
        ]
    }
};

module.exports = nextConfig