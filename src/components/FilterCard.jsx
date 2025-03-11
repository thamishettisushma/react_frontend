// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const fitlerData = [
//     {
//         fitlerType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         fitlerType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         fitlerType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValue, setSelectedValue] = useState('');
//     const dispatch = useDispatch();
//     const changeHandler = (value) => {
//         setSelectedValue(value);
//     }
//     useEffect(()=>{
//         dispatch(setSearchedQuery(selectedValue));
//     },[selectedValue]);
//     return (
//         <div className='w-full bg-white p-3 rounded-md'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//                 {
//                     fitlerData.map((data, index) => (
//                         <>
//                         <div>
//                             <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <>
                                        
//                                         <div className='flex items-center space-x-2 my-2'>
//                                             <RadioGroupItem value={item} id={itemId} />
//                                             <Label htmlFor={itemId}>{item}</Label>
//                                         </div>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </div>
//                         </>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard




// import React, { useEffect, useState } from 'react';
// import { RadioGroup, RadioGroupItem } from './ui/radio-group';
// import { Label } from './ui/label';
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';

// const filterData = [
//     {
//         filterType: "Location",
//         array: ["Hyderabad","Delhi", "Bangalore", "Pune", "Mumbai"]
//     },
//     {
//         filterType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer","Data Science","Graphic designer"]
//     },
//     // {
//     //     filterType: "Salary",
//     //     array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     // },
// ];

// const FilterCard = () => {
//     const [selectedValue, setSelectedValue] = useState('');
//     const dispatch = useDispatch();

//     const changeHandler = (value) => {
//         setSelectedValue(value);
//     };

//     useEffect(() => {
//         dispatch(setSearchedQuery(selectedValue));
//     }, [selectedValue, dispatch]);

//     return (
//         <div className="w-full bg-white p-4 rounded-md shadow-md bg-white dark:bg-black ">
//             <h1 className="font-bold text-lg">Filter Jobs</h1>
//             <hr className="mt-3 mb-4" />

//             <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-4">
//                 {filterData.map((data, index) => (
//                     <div key={index} className="mb-3">
//                         <h1 className="font-semibold text-md mb-2">{data.filterType}</h1>
//                         {data.array.map((item, idx) => {
//                             const itemId = `id${index}-${idx}`;
//                             return (
//                                 <div key={itemId} className="flex items-center space-x-2 my-2">
//                                     <RadioGroupItem value={item} id={itemId} />
//                                     <Label htmlFor={itemId}>{item}</Label>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 ))}
//             </RadioGroup>
//         </div>
//     );
// };

// export default FilterCard;


import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: "Location",
        array: ["Hyderabad","Delhi", "Bangalore", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer","Data Science","Graphic designer"]
    },
];

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    };

    const resetFilters = () => {
        setSelectedValue('');
        dispatch(setSearchedQuery('')); // Reset search query in Redux
    };

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue, dispatch]);

    return (
        <div className="w-full bg-white p-4 rounded-md shadow-md dark:bg-black">
            {/* <div className='d-flex justify-content space between'>
            <h1 className="font-bold text-lg">Filter Jobs</h1>
            <Button onClick={resetFilters} variant="outline" className="mt-4 w-full">
                Reset Filters
            </Button>
            </div> */}
            <div className="flex justify-between items-center">
    <h1 className="font-bold text-lg">Filter Jobs</h1>
    <Button onClick={resetFilters} variant="outline" className="px-4 py-2">
        Reset
    </Button>
</div>

            <hr className="mt-3 mb-4" />

            <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-4">
                {filterData.map((data, index) => (
                    <div key={index} className="mb-3">
                        <h1 className="font-semibold text-md mb-2">{data.filterType}</h1>
                        {data.array.map((item, idx) => {
                            const itemId = `id${index}-${idx}`;
                            return (
                                <div key={itemId} className="flex items-center space-x-2 my-2">
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </RadioGroup>

            {/* Reset Button */}
            {/* <Button onClick={resetFilters} variant="outline" className="mt-4 w-full">
                Reset Filters
            </Button> */}
        </div>
    );
};

export default FilterCard;
