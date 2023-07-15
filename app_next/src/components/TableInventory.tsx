import { list } from 'postcss';
import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';
import { data } from 'autoprefixer';
import appNext from '../../axiosConfig';
import { useState } from 'react';

const TableInventory = () => {

    
    const [dummyData1, setDummyData1] = useState({})
   
    //fetch('../data/informations.json')
    //.then(response=> {return response})
    //.then(data=> setDummyData1(data))
            
   
  const brandInformation = [
    {
      company: `${dummyData1}`,
      visitor: '$500,120,310',
      revenues: '$5,768',
      sales: '590',
      conversion: 'July 29, 2023',
      logo: 'https://img.icons8.com/?size=512&id=17949&format=png'
    },
    {
      company: 'Auriel Fernandez',
      visitor: '$413,414,000',
      revenues: '$4,635',
      sales: '467',
      conversion: 'August 11, 2023',
      logo: 'https://img.icons8.com/?size=512&id=13963&format=png'
    },
    {
      company: 'Rolando De Guzman',
      visitor: '$250,402,000',
      revenues: '$4,290',
      sales: '420',
      conversion: 'November 12, 2023',
      logo: 'https://img.icons8.com/?size=512&id=63777&format=png'
    },
    {
      company: 'Jericho Valdez',
      visitor: '$214,313,018',
      revenues: '$3,580',
      sales: '389',
      conversion: 'November 02, 2023',
      logo: 'https://img.icons8.com/?size=512&id=21048&format=png'
    },
    {
      company: 'Arneil Sevilla',
      visitor: '$162,121,000',
      revenues: '$2,740',
      sales: '230',
      conversion: 'January 01, 2024',
      logo: 'https://img.icons8.com/?size=512&id=118497&format=png'
    }
  ]

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Loaners
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.0 text-center xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Fullname
            </h5>
          </div>
          <div className="p-2.0 text-center xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
                Due-date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-4">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>
        {
          brandInformation.map((data)=>{
           return <ul key={data}>{
            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
            
                <div className="flex items-center justify-center p-2.5 xl:p-3 font-bold">
                <p className="text-black dark:text-white">{data.company}</p>
                </div>
    
                <div className="flex items-center justify-center p-2.5 xl:p-2">
                    <p className="text-black dark:text-white">{data.visitor}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-2">
                    <p className="">{data.conversion}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-2">
                    <p className="items-center justify-center text-center font-semibold text-meta-3 border-solid bg-meta-9 rounded-full w-15 ">Paid</p>
                </div>
            
                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash ml-4" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                </div>
            </div>
        } </ul>
        })
    }

    </div>
    </div>
  );
};

export default TableInventory;
