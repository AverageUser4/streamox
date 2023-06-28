# Streamox - Streaming. Redefined.

## Install App
`npm run install-app`
## Start App
`npm run start`

## API

### Types:
    - StreamerType: {
        name: string,
        platform: 'Twitch' | 'YouTube' | 'TikTok' | 'Kick' | 'Rumble',
        description: string,
        createdAt: Date /*ISO string*/,
        imageSrc: string,
        upvotesCount: number,
        downvotesCount: number,
        userVote: -1/*downvote*/ | 0/*no vote*/ | 1/*upvote*/
    }
    - ErrorType: { error: string }

### GET streamers/
#### success:
    StreamerType[]
#### failure:
    ErrorType

### POST streamers/
#### body payload:
    {
        name: string,
        platform: 'Twitch' | 'YouTube' | 'TikTok' | 'Kick' | 'Rumble',
        description: string,
        imageSrc?: string,
    }
#### success:
    StreamerType /*created streamer*/
#### failure:
    ErrorType
    
### GET streamers/:id
#### success:
    StreamerType
#### failure:
    ErrorType
    
### PUT streamers/:id/vote
#### body payload:
    { vote: -1/*downvote*/ | 0 /*remove vote*/ | 1/*upvote*/
#### success:
    Plain 201 response
#### failure:
    ErrorType