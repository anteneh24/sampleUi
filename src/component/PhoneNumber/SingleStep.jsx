import React from 'react'

function SingleStep({ isLast, passed, isCurrent, label }) {
  return (
    <div className='flex flex-col w-min items-center '>
      <div className='flex flex-row items-center gap-2 relative w-4'>
        <div
          className={`${
            passed || isCurrent ? 'bg-white' : 'border-2 border-white bg-header'
          } rounded-full w-4 h-4`}
        />
        <div
          style={{
            position: 'absolute',
            left: '180%',
            color: passed || isCurrent ? 'white' : 'gray',
            fontWeight: passed || isCurrent ? 'bold' : 'normal',
          }}
          className='w-80'
        >
          {label}
        </div>
      </div>
      {!isLast && (
        <div
          style={{
            borderLeft: ` ${passed ? '0.25rem solid' : '0.15rem dotted'} white`,
            width: `${passed ? '0.25rem' : '0.15rem'}`,
            height: '3.5rem',
            marginTop: '-0.5rem',
          }}
        />
      )}
    </div>
  )
}

export default SingleStep
