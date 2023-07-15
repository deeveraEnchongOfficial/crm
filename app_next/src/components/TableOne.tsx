import { list } from 'postcss';
import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';

const TableOne = () => {

  const brandInformation = [
    {
      company: 'google',
      visitor: '3.5k',
      revenues: '$5,768',
      sales: '590',
      conversion: '4.8%',
      logo: 'https://img.icons8.com/?size=512&id=17949&format=png'
    },
    {
      company: 'twitter',
      visitor: '2.2k',
      revenues: '$4,635',
      sales: '467',
      conversion: '44.3%',
      logo: 'https://img.icons8.com/?size=512&id=13963&format=png'
    },
    {
      company: 'github',
      visitor: '2.1k',
      revenues: '$4,290',
      sales: '420',
      conversion: '3.7%',
      logo: 'https://img.icons8.com/?size=512&id=63777&format=png'
    },
    {
      company: 'vimeo',
      visitor: '1.5k',
      revenues: '$3,580',
      sales: '389',
      conversion: '2.5%',
      logo: 'https://img.icons8.com/?size=512&id=21048&format=png'
    },
    {
      company: 'facebook',
      visitor: '1.2k',
      revenues: '$2,740',
      sales: '230',
      conversion: '1.9%',
      logo: 'https://img.icons8.com/?size=512&id=118497&format=png'
    }
  ]
    
  
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>
        {
          brandInformation.map((data)=>{
           return <ul key={data}>{<div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
             <div className="flex-shrink-0">
               <img src={data.logo} height={40} width={40} alt="Brand" />
             </div>
             <p className="hidden text-black dark:text-white sm:block">{data.company}</p>
           </div>
 
           <div className="flex items-center justify-center p-2.5 xl:p-5">
             <p className="text-black dark:text-white">{data.visitor}</p>
           </div>
 
           <div className="flex items-center justify-center p-2.5 xl:p-5">
             <p className="text-meta-3">{data.revenues}</p>
           </div>
 
           <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
             <p className="text-black dark:text-white">{data.sales}</p>
           </div>
 
           <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
             <p className="text-meta-5">{data.conversion}</p>
           </div>
         </div>} </ul>
          })
        
        }
        

        {/* <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandTwo} alt="Brand" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              Twitter
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">2.2K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$4,635</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">467</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">4.3%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandThree} alt="Brand" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">Github</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">2.1K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$4,290</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">420</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">3.7%</p>
          </div>
        </div> */}

        {/* <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandFour} alt="Brand" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">Vimeo</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">1.5K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$3,580</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">389</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">2.5%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <img src={BrandFive} alt="Brand" />
            </div>
            <p className="hidden text-black dark:text-white sm:block">
              Facebook
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">1.2K</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">$2,740</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">230</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">1.9%</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TableOne;
