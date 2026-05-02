import configPromise from '@payload-config'
import { getPayload } from 'payload'
import config from '@payload-config'

export const GET = async () => {
   
  const payload = await getPayload({
      config: configPromise
  })

  const data = await payload.find({
    collection: "categories"
  })
 
  return Response.json(data)  
}
