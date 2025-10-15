import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const title = searchParams.get('title') || 'LobbyThis Movement'
    const mrr = searchParams.get('mrr') || '0'
    const progress = searchParams.get('progress') || '0'

    // Format MRR
    const formattedMRR = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parseInt(mrr) / 100)

    const progressPercent = parseInt(progress)

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A1A2F',
            padding: '80px',
          }}
        >
          {/* Logo/Wordmark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              LOBBY
            </span>
            <span
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#C67C3D',
                letterSpacing: '-0.02em',
              }}
            >
              THIS
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              fontSize: '64px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
              textAlign: 'center',
              maxWidth: '900px',
              marginBottom: '40px',
            }}
          >
            {title}
          </div>

          {/* MRR Stats */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                color: '#B5C0CF',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Monthly Support
            </div>
            <div
              style={{
                fontSize: '56px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #C67C3D 0%, #D89A55 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {formattedMRR}/mo
            </div>
          </div>

          {/* Progress Bar */}
          <div
            style={{
              display: 'flex',
              width: '600px',
              height: '16px',
              backgroundColor: 'rgba(181, 192, 207, 0.2)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #C67C3D 0%, #D89A55 100%)',
                borderRadius: '999px',
              }}
            />
          </div>

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              marginTop: '40px',
              fontSize: '20px',
              color: '#B5C0CF',
              fontStyle: 'italic',
            }}
          >
            The people, organized.
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('OG Image generation error:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}

