import {  useRef, } from 'react'
// import ScrollMagic from 'scrollmagic'
import './App.css'
import {BgCanvas} from '../comp/BgCanvas'
import Footer from '../comp/Footer'
// import { useScroll } from '@reactuses/core';


function MorePage() {
  const mainPage = useRef<HTMLDivElement>(null)
  
  return (
    <>
      <BgCanvas ></BgCanvas>
      <div ref={mainPage} className='min-h-screen flex justify-center w-full  '>
        {/* {isScrolling&&<p>hello</p>} */}
        <main className='bg-slate-100 w-3/4 pb-30 my-40 m-0 p-0'>
          <section>
            <p className='py-20 px-20 text-center text-lg leading-10'>
              SGC为全球城市提供独一无二系统化的形象治理与顶级品牌资产解决方案，<br />
              助力其身份与价值全面升维
            </p>
            {/* <img src="./headimg1.jpg" alt="" /> */}
            <img src="./mainImg.jpg" alt="" />
          </section>
          <section>
            <p className='py-20 px-20 text-center text-xs leading-6'>
              “Connecting visionary cities.We believe that every city deserves to be accurately understood by the world. Brand equity is the core capital of a city’s long-term recognition. SGC will help you build an integrated and resilient urban brand system that bridges global governance and sustainability. We aspire to collaborate with visionary pioneers to create internationally benchmarked city identities, and to provide a new paradigm of long-term governance in global urban brand narratives.”
            </p>
            <p className='py-20 px-20 text-center text-xs leading-6'>
              “城市因远见而卓越，我们相信每一座城市都值得被世界准确理解。
              品牌资产，是城市长效认知的核心资本。SGC将会帮助您在全局治理与可持续之间，构建具有整合力与生命力的城市品牌系统。并在必要时为企业及重要项目提供同等顶级定制服务，我们愿意与有宏伟愿景的先行者合作共同打造国际标杆级形象，引领全球城市品牌叙事的新范式”。
            </p>
          </section>
          {/* <section>
            <h4 className='text-center mt-20'>最新消息</h4>
            <div className='flex justify-center gap-10 mt-10'>
              <div className='h-[300px] bg-green-500 w-56'>1</div>
              <div className='h-[300px] bg-green-500 w-56'>2</div>
            </div>
          </section> */}
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default MorePage
