import Link from 'next/link'
import React from 'react'

export const FeatureCard = ({Icon, featureName, description , url }) => {
  return (
    <div className="bg-blue-gray-200 p-6 shadow-md rounded-md text-center">
        <div className="bg-blue-100 p-3 inline-block rounded-md mb-4">
        <Icon size={30}/>
        </div>
        <h3 className="text-orange text-xl font-bold mb-2">{featureName}</h3>
        <p className="text-darkgray text-sm">
          {description}.
        </p>
        <Link
          href={url}
          className="text-orange font-bold text-sm hover:underline mt-4 inline-block"
        >
          see more
        </Link>
      </div>
  )
}

 