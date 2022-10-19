import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsDownload } from 'react-icons/bs';

import Button from '@mui/material/Button';
import { Stacked, Pie, SparkLine } from './Dashboard/components';
import { earningData, SparklineAreaData, ecomPieChartDat} from './Dashboard/assets/img/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Money = () => {
  return (
    <div className='mt-12'>
      {/* Header */}
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Dinero actual</p>
              <p className='text-2xl'>385,338.25 ARS</p>
            </div>
          </div>
          <div className='mt-1'>
            <Button variant="contained" startIcon={<BsDownload />}>
              Resúmen
            </Button>
          </div>
        </div>
        {/* Cards */}
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
                <p className='mt-3'>
                  <span className='text-xl font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`texy-sm text-${item.pcColor}`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
              <div className='flex justify-between'>
                <p className='font-semibold text-xl'></p>
                <div className='flex items-center gap-4'>
                  <p className='flex items-center gap-2 text-gray-600'>
                    <span><GoPrimitiveDot /></span>
                    <span>Gastos</span>
                  </p>
                  <p className='flex items-center gap-2 text-green-600'>
                    <span><GoPrimitiveDot /></span>
                    <span>Ingresos</span>
                  </p>
                </div>
              </div>
              <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                <div className='border-r-1 border-color m-4 pr-10'>
                  <div>
                    <p>
                      <span className='text-3xl font-semibold'>56,355.05 ARS</span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>34%</span>
                    </p>
                    <p>Ingresos totales</p>
                  </div>
                  <div>
                    <p>
                      <span className='text-3xl font-semibold'>22,420.40 ARS</span>
                    </p>
                    <p>Gastos totales</p>
                  </div>

                  <div className='mt-5'>
                    <SparkLine
                      currentColor="blue"
                      id="line-sparkline"
                      type="Line"
                      height="80px"
                      width="250px"
                      data={ SparklineAreaData }
                      color="blue"
                    />
                    ESTO NO SE RENDERIZA AYUDA
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Money