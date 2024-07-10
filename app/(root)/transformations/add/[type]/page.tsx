import React from 'react'
import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { auth } from '@clerk/nextjs'
import { getUserById } from '@/lib/actions/user.actions'

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  
  
    // const { userId } = auth();
    // const user = await getUserById(userId);
    // console.log(userId)
    // console.log(user)
  
    // if(!userId) {
    //   console.log('No user found')
    // }
  

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      Hi
    </>
  )
}

export default AddTransformationTypePage