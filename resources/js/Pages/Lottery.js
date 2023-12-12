import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import LotteryComponent from '@/Components/LotteryComponent';

export default function Lottery(props) {


    return (
        <Authenticated
            auth={props?.auth}
            errors={props?.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Lottery</h2>}
        >
           <Head title="Lottery" />

            <div className="py-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <LotteryComponent auth={props.auth} lotteryData={props.lotteryData}/>
                </div>
            </div>
        </Authenticated>
    )
}

