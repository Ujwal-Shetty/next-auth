
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import User from "@/components/user"

async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <section>
      <h1>Home</h1>
      <h1>Server side Renderd</h1>
      <h2>{JSON.stringify(session)}</h2>
      <h1>client side renderd</h1>
      <User/>
      
    </section>
  )
}

export default Home