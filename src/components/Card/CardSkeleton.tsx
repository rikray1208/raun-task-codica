import React, {FC} from 'react';

const CardSkeleton: FC = () => {
    return (
        <div className='w-[220px] h-[320px] border-[2px] relative border-mySecondary border-dashed rounded-2xl flex justify-between items-center'>
            <div className='absolute right-3 top-[-2rem] h-[26px] w-1/2 border-2 border-mySecondary border-dashed rounded-2xl'/>
        </div>
    );
};

export default CardSkeleton;