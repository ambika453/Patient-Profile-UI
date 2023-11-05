import React, {useState} from 'react'

const ProgressBar = () => {
  const [circumference, setCircumference] = useState(754.28)
  return (
    <div>
      <div class="flex justify-center items-center">
            <svg class="transform -rotate-90 w-72 h-72">
                <circle cx="190" cy="190" r="120" stroke="#fcb000" stroke-width="25" fill="transparent"
                    class="text-gray-700" />

                <circle cx="190" cy="190" r="120" stroke="white" stroke-width="25" fill="transparent" stroke-dasharray={circumference}
                    stroke-dashoffset={circumference - 40 / 100 * circumference}
                />
            </svg>
            <span class="absolute mb-24 ml-12 text-white text-3xl">50%</span>
      </div>
    </div>
  )
}

export default ProgressBar