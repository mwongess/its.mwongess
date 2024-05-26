import { randomUUID } from 'crypto'
import React, { PropsWithChildren, ReactNode } from 'react'

interface ITimelineProps {
    verticalSpacing?: number
    timelineItems: Array<ReactNode>
}

export const TimeLine = ({ timelineItems, verticalSpacing = 8 }: ITimelineProps) => {
    return (
        <div className='flex flex-col'>
            {timelineItems.map((element, index) => {
                return (
                    <WrapperNode key={randomUUID()} index={index} maxChild={timelineItems.length - 1}>
                        <div style={{ paddingTop: 4, paddingBottom: verticalSpacing }}>{element}</div>
                    </WrapperNode>
                )
            })}
        </div>
    )
}

const WrapperNode = ({
    index,
    maxChild,
    children
}: PropsWithChildren<{ index: number; maxChild: number }>) => {
    return (
        <div className='flex flex-row gap-6'>
            <div className='flex flex-col items-center w-8'>
                <div className='rounded-full w-9 h-9 items-center justify-center text-center text-[22px] bg-[#2fd775] text-white'>
                    {/* {index + 1} */}
                </div>
                {index != maxChild && <div className='flex-1 w-0.5 bg-[#2fd775]'></div>}
            </div>
            <div className='flex-1'>{children}</div>
        </div>
    )
}