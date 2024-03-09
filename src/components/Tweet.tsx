interface TweetProps {
  user: string
  children: string
  likes?: number
}

// const TweetStyles =  {
//   borderRadius: 8
// }

export function Tweet(tsx: TweetProps) {
  return (
    <>
    <h1 style={{ color:"green" }}>{tsx.user}</h1>
    <p>{tsx.children}</p>
    <button>likes {tsx.likes ?? 0}</button>
    </>
  )
}
