import camera from '../../assets/3.png'
import jacket from '../../assets/4.png'
import skincare from '../../assets/skincare1.png'
import hat from '../../assets/11.png'
import ball from '../../assets/ball.png'
import babychair from '../../assets/babychair.png'
import bookmark from '../../assets/bookmark.gif'
import check from '../../assets/check.gif'
import arrow from '../../assets/arrow-right.gif'

const featured = [
    {
        title: "Canon Camera Pro HD",
        image: babychair,
        price: 1111,
        stocks: 28
    },
    {
        title: "Canon Camera Pro HD",
        image: jacket,
        price: 1111,
        stocks: 278
    },
    {
        title: "Canon Camera Pro HD",
        image: skincare,
        price: 1111,
        stocks: 62
    },
    {
        title: "Canon Camera Pro HD",
        image: camera,
        price: 1111,
        stocks: 8
    },
    {
        title: "Canon Camera Pro HD",
        image: hat,
        price: 1111,
        stocks: 665
    },
    {
        title: "Canon Camera Pro HD",
        image: ball,
        price: 1111,
        stocks: 134
    }
]
const Featured = () => {
  return (
    <div className="w-full  h-[440px] centered flex-col bg-[#f1f2eb] ga">
        <div className='w-[90%] mx-auto flex items-center justify-between'>
         <div className='flex items-center'>
             <img src={check} className='w-10'/>
             <h1 className='font-bold '>Featured</h1>
         </div>

         <div className='flex items-center gap-1'>
               <img src={arrow} className='w-10 h-10 '/>
               <h1 className='font-bold '>View all</h1>
         </div>
      </div>

        <div className='w-[90%] h-[400px]  grid grid-cols-3 gap-2'>

            {featured.map((fr, i) => {
                return <div key={i} className='w-full h-[180px] bg-white flex flex-col shadow-xl relative rounded-lg'>
                <div className='absolute -top-1'>
                    <img src={bookmark} className='w-12'/>
                </div>
                <div className='h-[98px] w-full end '>
                <img src={fr.image} className='w-[88px] h-[88px] mx-auto '/>
                </div>

                <div className='w-full h-[80px] flex flex-col px-1'>
                    <p className='text-[17px] ht4 '>{fr.title}</p>
                    <h4 className='text-[13px]'>${fr.price}</h4>
                    <div className='flex items-center text-[13px] gap-1 text-gray-500'>
                       <h3>Stocks</h3><span>({fr.stocks})</span>
                    </div>
                    <i className='h-2 w-[71%] bg-green-500 rounded-full'></i>
                </div>
            </div>
            })}

            
        </div>
    </div>
  )
}

export default Featured