import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: '/root/.openclaw/workspace/projects/gasthaus-kornmesser',
}

export default nextConfig
