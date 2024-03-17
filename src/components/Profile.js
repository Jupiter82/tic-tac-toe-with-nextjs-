import React from 'react'
let user = {
            //object
            //key or property : value
            name: "Bird",
            imageUrl:
              "https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg",
            imageSize: 90,
          };
export const Profile = () => {
  return (
    <div>
        <h1>{user.name}</h1>
        <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{ width: user.imageSize }}
      />
    </div>
  )
}
