// import React from 'react'

import { revalidate } from "../(nested_route_without_parent)/route1/page";
// revalidate make the fetch repeat in the given time 3600,can change time
// page level revalidate reference in route1 page
// if time put 0 insted of 3600 then each user request fetch data
async function page() {
    const response = await fetch('http://www.omdbapi.com/',{ next: {revalidate: 3600 }});
    if(!response.ok) throw new Error("failed to fetch")
        console.log(response)
  return (
    <div>page</div>
  )
}

export default page