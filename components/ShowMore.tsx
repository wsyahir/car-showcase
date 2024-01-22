"use client"

import { ShowMoreProps } from "@/types"
import { CustomButton } from "."

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  // const router = useRouter()

  const handleNavigtaion = () => {
    const newLimit = (pageNumber + 1) * 10
    setLimit(newLimit)

    // const newPathName = updateSearchParams("limit",`${newLimit}`)

    // router.push(newPathName)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigtaion}
        />
      )}
    </div>
  )
}

export default ShowMore
