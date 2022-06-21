import React from 'react'
import { Header } from '../../components/fitnessheroes'
import Image from 'next/dist/client/image'

import MainPic from '../../img/fitnessheroes/mainPic.png'
import Bench from '../../img/fitnessheroes/bench.png'


export default function Index() {
    return (
        <div className='relative'>
            <div className='bg-black'>
                <Header />
            </div>

            <div className='main-1 fix top-0 left-0 w-full -z-10'>
                <Image
                    src={MainPic}
                    layout="responsive"
                />
            </div>
            <div className='flex flex-col-reverse md:grid md:grid-cols-5'>
                <div className='border-r-8 border-black'>
                    <Image
                        src={Bench}
                        layout="responsive"
                    />
                </div>
                <div className="col-span-4 bg-white">
                    <div className='w-8/12 flex flex-col'>
                        <h2 className='text-4xl'>The Call</h2>
                        <p>They answer the call when weakness is trying to get in. They wake up at 4:30 to push their minds to the max. When times get tough and everybody goes away, they are there to meet the challenge face to face. They don’t give up, they don’t back down. They use highly trained skill and intellect in the midst of exhaustion.</p>
                        <p className='text-xl uppercase font-bold'>Who are they?</p>
                        <p>They are the heros of tomorrow, they are the fighters of fitness. They are the common man who chooses to stand up. </p>
                        <p className='text-xl uppercase font-bold'>They could be you!</p>
                    </div>
                    <div className='bg-black text-white'>
                        <h3 className='text-2xl uppercase'>Come and Join Us at Fitness Heroes! </h3>
                        <p className='text-green-500'>238 S Pacific St, Dillon, MT 59725</p>
                        <p>(123) 456-9887</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 bg-black text-white">
                <div>
                    <h2 className='text-4xl'>Location</h2>
                </div>
            </div>
        </div>
    )
}
